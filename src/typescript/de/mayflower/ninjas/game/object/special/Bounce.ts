import * as matter from 'matter-js';
import {GameObject} from "../GameObject";
import {Shape} from "../../../engine/shape/Shape";
import {SpriteTemplate} from "../../../engine/ui/SpriteTemplate";
import {DebugColor} from "../../../setting/SettingDebug";
import {Main} from "../../../base/Main";

/** ********************************************************************************************************************
*   Represents a bounce.
***********************************************************************************************************************/
export class Bounce extends GameObject
{
    /** The constraint that builds the turning point for the bounce. */
    private         readonly            constraint                      :matter.Constraint                  = null;

    /** ****************************************************************************************************************
    *   Creates a new bounce.
    *
    *   @param shape          The shape for this object.
    *   @param spriteTemplate The sprite template to use for this game object.
    *   @param x              Startup position X.
    *   @param y              Startup position Y.
    *******************************************************************************************************************/
    public constructor( shape:Shape, spriteTemplate:SpriteTemplate, x:number, y:number )
    {
        super
        (
            shape,
            spriteTemplate,
            x,
            y
        );

        this.constraint = matter.Constraint.create(
            {
                bodyB: this.shape.body,
                pointA: { x: this.shape.body.position.x, y: this.shape.body.position.y },
                pointB: { x: 0, y: 0 },
                stiffness: 0.01,
                length: 0,
                render: {
                    strokeStyle: DebugColor.COLOR_DEBUG_BOUNCE_JOINT,
                    lineWidth: 0.0,
                    visible:   false,
                },
            }
        );

        Main.game.engine.matterJsSystem.addToWorld( this.constraint );
    }

    /** ****************************************************************************************************************
    *   Renders this sigsaw and returns it.
    *
    *   @return The rendered SigSaw.
    *******************************************************************************************************************/
    public render() : void
    {
        super.render();

        matter.Body.setAngle(           this.shape.body, 0.0 );
        matter.Body.setAngularVelocity( this.shape.body, 0.0 );
    }
}
