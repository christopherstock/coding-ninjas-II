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

        const billboards: Billboard[] = Main.game.level.getBillboards();
        for (const billboard of billboards) {
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

        const billboards: Billboard[] = Main.game.level.getBillboards();
        for (const billboard of billboards) {
            if (this.eventInsideBillboard(event, billboard)) {
                document.body.style.cursor = 'pointer';
                return;
            }
        }

        document.body.style.cursor = 'default';
    }

    private eventInsideBillboard(event: MouseEvent, billboard: Decoration): boolean {
        return (
            event.clientX >= billboard.shape.body.bounds.min.x - Main.game.camera.getOffsetX()
            && event.clientX < (billboard.shape.body.bounds.min.x + billboard.shape.getWidth() - Main.game.camera.getOffsetX())
            && event.clientY >= billboard.shape.body.bounds.min.y - Main.game.camera.getOffsetY()
            && event.clientY < (billboard.shape.body.bounds.min.y + billboard.shape.getHeight() - Main.game.camera.getOffsetY())
        );
    }
}
