/* eslint-disable max-len */

import {SpriteTemplate} from "../engine/ui/SpriteTemplate";
import {ImageData} from "./ImageData";
import {SettingGame} from "../setting/SettingGame";
import {MirrorImage} from "../engine/ui/MirrorImage";
import {LoopSprite} from "../engine/ui/LoopSprite";
import {RandomFrames} from "../engine/ui/RandomFrames";
import {ImageSystem} from "../engine/io/ImageSystem";

/** ********************************************************************************************************************
*   All concrete sprites the game makes use of.
***********************************************************************************************************************/
export class SpriteTemplateData
{
    /** Sprite 'ninja girl stand left'. */
    public      static  SPRITE_MASKED_NINJA_GIRL_STAND_LEFT                :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_1,
            ImageData.IMAGE_MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_2,
            ImageData.IMAGE_MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_3,
            ImageData.IMAGE_MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_4,
            ImageData.IMAGE_MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_5,
            ImageData.IMAGE_MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_6,
            ImageData.IMAGE_MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_7,
            ImageData.IMAGE_MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_8,
            ImageData.IMAGE_MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_9,
            ImageData.IMAGE_MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_10,
        ],
        8,
        MirrorImage.YES,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl stand right'. */
    public      static  SPRITE_MASKED_NINJA_GIRL_STAND_RIGHT               :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_1,
            ImageData.IMAGE_MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_2,
            ImageData.IMAGE_MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_3,
            ImageData.IMAGE_MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_4,
            ImageData.IMAGE_MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_5,
            ImageData.IMAGE_MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_6,
            ImageData.IMAGE_MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_7,
            ImageData.IMAGE_MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_8,
            ImageData.IMAGE_MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_9,
            ImageData.IMAGE_MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_10,
        ],
        8,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl walk left'. */
    public      static  SPRITE_MASKED_NINJA_GIRL_WALK_LEFT                 :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_1,
            ImageData.IMAGE_MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_2,
            ImageData.IMAGE_MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_3,
            ImageData.IMAGE_MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_4,
            ImageData.IMAGE_MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_5,
            ImageData.IMAGE_MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_6,
            ImageData.IMAGE_MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_7,
            ImageData.IMAGE_MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_8,
            ImageData.IMAGE_MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_9,
            ImageData.IMAGE_MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.YES,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl walk right'. */
    public      static  SPRITE_MASKED_NINJA_GIRL_WALK_RIGHT                :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_1,
            ImageData.IMAGE_MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_2,
            ImageData.IMAGE_MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_3,
            ImageData.IMAGE_MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_4,
            ImageData.IMAGE_MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_5,
            ImageData.IMAGE_MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_6,
            ImageData.IMAGE_MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_7,
            ImageData.IMAGE_MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_8,
            ImageData.IMAGE_MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_9,
            ImageData.IMAGE_MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl attack left'. */
    public      static  SPRITE_MASKED_NINJA_GIRL_ATTACK_LEFT                 :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_1,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_2,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_3,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_4,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_5,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_6,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_7,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_8,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_9,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_10,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_11,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_12,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_13,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_14,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_15,
        ],
        1,
        MirrorImage.YES,
        LoopSprite.NO,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl attack right'. */
    public      static  SPRITE_MASKED_NINJA_GIRL_ATTACK_RIGHT                :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_1,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_2,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_3,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_4,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_5,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_6,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_7,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_8,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_9,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_10,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_11,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_12,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_13,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_14,
            ImageData.IMAGE_MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_15,
        ],
        1,
        MirrorImage.NO,
        LoopSprite.NO,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl jump left'. */
    public      static  SPRITE_MASKED_NINJA_GIRL_JUMP_LEFT                 :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_MASKED_NINJA_GIRL_JUMP_RIGHT_FRAME_1,
            ImageData.IMAGE_MASKED_NINJA_GIRL_JUMP_RIGHT_FRAME_2,
            ImageData.IMAGE_MASKED_NINJA_GIRL_JUMP_RIGHT_FRAME_3,
        ],
        8,
        MirrorImage.YES,
        LoopSprite.NO,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl jump right'. */
    public      static  SPRITE_MASKED_NINJA_GIRL_JUMP_RIGHT                :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_MASKED_NINJA_GIRL_JUMP_RIGHT_FRAME_1,
            ImageData.IMAGE_MASKED_NINJA_GIRL_JUMP_RIGHT_FRAME_2,
            ImageData.IMAGE_MASKED_NINJA_GIRL_JUMP_RIGHT_FRAME_3,
        ],
        8,
        MirrorImage.NO,
        LoopSprite.NO,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl fall left'. */
    public      static  SPRITE_MASKED_NINJA_GIRL_FALL_LEFT                 :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_MASKED_NINJA_GIRL_FALL_RIGHT_FRAME_1,
            ImageData.IMAGE_MASKED_NINJA_GIRL_FALL_RIGHT_FRAME_2,
            ImageData.IMAGE_MASKED_NINJA_GIRL_FALL_RIGHT_FRAME_3,
        ],
        8,
        MirrorImage.YES,
        LoopSprite.NO,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl fall right'. */
    public      static  SPRITE_MASKED_NINJA_GIRL_FALL_RIGHT                :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_MASKED_NINJA_GIRL_FALL_RIGHT_FRAME_1,
            ImageData.IMAGE_MASKED_NINJA_GIRL_FALL_RIGHT_FRAME_2,
            ImageData.IMAGE_MASKED_NINJA_GIRL_FALL_RIGHT_FRAME_3,
        ],
        8,
        MirrorImage.NO,
        LoopSprite.NO,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl glide left'. */
    public      static  SPRITE_MASKED_NINJA_GIRL_GLIDE_LEFT                :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_1,
            ImageData.IMAGE_MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_2,
            ImageData.IMAGE_MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_3,
            ImageData.IMAGE_MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_4,
            ImageData.IMAGE_MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_5,
            ImageData.IMAGE_MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_6,
            ImageData.IMAGE_MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_7,
            ImageData.IMAGE_MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_8,
            ImageData.IMAGE_MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_9,
            ImageData.IMAGE_MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_10,
        ],
        8,
        MirrorImage.YES,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl glide right'. */
    public      static  SPRITE_MASKED_NINJA_GIRL_GLIDE_RIGHT               :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_1,
            ImageData.IMAGE_MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_2,
            ImageData.IMAGE_MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_3,
            ImageData.IMAGE_MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_4,
            ImageData.IMAGE_MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_5,
            ImageData.IMAGE_MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_6,
            ImageData.IMAGE_MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_7,
            ImageData.IMAGE_MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_8,
            ImageData.IMAGE_MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_9,
            ImageData.IMAGE_MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_10,
        ],
        8,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'red ninja girl stand left'. */
    public      static  SPRITE_RED_NINJA_GIRL_STAND_LEFT             :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_RED_NINJA_GIRL_STAND_RIGHT_FRAME_1,
            ImageData.IMAGE_RED_NINJA_GIRL_STAND_RIGHT_FRAME_2,
            ImageData.IMAGE_RED_NINJA_GIRL_STAND_RIGHT_FRAME_3,
            ImageData.IMAGE_RED_NINJA_GIRL_STAND_RIGHT_FRAME_4,
            ImageData.IMAGE_RED_NINJA_GIRL_STAND_RIGHT_FRAME_5,
            ImageData.IMAGE_RED_NINJA_GIRL_STAND_RIGHT_FRAME_6,
            ImageData.IMAGE_RED_NINJA_GIRL_STAND_RIGHT_FRAME_7,
            ImageData.IMAGE_RED_NINJA_GIRL_STAND_RIGHT_FRAME_8,
            ImageData.IMAGE_RED_NINJA_GIRL_STAND_RIGHT_FRAME_9,
            ImageData.IMAGE_RED_NINJA_GIRL_STAND_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.YES,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'red ninja girl stand right'. */
    public      static  SPRITE_RED_NINJA_GIRL_STAND_RIGHT            :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_RED_NINJA_GIRL_STAND_RIGHT_FRAME_1,
            ImageData.IMAGE_RED_NINJA_GIRL_STAND_RIGHT_FRAME_2,
            ImageData.IMAGE_RED_NINJA_GIRL_STAND_RIGHT_FRAME_3,
            ImageData.IMAGE_RED_NINJA_GIRL_STAND_RIGHT_FRAME_4,
            ImageData.IMAGE_RED_NINJA_GIRL_STAND_RIGHT_FRAME_5,
            ImageData.IMAGE_RED_NINJA_GIRL_STAND_RIGHT_FRAME_6,
            ImageData.IMAGE_RED_NINJA_GIRL_STAND_RIGHT_FRAME_7,
            ImageData.IMAGE_RED_NINJA_GIRL_STAND_RIGHT_FRAME_8,
            ImageData.IMAGE_RED_NINJA_GIRL_STAND_RIGHT_FRAME_9,
            ImageData.IMAGE_RED_NINJA_GIRL_STAND_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'enemy ninja 1 stand left'. */
    public      static  SPRITE_BLUE_NINJA_STAND_LEFT             :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_BLUE_NINJA_STAND_RIGHT_FRAME_1,
            ImageData.IMAGE_BLUE_NINJA_STAND_RIGHT_FRAME_2,
            ImageData.IMAGE_BLUE_NINJA_STAND_RIGHT_FRAME_3,
            ImageData.IMAGE_BLUE_NINJA_STAND_RIGHT_FRAME_4,
            ImageData.IMAGE_BLUE_NINJA_STAND_RIGHT_FRAME_5,
            ImageData.IMAGE_BLUE_NINJA_STAND_RIGHT_FRAME_6,
            ImageData.IMAGE_BLUE_NINJA_STAND_RIGHT_FRAME_7,
            ImageData.IMAGE_BLUE_NINJA_STAND_RIGHT_FRAME_8,
            ImageData.IMAGE_BLUE_NINJA_STAND_RIGHT_FRAME_9,
            ImageData.IMAGE_BLUE_NINJA_STAND_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.YES,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'enemy ninja 1 stand right'. */
    public      static  SPRITE_BLUE_NINJA_1_STAND_RIGHT            :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_BLUE_NINJA_STAND_RIGHT_FRAME_1,
            ImageData.IMAGE_BLUE_NINJA_STAND_RIGHT_FRAME_2,
            ImageData.IMAGE_BLUE_NINJA_STAND_RIGHT_FRAME_3,
            ImageData.IMAGE_BLUE_NINJA_STAND_RIGHT_FRAME_4,
            ImageData.IMAGE_BLUE_NINJA_STAND_RIGHT_FRAME_5,
            ImageData.IMAGE_BLUE_NINJA_STAND_RIGHT_FRAME_6,
            ImageData.IMAGE_BLUE_NINJA_STAND_RIGHT_FRAME_7,
            ImageData.IMAGE_BLUE_NINJA_STAND_RIGHT_FRAME_8,
            ImageData.IMAGE_BLUE_NINJA_STAND_RIGHT_FRAME_9,
            ImageData.IMAGE_BLUE_NINJA_STAND_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'enemy ninja 1 walk left'. */
    public      static  SPRITE_BLUE_NINJA_WALK_LEFT              :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_BLUE_NINJA_WALK_RIGHT_FRAME_1,
            ImageData.IMAGE_BLUE_NINJA_WALK_RIGHT_FRAME_2,
            ImageData.IMAGE_BLUE_NINJA_WALK_RIGHT_FRAME_3,
            ImageData.IMAGE_BLUE_NINJA_WALK_RIGHT_FRAME_4,
            ImageData.IMAGE_BLUE_NINJA_WALK_RIGHT_FRAME_5,
            ImageData.IMAGE_BLUE_NINJA_WALK_RIGHT_FRAME_6,
            ImageData.IMAGE_BLUE_NINJA_WALK_RIGHT_FRAME_7,
            ImageData.IMAGE_BLUE_NINJA_WALK_RIGHT_FRAME_8,
            ImageData.IMAGE_BLUE_NINJA_WALK_RIGHT_FRAME_9,
            ImageData.IMAGE_BLUE_NINJA_WALK_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.YES,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'enemy ninja 1 walk right'. */
    public      static  SPRITE_BLUE_NINJA_1_WALK_RIGHT             :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_BLUE_NINJA_WALK_RIGHT_FRAME_1,
            ImageData.IMAGE_BLUE_NINJA_WALK_RIGHT_FRAME_2,
            ImageData.IMAGE_BLUE_NINJA_WALK_RIGHT_FRAME_3,
            ImageData.IMAGE_BLUE_NINJA_WALK_RIGHT_FRAME_4,
            ImageData.IMAGE_BLUE_NINJA_WALK_RIGHT_FRAME_5,
            ImageData.IMAGE_BLUE_NINJA_WALK_RIGHT_FRAME_6,
            ImageData.IMAGE_BLUE_NINJA_WALK_RIGHT_FRAME_7,
            ImageData.IMAGE_BLUE_NINJA_WALK_RIGHT_FRAME_8,
            ImageData.IMAGE_BLUE_NINJA_WALK_RIGHT_FRAME_9,
            ImageData.IMAGE_BLUE_NINJA_WALK_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'enemy ninja 1 walk left'. */
    public      static  SPRITE_RED_NINJA_GIRL_WALK_LEFT              :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_RED_NINJA_GIRL_WALK_RIGHT_FRAME_1,
            ImageData.IMAGE_RED_NINJA_GIRL_WALK_RIGHT_FRAME_2,
            ImageData.IMAGE_RED_NINJA_GIRL_WALK_RIGHT_FRAME_3,
            ImageData.IMAGE_RED_NINJA_GIRL_WALK_RIGHT_FRAME_4,
            ImageData.IMAGE_RED_NINJA_GIRL_WALK_RIGHT_FRAME_5,
            ImageData.IMAGE_RED_NINJA_GIRL_WALK_RIGHT_FRAME_6,
            ImageData.IMAGE_RED_NINJA_GIRL_WALK_RIGHT_FRAME_7,
            ImageData.IMAGE_RED_NINJA_GIRL_WALK_RIGHT_FRAME_8,
            ImageData.IMAGE_RED_NINJA_GIRL_WALK_RIGHT_FRAME_9,
            ImageData.IMAGE_RED_NINJA_GIRL_WALK_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.YES,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'enemy ninja 1 walk right'. */
    public      static  SPRITE_RED_NINJA_GIRL_WALK_RIGHT             :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_RED_NINJA_GIRL_WALK_RIGHT_FRAME_1,
            ImageData.IMAGE_RED_NINJA_GIRL_WALK_RIGHT_FRAME_2,
            ImageData.IMAGE_RED_NINJA_GIRL_WALK_RIGHT_FRAME_3,
            ImageData.IMAGE_RED_NINJA_GIRL_WALK_RIGHT_FRAME_4,
            ImageData.IMAGE_RED_NINJA_GIRL_WALK_RIGHT_FRAME_5,
            ImageData.IMAGE_RED_NINJA_GIRL_WALK_RIGHT_FRAME_6,
            ImageData.IMAGE_RED_NINJA_GIRL_WALK_RIGHT_FRAME_7,
            ImageData.IMAGE_RED_NINJA_GIRL_WALK_RIGHT_FRAME_8,
            ImageData.IMAGE_RED_NINJA_GIRL_WALK_RIGHT_FRAME_9,
            ImageData.IMAGE_RED_NINJA_GIRL_WALK_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'enemy ninja 1 die left'. */
    public      static  SPRITE_BLUE_NINJA_DIE_LEFT               :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_BLUE_NINJA_DIE_RIGHT_FRAME_1,
            ImageData.IMAGE_BLUE_NINJA_DIE_RIGHT_FRAME_2,
            ImageData.IMAGE_BLUE_NINJA_DIE_RIGHT_FRAME_3,
            ImageData.IMAGE_BLUE_NINJA_DIE_RIGHT_FRAME_4,
            ImageData.IMAGE_BLUE_NINJA_DIE_RIGHT_FRAME_5,
        ],
        16,
        MirrorImage.YES,
        LoopSprite.NO,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'enemy ninja 1 die right'. */
    public      static  SPRITE_BLUE_NINJA_DIE_RIGHT              :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_BLUE_NINJA_DIE_RIGHT_FRAME_1,
            ImageData.IMAGE_BLUE_NINJA_DIE_RIGHT_FRAME_2,
            ImageData.IMAGE_BLUE_NINJA_DIE_RIGHT_FRAME_3,
            ImageData.IMAGE_BLUE_NINJA_DIE_RIGHT_FRAME_4,
            ImageData.IMAGE_BLUE_NINJA_DIE_RIGHT_FRAME_5,
        ],
        16,
        MirrorImage.NO,
        LoopSprite.NO,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'water top'. */
    public      static  SPRITE_WATER_TOP                            :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_WATER_TOP_FRAME_1,
            ImageData.IMAGE_WATER_TOP_FRAME_2,
            ImageData.IMAGE_WATER_TOP_FRAME_3,
            ImageData.IMAGE_WATER_TOP_FRAME_4,
            ImageData.IMAGE_WATER_TOP_FRAME_5,
            ImageData.IMAGE_WATER_TOP_FRAME_6,
            ImageData.IMAGE_WATER_TOP_FRAME_7,
            ImageData.IMAGE_WATER_TOP_FRAME_8,
        ],
        8,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'grass 1'. */
    public      static  SPRITE_GRASS_1                              :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_GRASS_1_FRAME_1,
            ImageData.IMAGE_GRASS_1_FRAME_2,
            ImageData.IMAGE_GRASS_1_FRAME_3,
            ImageData.IMAGE_GRASS_1_FRAME_4,
            ImageData.IMAGE_GRASS_1_FRAME_5,
            ImageData.IMAGE_GRASS_1_FRAME_6,
            ImageData.IMAGE_GRASS_1_FRAME_7,
            ImageData.IMAGE_GRASS_1_FRAME_8,
            ImageData.IMAGE_GRASS_1_FRAME_9,
            ImageData.IMAGE_GRASS_1_FRAME_10,
            ImageData.IMAGE_GRASS_1_FRAME_11,
            ImageData.IMAGE_GRASS_1_FRAME_12,
        ],
        12,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.ONLY_START_FRAME,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'flame 1 big'. */
    public      static  SPRITE_FLAME_1_BIG                              :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_FLAME_1_FRAME_1,
            ImageData.IMAGE_FLAME_1_FRAME_2,
            ImageData.IMAGE_FLAME_1_FRAME_3,
            ImageData.IMAGE_FLAME_1_FRAME_4,
            ImageData.IMAGE_FLAME_1_FRAME_5,
            ImageData.IMAGE_FLAME_1_FRAME_6,
            ImageData.IMAGE_FLAME_1_FRAME_7,
            ImageData.IMAGE_FLAME_1_FRAME_8,
            ImageData.IMAGE_FLAME_1_FRAME_9,
            ImageData.IMAGE_FLAME_1_FRAME_10,
            ImageData.IMAGE_FLAME_1_FRAME_11,
            ImageData.IMAGE_FLAME_1_FRAME_12,
            ImageData.IMAGE_FLAME_1_FRAME_13,
            ImageData.IMAGE_FLAME_1_FRAME_14,
        ],
        8,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.ALL_FRAMES,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'flame 1 small'. */
    public      static  SPRITE_FLAME_1_SMALL                            :SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.IMAGE_FLAME_1_FRAME_1,
            ImageData.IMAGE_FLAME_1_FRAME_2,
            ImageData.IMAGE_FLAME_1_FRAME_3,
            ImageData.IMAGE_FLAME_1_FRAME_4,
            ImageData.IMAGE_FLAME_1_FRAME_5,
            ImageData.IMAGE_FLAME_1_FRAME_6,
            ImageData.IMAGE_FLAME_1_FRAME_7,
            ImageData.IMAGE_FLAME_1_FRAME_8,
            ImageData.IMAGE_FLAME_1_FRAME_9,
            ImageData.IMAGE_FLAME_1_FRAME_10,
            ImageData.IMAGE_FLAME_1_FRAME_11,
            ImageData.IMAGE_FLAME_1_FRAME_12,
            ImageData.IMAGE_FLAME_1_FRAME_13,
            ImageData.IMAGE_FLAME_1_FRAME_14,
        ],
        8,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.ALL_FRAMES,
        0.7
    );

    /** A reference over all sprite templates. */
    public      static  readonly        ALL_SPRITE_TEMPLATES                        :SpriteTemplate[] =
    [
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_STAND_LEFT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_STAND_RIGHT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_WALK_LEFT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_WALK_RIGHT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_ATTACK_LEFT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_ATTACK_RIGHT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_JUMP_LEFT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_JUMP_RIGHT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_FALL_LEFT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_FALL_RIGHT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_GLIDE_LEFT,
        SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_GLIDE_RIGHT,
        SpriteTemplateData.SPRITE_BLUE_NINJA_STAND_LEFT,
        SpriteTemplateData.SPRITE_BLUE_NINJA_1_STAND_RIGHT,
        SpriteTemplateData.SPRITE_BLUE_NINJA_WALK_LEFT,
        SpriteTemplateData.SPRITE_BLUE_NINJA_1_WALK_RIGHT,
        SpriteTemplateData.SPRITE_BLUE_NINJA_DIE_LEFT,
        SpriteTemplateData.SPRITE_BLUE_NINJA_DIE_RIGHT,
        SpriteTemplateData.SPRITE_RED_NINJA_GIRL_STAND_LEFT,
        SpriteTemplateData.SPRITE_RED_NINJA_GIRL_STAND_RIGHT,
        SpriteTemplateData.SPRITE_RED_NINJA_GIRL_WALK_LEFT,
        SpriteTemplateData.SPRITE_RED_NINJA_GIRL_WALK_RIGHT,
        SpriteTemplateData.SPRITE_WATER_TOP,
        SpriteTemplateData.SPRITE_GRASS_1,
        SpriteTemplateData.SPRITE_FLAME_1_BIG,
        SpriteTemplateData.SPRITE_FLAME_1_SMALL,
    ];

    /** ****************************************************************************************************************
    *   Determines and returns an array of filenames for all images that needs to be mirrored.
    *
    *   @return An array with all filenames of images needing to be mirrored.
    *******************************************************************************************************************/
    public static getAllImagesToMirror() : string[]
    {
        const ret:string[] = [];

        for ( const spriteTemplate of SpriteTemplateData.ALL_SPRITE_TEMPLATES )
        {
            if ( spriteTemplate.mirrored === MirrorImage.YES )
            {
                for ( const image of spriteTemplate.imageIds )
                {
                    ret.push( image );
                }
            }
        }

        return ret;
    }

    /** ****************************************************************************************************************
    *   Assigns the image dimensions of the first frame to all sprite templates.
    *
    *   @param imageSystem The image system to use.
    *******************************************************************************************************************/
    public static assignAllImageSizes( imageSystem:ImageSystem ) : void
    {
        for ( const spriteTemplate of SpriteTemplateData.ALL_SPRITE_TEMPLATES )
        {
            spriteTemplate.assignImageSizes( imageSystem );
        }
    }
}
