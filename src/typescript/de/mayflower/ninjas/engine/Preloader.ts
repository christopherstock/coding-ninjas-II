import { DrawUtil } from '../util/DrawUtil';
import { Debug } from '../base/Debug';
import { SettingEngine } from '../setting/SettingEngine';
import { Engine } from './Engine';

/** ********************************************************************************************************************
*   Handles the whole preloading process for the web app.
***********************************************************************************************************************/
export class Preloader {
    /** The parent engine instance. */
    private     readonly        engine: Engine                    = null;
    /** The callback to invoke when the preloader is set up. */
    private     readonly        onPreloaderSetup: ()=> void                         = null;

    /**  The colorful preloader image. */
    private                     imageLoaded: HTMLImageElement                   = null;
    /**  The monochrome preloader image. */
    private                     imageUnloaded: HTMLImageElement                   = null;
    /**  A counter for the preloaded images. */
    private                     loadedImageCount: number                             = 0;
    /**  The percentage of all loaded game contents. */
    private                     loadingPercentage: number                             = 0;

    /** ****************************************************************************************************************
    *   Creates a new preloading system.
    *
    *   @param engine           The parent game engine.
    *   @param onPreloaderSetup The callback to invoke when the preloading is set up.
    *******************************************************************************************************************/
    public constructor(engine: Engine, onPreloaderSetup: ()=> void) {
        this.engine           = engine;
        this.onPreloaderSetup = onPreloaderSetup;
    }

    /** ****************************************************************************************************************
    *   Shows the preloader and starts preloading all initialization contents.
    *******************************************************************************************************************/
    public preload(): void {
        Debug.init.log('Preloading all game components');

        // bring on the canvas and init the resize handler
        this.engine.initCanvas();
        this.engine.initWindowResizeHandler();

        // load preloader images
        this.imageLoaded  = new Image();
        this.imageUnloaded = new Image();

        this.imageLoaded.src  = SettingEngine.PATH_IMAGE_PRELOADER + 'preloaderLoaded.png';
        this.imageUnloaded.src = SettingEngine.PATH_IMAGE_PRELOADER + 'preloaderUnloaded.png';

        this.imageLoaded.onload  = (): void => { this.preloaderImageLoaded(); };
        this.imageUnloaded.onload = (): void => { this.preloaderImageLoaded(); };
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

    /** ****************************************************************************************************************
    *   Being invoked when one preloader image has been loaded.
    *******************************************************************************************************************/
    private preloaderImageLoaded(): void {
        if (++this.loadedImageCount === 2) {
            Debug.init.log('All preloader images loaded.');

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
        this.onPreloaderSetup();
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
    }
}
