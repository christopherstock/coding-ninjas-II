import { StringUtil } from '../util/StringUtil';
import { SettingDebug } from './SettingDebug';

/** ********************************************************************************************************************
*   Represents a debug group whose logging can be enabled or disabled.
***********************************************************************************************************************/
export class Debug {
    public static readonly character: Debug     = new Debug(true);
    public static readonly welcome: Debug       = new Debug(true);
    public static readonly init: Debug          = new Debug(false);
    public static readonly canvas: Debug        = new Debug(false);
    public static readonly key: Debug           = new Debug(false);
    public static readonly image: Debug         = new Debug(false);
    public static readonly sound: Debug         = new Debug(true);
    public static readonly pointer: Debug       = new Debug(false);
    public static readonly item: Debug          = new Debug(false);
    public static readonly bot: Debug           = new Debug(false);
    public static readonly engine: Debug        = new Debug(false);
    public static readonly site: Debug          = new Debug(false);
    public static readonly react: Debug         = new Debug(false);

    /** Enable or disable logging for this debug group */
    private             readonly    debugEnabled: boolean            = false;

    /** ****************************************************************************************************************
    *   Constructs a new debug group.
    *
    *   @param  debugEnabled    Flags if this debug group should log messages.
    *******************************************************************************************************************/
    public constructor(debugEnabled: boolean) {
        this.debugEnabled = debugEnabled;
    }

    /** ****************************************************************************************************************
    *   Logs a line of output to the default console. Will only generate output
    *   if the debug for this debug group is enabled.
    *
    *   @param msg The message to log to the default console.
    *******************************************************************************************************************/
    public log(msg: string = ''): void {
        if (SettingDebug.DEBUG_MODE && this.debugEnabled) {
            // eslint-disable-next-line no-console
            console.log('[' + StringUtil.getDateTimeString() + '] ' + msg);
        }
    }
}
