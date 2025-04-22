/* eslint-disable max-len */

import { SpriteTemplate } from '../engine/ui/SpriteTemplate';
import { SettingGame } from '../setting/SettingGame';
import { MirrorImage } from '../engine/ui/MirrorImage';
import { LoopSprite } from '../engine/ui/LoopSprite';
import { RandomFrames } from '../engine/ui/RandomFrames';
import { ImageSystem } from '../engine/io/ImageSystem';
import { ImageData } from './ImageData';

/** ********************************************************************************************************************
*   All concrete sprites the game makes use of.
***********************************************************************************************************************/
export class SpriteTemplateData {
    /** Sprite 'ninja girl stand left'. */
    public      static  MASKED_NINJA_GIRL_STAND_LEFT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_1,
            ImageData.MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_2,
            ImageData.MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_3,
            ImageData.MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_4,
            ImageData.MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_5,
            ImageData.MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_6,
            ImageData.MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_7,
            ImageData.MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_8,
            ImageData.MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_9,
            ImageData.MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_10,
        ],
        8,
        MirrorImage.YES,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl stand right'. */
    public      static  MASKED_NINJA_GIRL_STAND_RIGHT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_1,
            ImageData.MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_2,
            ImageData.MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_3,
            ImageData.MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_4,
            ImageData.MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_5,
            ImageData.MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_6,
            ImageData.MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_7,
            ImageData.MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_8,
            ImageData.MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_9,
            ImageData.MASKED_NINJA_GIRL_STAND_RIGHT_FRAME_10,
        ],
        8,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl walk left'. */
    public      static  MASKED_NINJA_GIRL_WALK_LEFT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_1,
            ImageData.MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_2,
            ImageData.MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_3,
            ImageData.MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_4,
            ImageData.MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_5,
            ImageData.MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_6,
            ImageData.MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_7,
            ImageData.MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_8,
            ImageData.MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_9,
            ImageData.MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.YES,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl walk right'. */
    public      static  MASKED_NINJA_GIRL_WALK_RIGHT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_1,
            ImageData.MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_2,
            ImageData.MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_3,
            ImageData.MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_4,
            ImageData.MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_5,
            ImageData.MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_6,
            ImageData.MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_7,
            ImageData.MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_8,
            ImageData.MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_9,
            ImageData.MASKED_NINJA_GIRL_WALK_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl attack left'. */
    public      static  MASKED_NINJA_GIRL_ATTACK_LEFT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_1,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_2,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_3,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_4,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_5,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_6,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_7,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_8,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_9,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_10,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_11,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_12,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_13,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_14,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_15,
        ],
        1,
        MirrorImage.YES,
        LoopSprite.NO,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl attack right'. */
    public      static  MASKED_NINJA_GIRL_ATTACK_RIGHT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_1,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_2,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_3,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_4,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_5,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_6,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_7,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_8,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_9,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_10,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_11,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_12,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_13,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_14,
            ImageData.MASKED_NINJA_GIRL_ATTACK_RIGHT_FRAME_15,
        ],
        1,
        MirrorImage.NO,
        LoopSprite.NO,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl jump left'. */
    public      static  MASKED_NINJA_GIRL_JUMP_LEFT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.MASKED_NINJA_GIRL_JUMP_RIGHT_FRAME_1,
            ImageData.MASKED_NINJA_GIRL_JUMP_RIGHT_FRAME_2,
            ImageData.MASKED_NINJA_GIRL_JUMP_RIGHT_FRAME_3,
        ],
        8,
        MirrorImage.YES,
        LoopSprite.NO,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl jump right'. */
    public      static  MASKED_NINJA_GIRL_JUMP_RIGHT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.MASKED_NINJA_GIRL_JUMP_RIGHT_FRAME_1,
            ImageData.MASKED_NINJA_GIRL_JUMP_RIGHT_FRAME_2,
            ImageData.MASKED_NINJA_GIRL_JUMP_RIGHT_FRAME_3,
        ],
        8,
        MirrorImage.NO,
        LoopSprite.NO,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl fall left'. */
    public      static  MASKED_NINJA_GIRL_FALL_LEFT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.MASKED_NINJA_GIRL_FALL_RIGHT_FRAME_1,
            ImageData.MASKED_NINJA_GIRL_FALL_RIGHT_FRAME_2,
            ImageData.MASKED_NINJA_GIRL_FALL_RIGHT_FRAME_3,
        ],
        8,
        MirrorImage.YES,
        LoopSprite.NO,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl fall right'. */
    public      static  MASKED_NINJA_GIRL_FALL_RIGHT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.MASKED_NINJA_GIRL_FALL_RIGHT_FRAME_1,
            ImageData.MASKED_NINJA_GIRL_FALL_RIGHT_FRAME_2,
            ImageData.MASKED_NINJA_GIRL_FALL_RIGHT_FRAME_3,
        ],
        8,
        MirrorImage.NO,
        LoopSprite.NO,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl glide left'. */
    public      static  MASKED_NINJA_GIRL_GLIDE_LEFT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_1,
            ImageData.MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_2,
            ImageData.MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_3,
            ImageData.MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_4,
            ImageData.MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_5,
            ImageData.MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_6,
            ImageData.MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_7,
            ImageData.MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_8,
            ImageData.MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_9,
            ImageData.MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_10,
        ],
        8,
        MirrorImage.YES,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'ninja girl glide right'. */
    public      static  MASKED_NINJA_GIRL_GLIDE_RIGHT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_1,
            ImageData.MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_2,
            ImageData.MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_3,
            ImageData.MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_4,
            ImageData.MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_5,
            ImageData.MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_6,
            ImageData.MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_7,
            ImageData.MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_8,
            ImageData.MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_9,
            ImageData.MASKED_NINJA_GIRL_GLIDE_RIGHT_FRAME_10,
        ],
        8,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'red ninja girl stand left'. */
    public      static  RED_NINJA_GIRL_STAND_LEFT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.RED_NINJA_GIRL_STAND_RIGHT_FRAME_1,
            ImageData.RED_NINJA_GIRL_STAND_RIGHT_FRAME_2,
            ImageData.RED_NINJA_GIRL_STAND_RIGHT_FRAME_3,
            ImageData.RED_NINJA_GIRL_STAND_RIGHT_FRAME_4,
            ImageData.RED_NINJA_GIRL_STAND_RIGHT_FRAME_5,
            ImageData.RED_NINJA_GIRL_STAND_RIGHT_FRAME_6,
            ImageData.RED_NINJA_GIRL_STAND_RIGHT_FRAME_7,
            ImageData.RED_NINJA_GIRL_STAND_RIGHT_FRAME_8,
            ImageData.RED_NINJA_GIRL_STAND_RIGHT_FRAME_9,
            ImageData.RED_NINJA_GIRL_STAND_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.YES,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'red ninja girl stand right'. */
    public      static  RED_NINJA_GIRL_STAND_RIGHT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.RED_NINJA_GIRL_STAND_RIGHT_FRAME_1,
            ImageData.RED_NINJA_GIRL_STAND_RIGHT_FRAME_2,
            ImageData.RED_NINJA_GIRL_STAND_RIGHT_FRAME_3,
            ImageData.RED_NINJA_GIRL_STAND_RIGHT_FRAME_4,
            ImageData.RED_NINJA_GIRL_STAND_RIGHT_FRAME_5,
            ImageData.RED_NINJA_GIRL_STAND_RIGHT_FRAME_6,
            ImageData.RED_NINJA_GIRL_STAND_RIGHT_FRAME_7,
            ImageData.RED_NINJA_GIRL_STAND_RIGHT_FRAME_8,
            ImageData.RED_NINJA_GIRL_STAND_RIGHT_FRAME_9,
            ImageData.RED_NINJA_GIRL_STAND_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    public      static  MASKED_NINJA_GUY_STAND_LEFT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.MASKED_NINJA_GUY_STAND_RIGHT_FRAME_1,
            ImageData.MASKED_NINJA_GUY_STAND_RIGHT_FRAME_2,
            ImageData.MASKED_NINJA_GUY_STAND_RIGHT_FRAME_3,
            ImageData.MASKED_NINJA_GUY_STAND_RIGHT_FRAME_4,
            ImageData.MASKED_NINJA_GUY_STAND_RIGHT_FRAME_5,
            ImageData.MASKED_NINJA_GUY_STAND_RIGHT_FRAME_6,
            ImageData.MASKED_NINJA_GUY_STAND_RIGHT_FRAME_7,
            ImageData.MASKED_NINJA_GUY_STAND_RIGHT_FRAME_8,
            ImageData.MASKED_NINJA_GUY_STAND_RIGHT_FRAME_9,
            ImageData.MASKED_NINJA_GUY_STAND_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.YES,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'red ninja girl stand right'. */
    public      static  MASKED_NINJA_GUY_STAND_RIGHT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.MASKED_NINJA_GUY_STAND_RIGHT_FRAME_1,
            ImageData.MASKED_NINJA_GUY_STAND_RIGHT_FRAME_2,
            ImageData.MASKED_NINJA_GUY_STAND_RIGHT_FRAME_3,
            ImageData.MASKED_NINJA_GUY_STAND_RIGHT_FRAME_4,
            ImageData.MASKED_NINJA_GUY_STAND_RIGHT_FRAME_5,
            ImageData.MASKED_NINJA_GUY_STAND_RIGHT_FRAME_6,
            ImageData.MASKED_NINJA_GUY_STAND_RIGHT_FRAME_7,
            ImageData.MASKED_NINJA_GUY_STAND_RIGHT_FRAME_8,
            ImageData.MASKED_NINJA_GUY_STAND_RIGHT_FRAME_9,
            ImageData.MASKED_NINJA_GUY_STAND_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'blue ninja guy stand left'. */
    public      static  BLUE_NINJA_GUY_STAND_LEFT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.BLUE_NINJA_GUY_STAND_RIGHT_FRAME_1,
            ImageData.BLUE_NINJA_GUY_STAND_RIGHT_FRAME_2,
            ImageData.BLUE_NINJA_GUY_STAND_RIGHT_FRAME_3,
            ImageData.BLUE_NINJA_GUY_STAND_RIGHT_FRAME_4,
            ImageData.BLUE_NINJA_GUY_STAND_RIGHT_FRAME_5,
            ImageData.BLUE_NINJA_GUY_STAND_RIGHT_FRAME_6,
            ImageData.BLUE_NINJA_GUY_STAND_RIGHT_FRAME_7,
            ImageData.BLUE_NINJA_GUY_STAND_RIGHT_FRAME_8,
            ImageData.BLUE_NINJA_GUY_STAND_RIGHT_FRAME_9,
            ImageData.BLUE_NINJA_GUY_STAND_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.YES,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'enemy ninja 1 stand right'. */
    public      static  BLUE_NINJA_GUY_STAND_RIGHT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.BLUE_NINJA_GUY_STAND_RIGHT_FRAME_1,
            ImageData.BLUE_NINJA_GUY_STAND_RIGHT_FRAME_2,
            ImageData.BLUE_NINJA_GUY_STAND_RIGHT_FRAME_3,
            ImageData.BLUE_NINJA_GUY_STAND_RIGHT_FRAME_4,
            ImageData.BLUE_NINJA_GUY_STAND_RIGHT_FRAME_5,
            ImageData.BLUE_NINJA_GUY_STAND_RIGHT_FRAME_6,
            ImageData.BLUE_NINJA_GUY_STAND_RIGHT_FRAME_7,
            ImageData.BLUE_NINJA_GUY_STAND_RIGHT_FRAME_8,
            ImageData.BLUE_NINJA_GUY_STAND_RIGHT_FRAME_9,
            ImageData.BLUE_NINJA_GUY_STAND_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'enemy ninja 1 walk left'. */
    public      static  BLUE_NINJA_GUY_WALK_LEFT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.BLUE_NINJA_GUY_WALK_RIGHT_FRAME_1,
            ImageData.BLUE_NINJA_GUY_WALK_RIGHT_FRAME_2,
            ImageData.BLUE_NINJA_GUY_WALK_RIGHT_FRAME_3,
            ImageData.BLUE_NINJA_GUY_WALK_RIGHT_FRAME_4,
            ImageData.BLUE_NINJA_GUY_WALK_RIGHT_FRAME_5,
            ImageData.BLUE_NINJA_GUY_WALK_RIGHT_FRAME_6,
            ImageData.BLUE_NINJA_GUY_WALK_RIGHT_FRAME_7,
            ImageData.BLUE_NINJA_GUY_WALK_RIGHT_FRAME_8,
            ImageData.BLUE_NINJA_GUY_WALK_RIGHT_FRAME_9,
            ImageData.BLUE_NINJA_GUY_WALK_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.YES,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'enemy ninja 1 walk right'. */
    public      static  BLUE_NINJA_GUY_WALK_RIGHT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.BLUE_NINJA_GUY_WALK_RIGHT_FRAME_1,
            ImageData.BLUE_NINJA_GUY_WALK_RIGHT_FRAME_2,
            ImageData.BLUE_NINJA_GUY_WALK_RIGHT_FRAME_3,
            ImageData.BLUE_NINJA_GUY_WALK_RIGHT_FRAME_4,
            ImageData.BLUE_NINJA_GUY_WALK_RIGHT_FRAME_5,
            ImageData.BLUE_NINJA_GUY_WALK_RIGHT_FRAME_6,
            ImageData.BLUE_NINJA_GUY_WALK_RIGHT_FRAME_7,
            ImageData.BLUE_NINJA_GUY_WALK_RIGHT_FRAME_8,
            ImageData.BLUE_NINJA_GUY_WALK_RIGHT_FRAME_9,
            ImageData.BLUE_NINJA_GUY_WALK_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'enemy ninja 1 walk left'. */
    public      static  RED_NINJA_GIRL_WALK_LEFT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.RED_NINJA_GIRL_WALK_RIGHT_FRAME_1,
            ImageData.RED_NINJA_GIRL_WALK_RIGHT_FRAME_2,
            ImageData.RED_NINJA_GIRL_WALK_RIGHT_FRAME_3,
            ImageData.RED_NINJA_GIRL_WALK_RIGHT_FRAME_4,
            ImageData.RED_NINJA_GIRL_WALK_RIGHT_FRAME_5,
            ImageData.RED_NINJA_GIRL_WALK_RIGHT_FRAME_6,
            ImageData.RED_NINJA_GIRL_WALK_RIGHT_FRAME_7,
            ImageData.RED_NINJA_GIRL_WALK_RIGHT_FRAME_8,
            ImageData.RED_NINJA_GIRL_WALK_RIGHT_FRAME_9,
            ImageData.RED_NINJA_GIRL_WALK_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.YES,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'enemy ninja 1 walk right'. */
    public      static  RED_NINJA_GIRL_WALK_RIGHT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.RED_NINJA_GIRL_WALK_RIGHT_FRAME_1,
            ImageData.RED_NINJA_GIRL_WALK_RIGHT_FRAME_2,
            ImageData.RED_NINJA_GIRL_WALK_RIGHT_FRAME_3,
            ImageData.RED_NINJA_GIRL_WALK_RIGHT_FRAME_4,
            ImageData.RED_NINJA_GIRL_WALK_RIGHT_FRAME_5,
            ImageData.RED_NINJA_GIRL_WALK_RIGHT_FRAME_6,
            ImageData.RED_NINJA_GIRL_WALK_RIGHT_FRAME_7,
            ImageData.RED_NINJA_GIRL_WALK_RIGHT_FRAME_8,
            ImageData.RED_NINJA_GIRL_WALK_RIGHT_FRAME_9,
            ImageData.RED_NINJA_GIRL_WALK_RIGHT_FRAME_10,
        ],
        4,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'enemy ninja 1 die left'. */
    public      static  BLUE_NINJA_GUY_DIE_LEFT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.BLUE_NINJA_GUY_DIE_RIGHT_FRAME_1,
            ImageData.BLUE_NINJA_GUY_DIE_RIGHT_FRAME_2,
            ImageData.BLUE_NINJA_GUY_DIE_RIGHT_FRAME_3,
            ImageData.BLUE_NINJA_GUY_DIE_RIGHT_FRAME_4,
            ImageData.BLUE_NINJA_GUY_DIE_RIGHT_FRAME_5,
        ],
        16,
        MirrorImage.YES,
        LoopSprite.NO,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'enemy ninja 1 die right'. */
    public      static  BLUE_NINJA_GUY_DIE_RIGHT: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.BLUE_NINJA_GUY_DIE_RIGHT_FRAME_1,
            ImageData.BLUE_NINJA_GUY_DIE_RIGHT_FRAME_2,
            ImageData.BLUE_NINJA_GUY_DIE_RIGHT_FRAME_3,
            ImageData.BLUE_NINJA_GUY_DIE_RIGHT_FRAME_4,
            ImageData.BLUE_NINJA_GUY_DIE_RIGHT_FRAME_5,
        ],
        16,
        MirrorImage.NO,
        LoopSprite.NO,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'water top'. */
    public      static  WATER_TOP: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.WATER_TOP_FRAME_1,
            ImageData.WATER_TOP_FRAME_2,
            ImageData.WATER_TOP_FRAME_3,
            ImageData.WATER_TOP_FRAME_4,
            ImageData.WATER_TOP_FRAME_5,
            ImageData.WATER_TOP_FRAME_6,
            ImageData.WATER_TOP_FRAME_7,
            ImageData.WATER_TOP_FRAME_8,
        ],
        8,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.NO,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'grass 1'. */
    public      static  GRASS_1: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.GRASS_1_FRAME_1,
            ImageData.GRASS_1_FRAME_2,
            ImageData.GRASS_1_FRAME_3,
            ImageData.GRASS_1_FRAME_4,
            ImageData.GRASS_1_FRAME_5,
            ImageData.GRASS_1_FRAME_6,
            ImageData.GRASS_1_FRAME_7,
            ImageData.GRASS_1_FRAME_8,
            ImageData.GRASS_1_FRAME_9,
            ImageData.GRASS_1_FRAME_10,
            ImageData.GRASS_1_FRAME_11,
            ImageData.GRASS_1_FRAME_12,
        ],
        12,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.ONLY_START_FRAME,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'flame 1 big'. */
    public      static  FLAME_1_BIG: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.FLAME_1_FRAME_1,
            ImageData.FLAME_1_FRAME_2,
            ImageData.FLAME_1_FRAME_3,
            ImageData.FLAME_1_FRAME_4,
            ImageData.FLAME_1_FRAME_5,
            ImageData.FLAME_1_FRAME_6,
            ImageData.FLAME_1_FRAME_7,
            ImageData.FLAME_1_FRAME_8,
            ImageData.FLAME_1_FRAME_9,
            ImageData.FLAME_1_FRAME_10,
            ImageData.FLAME_1_FRAME_11,
            ImageData.FLAME_1_FRAME_12,
            ImageData.FLAME_1_FRAME_13,
            ImageData.FLAME_1_FRAME_14,
        ],
        8,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.ALL_FRAMES,
        SettingGame.DEFAULT_SPRITE_SCALE
    );

    /** Sprite 'flame 1 small'. */
    public      static  FLAME_1_SMALL: SpriteTemplate         = new SpriteTemplate
    (
        [
            ImageData.FLAME_1_FRAME_1,
            ImageData.FLAME_1_FRAME_2,
            ImageData.FLAME_1_FRAME_3,
            ImageData.FLAME_1_FRAME_4,
            ImageData.FLAME_1_FRAME_5,
            ImageData.FLAME_1_FRAME_6,
            ImageData.FLAME_1_FRAME_7,
            ImageData.FLAME_1_FRAME_8,
            ImageData.FLAME_1_FRAME_9,
            ImageData.FLAME_1_FRAME_10,
            ImageData.FLAME_1_FRAME_11,
            ImageData.FLAME_1_FRAME_12,
            ImageData.FLAME_1_FRAME_13,
            ImageData.FLAME_1_FRAME_14,
        ],
        8,
        MirrorImage.NO,
        LoopSprite.YES,
        RandomFrames.ALL_FRAMES,
        0.7
    );

    /** A reference over all sprite templates. */
    public      static  readonly        ALL_SPRITE_TEMPLATES: SpriteTemplate[] =
        [
            SpriteTemplateData.MASKED_NINJA_GIRL_STAND_LEFT,
            SpriteTemplateData.MASKED_NINJA_GIRL_STAND_RIGHT,
            SpriteTemplateData.MASKED_NINJA_GIRL_WALK_LEFT,
            SpriteTemplateData.MASKED_NINJA_GIRL_WALK_RIGHT,
            SpriteTemplateData.MASKED_NINJA_GIRL_ATTACK_LEFT,
            SpriteTemplateData.MASKED_NINJA_GIRL_ATTACK_RIGHT,
            SpriteTemplateData.MASKED_NINJA_GIRL_JUMP_LEFT,
            SpriteTemplateData.MASKED_NINJA_GIRL_JUMP_RIGHT,
            SpriteTemplateData.MASKED_NINJA_GIRL_FALL_LEFT,
            SpriteTemplateData.MASKED_NINJA_GIRL_FALL_RIGHT,
            SpriteTemplateData.MASKED_NINJA_GIRL_GLIDE_LEFT,
            SpriteTemplateData.MASKED_NINJA_GIRL_GLIDE_RIGHT,
            SpriteTemplateData.BLUE_NINJA_GUY_STAND_LEFT,
            SpriteTemplateData.BLUE_NINJA_GUY_STAND_RIGHT,
            SpriteTemplateData.BLUE_NINJA_GUY_WALK_LEFT,
            SpriteTemplateData.BLUE_NINJA_GUY_WALK_RIGHT,
            SpriteTemplateData.BLUE_NINJA_GUY_DIE_LEFT,
            SpriteTemplateData.BLUE_NINJA_GUY_DIE_RIGHT,
            SpriteTemplateData.RED_NINJA_GIRL_STAND_LEFT,
            SpriteTemplateData.RED_NINJA_GIRL_STAND_RIGHT,
            SpriteTemplateData.RED_NINJA_GIRL_WALK_LEFT,
            SpriteTemplateData.RED_NINJA_GIRL_WALK_RIGHT,
            SpriteTemplateData.MASKED_NINJA_GUY_STAND_LEFT,
            SpriteTemplateData.MASKED_NINJA_GUY_STAND_RIGHT,
            SpriteTemplateData.WATER_TOP,
            SpriteTemplateData.GRASS_1,
            SpriteTemplateData.FLAME_1_BIG,
            SpriteTemplateData.FLAME_1_SMALL,
        ];

    /** ****************************************************************************************************************
    *   Determines and returns an array of filenames for all images that needs to be mirrored.
    *
    *   @return An array with all filenames of images needing to be mirrored.
    *******************************************************************************************************************/
    public static getAllImagesToMirror(): string[] {
        const ret: string[] = [];

        for (const spriteTemplate of SpriteTemplateData.ALL_SPRITE_TEMPLATES) {
            if (spriteTemplate.mirrored === MirrorImage.YES) {
                for (const image of spriteTemplate.imageIds) {
                    ret.push(image);
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
    public static assignAllImageSizes(imageSystem: ImageSystem): void {
        for (const spriteTemplate of SpriteTemplateData.ALL_SPRITE_TEMPLATES) {
            spriteTemplate.assignImageSizes(imageSystem);
        }
    }
}
