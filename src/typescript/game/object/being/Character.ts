import * as matter from 'matter-js';
import { GameObject } from '../GameObject';
import { Shape } from '../../../engine/shape/Shape';
import { SpriteTemplate } from '../../../engine/ui/SpriteTemplate';
import { SettingGame } from '../../../base/SettingGame';
import { Main } from '../../../base/Main';
import { Debug } from '../../../base/Debug';
import { BodyFrictionAir, SettingMatter } from '../../../base/SettingMatter';
import { ShapeRectangle } from '../../../engine/shape/ShapeRectangle';
import { Player } from './Player';
import { CharacterSpriteSet } from './CharacterSpriteSet';
import { CharacterFacing } from './CharacterFacing';

/** ********************************************************************************************************************
*   Represents a character.
***********************************************************************************************************************/
export abstract class Character extends GameObject {
    public facing: CharacterFacing                      = null;
    public collidesBottom: boolean                      = false;

    public punchBackTicks: number                       = 0;
    public attackingTicks: number                       = 0;

    protected glidingRequest: boolean                   = false;
    protected paraCloseRequest: boolean                   = false;
    protected interactionRequest: boolean               = false;

    protected isGliding: boolean                        = false;
    protected isDying: boolean                          = false;
    protected isDead: boolean                           = false;
    protected isMovingLeft: boolean                     = false;
    protected isMobineRight: boolean                    = false;

    private readonly speedMove: number                  = 0.0;
    private readonly jumpPower: number                  = 0.0;

    private readonly spriteSet: CharacterSpriteSet      = null;

    /** ****************************************************************************************************************
    *   Creates a new character.
    *
    *   @param shape          The shape for this object.
    *   @param spriteTemplate The sprite template to use for this game object.
    *   @param x              Startup position X.
    *   @param y              Startup position Y.
    *   @param facing         The initial facing direction.
    *   @param speedMove      The speed for horizontal movement.
    *   @param jumpPower      The vertical force to apply on jumping.
    *   @param spriteSet      The sprite set to use for this character.
    *******************************************************************************************************************/
    protected constructor(
        shape: Shape,
        spriteTemplate: SpriteTemplate,
        x: number,
        y: number,
        facing: CharacterFacing,
        speedMove: number,
        jumpPower: number,

        spriteSet: CharacterSpriteSet
    ) {
        super(
            shape,
            spriteTemplate,
            x,
            y
        );

        this.facing    = facing;
        this.speedMove = speedMove;
        this.jumpPower = jumpPower;

        this.spriteSet = spriteSet;

        this.setSprite(spriteTemplate);
    }

    /** ****************************************************************************************************************
    *   Renders the current character tick.
    *******************************************************************************************************************/
    public render(): void {
        super.render();

        this.isMovingLeft  = false;
        this.isMobineRight = false;

        if (this.punchBackTicks > 0) {
            --this.punchBackTicks;
        }
        if (this.attackingTicks > 0) {
            --this.attackingTicks;
            if (this.attackingTicks === 7) {
                this.performSmash();
            }
        }

        this.resetRotation();
        this.checkInteraction();
        this.checkBottomCollision();
        this.checkParachuteState();
    }

