
    import * as ninjas from '../ninjas';

    /** ****************************************************************************************************************
    *   Handles the whole preloading process for the web app.
    *******************************************************************************************************************/
    export class Preloader
    {
        /** The parent engine instance. */
        private     readonly        engine                            :ninjas.Engine                    = null;
        /** The callback to invoke when the preloader is set up. */
        private     readonly        onPreloaderSetup                :() => void                         = null;

        /**  The colorful preloader image. */
        private                     imageGay                        :HTMLImageElement                   = null;
        /**  The monochrome preloader image. */
        private                     imageMono                       :HTMLImageElement                   = null;
        /**  A counter for the preloaded images. */
        private                     loadedImageCount                :number                             = 0;
        /**  The percentage of all loaded game contents. */
        private                     loadingPercentage               :number                             = 0;

        /** ************************************************************************************************************
        *   Creates a new preloading system.
        *
        *   @param engine           The parent game engine.
        *   @param onPreloaderSetup The callback to invoke when the preloading is set up.
        ***************************************************************************************************************/
        public constructor( engine:ninjas.Engine, onPreloaderSetup:() => void )
        {
            this.engine           = engine;
            this.onPreloaderSetup = onPreloaderSetup;
        }

        /** ************************************************************************************************************
        *   Shows the preloader and starts preloading all initialization contents.
        ***************************************************************************************************************/
        public preload() : void
        {
            ninjas.Debug.init.log( 'Preloading all game components' );

            // bring on the canvas and init the resize handler
            this.engine.initCanvas();
            this.engine.initWindowResizeHandler();

            // load preloader images
            this.imageGay  = new Image();
            this.imageMono = new Image();

            this.imageGay.src  = ninjas.SettingEngine.PATH_IMAGE_PRELOADER + 'preloaderGay.png';
            this.imageMono.src = ninjas.SettingEngine.PATH_IMAGE_PRELOADER + 'preloaderMono.png';

            this.imageGay.onload  = () :void => { this.preloaderImageLoaded(); };
            this.imageMono.onload = () :void => { this.preloaderImageLoaded(); };
        }

        /** ************************************************************************************************************
        *   Sets the loading percentage the preloader should draw onto the screen.
        *
        *   @param loadingPercentage The loading percentage to set.
        ***************************************************************************************************************/
        public setLoadingPercentage( loadingPercentage:number ) : void
        {
            this.loadingPercentage = loadingPercentage;

            // force an immediate draw
            this.drawPreloader();
        }

        /** ************************************************************************************************************
        *   Being invoked when one preloader image has been loaded.
        ***************************************************************************************************************/
        private preloaderImageLoaded() :void
        {
            if ( ++this.loadedImageCount === 2 )
            {
                ninjas.Debug.init.log( 'All preloader images loaded.' );

                this.onPreloaderImageLoadComplete();
            }
        }

        /** ************************************************************************************************************
        *   Being invoked when all preloader images have been loaded completely.
        ***************************************************************************************************************/
        private onPreloaderImageLoadComplete() : void
        {
            // draw the empty preloader
            this.drawPreloader();

            // notify that the preloader is set up
            this.onPreloaderSetup();
        }

        /** ************************************************************************************************************
        *   Draws the preloader onto the canvas.
        ***************************************************************************************************************/
        private drawPreloader() : void
        {
            // clear canvas
            ninjas.DrawUtil.fillRect
            (
                this.engine.canvasSystem.getCanvasContext(),
                0,
                0,
                this.engine.canvasSystem.getWidth(),
                this.engine.canvasSystem.getHeight(),
                ninjas.SettingEngine.BACKGROUND_PRELOADER
            );

            // calc image location
            const imageX :number = ( this.engine.canvasSystem.getWidth()  - this.imageMono.width  ) / 2;
            const imageY :number = ( this.engine.canvasSystem.getHeight() - this.imageMono.height ) / 2;

            // calc image width to draw
            const imageWidthToDraw :number = ( this.imageGay.width * this.loadingPercentage ) / 100;

            // draw mono image
            ninjas.DrawUtil.drawImage
            (
                this.engine.canvasSystem.getCanvasContext(),
                this.imageMono,
                imageX,
                imageY
            );

            // draw gay image clipped
            ninjas.DrawUtil.drawImageScaledClipped
            (
                this.engine.canvasSystem.getCanvasContext(),
                this.imageGay,
                0,
                0,
                imageWidthToDraw,
                this.imageGay.height,
                imageX,
                imageY,
                imageWidthToDraw,
                this.imageGay.height
            );
        }
    }
