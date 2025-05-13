/* eslint-disable max-len */

/** ********************************************************************************************************************
*   All settings for the game engine.
***********************************************************************************************************************/
export class SettingEngine {
    static readonly CANVAS_MIN_WIDTH: number                    = 800;
    static readonly CANVAS_MIN_HEIGHT: number                   = 600;
    static readonly NO_CANVAS_SCALING: boolean                  = true;

    static readonly PRELOADER_DELAY: number                     = 250;

    static readonly DARKEN_PANEL_TICKS_DOOR_SWITCH: number      = 50;
    static readonly DARKEN_PANEL_TICKS_STARTUP: number          = 250;
    static readonly ENGINE_SLOW_MOTION_TICKS: number            = 0; // 150;

    static readonly DARKEN_IMAGES_FOR_HURT_OBJECTS: boolean     = false;

    static readonly COLOR_BG_MATTER_JS_CSS: string              = '#000000';
    static readonly COLOR_BG_PRELOADER_CSS: string              = '#000000';
    static readonly COLOR_PRIMARY_CSS: string                   = '#b42157';

    static readonly CENTER_CAMERA_X_ON_PANELS: boolean          = true;
    static readonly CAMERA_RATIO_X: number                      = 0.4;
    static readonly CAMERA_RATIO_Y: number                      = 0.6;
    static readonly CAMERA_MOVING_SPEED_X: number               = 0.1;
    static readonly CAMERA_MOVING_SPEED_Y: number               = 0.05;
    static readonly CAMERA_MOVING_MINIMUM: number               = 0.05;
    static readonly CAMERA_MOVING_MAXIMUM: number               = 20.0;

    static readonly PATH_RESOURCES: string                      = 'res/';
    static readonly PATH_SOUND: string                          = SettingEngine.PATH_RESOURCES + 'sound/';
    static readonly PATH_IMAGE: string                          = SettingEngine.PATH_RESOURCES + 'image/';
    static readonly PATH_IMAGE_LEVEL: string                    = SettingEngine.PATH_IMAGE + 'level/';
    static readonly PATH_IMAGE_LEVEL_BG: string                 = SettingEngine.PATH_IMAGE_LEVEL + 'bg/';
    static readonly PATH_IMAGE_LEVEL_TILE: string               = SettingEngine.PATH_IMAGE_LEVEL + 'tile/';
    static readonly PATH_IMAGE_LEVEL_MOVABLE: string            = SettingEngine.PATH_IMAGE_LEVEL + 'movable/';
    static readonly PATH_IMAGE_LEVEL_PICKABLE: string           = SettingEngine.PATH_IMAGE_LEVEL + 'pickable/';
    static readonly PATH_IMAGE_LEVEL_DECO: string               = SettingEngine.PATH_IMAGE_LEVEL + 'deco/';
    static readonly PATH_IMAGE_LEVEL_CHARACTER: string          = SettingEngine.PATH_IMAGE_LEVEL + 'character/';
    static readonly PATH_IMAGE_SITE_PANEL: string               = SettingEngine.PATH_IMAGE + 'sitePanel/';
    static readonly PATH_IMAGE_PRELOADER: string                = SettingEngine.PATH_IMAGE + 'preloader/';
    static readonly PATH_IMAGE_SIGSAW: string                   = SettingEngine.PATH_IMAGE_LEVEL + 'sigsaw/';
    static readonly PATH_IMAGE_BOUNCE: string                   = SettingEngine.PATH_IMAGE_LEVEL + 'bounce/';
    static readonly PATH_IMAGE_PLATFORM: string                 = SettingEngine.PATH_IMAGE_LEVEL + 'platform/';
}
