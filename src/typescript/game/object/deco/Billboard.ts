import { Shape } from '../../../engine/shape/Shape';
import { SpriteTemplate } from '../../../engine/ui/SpriteTemplate';
import { Decoration } from './Decoration';

/** ********************************************************************************************************************
*   Represents a non-colliding billboard that can be clicked.
***********************************************************************************************************************/
export class Billboard extends Decoration {
    public urlLeftHalf: string = null;
    public urlRightHalf: string = null;

    public constructor(
        shape: Shape,
        spriteTemplate: SpriteTemplate,
        x: number,
        y: number,
        urlLeftHalf: string,
        urlRightHalf: string = urlLeftHalf
    ) {
        super(
            shape,
            spriteTemplate,
            x,
            y
        );

        this.urlLeftHalf = urlLeftHalf;
        this.urlRightHalf = urlRightHalf;
    }
}