    /** ****************************************************************************************************************
    *   Lets this character perform a smash/attack into the level.
    *******************************************************************************************************************/
    public performSmash(): void {
        // the bounds of the smash depend on character bound and facing direction
        const attackRange: number = (
            this.facing === CharacterFacing.LEFT
                ? -SettingGame.PLAYER_ATTACK_RANGE
                : SettingGame.PLAYER_ATTACK_RANGE
        );
        const damageForce: number = (
            this.facing === CharacterFacing.LEFT
                ? -SettingMatter.PLAYER_ATTACK_FORCE
                : SettingMatter.PLAYER_ATTACK_FORCE
        );
        const smashBounds: matter.Bounds = matter.Bounds.create(
            matter.Vertices.create(
                [
                    matter.Vector.add(
                        matter.Vector.clone(this.shape.body.bounds.min),
                        matter.Vector.create(attackRange, 0)
                    ),
                    matter.Vector.add(
                        matter.Vector.clone(this.shape.body.bounds.max),
                        matter.Vector.create(attackRange, 0)
                    ),
                ],
                this.shape.body
            )
        );

        // check all movables
        for (const movable of Main.game.level.movables) {
            if (matter.Query.region([ movable.shape.body ], smashBounds).length > 0) {
                // hurt movable
                if (!movable.broken) {
                    Debug.character.log('Character hits a level object (movable)');

                    movable.hurt(34.0);
                    matter.Body.setVelocity(
                        movable.shape.body,
                        matter.Vector.create(damageForce, -10.0)
                    );
                }
            }
        }

        // check all enemies
        for (const enemy of Main.game.level.enemies) {
            if (matter.Query.region([ enemy.shape.body ], smashBounds).length > 0) {
                // skip dead enemies
                if (enemy.isAlive() && !enemy.isFriendly()) {
                    Debug.character.log('Character hits an enemy');

                    // hit enemy
                    enemy.onHitByPlayer(this.facing);

                    // enable slow motion
                    Main.game.startSlowMotionTicks();
                }
            }
        }
    }

    /** ****************************************************************************************************************
    *   Lets this character punch back.
    *
    *   @param punchBackDirection The direction in which to punch back.
    *******************************************************************************************************************/
    public receivePunchBack(punchBackDirection: CharacterFacing): void {
        const forceX: number = (this instanceof Player ? 7.5  : 5.5);
        const forceY: number = (this instanceof Player ? 10.0 : 16.5);

        // apply punch-back force
        switch (punchBackDirection) {
            case CharacterFacing.LEFT:
            {
                matter.Body.setVelocity(
                    this.shape.body,
                    matter.Vector.create(-forceX, -forceY)
                );
                break;
            }

            case CharacterFacing.RIGHT:
            {
                matter.Body.setVelocity(
                    this.shape.body,
                    matter.Vector.create(forceX, -forceY)
                );
                break;
            }
        }
    }

    /** ****************************************************************************************************************
    *   Checks if this character is currently falling.
    *
    *   @return <code>true</code> if this character is currently falling.
    *******************************************************************************************************************/
    public isFalling(): boolean {
        return (this.shape.body.velocity.y > 0.0 && !this.collidesBottom);
    }

    /** ****************************************************************************************************************
    *   Checks if this character is currently ascending.
    *
    *   @return <code>true</code> if this character is currently jumping.
    *******************************************************************************************************************/
    public isJumping(): boolean {
        return (this.shape.body.velocity.y < 0.0 && !this.collidesBottom);
    }

    /** ****************************************************************************************************************
    *   Checks if this character is currently attacking.
    *
    *   @return <code>true</code> if this character is currently attacking.
    *******************************************************************************************************************/
    public isAttacking(): boolean {
        return (this.attackingTicks > 0);
    }

    /** ****************************************************************************************************************
    *   Checks if this character is alive. That means that he is not dead and is not currently dying.
    *
    *   @return <code>true</code> if this character is alive.
    *******************************************************************************************************************/
    public isAlive(): boolean {
        return (!this.isDead && !this.isDying);
    }

    /** ****************************************************************************************************************
    *   Moves this character left.
    *******************************************************************************************************************/
    protected moveLeft(): void {
        matter.Body.translate(this.shape.body, matter.Vector.create(-this.speedMove, 0));
        this.isMovingLeft = true;
        this.facing    = CharacterFacing.LEFT;

        // check in-air collision
        if (!this.collidesBottom && this.isCollidingObstacle()) {
            // take back movement
            matter.Body.translate(this.shape.body, matter.Vector.create(this.speedMove, 0));
        }
    }

    /** ****************************************************************************************************************
    *   Moves this character left.
    *******************************************************************************************************************/
    protected moveRight(): void {
        matter.Body.translate(this.shape.body, matter.Vector.create(this.speedMove, 0));
        this.isMobineRight = true;
        this.facing     = CharacterFacing.RIGHT;

        // check in-air collision
        if (!this.collidesBottom && this.isCollidingObstacle()) {
            // take back movement
            matter.Body.translate(this.shape.body, matter.Vector.create(-this.speedMove, 0));
        }
    }

