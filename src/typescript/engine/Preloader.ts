import { DrawUtil } from '../util/DrawUtil';
import { DebugLog } from '../base/DebugLog';
import { SettingEngine } from '../base/SettingEngine';
import { Engine } from './Engine';

/** ********************************************************************************************************************
*   Handles the whole preloading process for the web app.
***********************************************************************************************************************/
export class Preloader {
    private readonly engine: Engine                     = null;
    private readonly onPreloaderComplete: ()=> void     = null;
    public preloadingComplete: boolean                 = false;
    public startButtonPressed: boolean                 = false;
    private imageLoaded: HTMLImageElement               = null;
    private imageUnloaded: HTMLImageElement             = null;
    private imageStartButton: HTMLImageElement          = null;
    private loadedImageCount: number                    = 0;
    private loadingPercentage: number                   = 0;

    /** ****************************************************************************************************************
    *   Creates a new preloading system.
    *
    *   @param engine              The parent game engine.
    *   @param onPreloaderComplete The callback to invoke when the preloading is set up.
    *******************************************************************************************************************/
    public constructor(engine: Engine, onPreloaderComplete: ()=> void) {
        this.engine              = engine;
        this.onPreloaderComplete = onPreloaderComplete;
    }

    /** ****************************************************************************************************************
    *   Shows the preloader and starts preloading all initialization contents.
    *******************************************************************************************************************/
    public preload(): void {
        DebugLog.init.log('Init all game components');

        // bring on the canvas and init the resize handler
        this.engine.initCanvas();
        this.engine.initWindowResizeHandler();

        // load preloader images
        this.imageLoaded  = new Image();
        this.imageUnloaded = new Image();
        this.imageStartButton = new Image();

        this.imageLoaded.src  = SettingEngine.PATH_IMAGE_PRELOADER + 'loaded.png';
        this.imageUnloaded.src = SettingEngine.PATH_IMAGE_PRELOADER + 'unloaded.png';
        this.imageStartButton.src = SettingEngine.PATH_IMAGE_PRELOADER + 'startButton.png';

        this.imageLoaded.onload  = (): void => { this.preloaderImageLoaded(); };
        this.imageUnloaded.onload = (): void => { this.preloaderImageLoaded(); };
        this.imageStartButton.onload = (): void => { this.preloaderImageLoaded(); };
    }

    /** ****************************************************************************************************************
    *   Sets the loading percentage the preloader should draw onto the screen.
    *
    *   @param loadingPercentage The loading percentage to set.
    *******************************************************************************************************************/
    public setLoadingPercentage(loadingPercentage: number): void {
        this.loadingPercentage = loadingPercentage;

        // force an immediate draw
        this.drawPreloader();
    }

    public showStartButton(): void {
        this.preloadingComplete = true;
        this.drawPreloader();
    }

    /** ****************************************************************************************************************
    *   Being invoked when one preloader image has been loaded.
    *******************************************************************************************************************/
    private preloaderImageLoaded(): void {
        if (++this.loadedImageCount === 3) {
            DebugLog.init.log('Init preloader images complete');

            this.onPreloaderImageLoadComplete();
        }
    }

    /** ****************************************************************************************************************
    *   Being invoked when all preloader images have been loaded completely.
    *******************************************************************************************************************/
    private onPreloaderImageLoadComplete(): void {
        // draw the empty preloader
        this.drawPreloader();

        // notify that the preloader is set up
        this.onPreloaderComplete();
    }

    /** ****************************************************************************************************************
    *   Draws the preloader onto the canvas.
    *******************************************************************************************************************/
    private drawPreloader(): void {
        // clear canvas
        DrawUtil.fillRect(
            this.engine.canvasSystem.getCanvasContext(),
            0,
            0,
            this.engine.canvasSystem.getWidth(),
            this.engine.canvasSystem.getHeight(),
            SettingEngine.COLOR_BG_PRELOADER_CSS
        );

        // calc image location
        const imageX: number = (this.engine.canvasSystem.getWidth()  - this.imageUnloaded.width) / 2;
        const imageY: number = (this.engine.canvasSystem.getHeight() - this.imageUnloaded.height) / 2;

        // calc image width to draw
        const gayImageWidth: number = (this.imageLoaded.width * this.loadingPercentage) / 100;
        const monoImageWidth: number = (this.imageUnloaded.width - gayImageWidth);

        // draw mono image
        DrawUtil.drawImageScaledClipped(
            this.engine.canvasSystem.getCanvasContext(),
            this.imageUnloaded,
            gayImageWidth,
            0,
            monoImageWidth,
            this.imageUnloaded.height,
            imageX + gayImageWidth,
            imageY,
            monoImageWidth,
            this.imageUnloaded.height
        );

        // draw gay image clipped
        DrawUtil.drawImageScaledClipped(
            this.engine.canvasSystem.getCanvasContext(),
            this.imageLoaded,
            0,
            0,
            gayImageWidth,
            this.imageLoaded.height,
            imageX,
            imageY,
            gayImageWidth,
            this.imageLoaded.height
        );

        // draw start button
        if (this.preloadingComplete) {
            const MARGIN_TOP_START_BUTTON: number = 20;
            DrawUtil.drawImage(
                this.engine.canvasSystem.getCanvasContext(),
                this.imageStartButton,
                (this.engine.canvasSystem.getWidth()  - this.imageStartButton.width) / 2,
                this.engine.canvasSystem.getHeight() / 2 + this.imageUnloaded.height / 2 + MARGIN_TOP_START_BUTTON
            );
        }
    }
}
