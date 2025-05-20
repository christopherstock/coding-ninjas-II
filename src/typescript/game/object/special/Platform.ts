import * as matter from 'matter-js';
import { Vector } from 'matter-js';
import { GameObject } from '../GameObject';
import { ShapeRectangle } from '../../../engine/shape/ShapeRectangle';
import { Shape, StaticShape } from '../../../engine/shape/Shape';
import { SpriteTemplate } from '../../../engine/ui/SpriteTemplate';
import { DebugColor } from '../../../base/SettingDebug';
import { BodyDensity, BodyFriction, BodyRestitution } from '../../../base/SettingMatter';

/** ********************************************************************************************************************
*   Represents a platform that moves.
***********************************************************************************************************************/
export class Platform extends GameObject {
    public static SPEED_NORMAL: number                      = 3.5;
    public static FRICTION_SHAPE_MARGIN_X: number           = 15.0;
    public static DELAY_WAYPOINT_REACHED: number            = 300;

    public readonly frictionShape: ShapeRectangle           = null;
    private readonly waypoints: matter.Vector[]             = null;
    private readonly speed: number                          = 0.0;
    private currentWaypointIndex: number                    = 0;
    private stepsTillNextWaypoint: number                   = 0;
    private currentStep: number                             = 0;
    private waypointReachedDelay: number                    = 0;
    private stepSizeX: number                               = 0.0;
    private stepSizeY: number                               = 0.0;

    /** ****************************************************************************************************************
    *   Creates a new platform. Initial position is the first waypoint.
    *
    *   @param shape          The shape for this object.
    *   @param spriteTemplate The sprite template for this platform.
    *   @param speed          The speed in pixels per tick.
    *   @param waypoints      The waypoints for this platform to move to.
    *******************************************************************************************************************/
    public constructor(
        shape: Shape,
        spriteTemplate: SpriteTemplate,
        speed: number,
        waypoints: matter.Vector[]
    ) {
        super(
            shape,
            spriteTemplate,
            0.0,
            0.0
        );

        if (waypoints.length === 0) {
            throw new Error('Platform requires at least one waypoint to be specified!');
        }

        this.speed     = speed;
        this.waypoints = waypoints;

        this.frictionShape = new ShapeRectangle
        (
            (shape.getWidth() - (2 * Platform.FRICTION_SHAPE_MARGIN_X)),
            shape.getHeight(),
            DebugColor.COLOR_DEBUG_PLATFORM_FRICTION,
            StaticShape.YES,
            0.0,
            BodyFriction.DEFAULT,
            BodyDensity.INFINITE,
            BodyRestitution.DEFAULT
        );
        this.frictionShape.body.frictionStatic = Infinity;
        // this.frictionShape.body.render.fillStyle = '#ffff00';

        this.currentWaypointIndex = -1;
        this.assignNextWaypoint();
    }

    /** ****************************************************************************************************************
    *   Renders this obstacle.
    *******************************************************************************************************************/
    public render(): void {
        super.render();

        // delay on reached waypoints
        if (this.waypointReachedDelay > 0) {
            --this.waypointReachedDelay;
            return;
        }

        // check if next waypoint is reached
        ++this.currentStep;
        if (this.currentStep > this.stepsTillNextWaypoint) {
            this.assignNextWaypoint();
            this.waypointReachedDelay = Platform.DELAY_WAYPOINT_REACHED;
            matter.Body.setVelocity(this.shape.body, Vector.create(0, 0));
            matter.Body.setVelocity(this.frictionShape.body, Vector.create(0, 0));
            return;
        }

        // move platform and friction shape
        const movement = matter.Vector.create(this.stepSizeX, this.stepSizeY);

        matter.Body.setVelocity(this.shape.body, movement);
        matter.Body.translate(this.shape.body, movement);

        matter.Body.setVelocity(this.frictionShape.body, movement);
        matter.Body.translate(this.frictionShape.body, movement);
    }

    /** ****************************************************************************************************************
    *   Assigns the next waypoint to aim to.
    *******************************************************************************************************************/
    private assignNextWaypoint(): void {
        // increase index for current wp
        ++this.currentWaypointIndex;

        // assign current wp
        if (this.currentWaypointIndex >= this.waypoints.length) {
            this.currentWaypointIndex = 0;
        }
        const currentWaypoint: matter.Vector = matter.Vector.create(
            this.waypoints[ this.currentWaypointIndex ].x + (this.shape.getWidth()  / 2),
            this.waypoints[ this.currentWaypointIndex ].y + (this.shape.getHeight() / 2)
        );

        // assign next wp
        let nextWaypointIndex: number = this.currentWaypointIndex + 1;
        if (nextWaypointIndex >= this.waypoints.length) {
            nextWaypointIndex = 0;
        }
        const nextWaypoint: matter.Vector = matter.Vector.create(
            this.waypoints[ nextWaypointIndex ].x + (this.shape.getWidth()  / 2),
            this.waypoints[ nextWaypointIndex ].y + (this.shape.getHeight() / 2)
        );

        // set platform to starting waypoint
        matter.Body.setPosition(this.shape.body,         currentWaypoint);
        matter.Body.setPosition(this.frictionShape.body, currentWaypoint);

        // get deltas
        const deltaX: number      = Math.abs(nextWaypoint.x - currentWaypoint.x);
        const deltaY: number      = Math.abs(nextWaypoint.y - currentWaypoint.y);
        const deltaDirect: number = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));

        // reset steps and calculate number of steps for reaching the next waypoint
        this.currentStep = 0;
        this.stepsTillNextWaypoint = deltaDirect / this.speed;

        // calculate step size
        this.stepSizeX = (nextWaypoint.x - currentWaypoint.x) / this.stepsTillNextWaypoint;
        this.stepSizeY = (nextWaypoint.y - currentWaypoint.y) / this.stepsTillNextWaypoint;
    }
}
