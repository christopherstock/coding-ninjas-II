import { DebugLog } from '../../base/DebugLog';
import { Main } from '../../base/Main';
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

        const relevantBillboards: Billboard[] = this.getRelevantBillboards();
        for (const billboard of relevantBillboards) {
            if (this.eventInsideBillboard(event, billboard)) {
                const leftHalf = event.clientX < (
                    billboard.shape.body.bounds.min.x + billboard.shape.getWidth() / 2 - Main.game.camera.getOffsetX()
                );

                if (leftHalf) {
                    window.open(billboard.urlLeftHalf, '_blank');
                } else {
                    window.open(billboard.urlRightHalf, '_blank');
                }
            }
        }
    }

    private onMove(event: PointerEvent): void {
        if (Main.game.level === null) {
            document.body.style.cursor = 'default';
            return;
        }

        const relevantBillboards: Billboard[] = this.getRelevantBillboards();
        for (const billboard of relevantBillboards) {
            if (this.eventInsideBillboard(event, billboard)) {
                document.body.style.cursor = 'pointer';
                return;
            }
        }

        document.body.style.cursor = 'default';
    }

    // TODO move to Level

    private getRelevantBillboards(): Billboard[] {
        const decos = Main.game.level.decosFg.concat(Main.game.level.decosBg);
        const billboards: Billboard[] = [];

        for (const deco of decos) {
            if (deco instanceof Billboard) {
                billboards.push(deco);
            }
        }

        return billboards;
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
