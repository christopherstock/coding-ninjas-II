
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

        /** Flags if this character is gliding. */
        protected                       isGliding                           :boolean                            = false;
        /** Flags if this character is requesting gliding while ascending etc. */
        protected                       glidingRequest                      :boolean                            = false;

        // TODO to AliveState

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

        // TODO bundle Character SpriteSets

        /** The sprite to use for standing left. */
        private     readonly            spriteStandLeft                     :ninjas.SpriteTemplate              = null;
        /** The sprite to use for standing right. */
        private     readonly            spriteStandRight                    :ninjas.SpriteTemplate              = null;
        /** The sprite to use for walking left. */
        private     readonly            spriteWalkLeft                      :ninjas.SpriteTemplate              = null;
        /** The sprite to use for walking right. */
        private     readonly            spriteWalkRight                     :ninjas.SpriteTemplate              = null;
        /** The sprite to use for gliding left. */
        private     readonly            spriteGlideLeft                     :ninjas.SpriteTemplate              = null;
        /** The sprite to use for gliding right. */
        private     readonly            spriteGlideRight                    :ninjas.SpriteTemplate              = null;
        /** The sprite to use for falling left. */
        private     readonly            spriteFallLeft                      :ninjas.SpriteTemplate              = null;
        /** The sprite to use for falling right. */
        private     readonly            spriteFallRight                     :ninjas.SpriteTemplate              = null;
        /** The sprite to use for jumping left. */
        private     readonly            spriteJumpLeft                      :ninjas.SpriteTemplate              = null;
        /** The sprite to use for jumping right. */
        private     readonly            spriteJumpRight                     :ninjas.SpriteTemplate              = null;
        /** The sprite to use for dying left. */
        private     readonly            spriteDieLeft                       :ninjas.SpriteTemplate              = null;
        /** The sprite to use for dying right. */
        private     readonly            spriteDieRight                      :ninjas.SpriteTemplate              = null;

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
        *
        *   @param spriteStandLeft  The sprite to use for standing left.
        *   @param spriteStandRight The sprite to use for standing right.
        *   @param spriteWalkLeft   The sprite to use for walking left.
        *   @param spriteWalkRight  The sprite to use for walking right.
        *   @param spriteGlideLeft  The sprite to use for gliding left.
        *   @param spriteGlideRight The sprite to use for gliding right.
        *   @param spriteFallLeft   The sprite to use for falling left.
        *   @param spriteFallRight  The sprite to use for falling right.
        *   @param spriteJumpLeft   The sprite to use for jumping left.
        *   @param spriteJumpRight  The sprite to use for jumping right.
        *   @param spriteDieLeft    The sprite to use for dying left.
        *   @param spriteDieRight   The sprite to use for dying right.
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

            spriteStandLeft  :ninjas.SpriteTemplate,
            spriteStandRight :ninjas.SpriteTemplate,
            spriteWalkLeft   :ninjas.SpriteTemplate,
            spriteWalkRight  :ninjas.SpriteTemplate,
            spriteGlideLeft  :ninjas.SpriteTemplate,
            spriteGlideRight :ninjas.SpriteTemplate,
            spriteFallLeft   :ninjas.SpriteTemplate,
            spriteFallRight  :ninjas.SpriteTemplate,
            spriteJumpLeft   :ninjas.SpriteTemplate,
            spriteJumpRight  :ninjas.SpriteTemplate,
            spriteDieLeft    :ninjas.SpriteTemplate,
            spriteDieRight   :ninjas.SpriteTemplate
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

            this.spriteStandLeft  = spriteStandLeft;
            this.spriteStandRight = spriteStandRight;
            this.spriteWalkLeft   = spriteWalkLeft;
            this.spriteWalkRight  = spriteWalkRight;
            this.spriteGlideLeft  = spriteGlideLeft;
            this.spriteGlideRight = spriteGlideRight;
            this.spriteFallLeft   = spriteFallLeft;
            this.spriteFallRight  = spriteFallRight;
            this.spriteJumpLeft   = spriteJumpLeft;
            this.spriteJumpRight  = spriteJumpRight;
            this.spriteDieLeft    = spriteDieLeft;
            this.spriteDieRight   = spriteDieRight;

            this.assignCurrentSprite();
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

            this.resetRotation();
            this.checkBottomCollision();
            this.checkParachuteState();
        }

        /** ************************************************************************************************************
        *   Lets this character punch back.
        *
        *   @param punchBackDirection The direction in which to punch back.
        ***************************************************************************************************************/
        public punchBack( punchBackDirection:ninjas.CharacterLookingDirection ) : void
        {
            const forceX:number = ( this instanceof ninjas.Player ? 7.5  : 11.5 );
            const forceY:number = ( this instanceof ninjas.Player ? 10.0 : 15.0 );

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
        *
        *   TODO Extract all sprite states!
        ***************************************************************************************************************/
        protected assignCurrentSprite() : void
        {
            if ( this.isFalling() )
            {
                if ( this.isGliding )
                {
                    if ( this.lookingDirection === ninjas.CharacterLookingDirection.LEFT )
                    {
                        this.setSprite( this.spriteGlideLeft );
                    }
                    else
                    {
                        this.setSprite( this.spriteGlideRight );
                    }
                }
                else
                {
                    if ( this.lookingDirection === ninjas.CharacterLookingDirection.LEFT )
                    {
                        this.setSprite( this.spriteFallLeft );
                    }
                    else
                    {
                        this.setSprite( this.spriteFallRight );
                    }
                }
            }
            else if ( this.isJumping() )
            {
                if ( this.lookingDirection === ninjas.CharacterLookingDirection.LEFT )
                {
                    this.setSprite( this.spriteJumpLeft );
                }
                else
                {
                    this.setSprite( this.spriteJumpRight );
                }
            }
            else if ( this.isDying )
            {
                if ( this.lookingDirection === ninjas.CharacterLookingDirection.LEFT )
                {
                    this.setSprite( this.spriteDieLeft );
                }
                else
                {
                    this.setSprite( this.spriteDieRight );
                }
            }
            else
            {
                if ( this.movesLeft )
                {
                    this.setSprite( this.spriteWalkLeft );
                }
                else if ( this.movesRight )
                {
                    this.setSprite( this.spriteWalkRight );
                }
                else
                {
                    if ( this.lookingDirection === ninjas.CharacterLookingDirection.LEFT )
                    {
                        this.setSprite( this.spriteStandLeft );
                    }
                    else
                    {
                        this.setSprite( this.spriteStandRight );
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

            for ( const gameObject of ninjas.Main.game.level.movables )
            {
                bodiesToCheck.push( gameObject.shape.body );
            }
            for ( const gameObject of ninjas.Main.game.level.obstacles )
            {
                bodiesToCheck.push( gameObject.shape.body );
            }
            for ( const gameObject of ninjas.Main.game.level.enemies )
            {
                bodiesToCheck.push( gameObject.shape.body );
            }

            // check colliding bodies
            this.collidesBottom = matter.Query.ray
            (
                bodiesToCheck,
                matter.Vector.create(
                    this.shape.body.position.x - ( this.shape.getWidth() / 2 ),
                    this.shape.body.position.y + ( this.shape.getHeight() / 2 )
                ),
                matter.Vector.create(
                    this.shape.body.position.x + ( this.shape.getWidth() / 2 ),
                    this.shape.body.position.y + ( this.shape.getHeight() / 2 )
                )
            ).length > 0;
        }
    }
