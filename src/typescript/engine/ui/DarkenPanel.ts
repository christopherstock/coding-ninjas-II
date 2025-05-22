import { DrawUtil } from '../../util/DrawUtil';
import { Player } from '../../game/object/being/Player';
import { SettingEngine } from '../../base/SettingEngine';
import { SettingDebug } from '../../base/SettingDebug';
import { CanvasSystem } from './CanvasSystem';

/** ********************************************************************************************************************
*   Manages the dark blend panel overview.
***********************************************************************************************************************/
export class DarkenPanel {
    currentTick: number             = 0;
    totalTicks: number              = 0;
    onCompleteCallback: ()=> void   = null;

    /** ****************************************************************************************************************
    *   Paints the blend panel overlay over the entire canvas.
    *
    *   @param context      The 2D rendering context to draw onto.
    *   @param canvasSystem The engines canvas system.
    *******************************************************************************************************************/
    public paint(context: CanvasRenderingContext2D, canvasSystem: CanvasSystem): void {
        if (this.currentTick !== 0) {

            let darkenRatio = 0;
            if (this.currentTick > 0) {
                darkenRatio = this.currentTick;
            } else if (this.currentTick < 0) {
                darkenRatio = this.totalTicks - Math.abs(this.currentTick);
            }

            DrawUtil.fillRect(
                context,
                0,
                0,
                canvasSystem.getPhysicalWidth(),
                canvasSystem.getPhysicalHeight(),
                'rgba( 0, 0, 0, '
                + String(darkenRatio / this.totalTicks)
                + ' )'
            );
        }
    }

    public render(player: Player): void {
        if (this.currentTick > 0) {
            player.setFrozen(true);
            --this.currentTick;
            if (this.currentTick === 0) {
                player.setFrozen(false);
                this.onCompleteCallback();
            }
        } else if (this.currentTick < 0) {
            player.setFrozen(true);
            ++this.currentTick;
            if (this.currentTick === 0) {
                player.setFrozen(false);
                this.onCompleteCallback();
            }
        }
    }

    public startFade(
        ticks: number = SettingEngine.DARKEN_PANEL_TICKS_DOOR_SWITCH,
        fadeIn: boolean = false,
        onComplete: ()=> void = (): void => { /* */ }
    ): void {
        if (SettingDebug.DISABLE_DARKEN_PANEL) {
            ticks = 1;
        }

        this.currentTick = (fadeIn ? -ticks : ticks);
        this.totalTicks = ticks;
        this.onCompleteCallback = onComplete;
    }
}
