import * as matter from 'matter-js';
import { Engine } from '../engine/Engine';
import { Camera } from '../engine/ui/Camera';
import { DebugLog } from '../base/DebugLog';
import { SettingDebug } from '../base/SettingDebug';
import { SettingEngine } from '../base/SettingEngine';
import { SoundData } from '../data/SoundData';
import { LevelStart } from '../data/level/LevelStart';
import { LevelDojo } from '../data/level/LevelDojo';
import { Main } from '../base/Main';
import { KeyData } from '../data/KeyData';
import { LevelGarden } from '../data/level/LevelGarden';
import { LevelTown } from '../data/level/LevelTown';
import { DarkenPanel } from '../engine/ui/DarkenPanel';
import { Level, LevelId } from './level/Level';
import { CharacterFacing } from './object/being/CharacterFacing';

/** ********************************************************************************************************************
*   Specifies the game logic and all primal components of the game.
***********************************************************************************************************************/
export class Game {
    public engine: Engine                           = null;
    public camera: Camera                           = null;
    public level: Level                             = null;
    private bgMusic: HTMLAudioElement               = null;
    private slowMotionTicks: number                 = 0;

    private readonly darkenPanel: DarkenPanel                = new DarkenPanel();

    /** ****************************************************************************************************************
    *   Shows the preloader.
    *******************************************************************************************************************/
    public launch(): void {
        // create the game engine
        this.engine = new Engine(this);

        // start the preloader after a short delay. this runs smoother for the user
        window.setTimeout(
            () => { this.engine.launch(); },
            (SettingDebug.NO_DELAY_AROUND_PRELOADER ? 0 : SettingEngine.PRELOADER_DELAY)
        );
    }

    /** ****************************************************************************************************************
    *   Starts the game loop.
    *******************************************************************************************************************/
    public start(): void {
        DebugLog.init.log('Starting the game loop');

        this.engine.initMatterJS();
        this.bgMusic = this.engine.soundSystem.playSound(SoundData.BG_CHINESE, true);
        this.resetAndLaunchLevel(LevelId.LEVEL_START);
        this.updateAndAssignCamera();
        this.engine.matterJsSystem.startRenderer();

        Main.game.startDarkenPanelFadeOut(SettingEngine.DARKEN_PANEL_TICKS_STARTUP);

        window.requestAnimationFrame(
            () => { this.tickGame(); }
        );
    }

    /** ****************************************************************************************************************
    *   Paints all overlays after Matter.js completed rendering the scene.
    *
    *   @param context The 2D rendering context to draw onto.
    *******************************************************************************************************************/
    public paintHUD(context: CanvasRenderingContext2D): void {
        this.darkenPanel.paint(context, this.engine.canvasSystem);
    }

    /** ****************************************************************************************************************
    *   Pauses or resumes the background music.
    *
    *   @param enable Specifies if the background music shall be enabled or not.
    *******************************************************************************************************************/
    public toggleBgMusic(enable: boolean): void {
        if (this.bgMusic !== null) {
            if (enable) {
                // noinspection JSIgnoredPromiseFromCall
                this.bgMusic.play().then().catch((e: Error) => { return e; });
            } else {
                this.bgMusic.pause();
            }
        }
    }

    /** ****************************************************************************************************************
    *   Resets the camera.
    *******************************************************************************************************************/
    public resetCamera(): void {
        this.camera = new Camera(
            SettingEngine.CAMERA_MOVING_SPEED_X,
            SettingEngine.CAMERA_MOVING_SPEED_Y,
            SettingEngine.CAMERA_MOVING_MINIMUM,
            SettingEngine.CAMERA_MOVING_MAXIMUM,
            this.level.width,
            this.level.height,
            this.engine.canvasSystem.getWidth(),
            this.engine.canvasSystem.getHeight()
        );
        this.camera.reset(this);
    }

    /** ****************************************************************************************************************
    *   Sets slow motion game engine speed for a specified period.
    *******************************************************************************************************************/
    public startSlowMotionTicks(): void {
        if (SettingEngine.ENGINE_SLOW_MOTION_TICKS > 0) {
            DebugLog.engine.log(
                'Engine - setSlowMotion for ['
                + String(SettingEngine.ENGINE_SLOW_MOTION_TICKS)
                + '] ticks'
            );

            this.slowMotionTicks = SettingEngine.ENGINE_SLOW_MOTION_TICKS;
        }
    }

