import { Game } from '../game/Game';
import { Debug } from '../base/Debug';
import { SoundData } from '../data/SoundData';
import { SettingDebug } from '../base/SettingDebug';
import { SettingEngine } from '../base/SettingEngine';
import { SettingGame } from '../base/SettingGame';
import { ImageData } from '../data/ImageData';
import { SpriteData } from '../data/SpriteData';
import { CanvasSystem } from './ui/CanvasSystem';
import { ImageSystem } from './io/ImageSystem';
import { SoundSystem } from './io/SoundSystem';
import { MatterJsSystem } from './MatterJsSystem';
import { SiteSystem } from './SiteSystem';
import { KeySystem } from './hid/KeySystem';
import { PointerSystem } from './hid/PointerSystem';
import { Preloader } from './Preloader';

require('fpsmeter');

/** ********************************************************************************************************************
*   Specifies the game engine and its systems.
***********************************************************************************************************************/
export class Engine {
    /** The canvas element. */
    public              canvasSystem: CanvasSystem            = null;
    /** The image system. */
    public              imageSystem: ImageSystem             = null;
    /** The soundSystem system. */
    public              soundSystem: SoundSystem             = null;
    /** The matterJS engine. */
    public              matterJsSystem: MatterJsSystem          = null;
    /** The site system. */
    public              siteSystem: SiteSystem              = null;
    /** The custom key system. */
    public              keySystem: KeySystem               = null;
    /** The custom pointer system. */
    public              pointerSystem: PointerSystem           = null;
    /** The FPS counter. */
    public              fpsMeter: FPSMeter                       = null;

    /** The preloader instance. */
    public  readonly    preloader: Preloader               = null;
    /** The parent game instance. */
    private readonly    game: Game                    = null;

    /** ***************************************************************************************************************
    *   Creates a new game engine.
    *
    *   @param game The parent game instance that uses this game engine.
    *******************************************************************************************************************/
    public constructor(game: Game) {
        this.game      = game;
        this.preloader = new Preloader(
            this,
            () => {
                this.onPreloaderInitComplete();
            }
        );
    }

    /** ****************************************************************************************************************
    *   Launches the game engine and starts with showing the preloader.
    *******************************************************************************************************************/
    public launch(): void {
        this.preloader.preload()
    }

    /** ****************************************************************************************************************
    *   Inits the canvas of the game engine.
    *******************************************************************************************************************/
    public initCanvas(): void {
        Debug.init.log('Init canvas system');
        this.canvasSystem = new CanvasSystem();
        this.canvasSystem.updateDimensions();
    }

    /** ****************************************************************************************************************
    *   Inits the canvas of the game engine.
    *******************************************************************************************************************/
    public initImageSystem(): void {
        Debug.init.log('Init image system');
        this.imageSystem = new ImageSystem
        (
            ImageData.FILE_NAMES,
            SpriteData.getAllImagesToMirror(),
            () => { this.onImagesLoaded(); }
        );
        this.imageSystem.loadImages();
    }

    /** ****************************************************************************************************************
    *   Inits the window resize handler.
    *******************************************************************************************************************/
    public initWindowResizeHandler(): void {
        Debug.init.log('Init window resize handler');

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        window.onresize = (event: Event): void => {
            this.canvasSystem.updateDimensions();

            if (this.matterJsSystem !== null) {
                this.matterJsSystem.updateEngineDimensions(this.canvasSystem);
                this.siteSystem.updatePanelSizeAndPosition();
                this.game.resetCamera();
            }
        };
    }

    /** ****************************************************************************************************************
    *   Being invoked when the preloader is set up.
    *******************************************************************************************************************/
    public onPreloaderInitComplete(): void {
        Debug.init.log('Init preloader complete. Now loading contents');
        this.preloader.setLoadingPercentage(5);

        this.initImageSystem();
    }

    /** ****************************************************************************************************************
    *   Inits the 2D engine.
    *******************************************************************************************************************/
    public initMatterJS(): void {
        Debug.init.log('Starting the 2D physics engine');

        this.matterJsSystem = new MatterJsSystem
        (
            this.canvasSystem,
            (renderContext: CanvasRenderingContext2D) => { this.game.paintHUD(renderContext); },
            this.imageSystem.getAll()
        );
        this.matterJsSystem.updateEngineDimensions(this.canvasSystem);
    }

    /** ****************************************************************************************************************
    *   Being invoked when all images are loaded.
    *******************************************************************************************************************/
    private onImagesLoaded(): void {
        SpriteData.assignAllImageSizes(this.imageSystem);

        this.preloader.setLoadingPercentage(80);

        Debug.init.log('Init sound system');
        this.soundSystem = new SoundSystem(
            SoundData.FILE_NAMES,
            () => { this.onSoundsLoaded(); }
        );
        this.soundSystem.loadSounds();
    }

    /** ****************************************************************************************************************
    *   Being invoked when all sounds are loaded.
    *******************************************************************************************************************/
    private onSoundsLoaded(): void {
        this.preloader.setLoadingPercentage(90);

        // init site system
        Debug.init.log('Init site system');
        this.siteSystem = new SiteSystem();

        // init key and pointer system
        Debug.init.log('Init key system');
        this.keySystem = new KeySystem();
        Debug.init.log('Init pointer system');
        this.pointerSystem = new PointerSystem();

        // init window blur handler
        this.initWindowBlurHandler();

        // init FPS-counter
        if (SettingDebug.DEBUG_MODE) {
            this.initFpsCounter();
        }

        Debug.init.log('Init game engine completed');
        Debug.init.log();

        this.preloader.setLoadingPercentage(100);

        // start the game loop after a short delay. this runs smoother for the user
        window.setTimeout(
            () => { this.game.start(); },
            (SettingDebug.NO_DELAY_AROUND_PRELOADER ? 0 : SettingEngine.PRELOADER_DELAY)
        );
    }

    /** ****************************************************************************************************************
    *   Inits the window blur handler.
    *******************************************************************************************************************/
    private initWindowBlurHandler(): void {
        Debug.init.log('Init window blur handler');

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        window.onblur = (event: Event): void => {
            Debug.canvas.log('Detected window focus lost. Releasing all keys.');

            this.keySystem.releaseAllKeys();
        };
    }

    /** ****************************************************************************************************************
    *   Inits the FPS counter.
    *******************************************************************************************************************/
    private initFpsCounter(): void {
        Debug.init.log('Init FPS counter');

        this.fpsMeter = new FPSMeter(
            null,
            {
                graph:    1,
                decimals: 0, // 1 > stressy xp
                position: 'absolute',
                zIndex:   10,
                top:      'auto',
                right:    String(SettingGame.SITE_PANEL_BORDER_SIZE_OUTER) + 'px',
                bottom:   String(SettingGame.SITE_PANEL_BORDER_SIZE_OUTER) + 'px',
                left:     'auto',
                margin:   '0',
                heat:     1,
                theme:    'dark',
            }
        );
    }
}
