import * as matter from 'matter-js';
import { DebugColor } from '../../base/SettingDebug';
import { BodyDensity, BodyFriction, BodyRestitution } from '../../base/SettingMatter';
import { Shape, StaticShape } from './Shape';

/** ********************************************************************************************************************
*   Represents the shape of a game object.
***********************************************************************************************************************/
export class ShapeRectangle extends Shape {
    /** The rectangle's width. */
    public              width: number                 = 0.0;
    /** The rectangle's height. */
    public              height: number                 = 0.0;

    /** ************************************************************************************************************
    *   Creates a new rectangle shape.
    *
    *   @param width       The rectangle's width.
    *   @param height      The rectangle's height.
    *   @param debugColor  The color for the debug object.
    *   @param isStatic    Specifies that this object has a fixed position.
    *   @param angle       The rotation of this body in degrees.
    *   @param friction    The object's body friction.
    *   @param density     The object's body density.
    *   @param restitution The object's body restitution.
    ***************************************************************************************************************/
    public constructor(
        width: number,
        height: number,
        debugColor: DebugColor,
        isStatic: StaticShape,
        angle: number,
        friction: BodyFriction,
        density: BodyDensity,
        restitution: BodyRestitution
    ) {
        super(debugColor, isStatic, angle, friction, density, restitution);

        this.width  = width;
        this.height = height;

        this.body   = this.createBody();
    }

    /** ************************************************************************************************************
    *   Creates this shapes body.
    *
    *   @return The body for this shape.
    ***************************************************************************************************************/
    public createBody(): matter.Body {
        return matter.Bodies.rectangle(
            (this.width  / 2),
            (this.height / 2),
            this.width,
            this.height,
            this.options
        );
    }

    /** ************************************************************************************************************
    *   Returns the width of this shape's boundaries.
    *
    *   @return The shape's boundaries width.
    ***************************************************************************************************************/
    public getWidth(): number {
        return this.width;
    }

    /** ************************************************************************************************************
    *   Returns the height of this shape's boundaries.
    *
    *   @return The shape's boundaries height.
    ***************************************************************************************************************/
    public getHeight(): number {
        return this.height;
    }
}
