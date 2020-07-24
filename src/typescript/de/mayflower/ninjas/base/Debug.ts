
    import * as ninjas from '../ninjas';

    /** ****************************************************************************************************************
    *   Represents a debug group whose logging can be enabled or disabled.
    *******************************************************************************************************************/
    export class Debug
    {
        /** Debugs the init / preloading system. */
        public      static  readonly    init            :Debug              = new Debug( true  );
        /** Debugs canvas events. */
        public      static  readonly    canvas          :Debug              = new Debug( true  );

        /** Debugs the key system. */
        public      static  readonly    key             :Debug              = new Debug( false  );
        /** Debugs the image system. */
        public      static  readonly    image           :Debug              = new Debug( false );
        /** Debugs the sound system. */
        public      static  readonly    sound           :Debug              = new Debug( false );
        /** Debugs the pointer system. */
        public      static  readonly    pointer         :Debug              = new Debug( false );
        /** Debugs the pickable game items. */
        public      static  readonly    item            :Debug              = new Debug( false );
        /** Debugs character events. */
        public      static  readonly    character       :Debug              = new Debug( false );
        /** Debugs enemy events. */
        public      static  readonly    enemy           :Debug              = new Debug( false );
        /** Debugs site events. */
        public      static  readonly    site            :Debug              = new Debug( false );
        /** Debugs react events. */
        public      static  readonly    react           :Debug              = new Debug( false );

        /** The flag that enables or disables logging for this debug group. */
        private             readonly    debugEnabled    :boolean            = false;

        /** ************************************************************************************************************
        *   Constructs a new debug group.
        *
        *   @param  debugEnabled    Flags if this debug group should log messages.
        ***************************************************************************************************************/
        public constructor( debugEnabled:boolean )
        {
            this.debugEnabled = debugEnabled;
        }

        /** ************************************************************************************************************
        *   Logs a line of output to the default console. Will only generate output
        *   if the debug for this debug group is enabled.
        *
        *   @param msg The message to log to the default console.
        ***************************************************************************************************************/
        public log( msg:string = '' ):void
        {
            if ( ninjas.SettingDebug.DEBUG_MODE && this.debugEnabled )
            {
                // eslint-disable-next-line no-console
                console.log( '[' + ninjas.StringUtil.getDateTimeString() + '] ' + msg );
            }
        }
    }
