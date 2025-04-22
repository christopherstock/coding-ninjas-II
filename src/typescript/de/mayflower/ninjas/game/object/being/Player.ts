import * as matter from 'matter-js';
import { Shape } from '../../../engine/shape/Shape';
import { SpriteTemplate } from '../../../engine/ui/SpriteTemplate';
import { SettingMatter } from '../../../setting/SettingMatter';
import { CharacterSpriteData } from '../../../data/CharacterSpriteData';
import { Main } from '../../../base/Main';
import { KeySystem } from '../../../engine/hid/KeySystem';
import { KeyData } from '../../../data/KeyData';
import { SettingDebug } from '../../../setting/SettingDebug';
import { Debug } from '../../../base/Debug';
import { LevelId } from '../../level/Level';
import { Character } from './Character';
import { CharacterFacing } from './CharacterFacing';

/** ********************************************************************************************************************
*   Represents the player being controlled by the user.
***********************************************************************************************************************/
export class Player extends Character {
    /** ****************************************************************************************************************
    *   Creates a new player instance.
    *
    *   @param shape          The shape for the player.
    *   @param x              Startup position X.
    *   @param y              Startup position Y.
    *   @param facing         The initial facing direction.
    *   @param spriteTemplate The initial sprite template to use for the player.
    *   @param initialFloat   Whether to startup with an open parachute.
    *******************************************************************************************************************/
    public constructor(
        shape: Shape,
        x: number,
        y: number,
        facing: CharacterFacing,
        spriteTemplate: SpriteTemplate,
        initialFloat: boolean
    ) {
        super(
            shape,
            spriteTemplate,
            x,
            y,
            facing,
            SettingMatter.PLAYER_SPEED_MOVE,
            SettingMatter.PLAYER_JUMP_POWER,
            CharacterSpriteData.CHARACTER_SPRITE_SET_MASKED_NINJA_GIRL
        );

        if ( initialFloat ) {
            this.openParachute();

            // force gliding sprite on 1st frame
            this.collidesBottom        = false;
            this.shape.body.velocity.y = 0.0001;
        }
    }

    /** ****************************************************************************************************************
    *   Renders the current player tick.
    *******************************************************************************************************************/
    public render(): void {
        super.render();

        if ( !this.isDead ) {
            this.handleKeys( Main.game.engine.keySystem );
            this.checkEnemyKill();
        }

        this.clipToHorizontalLevelBounds();
        this.assignCurrentSprite();

        this.checkFallToDeath();
    }

    /** ****************************************************************************************************************
    *   Checks all pressed player keys and performs according actions.
    *
    *   @param keySystem The keySystem that holds current pressed key information.
    *******************************************************************************************************************/
    private handleKeys( keySystem: KeySystem ): void {
        if ( this.punchBackTicks !== 0 ) {
            return;
        }

        if
        (
            keySystem.isPressed( KeyData.KEY_LEFT )
            || (
                !SettingDebug.DISABLE_POINTER
                && Main.game.engine.pointerSystem.leftCanvasHalfPressed
            )
        ) {
            this.moveLeft();
        } else if
        (
            keySystem.isPressed( KeyData.KEY_RIGHT )
            || (
                !SettingDebug.DISABLE_POINTER
                && Main.game.engine.pointerSystem.rightCanvasHalfPressed
            )
        ) {
            this.moveRight();
        }

        if ( keySystem.isPressed( KeyData.KEY_UP ) ) {
            keySystem.setNeedsRelease( KeyData.KEY_UP );

            if ( this.collidesBottom ) {
                this.jump();
            } else {
                if ( !this.isGliding && !this.glidingRequest && !this.collidesBottom ) {
                    this.requestGliding();
                }
            }
        }

        if (
            !SettingDebug.DISABLE_POINTER
            && Main.game.engine.pointerSystem.canvasTabbed
        ) {
            Main.game.engine.pointerSystem.canvasTabbed = false;

            if ( this.collidesBottom ) {
                this.jump();
            }
        }

        if ( keySystem.isPressed( KeyData.KEY_E ) ) {
            keySystem.setNeedsRelease( KeyData.KEY_E );

            this.requestInteraction();
        }

        if ( keySystem.isPressed( KeyData.KEY_SPACE ) ) {
            keySystem.setNeedsRelease( KeyData.KEY_SPACE );

            if ( !this.isAttacking() ) {
                this.attack();
            }
        }
    }

    /** ****************************************************************************************************************
    *   Checks if an enemy is currently killed by the player (by jumping onto the enemie's head.)
    *******************************************************************************************************************/
    private checkEnemyKill(): void {
        // check if player collides on bottom and if he's descending
        if ( this.shape.body.velocity.y > 0.0 ) {
            // browse all enemies
            for ( const enemy of Main.game.level.enemies ) {
                // skip dead, friendly or non-blocking enemies
                if ( enemy.isAlive() && !enemy.isFriendly() && enemy.isBlocking() ) {
                    // check intersection of the player and the enemy
                    if ( matter.Bounds.overlaps( this.shape.body.bounds, enemy.shape.body.bounds ) ) {
                        Debug.enemy.log( 'Enemy touched by player' );

                        const playerBottom: number = Math.floor(
                            this.shape.body.position.y  + this.shape.getHeight() / 2 );
                        const enemyTop: number     = Math.floor(
                            enemy.shape.body.position.y - enemy.shape.getHeight() / 2 );

                        Debug.enemy.log(
                            ' playerBottom [' + String(playerBottom) + '] enemyTop [' + String(enemyTop) + ']' );

                        const MAX_SINK_DELTA: number = 10;
                        if ( Math.abs( playerBottom - enemyTop ) <= MAX_SINK_DELTA ) {
                            // hit enemy
                            enemy.onHitByPlayer( this.facing );

                            // enable slow motion
                            Main.game.startSlowMotionTicks();
                        }
                    }
                }
            }
        }
    }

    /** ****************************************************************************************************************
    *   Checks if the player is currently falling out of the level.
    *******************************************************************************************************************/
    private checkFallToDeath(): void {
        // check if the bottom outside is reached
        if ( this.shape.body.position.y > ( Main.game.level.height - ( this.shape.getHeight() / 2 ) ) ) {
            // flag player as dead if not done yet
            if ( !this.isDead ) {
                this.isDead = true;

                Debug.engine.log( 'Player has fallen to death' );

                window.setTimeout(
                    (): void => {
                        Main.game.resetAndLaunchLevel( LevelId.LEVEL_START );
                    },
                    250
                );
            }
        }
    }
}
