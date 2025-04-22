/* eslint-disable max-len */

import {CharacterSpriteSet} from "../game/object/being/CharacterSpriteSet";
import {SpriteTemplateData} from "./SpriteTemplateData";

/** ********************************************************************************************************************
*   This class holds different character sprite combinations.
***********************************************************************************************************************/
export class CharacterSpriteData
{
    /** The character sprite set for the 'Masked Ninja Girl'. */
    public  static  CHARACTER_SPRITE_SET_MASKED_NINJA_GIRL  :CharacterSpriteSet  = new CharacterSpriteSet(
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_STAND_LEFT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_STAND_RIGHT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_WALK_LEFT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_WALK_RIGHT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_GLIDE_LEFT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_GLIDE_RIGHT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_FALL_LEFT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_FALL_RIGHT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_JUMP_LEFT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_JUMP_RIGHT,
        SpriteTemplateData.SPRITE_BLUE_NINJA_DIE_LEFT,
        SpriteTemplateData.SPRITE_BLUE_NINJA_DIE_RIGHT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_ATTACK_LEFT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_ATTACK_RIGHT
    );

    /** The character sprite set for the 'Blue Ninja Guy'. */
    public  static  CHARACTER_SPRITE_SET_BLUE_NINJA     :CharacterSpriteSet  = new CharacterSpriteSet(
        SpriteTemplateData.SPRITE_BLUE_NINJA_STAND_LEFT,
        SpriteTemplateData.SPRITE_BLUE_NINJA_1_STAND_RIGHT,
        SpriteTemplateData.SPRITE_BLUE_NINJA_WALK_LEFT,
        SpriteTemplateData.SPRITE_BLUE_NINJA_1_WALK_RIGHT,
        SpriteTemplateData.SPRITE_BLUE_NINJA_WALK_LEFT,
        SpriteTemplateData.SPRITE_BLUE_NINJA_1_WALK_RIGHT,
        SpriteTemplateData.SPRITE_BLUE_NINJA_STAND_LEFT,
        SpriteTemplateData.SPRITE_BLUE_NINJA_1_STAND_RIGHT,
        SpriteTemplateData.SPRITE_BLUE_NINJA_STAND_LEFT,
        SpriteTemplateData.SPRITE_BLUE_NINJA_1_STAND_RIGHT,
        SpriteTemplateData.SPRITE_BLUE_NINJA_DIE_LEFT,
        SpriteTemplateData.SPRITE_BLUE_NINJA_DIE_RIGHT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_ATTACK_LEFT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_ATTACK_RIGHT
    );

    /** The character sprite set for the 'Red Ninja Girl'. */
    public  static  CHARACTER_SPRITE_SET_RED_NINJA_GIRL     :CharacterSpriteSet  = new CharacterSpriteSet(
        SpriteTemplateData.SPRITE_RED_NINJA_GIRL_STAND_LEFT,
        SpriteTemplateData.SPRITE_RED_NINJA_GIRL_STAND_RIGHT,
        SpriteTemplateData.SPRITE_RED_NINJA_GIRL_WALK_LEFT,
        SpriteTemplateData.SPRITE_RED_NINJA_GIRL_WALK_RIGHT,
        SpriteTemplateData.SPRITE_RED_NINJA_GIRL_STAND_LEFT,
        SpriteTemplateData.SPRITE_RED_NINJA_GIRL_STAND_RIGHT,
        SpriteTemplateData.SPRITE_RED_NINJA_GIRL_STAND_LEFT,
        SpriteTemplateData.SPRITE_RED_NINJA_GIRL_STAND_RIGHT,
        SpriteTemplateData.SPRITE_RED_NINJA_GIRL_STAND_LEFT,
        SpriteTemplateData.SPRITE_RED_NINJA_GIRL_STAND_RIGHT,
        SpriteTemplateData.SPRITE_BLUE_NINJA_DIE_LEFT,
        SpriteTemplateData.SPRITE_BLUE_NINJA_DIE_RIGHT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_ATTACK_LEFT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_ATTACK_RIGHT
    );
}
