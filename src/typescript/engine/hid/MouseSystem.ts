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
            const decos = Main.game.level.decosFg.concat(Main.game.level.decosBg);

            for (const deco of decos) {
                const img: string = deco.sprite.template.imageIds[0];
                if (
                    event.clientX >= deco.shape.body.bounds.min.x - Main.game.camera.getOffsetX()
                    && event.clientX < (
                        deco.shape.body.bounds.min.x + deco.shape.getWidth() - Main.game.camera.getOffsetX()
                    )
                    && event.clientY >= deco.shape.body.bounds.min.y - Main.game.camera.getOffsetY()
                    && event.clientY < (
                        deco.shape.body.bounds.min.y + deco.shape.getHeight() - Main.game.camera.getOffsetY()
                    )
                ) {
                    if (
                        Main.game.level.id === LevelId.LEVEL_START
                        && img === ImageData.BILLBOARD_WELCOME
                    ) {
                        window.open('https://www.christopherstock.de', '_blank');
                    }

                    if (
                        Main.game.level.id === LevelId.LEVEL_DOJO
                        && img === ImageData.BILLBOARD_WEBSITES
                    ) {
                        if (
                            event.clientX < (
                                deco.shape.body.bounds.min.x + deco.shape.getWidth() / 2 - Main.game.camera.getOffsetX()
                            )
                        ) {
                            window.open('https://php8.christopherstock.de/architekt-baur/1.1/index.php/de/', '_blank');
                        } else {
                            window.open('https://www.winklerundschorn.de', '_blank');
                        }
                    }

                    if (
                        Main.game.level.id === LevelId.LEVEL_GARDEN
                        && img === ImageData.BILLBOARD_GAMES
                    ) {
                        window.open('https://christopherstock.github.io/OutRunMF/dist/', '_blank');
                    }
                }
            }
        }
    }
}
