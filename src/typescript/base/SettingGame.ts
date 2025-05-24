/* eslint-disable max-len */

/** ********************************************************************************************************************
*   All adjustments and balancings for the application.
***********************************************************************************************************************/
export class SettingGame {
    /** The applications internal name. */
    public static readonly TITLE: string                     = (
        'Coding Ninjas II - gifted with second sight, (c) 2025 Mayflower GmbH, v1.0.0-rc'
    );

    public static readonly PLAYER_ATTACK_RANGE: number                          = 60;
    public static readonly BOT_TICKS_STANDING_DEFAULT: number                   = 250;
    public static readonly PUNCH_BACK_TICKS: number                             = 75;
    public static readonly DEFAULT_SPRITE_SCALE: number                         = 1.0;

    public static readonly SITE_PANEL_ANIMATION_DURATION: number                = 2500;
    public static readonly SITE_PANEL_MIN_WIDTH: number                         = 600;
    public static readonly SITE_PANEL_MAX_WIDTH: number                         = 600;
    public static readonly SITE_PANEL_MAX_HEIGHT: number                        = -1;
    public static readonly SITE_PANEL_BORDER_SIZE_OUTER: number                 = 0;
    public static readonly SITE_PANEL_BORDER_SIZE_INNER: number                 = 50;
    public static readonly SITE_PANEL_BORDER_SIZE_INNER_TOP: number             = 25;
}
