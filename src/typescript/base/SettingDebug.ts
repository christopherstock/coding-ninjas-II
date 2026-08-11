import { StringUtil } from '../util/StringUtil';

/** ********************************************************************************************************************
*   All debug settings.
***********************************************************************************************************************/
export class SettingDebug {
    public static readonly DEBUG_MODE: boolean                      = false;

    public static readonly ENABLE_POINTER: boolean                  = StringUtil.isMobile() && !SettingDebug.DEBUG_MODE;

    public static readonly DISABLE_SOUNDS: boolean                  = (true && SettingDebug.DEBUG_MODE);
    public static readonly DISABLE_DARKEN_PANEL: boolean            = (true && SettingDebug.DEBUG_MODE);
    public static readonly DISABLE_FLOATING_STARTUP: boolean        = (true && SettingDebug.DEBUG_MODE);
    public static readonly DISABLE_DELAY_AROUND_PRELOADER: boolean  = (false && SettingDebug.DEBUG_MODE);
    public static readonly DISABLE_PRELOADER_START_BUTTON: boolean  = (true  && SettingDebug.DEBUG_MODE);

    public static readonly DISABLE_SPRITES: boolean                 = (false && SettingDebug.DEBUG_MODE);
    public static readonly ENABLE_BG_FOR_MATTER_BODY: boolean       = (false && SettingDebug.DEBUG_MODE);
    public static readonly ENABLE_MATTER_DEBUG_VIEWS: boolean       = (false && SettingDebug.DEBUG_MODE);
}

/** ********************************************************************************************************************
*   Colors used for debugging purposes.
***********************************************************************************************************************/
export enum DebugColor
{
    COLOR_TRANSPARENT               = 'transparent',

    COLOR_DEBUG_PLAYER              = '#7cd1ee',
    COLOR_DEBUG_BOT                 = '#ff7e68',
    COLOR_DEBUG_MOVABLE             = '#ffbf54',
    COLOR_DEBUG_OBSTACLE            = '#f6ec2d',
    COLOR_DEBUG_SIGSAW              = '#c46c9c',
    COLOR_DEBUG_SIGSAW_JOINT        = '#ba3380',
    COLOR_DEBUG_BOUNCE              = '#d815a9',
    COLOR_DEBUG_BOUNCE_JOINT        = '#e629a2',
    COLOR_DEBUG_ITEM                = '#fcff97',
    COLOR_DEBUG_DECORATION          = '#b5fffd',
    COLOR_DEBUG_SHRINE              = '#adbfff',
    COLOR_DEBUG_SITE_TRIGGER        = '#deffd9',  // 'rgba( 222, 255, 217, 0.25 )',
    COLOR_DEBUG_PLATFORM            = '#d2d2d2',
    COLOR_DEBUG_PLATFORM_FRICTION   = '#d2d2d2',
}
