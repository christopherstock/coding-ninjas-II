
    import * as matter from 'matter-js';
    import * as ninjas from '../../../ninjas';

    /** ****************************************************************************************************************
    *   Represents the player being controlled by the user.
    *******************************************************************************************************************/
    export class Player extends ninjas.Character
    {
        /** ************************************************************************************************************
        *   Creates a new player instance.
        *
        *   @param shape            The shape for the player.
        *   @param x                Startup position X.
        *   @param y                Startup position Y.
        *   @param lookingDirection The initial looking direction.
        *   @param spriteTemplate   The initial sprite template to use for the player.
        *   @param initialFloat     Whether to startup with an open parachute.
        ***************************************************************************************************************/
        public constructor
        (
            shape            :ninjas.Shape,
            x                :number,
            y                :number,
            lookingDirection :ninjas.CharacterLookingDirection,
            spriteTemplate   :ninjas.SpriteTemplate,
            initialFloat     :boolean
        )
        {
            super
            (
                shape,
                spriteTemplate,
                x,
                y,
                lookingDirection,
                ninjas.SettingMatter.PLAYER_SPEED_MOVE,
                ninjas.SettingMatter.PLAYER_JUMP_POWER,
                ninjas.CharacterSpriteData.CHARACTER_SPRITE_SET_MASKED_NINJA_GIRL
            );

            if ( initialFloat )
            {
                this.openParachute();

                // force gliding sprite on 1st frame
                this.collidesBottom        = false;
                this.shape.body.velocity.y = 0.0001;
            }
        }

        /** ************************************************************************************************************
        *   Renders the current player tick.
        ***************************************************************************************************************/
        public render() : void
        {
            super.render();

            // TODO invoke handleKeys and renderAfterKeys here!
        }

        /** ************************************************************************************************************
        *   Checks all pressed player keys and performs according actions.
        ***************************************************************************************************************/
        public handleKeys( keySystem:ninjas.KeySystem ) : void
        {
            if ( this.punchBackTicks !== 0 )
            {
                return;
            }

            if
            (
                    keySystem.isPressed( ninjas.Key.KEY_LEFT )
                ||  ninjas.Main.game.engine.pointerSystem.leftCanvasHalfPressed
            )
            {
                this.moveLeft();
            }
            else if
            (
                    keySystem.isPressed( ninjas.Key.KEY_RIGHT )
                ||  ninjas.Main.game.engine.pointerSystem.rightCanvasHalfPressed
            )
            {
                this.moveRight();
            }

            if ( keySystem.isPressed( ninjas.Key.KEY_UP ) )
            {
                keySystem.setNeedsRelease( ninjas.Key.KEY_UP );

                if ( this.collidesBottom )
                {
                    this.jump();
                }
            }

            if ( ninjas.Main.game.engine.pointerSystem.canvasTabbed )
            {
                ninjas.Main.game.engine.pointerSystem.canvasTabbed = false;

                if ( this.collidesBottom )
                {
                    this.jump();
                }
            }

            if ( keySystem.isPressed( ninjas.Key.KEY_SPACE ) )
            {
                keySystem.setNeedsRelease( ninjas.Key.KEY_SPACE );

                if ( !this.isGliding && !this.glidingRequest && !this.collidesBottom )
                {
                    this.requestGliding();
                }
            }

            if ( keySystem.isPressed( ninjas.Key.KEY_META ) )
            {
                keySystem.setNeedsRelease( ninjas.Key.KEY_META );

                if ( this.attackingTicks === 0 )
                {
                    this.requestAttack();
                }
            }
        }

        /** ************************************************************************************************************
        *   The render tick handling after player keys have been processed.
        ***************************************************************************************************************/
        public renderAfterKeys() : void
        {
            this.checkEnemyKill();
            this.clipToHorizontalLevelBounds();
            this.assignCurrentSprite();
        }

        /** ************************************************************************************************************
        *   Checks if an enemy is currently killed by the player (by jumping onto the enemie's head.)
        ***************************************************************************************************************/
        private checkEnemyKill() : void
        {
            // check if player collides on bottom and if he's descending
            if ( this.shape.body.velocity.y > 0.0 )
            {
                // browse all enemies
                for ( const enemy of ninjas.Main.game.level.enemies )
                {
                    // skip dead enemies
                    if ( enemy.isAlive() )
                    {
                        // check intersection of the player and the enemy
                        if ( matter.Bounds.overlaps( this.shape.body.bounds, enemy.shape.body.bounds ) )
                        {
                            ninjas.Debug.enemy.log( 'Enemy touched by player' );

                            const playerBottom:number = Math.floor(
                                this.shape.body.position.y  + this.shape.getHeight() / 2 );
                            const enemyTop:number     = Math.floor(
                                enemy.shape.body.position.y - enemy.shape.getHeight() / 2 );

                            ninjas.Debug.enemy.log(
                                ' playerBottom [' + String(playerBottom) + '] enemyTop [' + String(enemyTop) + ']' );

                            const MAX_SINK_DELTA:number = 10;
                            if ( Math.abs( playerBottom - enemyTop ) <= MAX_SINK_DELTA )
                            {

                                enemy.onHitByPlayer( this.lookingDirection );
                            }
                        }
                    }
                }
            }
        }
    }
