
    import * as matter from 'matter-js';
    import * as ninjas from '../../../ninjas';

    /** ****************************************************************************************************************
    *   Represents a platform that moves.
    *******************************************************************************************************************/
    export class Platform extends ninjas.GameObject
    {
        /** Medium moving speed. */
        public  static              SPEED_NORMAL                :number                         = 1.0;
        /** Friction shape margin X. */
        public  static              FRICTION_SHAPE_MARGIN_X     :number                         = 15.0;

        /** The friction shape that has infinite static friction. */
        public          readonly    frictionShape               :ninjas.ShapeRectangle          = null;

        /** The waypoints for this platform to move. */
        private         readonly    waypoints                   :matter.Vector[]                = null;
        /** The number of ticks till the next waypoint is reached. */
        private         readonly    speed                       :number                         = 0.0;
        /** The current waypoint to move to. */
        private                     currentWaypointIndex        :number                         = 0;

        /** The number of animation steps till the next waypoint. */
        private                     stepsTillNextWaypoint       :number                         = 0;
        /** A counter for the current step to the next waypoint. */
        private                     currentStep                 :number                         = 0;

        /** Step size X per tick in px. */
        private                     stepSizeX                   :number                         = 0.0;
        /** Step size Y per tick in px. */
        private                     stepSizeY                   :number                         = 0.0;

        /** ************************************************************************************************************
        *   Creates a new platform. Initial position is the first waypoint.
        *
        *   @param shape          The shape for this object.
        *   @param spriteTemplate The sprite template for this platform.
        *   @param speed          The speed in pixels per tick.
        *   @param waypoints      The waypoints for this platform to move to.
        ***************************************************************************************************************/
        public constructor
        (
            shape          :ninjas.Shape,
            spriteTemplate :ninjas.SpriteTemplate,
            speed          :number,
            waypoints      :matter.Vector[]
        ) {
            super
            (
                shape,
                spriteTemplate,
                0.0,
                0.0
            );

            if ( waypoints.length === 0 )
            {
                throw new Error( 'Platform requires at least one waypoint to be specified!' );
            }

            this.speed     = speed;
            this.waypoints = waypoints;

            this.frictionShape = new ninjas.ShapeRectangle
            (
                ( shape.getWidth() - ( 2 * Platform.FRICTION_SHAPE_MARGIN_X ) ),
                shape.getHeight(),
                ninjas.DebugColor.COLOR_DEBUG_PLATFORM_FRICTION,
                ninjas.StaticShape.YES,
                0.0,
                ninjas.BodyFriction.DEFAULT,
                ninjas.BodyDensity.INFINITE,
                ninjas.BodyRestitution.DEFAULT
            );
            this.frictionShape.body.frictionStatic = Infinity;
            // this.frictionShape.body.render.fillStyle = '#ffff00';

            this.currentWaypointIndex = -1;
            this.assignNextWaypoint();
        }

        /** ************************************************************************************************************
        *   Renders this obstacle.
        ***************************************************************************************************************/
        public render() : void
        {
            super.render();

            // check if next waypoint is reached
            ++this.currentStep;
            if ( this.currentStep > this.stepsTillNextWaypoint )
            {
                this.assignNextWaypoint();
            }

            // TODO extract vector

            // move platform
            matter.Body.setVelocity( this.shape.body, matter.Vector.create( this.stepSizeX, this.stepSizeY ) );
            matter.Body.translate(   this.shape.body, matter.Vector.create( this.stepSizeX, this.stepSizeY ) );

            // move friction shape
            matter.Body.setVelocity( this.frictionShape.body, matter.Vector.create( this.stepSizeX, this.stepSizeY ) );
            matter.Body.translate(   this.frictionShape.body, matter.Vector.create( this.stepSizeX, this.stepSizeY ) );
        }

        /** ************************************************************************************************************
        *   Assigns the next waypoint to aim to.
        ***************************************************************************************************************/
        private assignNextWaypoint() : void
        {
            // increase index for current wp
            ++this.currentWaypointIndex;

            // assign current wp
            if ( this.currentWaypointIndex >= this.waypoints.length ) {
                this.currentWaypointIndex = 0;
            }
            const currentWaypoint:matter.Vector = matter.Vector.create
            (
                this.waypoints[ this.currentWaypointIndex ].x + ( this.shape.getWidth()  / 2 ),
                this.waypoints[ this.currentWaypointIndex ].y + ( this.shape.getHeight() / 2 )
            );

            // assign next wp
            let nextWaypointIndex :number = this.currentWaypointIndex + 1;
            if ( nextWaypointIndex >= this.waypoints.length ) {
                nextWaypointIndex = 0;
            }
            const nextWaypoint:matter.Vector = matter.Vector.create
            (
                this.waypoints[ nextWaypointIndex ].x + ( this.shape.getWidth()  / 2 ),
                this.waypoints[ nextWaypointIndex ].y + ( this.shape.getHeight() / 2 )
            );

            // set platform to starting waypoint
            matter.Body.setPosition( this.shape.body,         currentWaypoint );
            matter.Body.setPosition( this.frictionShape.body, currentWaypoint );

            // get deltas
            const deltaX:number      = Math.abs( nextWaypoint.x - currentWaypoint.x );
            const deltaY:number      = Math.abs( nextWaypoint.y - currentWaypoint.y );
            const deltaDirect:number = Math.sqrt( ( deltaX * deltaX ) + ( deltaY * deltaY ) );

            // reset steps and calculate number of steps for reaching the next waypoint
            this.currentStep = 0;
            this.stepsTillNextWaypoint = deltaDirect / this.speed;

            // calculate step size
            this.stepSizeX = ( nextWaypoint.x - currentWaypoint.x ) / this.stepsTillNextWaypoint;
            this.stepSizeY = ( nextWaypoint.y - currentWaypoint.y ) / this.stepsTillNextWaypoint;
        }
    }
