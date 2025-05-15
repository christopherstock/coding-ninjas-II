import { Shape } from '../../../engine/shape/Shape';
import { SpriteTemplate } from '../../../engine/ui/SpriteTemplate';
import { Decoration } from './Decoration';
import {Main} from "../../../base/Main";

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

    /* eslint-disable max-len */
    public eventInsideBillboard(mouseX: number, mouseY: number): boolean {
        const OFFSET_UPPER_LEFT  = { x: 15, y: 81 }
        const OFFSET_LOWER_RIGHT = { x: -16, y: -161 }

        return (
            mouseX >= OFFSET_UPPER_LEFT.x + this.shape.body.bounds.min.x - Main.game.camera.getOffsetX()
            && mouseX < OFFSET_LOWER_RIGHT.x + (this.shape.body.bounds.min.x + this.shape.getWidth() - Main.game.camera.getOffsetX())
            && mouseY >= OFFSET_UPPER_LEFT.y + this.shape.body.bounds.min.y - Main.game.camera.getOffsetY()
            && mouseY < OFFSET_LOWER_RIGHT.y + (this.shape.body.bounds.min.y + this.shape.getHeight() - Main.game.camera.getOffsetY())
        );
    }
}