    public resetAndLaunchLevel(
        levelId: LevelId,
        playerStartX: number = null,
        playerStartY: number = null,
        playerInitialFacing: CharacterFacing = null
    ): void {
        this.slowMotionTicks = 0;

        this.engine.matterJsSystem.resetWorld();

        // assign and init level
        this.level = null;
        switch (levelId) {
            case LevelId.LEVEL_START:
                this.level = new LevelStart();
                break;
            case LevelId.LEVEL_DOJO:
                this.level = new LevelDojo();
                break;
            case LevelId.LEVEL_GARDEN:
                this.level = new LevelGarden();
                break;
            case LevelId.LEVEL_TOWN:
                this.level = new LevelTown();
                break;
            default:
                this.level = new LevelStart();
                break;
        }

        if (playerStartX !== null) {
            this.level.playerStartX = playerStartX;
        }
        if (playerStartY !== null) {
            this.level.playerStartY = playerStartY;
        }
        if (playerInitialFacing !== null) {
            this.level.playerInitialFacing = playerInitialFacing;
        }

        this.level.init(this.engine.matterJsSystem);
        this.engine.siteSystem.reset();
        this.resetCamera();
        Main.game.engine.keySystem.releaseAllKeys();
    }

    public startDarkenPanelFadeOut(
        ticks: number = SettingEngine.DARKEN_PANEL_TICKS_DOOR_SWITCH,
        fadeIn: boolean = false,
        onComplete: ()=> void = (): void => { /* */ }
    ): void {
        this.darkenPanel.startFadeOut(ticks, fadeIn, onComplete);
    }

    /** ****************************************************************************************************************
    *   Being invoked each tick of the game loop in order to render the game.
    *******************************************************************************************************************/
    private tickGame(): void {
        // start fpsMetet tick
        if (SettingDebug.DEBUG_MODE) {
            this.engine.fpsMeter.tickStart();
        }

        // handle menu keys
        this.handleMenuKey();

        // render one game tick and update matter.js 2D engine
        if (this.slowMotionTicks === 0 || this.slowMotionTicks-- % 4 === 0) {
            this.render();
            this.engine.matterJsSystem.updateEngine();
        }

        // stop fpsMeter tick
        if (SettingDebug.DEBUG_MODE) {
            this.engine.fpsMeter.tick();
        }

        // request next animation frame
        window.requestAnimationFrame(
            () => { this.tickGame(); }
        );
    }

    /** ****************************************************************************************************************
    *   Renders all game components.
    *******************************************************************************************************************/
    private render(): void {
        this.darkenPanel.render(this.level.player);

        // render level
        this.level.render();

        // update camera bounds
        this.updateAndAssignCamera();

        // render parallax elements
        this.level.renderParallaxElements();
    }

    /** ****************************************************************************************************************
    *   Handles pressed menu keys.
    *******************************************************************************************************************/
    private handleMenuKey(): void {
        if (SettingDebug.DEBUG_MODE) {
            if (this.engine.keySystem.isPressed(KeyData.KEY_1)) {
                this.engine.keySystem.setNeedsRelease(KeyData.KEY_1);

                DebugLog.init.log('Resetting and switching to level 1');
                this.resetAndLaunchLevel(LevelId.LEVEL_START);
            }

            if (Main.game.engine.keySystem.isPressed(KeyData.KEY_2)) {
                Main.game.engine.keySystem.setNeedsRelease(KeyData.KEY_2);

                DebugLog.init.log('Resetting and switching to level 2');
                this.resetAndLaunchLevel(LevelId.LEVEL_DOJO);
            }

            if (Main.game.engine.keySystem.isPressed(KeyData.KEY_3)) {
                Main.game.engine.keySystem.setNeedsRelease(KeyData.KEY_3);

                DebugLog.init.log('Resetting and switching to level 3');
                this.resetAndLaunchLevel(LevelId.LEVEL_GARDEN);
            }

            if (Main.game.engine.keySystem.isPressed(KeyData.KEY_4)) {
                Main.game.engine.keySystem.setNeedsRelease(KeyData.KEY_4);

                DebugLog.init.log('Resetting and switching to level 4');
                this.resetAndLaunchLevel(LevelId.LEVEL_TOWN);
            }
        }
    }

    /** ****************************************************************************************************************
    *   Updates the level camera and then assigns it onto the player.
    *   by updating the rendered bounds of the camera onto the matter.js rendering engine.
    *******************************************************************************************************************/
    private updateAndAssignCamera(): void {
        const cameraBounds: matter.Bounds = this.camera.update(
            this.level.player.shape.body.position.x,
            this.level.player.shape.body.position.y,
            this.level.player.collidesBottom,
            this.engine.siteSystem.getCameraTargetX(),
            this.engine.canvasSystem.getHeight() * SettingEngine.CAMERA_RATIO_Y
        );
        this.engine.matterJsSystem.setRenderBounds(cameraBounds);
    }
}
