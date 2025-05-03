import * as Matter from 'matter-js';
import { DebugLog } from '../../base/DebugLog';
import { MatterJsSystem } from '../MatterJsSystem';
import {Mouse} from "matter-js";
import {Main} from "../../base/Main";
import {SpriteTemplate} from "../ui/SpriteTemplate";
import {ImageData} from "../../data/ImageData";

/** ********************************************************************************************************************
*   The pointer system that manages all pointer interactions.
***********************************************************************************************************************/
export class MouseSystem {
    /** ****************************************************************************************************************
    *   Creates a new mouse system.
    *******************************************************************************************************************/
    public constructor() {
        DebugLog.engine.log('Setup mouse system');

        // eslint-disable-next-line max-len
        window.addEventListener('click',   (event: Event) => { this.onClick(event as PointerEvent) });
    }

    private onClick(event: PointerEvent): void {
        console.log('on click ..', event.clientX, event.clientY);

        if (Main.game.level !== null) {
            for (const decoFg of Main.game.level.decosFg) {
                if (decoFg.sprite.template.imageIds[0] === ImageData.BILLBOARD_WELCOME) {
                    console.log(
                        'must match:',
                        decoFg.shape.body.position.x,
                        decoFg.shape.body.position.y,
                        decoFg.shape.getWidth(),
                        decoFg.shape.getHeight()
                    );
                }
            }
        }
    }
}
