
    import * as matter from 'matter-js';
    import * as ninjas from '../../../ninjas';

    /** ****************************************************************************************************************
    *   Represents a character's looking direction.
    *******************************************************************************************************************/
    export enum CharacterLookingDirection
    {
        /** Looking left. */
        LEFT,
        /** Looking right. */
        RIGHT,
    }

    /** ****************************************************************************************************************
    *   Represents a character.
    *******************************************************************************************************************/
    export abstract class Character extends ninjas.GameObject
    {
        /** The looking direction for this character. */
        public                          lookingDirection                    :ninjas.CharacterLookingDirection   = null;
        /** Flags if the character currently collides with the bottom sensor. */
        public                          collidesBottom                      :boolean                            = false;

        /** Ticks the character is paralized by being punched back. */
        public                          punchBackTicks                      :number                             = 0;

        /** Ticks the character is currently attacking. */
        public                          attackingTicks                      :number                             = 0;

        /** Flags if this character is gliding. */
        protected                       isGliding                           :boolean                            = false;
        /** Flags if this character is requesting gliding while ascending etc. */
        protected                       glidingRequest                      :boolean                            = false;

        /** Flags if this character is dying but not already dead. */
        protected                       isDying                             :boolean                            = false;
        /** Flags if this character is dead. */
        protected                       isDead                              :boolean                            = false;

        /** Flags if the character is currently moving left. */
        protected                       movesLeft                           :boolean                            = false;
        /** Flags if the character is currently moving right. */
        protected                       movesRight                          :boolean                            = false;

        /** The speed for horizontal movements. */
        private     readonly            speedMove                           :number                             = 0.0;
        /** The jump power to apply for this character. */
        private     readonly            jumpPower                           :number                             = 0.0;

        /** The sprite set to use for this character. */
        private     readonly            spriteSet                           :ninjas.CharacterSpriteSet          = null;

        /** ************************************************************************************************************
        *   Creates a new character.
        *
        *   @param shape            The shape for this object.
        *   @param spriteTemplate   The sprite template to use for this game object.
        *   @param x                Startup position X.
        *   @param y                Startup position Y.
        *   @param lookingDirection The initial looking direction.
        *   @param speedMove        The speed for horizontal movement.
        *   @param jumpPower        The vertical force to apply on jumping.
        *   @param spriteSet        The sprite set to use for this character.
        ***************************************************************************************************************/
        protected constructor
        (
            shape            :ninjas.Shape,
            spriteTemplate   :ninjas.SpriteTemplate,
            x                :number,
            y                :number,
            lookingDirection :ninjas.CharacterLookingDirection,
            speedMove        :number,
            jumpPower        :number,

            spriteSet        :ninjas.CharacterSpriteSet
        )
        {
            super
            (
                shape,
                spriteTemplate,
                x,
                y
            );

            this.lookingDirection = lookingDirection;
            this.speedMove        = speedMove;
            this.jumpPower        = jumpPower;

            this.spriteSet        = spriteSet;

            this.setSprite( spriteTemplate );
        }

        /** ************************************************************************************************************
        *   Renders the current character tick.
        ***************************************************************************************************************/
        public render() : void
        {
            super.render();

            this.movesLeft  = false;
            this.movesRight = false;

            if ( this.punchBackTicks > 0 )
            {
                --this.punchBackTicks;
            }
            if ( this.attackingTicks > 0 )
            {
                --this.attackingTicks;
                if ( this.attackingTicks === 7 )
                {
                    this.performSmash();
                }
            }

            this.resetRotation();
            this.checkBottomCollision();
            this.checkParachuteState();
        }

        /** ************************************************************************************************************
        *   Lets this character perform a smash/attack into the level.
        ***************************************************************************************************************/
        public performSmash() : void
        {
            // the bounds of the smash depend on character bound and looking direction
            const attackRange :number = (
                this.lookingDirection === ninjas.CharacterLookingDirection.LEFT
                ? -ninjas.SettingGame.PLAYER_ATTACK_RANGE
                : ninjas.SettingGame.PLAYER_ATTACK_RANGE
            );
            const damageForce :number = (
                this.lookingDirection === ninjas.CharacterLookingDirection.LEFT
                ? -ninjas.SettingGame.PLAYER_ATTACK_DAMAGE
                : ninjas.SettingGame.PLAYER_ATTACK_DAMAGE
            );
            const smashBounds :matter.Bounds = matter.Bounds.create(
                matter.Vertices.create(
                    [
                        matter.Vector.add(
                            matter.Vector.clone( this.shape.body.bounds.min ),
                            matter.Vector.create( attackRange, 0 )
                        ),
                        matter.Vector.add(
                            matter.Vector.clone( this.shape.body.bounds.max ),
                            matter.Vector.create( attackRange, 0 )
                        ),
                    ],
                    this.shape.body
                )
            );

            // check all movables
            for ( const movable of ninjas.Main.game.level.movables )
            {
                if ( matter.Query.region( [ movable.shape.body ], smashBounds ).length > 0 )
                {
                    ninjas.Debug.character.log( 'Character hits a level object' );

                    matter.Body.setVelocity
                    (
                        movable.shape.body,
                        matter.Vector.create( damageForce, -10.0 )
                    );
                }
            }

            // check all enemies
            for ( const enemy of ninjas.Main.game.level.enemies )
            {
                if ( matter.Query.region( [ enemy.shape.body ], smashBounds ).length > 0 )
                {
                    // skip dead enemies
                    if ( enemy.isAlive() )
                    {
                        ninjas.Debug.character.log( 'Character hits an enemy' );

                        // hit enemy
                        enemy.onHitByPlayer( this.lookingDirection );

                        // enable slow motion
                        ninjas.Main.game.startSlowMotionTicks();
                    }
                }
            }
        }

        /** ************************************************************************************************************
        *   Lets this character punch back.
        *
        *   @param punchBackDirection The direction in which to punch back.
        ***************************************************************************************************************/
        public receivePunchBack( punchBackDirection:ninjas.CharacterLookingDirection ) : void
        {
            const forceX:number = ( this instanceof ninjas.Player ? 7.5  : 17.5 );
            const forceY:number = ( this instanceof ninjas.Player ? 10.0 : 27.5 );

            // apply punch-back force
            switch ( punchBackDirection )
            {
                case ninjas.CharacterLookingDirection.LEFT:
                {
                    matter.Body.setVelocity
                    (
                        this.shape.body,
                        matter.Vector.create( -forceX, -forceY )
                    );
                    break;
                }

                case ninjas.CharacterLookingDirection.RIGHT:
                {
                    matter.Body.setVelocity
                    (
                        this.shape.body,
                        matter.Vector.create( forceX, -forceY )
                    );
                    break;
                }
            }
        }

        /** ************************************************************************************************************
        *   Checks if this character is currently falling.
        *
        *   @return <code>true</code> if this character is currently falling.
        ***************************************************************************************************************/
        public isFalling() : boolean
        {
            return ( this.shape.body.velocity.y > 0.0 && !this.collidesBottom );
        }

        /** ************************************************************************************************************
        *   Checks if this character is currently ascending.
        *
        *   @return <code>true</code> if this character is currently jumping.
        ***************************************************************************************************************/
        public isJumping() : boolean
        {
            return ( this.shape.body.velocity.y < 0.0 && !this.collidesBottom );
        }

        /** ************************************************************************************************************
        *   Checks if this character is currently attacking.
        *
        *   @return <code>true</code> if this character is currently attacking.
        ***************************************************************************************************************/
        public isAttacking() : boolean
        {
            return ( this.attackingTicks > 0 );
        }

        /** ************************************************************************************************************
        *   Checks if this character is alive. That means that he is not dead and is not currently dying.
        *
        *   @return <code>true</code> if this character is alive.
        ***************************************************************************************************************/
        public isAlive() : boolean
        {
            return ( !this.isDead && !this.isDying );
        }

        /** ************************************************************************************************************
        *   Moves this character left.
        ***************************************************************************************************************/
        protected moveLeft() : void
        {
            matter.Body.translate( this.shape.body, matter.Vector.create( -this.speedMove, 0 ) );
            this.movesLeft = true;
            this.lookingDirection = ninjas.CharacterLookingDirection.LEFT;

            // check in-air collision
            if ( !this.collidesBottom && this.isCollidingObstacle() )
            {
                // take back movement
                matter.Body.translate( this.shape.body, matter.Vector.create( this.speedMove, 0 ) );
            }
        }

        /** ************************************************************************************************************
        *   Moves this character left.
        ***************************************************************************************************************/
        protected moveRight() : void
        {
            matter.Body.translate( this.shape.body, matter.Vector.create( this.speedMove, 0 ) );
            this.movesRight = true;
            this.lookingDirection = ninjas.CharacterLookingDirection.RIGHT;

            // check in-air collision
            if ( !this.collidesBottom && this.isCollidingObstacle() )
            {
                // take back movement
                matter.Body.translate( this.shape.body, matter.Vector.create( -this.speedMove, 0 ) );
            }
        }

        /** ************************************************************************************************************
        *   Lets this character jump.
        ***************************************************************************************************************/
        protected jump() : void
        {
            matter.Body.applyForce
            (
                this.shape.body,
                this.shape.body.position,
                matter.Vector.create( 0.0, this.jumpPower )
            );
        }

        /** ************************************************************************************************************
        *   Requests gliding for the player so the parachute will open on next descending phase.
        ***************************************************************************************************************/
        protected requestGliding() : void
        {
            ninjas.Debug.character.log( 'Character requests gliding' );

            this.glidingRequest = true;
        }

        /** ************************************************************************************************************
        *   Requests attacking for the player.
        ***************************************************************************************************************/
        protected attack() : void
        {
            ninjas.Debug.character.log( 'Character requests attack' );

            this.attackingTicks = 15;
        }

        /** ************************************************************************************************************
        *   Checks the state for the parachute and opens or closes it.
        ***************************************************************************************************************/
        protected checkParachuteState() : void
        {
            if ( this.collidesBottom )
            {
                if ( this.isGliding )
                {
                    this.closeParachute();
                }

                this.glidingRequest = false;
            }
            else
            {
                if ( this.glidingRequest && this.isFalling() )
                {
                    this.openParachute();
                    this.glidingRequest = false;
                }
            }
        }

        /** ************************************************************************************************************
        *   Open character's parachute.
        ***************************************************************************************************************/
        protected openParachute() : void
        {
            ninjas.Debug.character.log( 'Character opens parachute' );

            this.shape.body.frictionAir = ninjas.BodyFrictionAir.GLIDING;
            this.isGliding = true;
        }

        /** ************************************************************************************************************
        *   Assigns the current sprite to the player according to his current state.
        ***************************************************************************************************************/
        protected assignCurrentSprite() : void
        {
            if ( this.isDying )
            {
                if ( this.lookingDirection === ninjas.CharacterLookingDirection.LEFT )
                {
                    this.setSprite( this.spriteSet.spriteDieLeft );
                }
                else
                {
                    this.setSprite( this.spriteSet.spriteDieRight );
                }
            }
            else if ( this.isFalling() )
            {
                if ( this.isGliding )
                {
                    if ( this.lookingDirection === ninjas.CharacterLookingDirection.LEFT )
                    {
                        this.setSprite( this.spriteSet.spriteGlideLeft );
                    }
                    else
                    {
                        this.setSprite( this.spriteSet.spriteGlideRight );
                    }
                }
                else
                {
                    if ( this.lookingDirection === ninjas.CharacterLookingDirection.LEFT )
                    {
                        this.setSprite( this.spriteSet.spriteFallLeft );
                    }
                    else
                    {
                        this.setSprite( this.spriteSet.spriteFallRight );
                    }
                }
            }
            else if ( this.isJumping() )
            {
                if ( this.lookingDirection === ninjas.CharacterLookingDirection.LEFT )
                {
                    this.setSprite( this.spriteSet.spriteJumpLeft );
                }
                else
                {
                    this.setSprite( this.spriteSet.spriteJumpRight );
                }
            }
            else if ( this.isAttacking() )
            {
                if ( this.lookingDirection === ninjas.CharacterLookingDirection.LEFT )
                {
                    this.setSprite( this.spriteSet.spriteAttackLeft );
                }
                else
                {
                    this.setSprite( this.spriteSet.spriteAttackRight );
                }
            }
            else
            {
                if ( this.movesLeft )
                {
                    this.setSprite( this.spriteSet.spriteWalkLeft );
                }
                else if ( this.movesRight )
                {
                    this.setSprite( this.spriteSet.spriteWalkRight );
                }
                else
                {
                    if ( this.lookingDirection === ninjas.CharacterLookingDirection.LEFT )
                    {
                        this.setSprite( this.spriteSet.spriteStandLeft );
                    }
                    else
                    {
                        this.setSprite( this.spriteSet.spriteStandRight );
                    }
                }
            }
        }

        /** ************************************************************************************************************
        *   Closes character's parachute.
        ***************************************************************************************************************/
        private closeParachute() : void
        {
            ninjas.Debug.character.log( 'Character closes parachute' );

            this.shape.body.frictionAir = ninjas.BodyFrictionAir.DEFAULT;
            this.isGliding = false;
        }


        /** ************************************************************************************************************
        *   Checks if the requested move for this character is collision free.
        *
        *   @return If this character is currently colliding with an obstacle.
        ***************************************************************************************************************/
        private isCollidingObstacle() : boolean
        {
            const bodiesToCheck:matter.Body[] = [];

            for ( const gameObject of ninjas.Main.game.level.obstacles )
            {
                // only consider rectangular obstacles
                if ( gameObject.shape instanceof ninjas.ShapeRectangle )
                {
                    bodiesToCheck.push( gameObject.shape.body );
                }
            }

            // check colliding bodies
            return matter.Query.region
            (
                bodiesToCheck,
                this.shape.body.bounds
            ).length > 0;
        }

        /** ************************************************************************************************************
        *   Checks if the character's bottom line currently collides with any other colliding body.
        ***************************************************************************************************************/
        private checkBottomCollision() : void
        {
            const bodiesToCheck:matter.Body[] = [];

            for ( const movable of ninjas.Main.game.level.movables )
            {
                bodiesToCheck.push( movable.shape.body );
            }
            for ( const obstacle of ninjas.Main.game.level.obstacles )
            {
                bodiesToCheck.push( obstacle.shape.body );
            }
            for ( const sigsaw of ninjas.Main.game.level.sigsaws )
            {
                bodiesToCheck.push( sigsaw.shape.body );
            }
            for ( const bounce of ninjas.Main.game.level.bounces )
            {
                bodiesToCheck.push( bounce.shape.body );
            }
            for ( const platform of ninjas.Main.game.level.platforms )
            {
                bodiesToCheck.push( platform.shape.body );
            }
/*
            // ignore enemies!
            for ( const gameObject of ninjas.Main.game.level.enemies )
            {
                bodiesToCheck.push( gameObject.shape.body );
            }
*/
            const MARGIN_X :number = 10;

            // check colliding bodies
            this.collidesBottom = matter.Query.ray
            (
                bodiesToCheck,
                matter.Vector.create(
                    this.shape.body.position.x - ( this.shape.getWidth() / 2 ) + MARGIN_X,
                    this.shape.body.position.y + ( this.shape.getHeight() / 2 )
                ),
                matter.Vector.create(
                    this.shape.body.position.x + ( this.shape.getWidth() / 2 ) - MARGIN_X,
                    this.shape.body.position.y + ( this.shape.getHeight() / 2 )
                )
            ).length > 0;
        }
    }
