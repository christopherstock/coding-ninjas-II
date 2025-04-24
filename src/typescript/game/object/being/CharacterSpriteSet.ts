import { SpriteTemplate } from '../../../engine/ui/SpriteTemplate';

/** ********************************************************************************************************************
*   Represents a character.
***********************************************************************************************************************/
export class CharacterSpriteSet {
    /** The sprite to use for standing left. */
    public readonly spriteStandLeft: SpriteTemplate         = null;
    /** The sprite to use for standing right. */
    public readonly spriteStandRight: SpriteTemplate        = null;
    /** The sprite to use for walking left. */
    public readonly spriteWalkLeft: SpriteTemplate          = null;
    /** The sprite to use for walking right. */
    public readonly spriteWalkRight: SpriteTemplate         = null;
    /** The sprite to use for gliding left. */
    public readonly spriteGlideLeft: SpriteTemplate         = null;
    /** The sprite to use for gliding right. */
    public readonly spriteGlideRight: SpriteTemplate        = null;
    /** The sprite to use for falling left. */
    public readonly spriteFallLeft: SpriteTemplate          = null;
    /** The sprite to use for falling right. */
    public readonly spriteFallRight: SpriteTemplate         = null;
    /** The sprite to use for jumping left. */
    public readonly spriteJumpLeft: SpriteTemplate          = null;
    /** The sprite to use for jumping right. */
    public readonly spriteJumpRight: SpriteTemplate         = null;
    /** The sprite to use for dying left. */
    public readonly spriteDieLeft: SpriteTemplate           = null;
    /** The sprite to use for dying right. */
    public readonly spriteDieRight: SpriteTemplate          = null;
    /** The sprite to use for dying left. */
    public readonly spriteAttackLeft: SpriteTemplate        = null;
    /** The sprite to use for dying right. */
    public readonly spriteAttackRight: SpriteTemplate       = null;

    /** ****************************************************************************************************************
    *   Creates a character sprite set.
    *
    *   @param spriteStandLeft   The sprite to use for standing left.
    *   @param spriteStandRight  The sprite to use for standing right.
    *   @param spriteWalkLeft    The sprite to use for walking left.
    *   @param spriteWalkRight   The sprite to use for walking right.
    *   @param spriteGlideLeft   The sprite to use for gliding left.
    *   @param spriteGlideRight  The sprite to use for gliding right.
    *   @param spriteFallLeft    The sprite to use for falling left.
    *   @param spriteFallRight   The sprite to use for falling right.
    *   @param spriteJumpLeft    The sprite to use for jumping left.
    *   @param spriteJumpRight   The sprite to use for jumping right.
    *   @param spriteDieLeft     The sprite to use for dying left.
    *   @param spriteDieRight    The sprite to use for dying right.
    *   @param spriteAttackLeft  The sprite to use for attacking left.
    *   @param spriteAttackRight The sprite to use for attacking right.
    *******************************************************************************************************************/
    public constructor(
        spriteStandLeft: SpriteTemplate,
        spriteStandRight: SpriteTemplate,
        spriteWalkLeft: SpriteTemplate,
        spriteWalkRight: SpriteTemplate,
        spriteGlideLeft: SpriteTemplate,
        spriteGlideRight: SpriteTemplate,
        spriteFallLeft: SpriteTemplate,
        spriteFallRight: SpriteTemplate,
        spriteJumpLeft: SpriteTemplate,
        spriteJumpRight: SpriteTemplate,
        spriteDieLeft: SpriteTemplate,
        spriteDieRight: SpriteTemplate,
        spriteAttackLeft: SpriteTemplate,
        spriteAttackRight: SpriteTemplate
    ) {
        this.spriteStandLeft   = spriteStandLeft;
        this.spriteStandRight  = spriteStandRight;
        this.spriteWalkLeft    = spriteWalkLeft;
        this.spriteWalkRight   = spriteWalkRight;
        this.spriteGlideLeft   = spriteGlideLeft;
        this.spriteGlideRight  = spriteGlideRight;
        this.spriteFallLeft    = spriteFallLeft;
        this.spriteFallRight   = spriteFallRight;
        this.spriteJumpLeft    = spriteJumpLeft;
        this.spriteJumpRight   = spriteJumpRight;
        this.spriteDieLeft     = spriteDieLeft;
        this.spriteDieRight    = spriteDieRight;
        this.spriteAttackLeft  = spriteAttackLeft;
        this.spriteAttackRight = spriteAttackRight;
    }
}
