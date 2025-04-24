/* eslint-disable max-len */

/** ********************************************************************************************************************
*   All settings for the game engine.
***********************************************************************************************************************/
export class SettingEngine {
    /** The minimum canvas2D width. */
    static readonly CANVAS_MIN_WIDTH: number                    = 800;
    /** The minimum canvas2D height. */
    static readonly CANVAS_MIN_HEIGHT: number                   = 600;
    /** Disable canvas scaling. */
    static readonly NO_CANVAS_SCALING: boolean                  = true;
    /** Delay around preloader in ms. */
    static readonly PRELOADER_DELAY: number                     = 250;
    /** Slow Motion ticks for the game engine. */
    static readonly ENGINE_SLOW_MOTION_TICKS: number            = 0; // 150;
    /** The color of the matter.js canvas bg. */
    static readonly COLOR_BG_MATTER_JS_CSS: string              = '#000000';
    /** The color of the preloader canvas bg. */
    static readonly COLOR_BG_PRELOADER_CSS: string              = '#000000';
    /** The primary color of the project. */
    static readonly COLOR_PRIMARY_CSS: string                   = '#b42157';

    /** Center camera according to player facing Specifies if the camera shall center the horizontal axis on panels rushing in. */
    static readonly CENTER_CAMERA_X_ON_PANELS: boolean             = true;
    /** The camera ration for the horizontal axis. */
    static readonly CAMERA_RATIO_X: number                      = 0.4;
    /** The camera ration for the vertical axis. */
    static readonly CAMERA_RATIO_Y: number                      = 0.6;
    /** The camera moving speed X from 0.0 to 1.0. */
    static readonly CAMERA_MOVING_SPEED_X: number               = 0.1;
    /** The camera moving speed Y from 0.0 to 1.0. */
    static readonly CAMERA_MOVING_SPEED_Y: number               = 0.05;
    /** The minimum camera moving speed in px per move. */
    static readonly CAMERA_MOVING_MINIMUM: number               = 0.05;
    /** The maximum camera moving speed in px per move. */
    static readonly CAMERA_MOVING_MAXIMUM: number               = 20.0;

    /** The relative path from index.html where all resources reside. */
    static readonly PATH_RESOURCES: string                      = 'res/';
    /** The relative path from index.html where all sounds reside. */
    static readonly PATH_SOUND: string                          = SettingEngine.PATH_RESOURCES + 'sound/';
    /** The relative path from index.html where all images reside. */
    static readonly PATH_IMAGE: string                          = SettingEngine.PATH_RESOURCES + 'image/';
    /** The relative path from index.html where all level images reside. */
    static readonly PATH_IMAGE_LEVEL: string                    = SettingEngine.PATH_IMAGE + 'level/';
    /** The relative path from index.html where all background images reside. */
    static readonly PATH_IMAGE_LEVEL_BG: string                 = SettingEngine.PATH_IMAGE_LEVEL + 'bg/';
    /** The relative path from index.html where all level tile images reside. */
    static readonly PATH_IMAGE_LEVEL_TILE: string               = SettingEngine.PATH_IMAGE_LEVEL + 'tile/';
    /** The relative path from index.html where all level movable images reside. */
    static readonly PATH_IMAGE_LEVEL_MOVABLE: string            = SettingEngine.PATH_IMAGE_LEVEL + 'movable/';
    /** The relative path from index.html where all level pickable images reside. */
    static readonly PATH_IMAGE_LEVEL_PICKABLE: string           = SettingEngine.PATH_IMAGE_LEVEL + 'pickable/';
    /** The relative path from index.html where all level deco images reside. */
    static readonly PATH_IMAGE_LEVEL_DECO: string               = SettingEngine.PATH_IMAGE_LEVEL + 'deco/';
    /** The relative path from index.html where all character images reside. */
    static readonly PATH_IMAGE_LEVEL_CHARACTER: string          = SettingEngine.PATH_IMAGE_LEVEL + 'character/';
    /** The relative path from index.html where all site images reside. */
    static readonly PATH_IMAGE_SITE_PANEL: string               = SettingEngine.PATH_IMAGE + 'sitePanel/';
    /** The relative path from index.html where all preloader images reside. */
    static readonly PATH_IMAGE_PRELOADER: string                = SettingEngine.PATH_IMAGE + 'preloader/';
    /** The relative path from index.html where all sigsaw images reside. */
    static readonly PATH_IMAGE_SIGSAW: string                   = SettingEngine.PATH_IMAGE_LEVEL + 'sigsaw/';
    /** The relative path from index.html where all bounce images reside. */
    static readonly PATH_IMAGE_BOUNCE: string                   = SettingEngine.PATH_IMAGE_LEVEL + 'bounce/';
    /** The relative path from index.html where all platform images reside. */
    static readonly PATH_IMAGE_PLATFORM: string                 = SettingEngine.PATH_IMAGE_LEVEL + 'platform/';
}
