import { SpriteTemplate } from '../../../engine/ui/SpriteTemplate';

/** ********************************************************************************************************************
*   Represents a character.
***********************************************************************************************************************/
export class CharacterSpriteSet {
    public readonly spriteStandLeft: SpriteTemplate         = null;
    public readonly spriteStandRight: SpriteTemplate        = null;
    public readonly spriteWalkLeft: SpriteTemplate          = null;
    public readonly spriteWalkRight: SpriteTemplate         = null;
    public readonly spriteGlideLeft: SpriteTemplate         = null;
    public readonly spriteGlideRight: SpriteTemplate        = null;
    public readonly spriteFallLeft: SpriteTemplate          = null;
    public readonly spriteFallRight: SpriteTemplate         = null;
    public readonly spriteJumpLeft: SpriteTemplate          = null;
    public readonly spriteJumpRight: SpriteTemplate         = null;
    public readonly spriteDieLeft: SpriteTemplate           = null;
    public readonly spriteDieRight: SpriteTemplate          = null;
    public readonly spriteAttackLeft: SpriteTemplate        = null;
    public readonly spriteAttackRight: SpriteTemplate       = null;
    public readonly spriteJumpAttackLeft: SpriteTemplate    = null;
    public readonly spriteJumpAttackRight: SpriteTemplate   = null;

    /** ****************************************************************************************************************
    *   Creates a character sprite set.
    *
    *   @param spriteStandLeft       The sprite to use for standing left.
    *   @param spriteStandRight      The sprite to use for standing right.
    *   @param spriteWalkLeft        The sprite to use for walking left.
    *   @param spriteWalkRight       The sprite to use for walking right.
    *   @param spriteGlideLeft       The sprite to use for gliding left.
    *   @param spriteGlideRight      The sprite to use for gliding right.
    *   @param spriteFallLeft        The sprite to use for falling left.
    *   @param spriteFallRight       The sprite to use for falling right.
    *   @param spriteJumpLeft        The sprite to use for jumping left.
    *   @param spriteJumpRight       The sprite to use for jumping right.
    *   @param spriteDieLeft         The sprite to use for dying left.
    *   @param spriteDieRight        The sprite to use for dying right.
    *   @param spriteAttackLeft      The sprite to use for attacking left.
    *   @param spriteAttackRight     The sprite to use for attacking right.
    *   @param spriteJumpAttackLeft  The sprite to use for jump attacking left.
    *   @param spriteJumpAttackRight The sprite to use for jump attacking right.
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
        spriteAttackRight: SpriteTemplate,
        spriteJumpAttackLeft: SpriteTemplate,
        spriteJumpAttackRight: SpriteTemplate
    ) {
        this.spriteStandLeft       = spriteStandLeft;
        this.spriteStandRight      = spriteStandRight;
        this.spriteWalkLeft        = spriteWalkLeft;
        this.spriteWalkRight       = spriteWalkRight;
        this.spriteGlideLeft       = spriteGlideLeft;
        this.spriteGlideRight      = spriteGlideRight;
        this.spriteFallLeft        = spriteFallLeft;
        this.spriteFallRight       = spriteFallRight;
        this.spriteJumpLeft        = spriteJumpLeft;
        this.spriteJumpRight       = spriteJumpRight;
        this.spriteDieLeft         = spriteDieLeft;
        this.spriteDieRight        = spriteDieRight;
        this.spriteAttackLeft      = spriteAttackLeft;
        this.spriteAttackRight     = spriteAttackRight;
        this.spriteJumpAttackLeft  = spriteJumpAttackLeft;
        this.spriteJumpAttackRight = spriteJumpAttackRight;
    }
}
