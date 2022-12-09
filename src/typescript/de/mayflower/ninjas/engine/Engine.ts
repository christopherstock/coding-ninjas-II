
import * as ninjas from '../ninjas';

require( 'fpsmeter' );

/** ****************************************************************************************************************
    *   Specifies the game engine and its systems.
    *******************************************************************************************************************/
export class Engine
{
    /** The canvas element. */
    public              canvasSystem            :ninjas.CanvasSystem            = null;
    /** The image system. */
    public              imageSystem             :ninjas.ImageSystem             = null;
    /** The soundSystem system. */
    public              soundSystem             :ninjas.SoundSystem             = null;
    /** The matterJS engine. */
    public              matterJsSystem          :ninjas.MatterJsSystem          = null;
    /** The site system. */
    public              siteSystem              :ninjas.SiteSystem              = null;
    /** The custom key system. */
    public              keySystem               :ninjas.KeySystem               = null;
    /** The custom pointer system. */
    public              pointerSystem           :ninjas.PointerSystem           = null;
    /** The FPS counter. */
    public              fpsMeter                :FPSMeter                       = null;

    /** The preloader instance. */
    public  readonly    preloader               :ninjas.Preloader               = null;
    /** The parent game instance. */
    private readonly    game                    :ninjas.Game                    = null;

    /** ************************************************************************************************************
        *   Creates a new game engine.
        *
        *   @param game The parent game instance that uses this game engine.
        ***************************************************************************************************************/
    public constructor( game:ninjas.Game ) {
        this.game      = game;
        this.preloader = new ninjas.Preloader(
            this,
            () => {
                this.onPreloaderInitComplete();
            }
        );
    }

    /** ************************************************************************************************************
        *   Launches the game engine and starts with showing the preloader.
        ***************************************************************************************************************/
    public launch() : void
    {
        this.preloader.preload()
    }

    /** ************************************************************************************************************
        *   Inits the canvas of the game engine.
        ***************************************************************************************************************/
    public initCanvas() : void
    {
        ninjas.Debug.init.log( 'Initing canvas system' );
        this.canvasSystem = new ninjas.CanvasSystem();
        this.canvasSystem.updateDimensions();
    }

    /** ************************************************************************************************************
        *   Inits the canvas of the game engine.
        ***************************************************************************************************************/
    public initImageSystem() : void
    {
        ninjas.Debug.init.log( 'Initing image system' );
        this.imageSystem = new ninjas.ImageSystem
        (
            ninjas.ImageData.FILE_NAMES,
            ninjas.SpriteTemplate.getAllImagesToMirror(),
            () => { this.onImagesLoaded(); }
        );
        this.imageSystem.loadImages();
    }

    /** ************************************************************************************************************
        *   Inits the window resize handler.
        ***************************************************************************************************************/
    public initWindowResizeHandler() : void
    {
        ninjas.Debug.init.log( 'Initing window resize handler' );

        window.onresize = ( event:Event ) :void => {

            this.canvasSystem.updateDimensions();

            if ( this.matterJsSystem !== null )
            {
                this.matterJsSystem.updateEngineDimensions( this.canvasSystem );
                this.siteSystem.updatePanelSizeAndPosition();
                this.game.resetCamera();
            }
        };
    }

    /** ************************************************************************************************************
        *   Being invoked when the preloader is set up.
        ***************************************************************************************************************/
    public onPreloaderInitComplete() : void
    {
        ninjas.Debug.init.log( 'Preloader initialization complete. Preloading all contents now.' );
        this.preloader.setLoadingPercentage( 5 );

        this.initImageSystem();
    }

    /** ************************************************************************************************************
        *   Inits the 2D engine.
        ***************************************************************************************************************/
    public initMatterJS() : void
    {
        ninjas.Debug.init.log( 'Initing 2D physics engine' );

        this.matterJsSystem = new ninjas.MatterJsSystem
        (
            this.canvasSystem,
            ( renderContext:CanvasRenderingContext2D ) => { this.game.paintHUD(  renderContext ); },
            this.imageSystem.getAll()
        );
        this.matterJsSystem.updateEngineDimensions( this.canvasSystem );
    }

    /** ************************************************************************************************************
        *   Being invoked when all images are loaded.
        ***************************************************************************************************************/
    private onImagesLoaded() : void
    {
        ninjas.SpriteTemplate.assignAllImageSizes( this.imageSystem );

        this.preloader.setLoadingPercentage( 80 );

        ninjas.Debug.init.log( 'Initing sound system' );
        this.soundSystem = new ninjas.SoundSystem(
            ninjas.SoundData.FILE_NAMES,
            () => { this.onSoundsLoaded(); }
        );
        this.soundSystem.loadSounds();
    }

    /** ************************************************************************************************************
        *   Being invoked when all sounds are loaded.
        ***************************************************************************************************************/
    private onSoundsLoaded() : void
    {
        this.preloader.setLoadingPercentage( 90 );

        // init site system
        ninjas.Debug.init.log( 'Initing site system' );
        this.siteSystem = new ninjas.SiteSystem();

        // init key and pointer system
        ninjas.Debug.init.log( 'Initing key system' );
        this.keySystem = new ninjas.KeySystem();
        ninjas.Debug.init.log( 'Initing pointer system' );
        this.pointerSystem = new ninjas.PointerSystem();

        // init window blur handler
        this.initWindowBlurHandler();

        // init FPS-counter
        if ( ninjas.SettingDebug.DEBUG_MODE )
        {
            this.initFpsCounter();
        }

        ninjas.Debug.init.log( 'Initing game engine completed' );

        this.preloader.setLoadingPercentage( 100 );

        // start the game loop after a short delay. this runs smoother for the user
        window.setTimeout
        (
            () => { this.game.start(); },
            ( ninjas.SettingDebug.NO_DELAY_AROUND_PRELOADER ? 0 : ninjas.SettingEngine.PRELOADER_DELAY )
        );
    }

    /** ************************************************************************************************************
        *   Inits the window blur handler.
        ***************************************************************************************************************/
    private initWindowBlurHandler() : void
    {
        ninjas.Debug.init.log( 'Initing window blur handler' );

        window.onblur = ( event:Event ) :void => {

            ninjas.Debug.canvas.log( 'Detected window focus lost. Releasing all keys.' );

            this.keySystem.releaseAllKeys();
        };
    }

    /** ************************************************************************************************************
        *   Inits the FPS counter.
        ***************************************************************************************************************/
    private initFpsCounter() : void
    {
        ninjas.Debug.init.log( 'Initing FPS counter' );

        this.fpsMeter = new FPSMeter(
            null,
            {
                graph:    1,
                decimals: 0, // 1 > stressy xp
                position: 'absolute',
                zIndex:   10,
                top:      'auto',
                right:    String( ninjas.SettingGame.SITE_PANEL_BORDER_SIZE_OUTER ) + 'px',
                bottom:   String( ninjas.SettingGame.SITE_PANEL_BORDER_SIZE_OUTER ) + 'px',
                left:     'auto',
                margin:   '0',
                heat:     1,
                theme:    'dark',
            }
        );
    }
}