    /** ****************************************************************************************************************
    *   Lets this character jump.
    *******************************************************************************************************************/
    protected jump(): void {
        matter.Body.applyForce(
            this.shape.body,
            this.shape.body.position,
            matter.Vector.create(0.0, this.jumpPower)
        );
    }

    protected requestGliding(): void {
        Debug.character.log('Character requests para open');

        this.glidingRequest = true;
    }

    protected requestParaClose(): void {
        Debug.character.log('Character requests para close');

        this.paraCloseRequest = true;
    }

    protected requestInteraction(): void {
        Debug.character.log('Character requests interaction');

        this.interactionRequest = true;
    }

    /** ****************************************************************************************************************
    *   Requests attacking for the player.
    *******************************************************************************************************************/
    protected attack(): void {
        Debug.character.log('Character requests attack');

        this.attackingTicks = 15;
    }

    /** ****************************************************************************************************************
    *   Checks the state for the parachute and opens or closes it.
    *******************************************************************************************************************/
    protected checkParachuteState(): void {
        if (this.collidesBottom) {
            if (this.isGliding) {
                this.closeParachute();
            }

            this.glidingRequest = false;
        } else {
            if (this.glidingRequest && this.isFalling()) {
                this.openParachute();
                this.glidingRequest = false;
            }
            if (this.paraCloseRequest && this.isGliding) {
                this.closeParachute();
                this.paraCloseRequest = false;
            }
        }
    }

    /** ****************************************************************************************************************
    *   Open character's parachute.
    *******************************************************************************************************************/
    protected openParachute(): void {
        Debug.character.log('Character opens parachute');

        this.shape.body.frictionAir = BodyFrictionAir.GLIDING;
        this.isGliding = true;
    }

    /** ****************************************************************************************************************
    *   Assigns the current sprite to the player according to his current state.
    *******************************************************************************************************************/
    protected assignCurrentSprite(): void {
        if (this.isDying) {
            if (this.facing === CharacterFacing.LEFT) {
                this.setSprite(this.spriteSet.spriteDieLeft);
            } else {
                this.setSprite(this.spriteSet.spriteDieRight);
            }
        } else if (this.isFalling()) {
            if (this.isGliding) {
                if (this.facing === CharacterFacing.LEFT) {
                    this.setSprite(this.spriteSet.spriteGlideLeft);
                } else {
                    this.setSprite(this.spriteSet.spriteGlideRight);
                }
            } else {
                if (this.facing === CharacterFacing.LEFT) {
                    this.setSprite(this.spriteSet.spriteFallLeft);
                } else {
                    this.setSprite(this.spriteSet.spriteFallRight);
                }
            }
        } else if (this.isJumping()) {
            if (this.facing === CharacterFacing.LEFT) {
                this.setSprite(this.spriteSet.spriteJumpLeft);
            } else {
                this.setSprite(this.spriteSet.spriteJumpRight);
            }
        } else if (this.isAttacking()) {
            if (this.facing === CharacterFacing.LEFT) {
                this.setSprite(this.spriteSet.spriteAttackLeft);
            } else {
                this.setSprite(this.spriteSet.spriteAttackRight);
            }
        } else {
            if (this.isMovingLeft) {
                this.setSprite(this.spriteSet.spriteWalkLeft);
            } else if (this.isMobineRight) {
                this.setSprite(this.spriteSet.spriteWalkRight);
            } else {
                if (this.facing === CharacterFacing.LEFT) {
                    this.setSprite(this.spriteSet.spriteStandLeft);
                } else {
                    this.setSprite(this.spriteSet.spriteStandRight);
                }
            }
        }
    }

