import { DebugLog } from '../../base/DebugLog';
import { Main } from '../../base/Main';
import { Decoration } from '../../game/object/deco/Decoration';
import { Billboard } from '../../game/object/deco/Billboard';

export class MouseSystem {
    private lastMouseX: number = 0;
    private lastMouseY: number = 0;

    public constructor() {
        DebugLog.engine.log('Setup mouse system');

        window.addEventListener('click',     (event: Event) => { this.onClick(event as PointerEvent) });
        window.addEventListener('mousemove', (event: Event) => { this.onMove(event as PointerEvent) });
    }

    private onClick(event: PointerEvent): void {
        if (Main.game.level === null) {
            return;
        }

        const billboards: Billboard[] = Main.game.level.getClickableBillboards();
        for (const billboard of billboards) {
            if (billboard.eventInsideBillboard(event.clientX, event.clientY)) {
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

        this.lastMouseX = event.clientX;
        this.lastMouseY = event.clientY;

        this.updateMouseCursor();
    }

    public updateMouseCursor(): void {
        if (Main.game.level !== null) {
            const billboards: Billboard[] = Main.game.level.getClickableBillboards();
            for (const billboard of billboards) {
                if (billboard.eventInsideBillboard(this.lastMouseX, this.lastMouseY)) {
                    document.body.style.cursor = 'pointer';
                    return;
                }
            }
        }

        document.body.style.cursor = 'default';
    }
}
