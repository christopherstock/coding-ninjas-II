import { StringUtil } from '../util/StringUtil';
import { SettingDebug } from './SettingDebug';

/** ********************************************************************************************************************
*   Represents a debug group whose logging can be enabled or disabled.
***********************************************************************************************************************/
export class DebugLog {
    static readonly welcome: DebugLog           = new DebugLog(true);

    static readonly sound: DebugLog             = new DebugLog(false);
    static readonly init: DebugLog              = new DebugLog(false);
    static readonly image: DebugLog             = new DebugLog(false);
    static readonly character: DebugLog         = new DebugLog(false);
    static readonly canvas: DebugLog            = new DebugLog(false);
    static readonly key: DebugLog               = new DebugLog(false);
    static readonly pointer: DebugLog           = new DebugLog(false);
    static readonly item: DebugLog              = new DebugLog(false);
    static readonly bot: DebugLog               = new DebugLog(false);
    static readonly engine: DebugLog            = new DebugLog(false);
    static readonly site: DebugLog              = new DebugLog(false);
    static readonly react: DebugLog             = new DebugLog(false);

    private readonly loggingEnabled: boolean    = false;

    /** ****************************************************************************************************************
    *   Constructs a new debug group.
    *
    *   @param  debugEnabled    Flags if this debug group should log messages.
    *******************************************************************************************************************/
    public constructor(debugEnabled: boolean) {
        this.loggingEnabled = debugEnabled;
    }

    /** ****************************************************************************************************************
    *   Logs a line of output to the default console. Will only generate output
    *   if the debug for this debug group is enabled.
    *
    *   @param msg The message to log to the default console.
    *******************************************************************************************************************/
    public log(msg: string = ''): void {
        if (SettingDebug.DEBUG_MODE && this.loggingEnabled) {
            // eslint-disable-next-line no-console
            console.log('[' + StringUtil.getDateTimeString() + '] ' + msg);
        }
    }
}
