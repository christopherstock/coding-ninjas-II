import { DebugLog } from '../../base/DebugLog';
import { Main } from '../../base/Main';
import { LevelId } from '../../game/level/Level';
import { Decoration } from '../../game/object/deco/Decoration';
import { Billboard } from '../../game/object/deco/Billboard';

/* eslint-disable max-len */

/** ********************************************************************************************************************
*   The pointer system that manages all pointer interactions.
***********************************************************************************************************************/
export class MouseSystem {
    /** ****************************************************************************************************************
    *   Creates a new mouse system.
    *******************************************************************************************************************/
    public constructor() {
        DebugLog.engine.log('Setup mouse system');

        window.addEventListener('click',     (event: Event) => { this.onClick(event as PointerEvent) });
        window.addEventListener('mousemove', (event: Event) => { this.onMove(event as PointerEvent) });
    }

    private onClick(event: PointerEvent): void {
        if (Main.game.level === null) {
            return;
        }

        // get the billboard object for this level
        const relevantBillboard: Decoration = this.getRelevantBillboard();
        if (relevantBillboard === null) {
            return;
        }
        /*
        const decos = Main.game.level.decosFg.concat(Main.game.level.decosBg);

        for (const deco of decos) {
            const img: string = deco.sprite.template.imageIds[0];
            if (!img.includes('billboard')) {continue;}
*/
        if (this.eventInsideBillboard(event, relevantBillboard)) {
            const leftHalf = event.clientX < (
                relevantBillboard.shape.body.bounds.min.x + relevantBillboard.shape.getWidth() / 2 - Main.game.camera.getOffsetX()
            );

            switch (Main.game.level.id) {
                case LevelId.LEVEL_START: {
                    window.open('https://www.christopherstock.de', '_blank');
                    break;
                }

                case LevelId.LEVEL_DOJO: {
                    if (leftHalf) {
                        window.open('https://php8.christopherstock.de/architekt-baur/1.1/index.php/de/', '_blank');
                    } else {
                        window.open('https://www.winklerundschorn.de', '_blank');
                    }
                    break;
                }

                case LevelId.LEVEL_GARDEN: {
                    window.open('https://christopherstock.github.io/OutRunMF/dist/', '_blank');
                    break;
                }

                case LevelId.LEVEL_TOWN: {
                    if (
                        leftHalf
                    ) {
                        window.open('https://christopherstock.github.io/babylon-zero/dist/', '_blank');
                    } else {
                        window.open('https://github.com/christopherstock/shooter-gradle', '_blank');
                    }
                    break;
                }
            }
        }
    }

    private onMove(event: PointerEvent): void {
        if (Main.game.level === null) {
            document.body.style.cursor = 'default';
            return;
        }

        // get the billboard object for this level
        const relevantBillboard: Decoration = this.getRelevantBillboard();
        if (relevantBillboard === null) {
            document.body.style.cursor = 'default';
            return;
        }

        const handOverBillboard: boolean = this.eventInsideBillboard(event, relevantBillboard);

        document.body.style.cursor = handOverBillboard ? 'pointer' : 'default';
    }

    private getRelevantBillboard(): Billboard {
        const decos = Main.game.level.decosFg.concat(Main.game.level.decosBg);

        for (const deco of decos) {
            if (deco instanceof Billboard) {
                return deco
            }
        }

        return null;
    }

    private eventInsideBillboard(event: MouseEvent, relevantBillboard: Decoration): boolean {
        return (
            event.clientX >= relevantBillboard.shape.body.bounds.min.x - Main.game.camera.getOffsetX()
            && event.clientX < (relevantBillboard.shape.body.bounds.min.x + relevantBillboard.shape.getWidth() - Main.game.camera.getOffsetX())
            && event.clientY >= relevantBillboard.shape.body.bounds.min.y - Main.game.camera.getOffsetY()
            && event.clientY < (relevantBillboard.shape.body.bounds.min.y + relevantBillboard.shape.getHeight() - Main.game.camera.getOffsetY())
        );
    }
}
