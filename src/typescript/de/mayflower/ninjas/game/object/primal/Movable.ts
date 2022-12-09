
import * as ninjas from '../../../ninjas';

/** ****************************************************************************************************************
    *   Represents a movable box.
    *******************************************************************************************************************/
export class Movable extends ninjas.GameObject
{
    /** ************************************************************************************************************
        *   Creates a new movable.
        *
        *   @param shape          The shape for this object.
        *   @param spriteTemplate The sprite for this box.
        *   @param x              Startup position X.
        *   @param y              Startup position Y.
        ***************************************************************************************************************/
    public constructor
    (
        shape          :ninjas.Shape,
        spriteTemplate :ninjas.SpriteTemplate,
        x              :number,
        y              :number
    )
    {
        super
        (
            shape,
            spriteTemplate,
            x,
            y
        );
    }

    /** ************************************************************************************************************
        *   Renders this movable.
        ***************************************************************************************************************/
    public render() : void
    {
        super.render();

        // this.clipToHorizontalLevelBounds();
    }
}
