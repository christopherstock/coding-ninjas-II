const moment: any = require('moment');

/** ********************************************************************************************************************
*   Offers static string functionality.
***********************************************************************************************************************/
export class StringUtil {
    /** ****************************************************************************************************************
    *   Returns an array of all found regular expression matches.
    *   The subject will need the 'multiple' modifier for this method to work as expected.
    *   e.g. /[a-z]+/g
    *
    *   @param  subject  The target string to apply the regular expression search on.
    *   @param  regEx    The regular expression.
    *                    This string MUST NOT be enclosed in string quotes!
    *   @return          An array containing all matched results.
    *******************************************************************************************************************/
    public static searchRegEx(subject: string, regEx: RegExp): string[] {
        const results: RegExpMatchArray = regEx.exec(subject);
        const ret: string[] = [];

        if (results !== null) {
            for (const result of results) {
                ret.push(result);
            }
        }

        return ret;
    }

    /** ****************************************************************************************************************
    *   Returns a formatted timestamp of the current system date and time.
    *
    *   @return string A formatted timestamp of the current system date and time.
    *******************************************************************************************************************/
    public static getDateTimeString(): string {
        return new moment().format('DD.MM.YYYY HH:mm:ss');
    }

    /** *************************************************************************************************************
    *   Checks if the target device is a mac.
    *
    *   @return <code>true</code> if the target device is a mac.
    ***************************************************************************************************************/
    public static isMac(): boolean {
        return (/iPad|iPhone|iPod/.test(navigator.userAgent));
    }

    /** *************************************************************************************************************
    *   Checks if the target device is a mac.
    *
    *   @return <code>true</code> if the target device is a mac.
    ***************************************************************************************************************/
    public static isMobile(): boolean {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i,
        ];

        return toMatch.some((toMatchItem: any) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }
}
