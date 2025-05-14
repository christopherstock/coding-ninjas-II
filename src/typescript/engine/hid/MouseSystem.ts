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
            if (this.eventInsideBillboard(event.clientX, event.clientY, billboard)) {
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
        const billboards: Billboard[] = Main.game.level.getClickableBillboards();
        for (const billboard of billboards) {
            if (this.eventInsideBillboard(this.lastMouseX, this.lastMouseY, billboard)) {
                document.body.style.cursor = 'pointer';
                return;
            }
        }

        document.body.style.cursor = 'default';
    }

    /* eslint-disable max-len */
    private eventInsideBillboard(mouseX: number, mouseY: number, billboard: Decoration): boolean {
        const OFFSET_UPPER_LEFT  = { x: 15, y: 81 }
        const OFFSET_LOWER_RIGHT = { x: -16, y: -161 }

        return (
            mouseX >= OFFSET_UPPER_LEFT.x + billboard.shape.body.bounds.min.x - Main.game.camera.getOffsetX()
            && mouseX < OFFSET_LOWER_RIGHT.x + (billboard.shape.body.bounds.min.x + billboard.shape.getWidth() - Main.game.camera.getOffsetX())
            && mouseY >= OFFSET_UPPER_LEFT.y + billboard.shape.body.bounds.min.y - Main.game.camera.getOffsetY()
            && mouseY < OFFSET_LOWER_RIGHT.y + (billboard.shape.body.bounds.min.y + billboard.shape.getHeight() - Main.game.camera.getOffsetY())
        );
    }
}
