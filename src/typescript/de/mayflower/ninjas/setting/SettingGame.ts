/* eslint-disable max-len */

/** ********************************************************************************************************************
*   All adjustments and balancings for the application.
***********************************************************************************************************************/
export class SettingGame
{
    /** The application's internal name. */
    public      static  readonly    TITLE                                       :string                     = (
        'Coding Ninjas II - gifted with second sight, (c) 2023 Mayflower GmbH, v1.0.0'
    );

    /** The distance the player can reach with an attack of his katana. */
    public      static  readonly    PLAYER_ATTACK_RANGE                         :number                     = 60;
    /** The force the player dispenses on  with an attack of his katana. */
    public      static  readonly    PLAYER_ATTACK_DAMAGE                        :number                     = 50;

    /** The player's ticks being paralized on being punched back. */
    public      static  readonly    PUNCH_BACK_TICKS                            :number                     = 75;

    /** Enemy ticks for standing phases. */
    public      static  readonly    ENEMY_TICKS_STANDING_DEFAULT                :number                     = 250;

    /** The number of ticks for the initial blend panel to disappear. */
    public      static  readonly    BLEND_PANEL_TICKS                           :number                     = 100;

    /** The default scale factor for all sprites. */
    public      static  readonly    DEFAULT_SPRITE_SCALE                        :number                     = 1.0;

    /** The minimum width for the site panel. */
    public      static  readonly    SITE_PANEL_MIN_WIDTH                        :number                     = 600;
    /** The maximum width for the site panel. */
    public      static  readonly    SITE_PANEL_MAX_WIDTH                        :number                     = 600;
    /** The maximum height for the site panel. -1 disables the check. */
    public      static  readonly    SITE_PANEL_MAX_HEIGHT                       :number                     = -1;
    /** The duration for showing and hiding the site panel in ms. */
    public      static  readonly    SITE_PANEL_ANIMATION_DURATION               :number                     = 500;
    /** The outer border size for the site panel and all HUD elements in px. */
    public      static  readonly    SITE_PANEL_BORDER_SIZE_OUTER                :number                     = 0;
    /** The inner border size for the inner site panel container. */
    public      static  readonly    SITE_PANEL_BORDER_SIZE_INNER                :number                     = 50;
    /** The inner border size to the top for the inner site panel container. */
    public      static  readonly    SITE_PANEL_BORDER_SIZE_INNER_TOP            :number                     = 25;
}
