import { DebugLog } from '../../base/DebugLog';
import { Main } from '../../base/Main';
import { ImageData } from '../../data/ImageData';
import { LevelId } from '../../game/level/Level';

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
        // handle clicks on billboards
        if (Main.game.level !== null) {
            const BILLBOARD_WIDTH = 750;
            const BILLBOARD_HEIGHT = 600;

            for (const decoFg of Main.game.level.decosFg) {
                if (
                    event.clientX >= decoFg.shape.body.bounds.min.x - Main.game.camera.getOffsetX()
                    && event.clientX < decoFg.shape.body.bounds.min.x + BILLBOARD_WIDTH - Main.game.camera.getOffsetX()
                    && event.clientY >= decoFg.shape.body.bounds.min.y - Main.game.camera.getOffsetY()
                    && event.clientY < decoFg.shape.body.bounds.min.y + BILLBOARD_HEIGHT - Main.game.camera.getOffsetY()
                ) {
                    if (
                        Main.game.level.id === LevelId.LEVEL_START
                        && decoFg.sprite.template.imageIds[0] === ImageData.BILLBOARD_WELCOME
                    ) {
                        window.open('https://www.christopherstock.de', '_blank');
                    }
                }
            }
        }
    }
}