    /** ****************************************************************************************************************
    *   Closes character's parachute.
    *******************************************************************************************************************/
    private closeParachute(): void {
        Debug.character.log('Character closes parachute');

        this.shape.body.frictionAir = BodyFrictionAir.DEFAULT;
        this.isGliding = false;
    }

    /** ****************************************************************************************************************
    *   Checks if the requested move for this character is collision free.
    *
    *   @return If this character is currently colliding with an obstacle.
    *******************************************************************************************************************/
    private isCollidingObstacle(): boolean {
        const bodiesToCheck: matter.Body[] = [];

        for (const gameObject of Main.game.level.obstacles) {
            // only consider rectangular obstacles
            if (gameObject.shape instanceof ShapeRectangle) {
                bodiesToCheck.push(gameObject.shape.body);
            }
        }

        // check colliding bodies
        return matter.Query.region(
            bodiesToCheck,
            this.shape.body.bounds
        ).length > 0;
    }

    /** ****************************************************************************************************************
    *   Checks if the character's bottom line currently collides with any other colliding body.
    *******************************************************************************************************************/
    private checkBottomCollision(): void {
        const bodiesToCheck: matter.Body[] = [];

        for (const movable of Main.game.level.movables) {
            bodiesToCheck.push(movable.shape.body);
        }
        for (const obstacle of Main.game.level.obstacles) {
            bodiesToCheck.push(obstacle.shape.body);
        }
        for (const sigsaw of Main.game.level.sigsaws) {
            bodiesToCheck.push(sigsaw.shape.body);
        }
        for (const bounce of Main.game.level.bounces) {
            bodiesToCheck.push(bounce.shape.body);
        }
        for (const platform of Main.game.level.platforms) {
            bodiesToCheck.push(platform.shape.body);
            bodiesToCheck.push(platform.frictionShape.body);
        }

        /*
        // ignore enemies!
        for ( const gameObject of Main.game.level.enemies )
        {
            bodiesToCheck.push( gameObject.shape.body );
        }
        */

        const USE_SINGLE_RAY_LINE: boolean = false;
        const MARGIN_X: number = 0;
        const MARGIN_Y: number = 25;

        if (USE_SINGLE_RAY_LINE) {
            // check colliding bodies for bottom ray line
            this.collidesBottom = matter.Query.ray(
                bodiesToCheck,
                matter.Vector.create(
                    this.shape.body.position.x - (this.shape.getWidth() / 2) + MARGIN_X,
                    this.shape.body.position.y + (this.shape.getHeight() / 2)
                ),
                matter.Vector.create(
                    this.shape.body.position.x + (this.shape.getWidth() / 2) - MARGIN_X,
                    this.shape.body.position.y + (this.shape.getHeight() / 2)
                )
            ).length > 0;
        } else {
            // check colliding bodies for bottom ray line and 2nd bottom ray line
            this.collidesBottom = (
                matter.Query.ray(
                    bodiesToCheck,
                    matter.Vector.create(
                        this.shape.body.position.x - (this.shape.getWidth() / 2) + MARGIN_X,
                        this.shape.body.position.y + (this.shape.getHeight() / 2)
                    ),
                    matter.Vector.create(
                        this.shape.body.position.x + (this.shape.getWidth() / 2) - MARGIN_X,
                        this.shape.body.position.y + (this.shape.getHeight() / 2)
                    )
                ).length > 0
                || matter.Query.ray(
                    bodiesToCheck,
                    matter.Vector.create(
                        this.shape.body.position.x - (this.shape.getWidth()  / 2) + MARGIN_X,
                        this.shape.body.position.y + (this.shape.getHeight() / 2) + MARGIN_Y
                    ),
                    matter.Vector.create(
                        this.shape.body.position.x + (this.shape.getWidth()  / 2) - MARGIN_X,
                        this.shape.body.position.y + (this.shape.getHeight() / 2) + MARGIN_Y
                    )
                ).length > 0
            );
        }
    }

    private checkInteraction(): void {
        if (this.interactionRequest) {
            for (const door of Main.game.level.doors) {
                door.checkInteraction();
            }

            this.interactionRequest = false;
        }
    }
}
