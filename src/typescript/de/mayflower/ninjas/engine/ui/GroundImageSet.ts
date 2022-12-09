
/** ****************************************************************************************************************
    *   Represents all different images for one ground set.
    *******************************************************************************************************************/
export class GroundImageSet
{
    /** The image for the solid left tile. */
    public      readonly            solidLeft                           :string             = null;
    /** The image for the solid right tile. */
    public      readonly            solidRight                          :string             = null;
    /** The image for the solid top tile. */
    public      readonly            solidTop                            :string             = null;
    /** The image for the solid bottom tile. */
    public      readonly            solidBottom                         :string             = null;
    /** The image for the solid left top tile. */
    public      readonly            solidLeftTop                        :string             = null;
    /** The image for the solid right top tile. */
    public      readonly            solidRightTop                       :string             = null;
    /** The image for the solid left bottom tile. */
    public      readonly            solidLeftBottom                     :string             = null;
    /** The image for the solid right bottom tile. */
    public      readonly            solidRightBottom                    :string             = null;
    /** The image for the solid center tile. */
    public      readonly            solidCenter                         :string             = null;
    /** The image for the solid ascending top tile. */
    public      readonly            solidAscendingTop                   :string             = null;
    /** The image for the solid descending top tile. */
    public      readonly            solidDescendingTop                  :string             = null;
    /** The image for the solid ascending left top tile. */
    public      readonly            solidAscendingLeftTop               :string             = null;
    /** The image for the solid descending left top tile. */
    public      readonly            solidDescendingLeftTop              :string             = null;
    /** The image for the solid ascending right top tile. */
    public      readonly            solidAscendingRightTop              :string             = null;
    /** The image for the solid descending right top tile. */
    public      readonly            solidDescendingRightTop             :string             = null;
    /** The image for the flying left tile. */
    public      readonly            flyingLeft                          :string             = null;
    /** The image for the flying center tile. */
    public      readonly            flyingCenter                        :string             = null;
    /** The image for the flying right tile. */
    public      readonly            flyingRight                         :string             = null;
    /** The image for the flying ascending left tile. */
    public      readonly            flyingAscendingLeft                 :string             = null;
    /** The image for the flying ascending center tile. */
    public      readonly            flyingAscendingCenter               :string             = null;
    /** The image for the flying ascending right tile. */
    public      readonly            flyingAscendingRight                :string             = null;
    /** The image for the flying descending left tile. */
    public      readonly            flyingDescendingLeft                :string             = null;
    /** The image for the flying descending center tile. */
    public      readonly            flyingDescendingCenter              :string             = null;
    /** The image for the flying descending right tile. */
    public      readonly            flyingDescendingRight               :string             = null;

    /** ************************************************************************************************************
        *   Creates a character sprite set.
        *   @param solidLeft               The image for the solid left tile.
        *   @param solidRight              The image for the solid right tile.
        *   @param solidTop                The image for the solid top tile.
        *   @param solidBottom             The image for the solid bottom tile.
        *   @param solidLeftTop            The image for the solid left top tile.
        *   @param solidRightTop           The image for the solid right top tile.
        *   @param solidLeftBottom         The image for the solid left bottom tile.
        *   @param solidRightBottom        The image for the solid right bottom tile.
        *   @param solidCenter             The image for the solid center tile.
        *   @param solidAscendingTop       The image for the solid ascending top tile.
        *   @param solidDescendingTop      The image for the solid descending top tile.
        *   @param solidAscendingLeftTop   The image for the solid ascending left top tile.
        *   @param solidDescendingLeftTop  The image for the solid descending left top tile.
        *   @param solidAscendingRightTop  The image for the solid ascending right top tile.
        *   @param solidDescendingRightTop The image for the solid descending right top tile.
        *   @param flyingLeft              The image for the flying left tile.
        *   @param flyingCenter            The image for the flying center tile.
        *   @param flyingRight             The image for the flying right tile.
        *   @param flyingAscendingLeft     The image for the flying ascending left tile.
        *   @param flyingAscendingCenter   The image for the flying ascending center tile.
        *   @param flyingAscendingRight    The image for the flying ascending right tile.
        *   @param flyingDescendingLeft    The image for the flying descending left tile.
        *   @param flyingDescendingCenter  The image for the flying descending center tile.
        *   @param flyingDescendingRight   The image for the flying descending right tile.
        ***************************************************************************************************************/
    public constructor
    (
        solidLeft               :string,
        solidRight              :string,
        solidTop                :string,
        solidBottom             :string,
        solidLeftTop            :string,
        solidRightTop           :string,
        solidLeftBottom         :string,
        solidRightBottom        :string,
        solidCenter             :string,
        solidAscendingTop       :string,
        solidDescendingTop      :string,
        solidAscendingLeftTop   :string,
        solidDescendingLeftTop  :string,
        solidAscendingRightTop  :string,
        solidDescendingRightTop :string,
        flyingLeft              :string,
        flyingCenter            :string,
        flyingRight             :string,
        flyingAscendingLeft     :string,
        flyingAscendingCenter   :string,
        flyingAscendingRight    :string,
        flyingDescendingLeft    :string,
        flyingDescendingCenter  :string,
        flyingDescendingRight   :string
    ) {
        this.solidLeft               = solidLeft;
        this.solidRight              = solidRight;
        this.solidTop                = solidTop;
        this.solidBottom             = solidBottom;
        this.solidLeftTop            = solidLeftTop;
        this.solidRightTop           = solidRightTop;
        this.solidLeftBottom         = solidLeftBottom;
        this.solidRightBottom        = solidRightBottom;
        this.solidCenter             = solidCenter;
        this.solidAscendingTop       = solidAscendingTop;
        this.solidDescendingTop      = solidDescendingTop;
        this.solidAscendingLeftTop   = solidAscendingLeftTop;
        this.solidDescendingLeftTop  = solidDescendingLeftTop;
        this.solidAscendingRightTop  = solidAscendingRightTop;
        this.solidDescendingRightTop = solidDescendingRightTop;
        this.flyingLeft              = flyingLeft;
        this.flyingCenter            = flyingCenter;
        this.flyingRight             = flyingRight;
        this.flyingAscendingLeft     = flyingAscendingLeft;
        this.flyingAscendingCenter   = flyingAscendingCenter;
        this.flyingAscendingRight    = flyingAscendingRight;
        this.flyingDescendingLeft    = flyingDescendingLeft;
        this.flyingDescendingCenter  = flyingDescendingCenter;
        this.flyingDescendingRight   = flyingDescendingRight;
    }
}
