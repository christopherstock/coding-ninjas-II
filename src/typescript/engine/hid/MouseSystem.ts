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
        const relevantBillboard: Billboard = this.getRelevantBillboard();
        if (relevantBillboard === null) {
            return;
        }

        if (this.eventInsideBillboard(event, relevantBillboard)) {
            const leftHalf = event.clientX < (
                relevantBillboard.shape.body.bounds.min.x + relevantBillboard.shape.getWidth() / 2 - Main.game.camera.getOffsetX()
            );

            if (leftHalf) {
                window.open(relevantBillboard.urlLeftHalf, '_blank');
            } else {
                window.open(relevantBillboard.urlRightHalf, '_blank');
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

    // TODO enable multiple billboards

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
