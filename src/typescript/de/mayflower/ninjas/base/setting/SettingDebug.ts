
    /* eslint-disable max-len */

    /** ****************************************************************************************************************
    *   All debug settings.
    *******************************************************************************************************************/
    export class SettingDebug
    {
        /** The global debug switch. */
        public  static  readonly    DEBUG_MODE                              :boolean                    = true;

        // noinspection PointlessBooleanExpressionJS
        /** Enable color bg for all matter sprites. */
        public  static  readonly    BG_FOR_MATTER_BODY                      :boolean                    = ( false && SettingDebug.DEBUG_MODE );

        // noinspection PointlessBooleanExpressionJS
        /** No delay after preloader if enabled. */
        public  static  readonly    NO_DELAY_AROUND_PRELOADER               :boolean                    = ( false && SettingDebug.DEBUG_MODE );

        // noinspection PointlessBooleanExpressionJS
        /** Disables all sprites. */
        public  static  readonly    DISABLE_SPRITES                         :boolean                    = ( false && SettingDebug.DEBUG_MODE );
        // noinspection PointlessBooleanExpressionJS
        /** Disables all sounds. */
        public  static  readonly    DISABLE_SOUNDS                          :boolean                    = ( true && SettingDebug.DEBUG_MODE );
        // noinspection PointlessBooleanExpressionJS
        /** Disables the initial blend panel. */
        public  static  readonly    DISABLE_BLEND_PANEL                     :boolean                    = ( true && SettingDebug.DEBUG_MODE );
        // noinspection PointlessBooleanExpressionJS
        /** Disables pointer controls. */
        public  static  readonly    DISABLE_POINTER                         :boolean                    = ( true && SettingDebug.DEBUG_MODE );
        // noinspection PointlessBooleanExpressionJS
        /** Shows Matter.js indicators. */
        public  static  readonly    MATTERJS_DEBUG_VIEWS                    :boolean                    = ( false && SettingDebug.DEBUG_MODE );
    }

    /** ****************************************************************************************************************
    *   Colors used for debugging purposes.
    *******************************************************************************************************************/
    export enum DebugColor
    {
        /** Transparent debug color. */
        COLOR_TRANSPARENT               = 'transparent',

        /** The debug color for the player block. */
        COLOR_DEBUG_PLAYER              = '#7cd1ee',
        /** The debug color for the enemy block. */
        COLOR_DEBUG_ENEMY               = '#ff7e68',
        /** The debug color for a box. */
        COLOR_DEBUG_MOVABLE             = '#ffbf54',
        /** The debug color for an obstacle. */
        COLOR_DEBUG_OBSTACLE            = '#f6ec2d',
        /** The debug color for a sigsaw. */
        COLOR_DEBUG_SIGSAW              = '#c46c9c',
        /** The debug color for a sigsaw joint. */
        COLOR_DEBUG_SIGSAW_JOINT        = '#ba3380',
        /** The debug color for a bounce. */
        COLOR_DEBUG_BOUNCE              = '#d815a9',
        /** The debug color for a bounce joint. */
        COLOR_DEBUG_BOUNCE_JOINT        = '#e629a2',
        /** The debug color for the item. */
        COLOR_DEBUG_ITEM                = '#fcff97',
        /** The debug color for a decoration. */
        COLOR_DEBUG_DECORATION          = '#b5fffd',
        /** The debug color for a shrine. */
        COLOR_DEBUG_SHRINE              = '#adbfff',
        /** The debug color for a site trigger. */
        COLOR_DEBUG_SITE_TRIGGER        = '#deffd9',  // 'rgba( 222, 255, 217, 0.25 )',
        /** The debug color for a platform. */
        COLOR_DEBUG_PLATFORM            = '#d2d2d2',
    }
