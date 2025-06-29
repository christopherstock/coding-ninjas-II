import { GameObject, Breakable } from '../GameObject';
import { Shape } from '../../../engine/shape/Shape';
import { SpriteTemplate } from '../../../engine/ui/SpriteTemplate';

/** ********************************************************************************************************************
*   Represents a movable box.
***********************************************************************************************************************/
export class Movable extends GameObject {
    /** ****************************************************************************************************************
    *   Creates a new movable.
    *
    *   @param shape          The shape for this object.
    *   @param spriteTemplate The sprite for this box.
    *   @param x              Startup position X.
    *   @param y              Startup position Y.
    *******************************************************************************************************************/
    public constructor(
        shape: Shape,
        spriteTemplate: SpriteTemplate,
        x: number,
        y: number,
        breakable: Breakable = Breakable.NO
    ) {
        super(
            shape,
            spriteTemplate,
            x,
            y,
            breakable
        );
    }
}
