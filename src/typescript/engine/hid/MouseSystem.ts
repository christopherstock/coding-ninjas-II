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

        // handle clicks on billboards
        if (Main.game.level !== null) {
            const BILLBOARD_WIDTH = 750;
            const BILLBOARD_HEIGHT = 600;

            // TODO clip to level start only!

            for (const decoFg of Main.game.level.decosFg) {
                if (decoFg.sprite.template.imageIds[0] === ImageData.BILLBOARD_WELCOME) {
                    console.log(
                        'must match: x y ',
                        2500,
                        1400,
                        'w h ',
                        BILLBOARD_WIDTH,
                        BILLBOARD_HEIGHT,
                        'cam X Y',
                        Main.game.camera.getOffsetX(),
                        Main.game.camera.getOffsetY()
                    );

                    if (
                        event.clientX >= 2500 - Main.game.camera.getOffsetX()
                        && event.clientX < 2500 + BILLBOARD_WIDTH - Main.game.camera.getOffsetX()
                        && event.clientY >= 1400 - Main.game.camera.getOffsetY()
                        && event.clientY < 1400 + BILLBOARD_HEIGHT - Main.game.camera.getOffsetY()
                    ) {
                        console.log('hit!');

                        window.open('https://www.christopherstock.de', '_blank');
                    }
                }
            }
        }
    }
}
