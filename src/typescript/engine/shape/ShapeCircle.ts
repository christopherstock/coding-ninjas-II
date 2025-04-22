import * as matter from 'matter-js';
import { DebugColor } from '../../base/SettingDebug';
import { BodyDensity, BodyFriction, BodyRestitution } from '../../base/SettingMatter';
import { Shape, StaticShape } from './Shape';

/** ********************************************************************************************************************
*   Represents the shape of a game object.
***********************************************************************************************************************/
export class ShapeCircle extends Shape {
    /** The circle's diameter. */
    public              diameter: number             = 0.0;

    /** ****************************************************************************************************************
    *   Creates a new circle shape.
    *
    *   @param diameter    The circle's diameter.
    *   @param debugColor  The color for the debug object.
    *   @param isStatic    Specifies that this object has a fixed position.
    *   @param angle       The rotation of this body in degrees.
    *   @param friction    The object's body friction.
    *   @param density     The object's body density.
    *   @param restitution The object's body restitution.
    *******************************************************************************************************************/
    public constructor(
        diameter: number,
        debugColor: DebugColor,
        isStatic: StaticShape,
        angle: number,
        friction: BodyFriction,
        density: BodyDensity,
        restitution: BodyRestitution
    ) {
        super(debugColor, isStatic, angle, friction, density, restitution);

        this.diameter = diameter;

        this.body     = this.createBody();

        // this.body.torque = 360.0;
    }

    /** ****************************************************************************************************************
    *   Returns the width of this shape's boundaries.
    *
    *   @return The shape's boundaries width.
    *******************************************************************************************************************/
    public getWidth(): number {
        return this.diameter;
    }

    /** ****************************************************************************************************************
    *   Returns the height of this shape's boundaries.
    *
    *   @return The shape's boundaries height.
    *******************************************************************************************************************/
    public getHeight(): number {
        return this.diameter;
    }

    /** ****************************************************************************************************************
    *   Creates this shapes body.
    *
    *   @return The body for this shape.
    *******************************************************************************************************************/
    protected createBody(): matter.Body {
        return matter.Bodies.circle(
            (this.diameter / 2),
            (this.diameter / 2),
            (this.diameter / 2),
            this.options
        );
    }
}
