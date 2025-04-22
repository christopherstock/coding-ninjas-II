/** ********************************************************************************************************************
*   Specifies if this template should start with a random frame instead of frame 0 or use totally random frames.
***********************************************************************************************************************/
export enum RandomFrames
{
    /* No. */
    NO,
    /* Use random start frame instead of frame 0. */
    ONLY_START_FRAME,
    /** Assign random frame on each frame change. */
    ALL_FRAMES,
}
