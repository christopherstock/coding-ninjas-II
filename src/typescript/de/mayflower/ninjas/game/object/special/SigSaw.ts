import * as matter from 'matter-js';
import {GameObject} from "../GameObject";
import {Shape} from "../../../engine/shape/Shape";
import {SpriteTemplate} from "../../../engine/ui/SpriteTemplate";
import {DebugColor} from "../../../setting/SettingDebug";
import {Main} from "../../../base/Main";
import {MathUtil} from "../../../util/MathUtil";

/** ********************************************************************************************************************
*   Represents a sigsaw.
***********************************************************************************************************************/
export class SigSaw extends GameObject
{
    /** The constraint that builds the turning point for the sigsaw. */
    private     readonly            constraint                      :matter.Constraint                  = null;
    /** The maximum rotation speed per tick. */
    private     readonly            maxRotationSpeed                :number                             = 0.0;

    /** ****************************************************************************************************************
    *   Creates a new sigsaw.
    *
    *   @param shape            The shape for this object.
    *   @param spriteTemplate   The sprite template for this game object.
    *   @param x                Startup position X.
    *   @param y                Startup position Y.
    *   @param maxRotationSpeed The maximum rotation speed per tick.
    *******************************************************************************************************************/
    public constructor
    (
        shape            :Shape,
        spriteTemplate   :SpriteTemplate,
        x                :number,
        y                :number,
        maxRotationSpeed :number
    )
    {
        super
        (
            shape,
            spriteTemplate,
            x,
            y
        );

        this.maxRotationSpeed = maxRotationSpeed;

        this.constraint = matter.Constraint.create(
            {
                bodyB: this.shape.body,
                pointA: { x: this.shape.body.position.x, y: this.shape.body.position.y },
                pointB: { x: 0, y: 0 },
                stiffness: 1.0,
                damping: 0.0,
                length: 0,
                render: {
                    strokeStyle: DebugColor.COLOR_DEBUG_SIGSAW_JOINT,
                    lineWidth: 0.0,
                    visible:   false,
                },
            }
        );

        Main.game.engine.matterJsSystem.addToWorld( this.constraint );
    }

    /** ****************************************************************************************************************
    *   Renders this sigsaw.
    *******************************************************************************************************************/
    public render() : void
    {
        super.render();

        this.clipRotation();
        this.clipRotationSpeed();
    }

    /** ****************************************************************************************************************
    *   Clips the rotation of the sigsaw.
    *******************************************************************************************************************/
    private clipRotation() : void
    {
        const clipAngle :number = 15.0;

        const minAngle :number = MathUtil.angleToRad( -clipAngle );
        const maxAngle :number = MathUtil.angleToRad( clipAngle  );

        if ( this.shape.body.angle < minAngle )
        {
            matter.Body.setAngle(           this.shape.body, minAngle );
            matter.Body.setAngularVelocity( this.shape.body, 0.0       );
        }
        else if ( this.shape.body.angle > maxAngle )
        {
            matter.Body.setAngle(           this.shape.body, maxAngle );
            matter.Body.setAngularVelocity( this.shape.body, 0.0       );
        }
    }

    /** ****************************************************************************************************************
    *   Clips the rotation speed of the sigsaw.
    *******************************************************************************************************************/
    private clipRotationSpeed() : void
    {
        if ( this.maxRotationSpeed === -1 )
        {
            return;
        }

        if ( this.shape.body.angularVelocity < -this.maxRotationSpeed )
        {
            matter.Body.setAngularVelocity( this.shape.body, -this.maxRotationSpeed );
        }
        else if ( this.shape.body.angularVelocity > this.maxRotationSpeed )
        {
            matter.Body.setAngularVelocity( this.shape.body, this.maxRotationSpeed );
        }
    }
}
