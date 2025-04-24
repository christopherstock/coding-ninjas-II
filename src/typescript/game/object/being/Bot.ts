import { Shape } from '../../../engine/shape/Shape';
import { SpriteTemplate } from '../../../engine/ui/SpriteTemplate';
import { SettingMatter } from '../../../base/SettingMatter';
import { Main } from '../../../base/Main';
import { SettingGame } from '../../../base/SettingGame';
import { GameObjectState } from '../GameObject';
import { CharacterSpriteSet } from './CharacterSpriteSet';
import { Character } from './Character';
import { CharacterFacing } from './CharacterFacing';

/** ********************************************************************************************************************
*   Represents the movement phases for an enemy.
***********************************************************************************************************************/
export enum EnemyMovementPhase
{
    /** Enemy walking to the right. */
    WALKING_RIGHT,
    /** Enemy standing still and facing right. */
    STANDING_RIGHT,
    /** Enemy walking to the left. */
    WALKING_LEFT,
    /** Enemy standing still and facing left. */
    STANDING_LEFT,
}

/** ********************************************************************************************************************
*   Represents an enemy being controlled by the system.
***********************************************************************************************************************/
export class Bot extends Character {
    /** The enemies' current movement phase. */
    private                     currentPhase: EnemyMovementPhase         = null;
    /** The current delay tick between movement phases. */
    private                     currentPhaseDelayTick: number                     = 0;
    /** Left walking target X. */
    private     readonly        walkingTargetLeft: number                     = 0;
    /** Right walking target X. */
    private     readonly        walkingTargetRight: number                     = 0;
    private     readonly        friendly: boolean                    = false;
    private     readonly        blocksPlayer: boolean                    = false;

    /** ****************************************************************************************************************
    *   Creates a new enemy.
    *
    *   @param shape              The shape for this object.
    *   @param x                  Startup position X.
    *   @param y                  Startup position Y.
    *   @param walkingTargetLeft  Left walking target X.
    *   @param walkingTargetRight Right walking target X.
    *   @param facing             The initial facing direction of this character.
    *   @param spriteTemplate     The sprite template to use for this game object.
    *   @param characterSpriteSet The sprite set to use for this character.
    *   @param friendly           If the bot is not an enemy but a friend.
    *   @param blocksPlayer       If the bots body is able to collide with the player.
    *******************************************************************************************************************/
    public constructor(
        shape: Shape,
        x: number,
        y: number,
        walkingTargetLeft: number,
        walkingTargetRight: number,
        facing: CharacterFacing,
        spriteTemplate: SpriteTemplate,
        characterSpriteSet: CharacterSpriteSet,
        friendly: boolean,
        blocksPlayer: boolean
    ) {
        super(
            shape,
            spriteTemplate,
            x,
            y,
            facing,
            SettingMatter.BOT_SPEED_MOVE,
            0,
            characterSpriteSet
        );

        this.walkingTargetLeft  = walkingTargetLeft;
        this.walkingTargetRight = walkingTargetRight;

        if (this.facing === CharacterFacing.LEFT) {
            this.currentPhase = EnemyMovementPhase.WALKING_LEFT;
        } else {
            this.currentPhase = EnemyMovementPhase.WALKING_RIGHT;
        }

        this.friendly = friendly;
        this.blocksPlayer = blocksPlayer;
    }

    public isFriendly(): boolean {
        return this.friendly;
    }

    public isBlocking(): boolean {
        return this.blocksPlayer;
    }

    /** ****************************************************************************************************************
    *   Renders the current player tick.
    *******************************************************************************************************************/
    public render(): void {
        super.render();

        if (this.state !== GameObjectState.DEAD) {
            if (this.checkFallingDead()) {
                this.state = GameObjectState.DEAD;
            }

            if (this.state !== GameObjectState.DYING) {
                this.moveAccordingToPattern();
                this.clipToHorizontalLevelBounds();

                // enemies shall not interfer with the Player by now
                // if ( false ) {
                // this.checkPlayerCollision();
                // }
            }
        }

        this.assignCurrentSprite();
    }

    /** ****************************************************************************************************************
    *   Being invoked when this enemy is hit by the player.
    *
    *   @param playerDirection The current direction of the player.
    *******************************************************************************************************************/
    public onHitByPlayer(playerDirection: CharacterFacing): void {
        if (this.friendly) {
            return;
        }

        // flag as dying
        this.state = GameObjectState.DYING;

        // face the player
        if (playerDirection === CharacterFacing.LEFT) {
            this.facing = CharacterFacing.RIGHT;
        } else {
            this.facing = CharacterFacing.LEFT;
        }

        // disable body collisions
        this.shape.body.collisionFilter = SettingMatter.COLLISION_GROUP_NON_COLLIDING_DEAD_OBJECT;
        this.shape.body.isStatic = false;

        // bring body to foreground
        Main.game.engine.matterJsSystem.removeFromWorld(this.shape.body);
        Main.game.engine.matterJsSystem.addToWorld(this.shape.body);

        // punch the enemy out of the screen in the player's direction
        this.receivePunchBack(playerDirection);
    }

    /** ****************************************************************************************************************
    *   Moves this enemy according to the current move pattern.
    *******************************************************************************************************************/
    private moveAccordingToPattern(): void {
        switch (this.currentPhase) {
            case EnemyMovementPhase.STANDING_LEFT:
            {
                if (++this.currentPhaseDelayTick >= SettingGame.BOT_TICKS_STANDING_DEFAULT) {
                    this.currentPhaseDelayTick = 0;
                    this.currentPhase          = EnemyMovementPhase.WALKING_RIGHT;
                }
                break;
            }

            case EnemyMovementPhase.STANDING_RIGHT:
            {
                if (++this.currentPhaseDelayTick >= SettingGame.BOT_TICKS_STANDING_DEFAULT) {
                    this.currentPhaseDelayTick = 0;
                    this.currentPhase          = EnemyMovementPhase.WALKING_LEFT;
                }
                break;
            }

            case EnemyMovementPhase.WALKING_LEFT:
            {
                this.moveLeft();

                if (this.shape.body.position.x - this.shape.getWidth() / 2 <= this.walkingTargetLeft) {
                    this.currentPhase = EnemyMovementPhase.STANDING_LEFT;
                }
                break;
            }

            case EnemyMovementPhase.WALKING_RIGHT:
            {
                this.moveRight();

                if (this.shape.body.position.x - this.shape.getWidth() / 2 >= this.walkingTargetRight) {
                    this.currentPhase = EnemyMovementPhase.STANDING_RIGHT;
                }
                break;
            }
        }
    }

    /** ****************************************************************************************************************
    *   Check if the enemy collides with the player.
    *******************************************************************************************************************/
/*
    private checkPlayerCollision(): void {
        // only if player is not punched back
        if (Main.game.level.player.punchBackTicks === 0) {
            // check intersection of the player and the enemy
            if (matter.Bounds.overlaps(this.shape.body.bounds, Main.game.level.player.shape.body.bounds)) {
                Debug.bot.log('Player hit by enemy! Player is punching back now!');

                let playerPunchBackDirection: CharacterFacing;

                if (Main.game.level.player.facing === CharacterFacing.LEFT) {
                    playerPunchBackDirection = CharacterFacing.RIGHT;
                } else {
                    playerPunchBackDirection = CharacterFacing.LEFT;
                }

                // punch back the player into the players opposite direction!
                Main.game.level.player.receivePunchBack(playerPunchBackDirection);

                // flag player as punched back
                Main.game.level.player.punchBackTicks = SettingGame.PUNCH_BACK_TICKS;
            }
        }
    }
*/
}
