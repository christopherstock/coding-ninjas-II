import { Shape } from '../../../engine/shape/Shape';
import { SpriteTemplate } from '../../../engine/ui/SpriteTemplate';
import { Decoration } from './Decoration';

/** ********************************************************************************************************************
*   Represents a non-colliding billboard that can be clicked.
***********************************************************************************************************************/
export class Billboard extends Decoration {
    public url: string = null;

    public constructor(
        shape: Shape,
        spriteTemplate: SpriteTemplate,
        x: number,
        y: number
    ) {
        super(
            shape,
            spriteTemplate,
            x,
            y
        );
    }
}
