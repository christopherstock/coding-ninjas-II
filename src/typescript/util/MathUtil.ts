/** ********************************************************************************************************************
*   Offers additional mathematical functionality.
***********************************************************************************************************************/
export class MathUtil {
    /** ****************************************************************************************************************
    *   Converts angles to radians.
    *
    *   @param  angle   The angle in degrees.
    *   @return         The specified angle in radians.
    *******************************************************************************************************************/
    public static angleToRad(angle: number): number {
        return (angle * Math.PI / 180.0);
    }

    /** ****************************************************************************************************************
    *   Returns a random integer between given mininum and maximum.
    *
    *   @param min
    *   @param max
    *   @return {number}
    *******************************************************************************************************************/
    public static getRandomInt(min: number, max: number): number {
        return Math.floor((Math.random() * (max + 1 - min)) + min);
    }
}
