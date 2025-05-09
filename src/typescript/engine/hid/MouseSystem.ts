import { DebugLog } from '../../base/DebugLog';
import { Main } from '../../base/Main';
import { ImageData } from '../../data/ImageData';
import { LevelId } from '../../game/level/Level';
import { Decoration } from '../../game/object/deco/Decoration';

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

        // get the billboard Deco object for this level
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
        if (
            event.clientX >= relevantBillboard.shape.body.bounds.min.x - Main.game.camera.getOffsetX()
                    && event.clientX < (
                        relevantBillboard.shape.body.bounds.min.x + relevantBillboard.shape.getWidth() - Main.game.camera.getOffsetX()
                    )
                    && event.clientY >= relevantBillboard.shape.body.bounds.min.y - Main.game.camera.getOffsetY()
                    && event.clientY < (
                        relevantBillboard.shape.body.bounds.min.y + relevantBillboard.shape.getHeight() - Main.game.camera.getOffsetY()
                    )
        ) {
            const leftHalf = event.clientX < (
                relevantBillboard.shape.body.bounds.min.x + relevantBillboard.shape.getWidth() / 2 - Main.game.camera.getOffsetX()
            );

            if (
                Main.game.level.id === LevelId.LEVEL_START
            ) {
                window.open('https://www.christopherstock.de', '_blank');
            }

            if (
                Main.game.level.id === LevelId.LEVEL_DOJO
            ) {
                if (
                    leftHalf
                ) {
                    window.open('https://php8.christopherstock.de/architekt-baur/1.1/index.php/de/', '_blank');
                } else {
                    window.open('https://www.winklerundschorn.de', '_blank');
                }
            }

            if (
                Main.game.level.id === LevelId.LEVEL_GARDEN
            ) {
                window.open('https://christopherstock.github.io/OutRunMF/dist/', '_blank');
            }

            if (
                Main.game.level.id === LevelId.LEVEL_TOWN
            ) {
                if (
                    leftHalf
                ) {
                    window.open('https://christopherstock.github.io/babylon-zero/dist/', '_blank');
                } else {
                    window.open('https://github.com/christopherstock/shooter-gradle', '_blank');
                }
            }
        }
    }

    private onMove(event: PointerEvent): void {
        if (Main.game.level === null) {
            return;
        }

        // get the billboard Deco object for this level
        const relevantBillboard: Decoration = this.getRelevantBillboard();
        if (relevantBillboard === null) {
            return;
        }

        // TODO redundant calc!
        const handOverBillboard: boolean = (
            event.clientX >= relevantBillboard.shape.body.bounds.min.x - Main.game.camera.getOffsetX()
            && event.clientX < (relevantBillboard.shape.body.bounds.min.x + relevantBillboard.shape.getWidth() - Main.game.camera.getOffsetX())
            && event.clientY >= relevantBillboard.shape.body.bounds.min.y - Main.game.camera.getOffsetY()
            && event.clientY < (relevantBillboard.shape.body.bounds.min.y + relevantBillboard.shape.getHeight() - Main.game.camera.getOffsetY())
        );

        document.body.style.cursor = handOverBillboard ? 'pointer' : 'default';
    }

    private getRelevantBillboard(): Decoration {
        const decos = Main.game.level.decosFg.concat(Main.game.level.decosBg);

        for (const deco of decos) {
            const img: string = deco.sprite.template.imageIds[0];
            if (!img.includes('billboard')) {continue;}

            if (
                (Main.game.level.id === LevelId.LEVEL_START     && img === ImageData.BILLBOARD_WELCOME)
                || (Main.game.level.id === LevelId.LEVEL_DOJO   && img === ImageData.BILLBOARD_WEBSITES)
                || (Main.game.level.id === LevelId.LEVEL_GARDEN && img === ImageData.BILLBOARD_GAMES)
                || (Main.game.level.id === LevelId.LEVEL_TOWN   && img === ImageData.BILLBOARD_3D_DEV)
            ) {
                return deco;
            }
        }

        return null;
    }
}
