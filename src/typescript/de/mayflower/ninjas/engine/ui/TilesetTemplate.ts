
    import * as ninjas from '../../ninjas';

    /** ****************************************************************************************************************
    *   Represents a character.
    *******************************************************************************************************************/
    export class TilesetTemplate
    {
        /** The sprite to use for standing left. */
        public      readonly            spriteStandLeft                     :ninjas.SpriteTemplate              = null;
        /** The sprite to use for standing right. */
        public      readonly            spriteStandRight                    :ninjas.SpriteTemplate              = null;
        /** The sprite to use for walking left. */
        public      readonly            spriteWalkLeft                      :ninjas.SpriteTemplate              = null;
        /** The sprite to use for walking right. */
        public      readonly            spriteWalkRight                     :ninjas.SpriteTemplate              = null;
        /** The sprite to use for gliding left. */
        public      readonly            spriteGlideLeft                     :ninjas.SpriteTemplate              = null;
        /** The sprite to use for gliding right. */
        public      readonly            spriteGlideRight                    :ninjas.SpriteTemplate              = null;
        /** The sprite to use for falling left. */
        public      readonly            spriteFallLeft                      :ninjas.SpriteTemplate              = null;
        /** The sprite to use for falling right. */
        public      readonly            spriteFallRight                     :ninjas.SpriteTemplate              = null;
        /** The sprite to use for jumping left. */
        public      readonly            spriteJumpLeft                      :ninjas.SpriteTemplate              = null;
        /** The sprite to use for jumping right. */
        public      readonly            spriteJumpRight                     :ninjas.SpriteTemplate              = null;
        /** The sprite to use for dying left. */
        public      readonly            spriteDieLeft                       :ninjas.SpriteTemplate              = null;
        /** The sprite to use for dying right. */
        public      readonly            spriteDieRight                      :ninjas.SpriteTemplate              = null;
        /** The sprite to use for dying left. */
        public      readonly            spriteAttackLeft                    :ninjas.SpriteTemplate              = null;
        /** The sprite to use for dying right. */
        public      readonly            spriteAttackRight                   :ninjas.SpriteTemplate              = null;

        /** ************************************************************************************************************
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
        ***************************************************************************************************************/
        public constructor
        (
/*        
            spriteStandLeft   :ninjas.SpriteTemplate,
            spriteStandRight  :ninjas.SpriteTemplate,
            spriteWalkLeft    :ninjas.SpriteTemplate,
            spriteWalkRight   :ninjas.SpriteTemplate,
            spriteGlideLeft   :ninjas.SpriteTemplate,
            spriteGlideRight  :ninjas.SpriteTemplate,
            spriteFallLeft    :ninjas.SpriteTemplate,
            spriteFallRight   :ninjas.SpriteTemplate,
            spriteJumpLeft    :ninjas.SpriteTemplate,
            spriteJumpRight   :ninjas.SpriteTemplate,
            spriteDieLeft     :ninjas.SpriteTemplate,
            spriteDieRight    :ninjas.SpriteTemplate,
            spriteAttackLeft  :ninjas.SpriteTemplate,
            spriteAttackRight :ninjas.SpriteTemplate
*/
        )
        {
/*
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
*/
        }
    }
