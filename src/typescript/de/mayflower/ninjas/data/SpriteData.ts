
    /* eslint-disable max-len */

    import * as ninjas from '../ninjas';

    /** ****************************************************************************************************************
    *   All concrete sprites the game makes use of.
    *******************************************************************************************************************/
    export class SpriteData
    {
        /** Sprite 'ninja girl stand left'. */
        public      static  SPRITE_NINJA_GIRL_STAND_LEFT                :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_1,
                ninjas.ImageData.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_2,
                ninjas.ImageData.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_3,
                ninjas.ImageData.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_4,
                ninjas.ImageData.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_5,
                ninjas.ImageData.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_6,
                ninjas.ImageData.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_7,
                ninjas.ImageData.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_8,
                ninjas.ImageData.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_9,
                ninjas.ImageData.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_10,
            ],
            4,
            ninjas.MirrorImage.YES,
            ninjas.LoopSprite.YES,
            ninjas.RandomFrames.NO,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'ninja girl stand right'. */
        public      static  SPRITE_NINJA_GIRL_STAND_RIGHT               :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_1,
                ninjas.ImageData.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_2,
                ninjas.ImageData.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_3,
                ninjas.ImageData.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_4,
                ninjas.ImageData.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_5,
                ninjas.ImageData.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_6,
                ninjas.ImageData.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_7,
                ninjas.ImageData.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_8,
                ninjas.ImageData.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_9,
                ninjas.ImageData.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_10,
            ],
            4,
            ninjas.MirrorImage.NO,
            ninjas.LoopSprite.YES,
            ninjas.RandomFrames.NO,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'ninja girl walk left'. */
        public      static  SPRITE_NINJA_GIRL_WALK_LEFT                 :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_1,
                ninjas.ImageData.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_2,
                ninjas.ImageData.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_3,
                ninjas.ImageData.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_4,
                ninjas.ImageData.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_5,
                ninjas.ImageData.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_6,
                ninjas.ImageData.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_7,
                ninjas.ImageData.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_8,
                ninjas.ImageData.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_9,
                ninjas.ImageData.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_10,
            ],
            2,
            ninjas.MirrorImage.YES,
            ninjas.LoopSprite.YES,
            ninjas.RandomFrames.NO,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'ninja girl walk right'. */
        public      static  SPRITE_NINJA_GIRL_WALK_RIGHT                :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_1,
                ninjas.ImageData.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_2,
                ninjas.ImageData.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_3,
                ninjas.ImageData.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_4,
                ninjas.ImageData.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_5,
                ninjas.ImageData.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_6,
                ninjas.ImageData.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_7,
                ninjas.ImageData.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_8,
                ninjas.ImageData.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_9,
                ninjas.ImageData.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_10,
            ],
            2,
            ninjas.MirrorImage.NO,
            ninjas.LoopSprite.YES,
            ninjas.RandomFrames.NO,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'ninja girl attack left'. */
        public      static  SPRITE_NINJA_GIRL_ATTACK_LEFT                 :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_1,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_2,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_3,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_4,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_5,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_6,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_7,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_8,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_9,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_10,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_11,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_12,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_13,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_14,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_15,
            ],
            1,
            ninjas.MirrorImage.YES,
            ninjas.LoopSprite.NO,
            ninjas.RandomFrames.NO,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'ninja girl attack right'. */
        public      static  SPRITE_NINJA_GIRL_ATTACK_RIGHT                :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_1,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_2,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_3,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_4,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_5,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_6,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_7,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_8,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_9,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_10,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_11,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_12,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_13,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_14,
                ninjas.ImageData.IMAGE_NINJA_GIRL_ATTACK_RIGHT_FRAME_15,
            ],
            1,
            ninjas.MirrorImage.NO,
            ninjas.LoopSprite.NO,
            ninjas.RandomFrames.NO,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'ninja girl jump left'. */
        public      static  SPRITE_NINJA_GIRL_JUMP_LEFT                 :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_NINJA_GIRL_JUMP_RIGHT_FRAME_1,
                ninjas.ImageData.IMAGE_NINJA_GIRL_JUMP_RIGHT_FRAME_2,
                ninjas.ImageData.IMAGE_NINJA_GIRL_JUMP_RIGHT_FRAME_3,
            ],
            8,
            ninjas.MirrorImage.YES,
            ninjas.LoopSprite.NO,
            ninjas.RandomFrames.NO,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'ninja girl jump right'. */
        public      static  SPRITE_NINJA_GIRL_JUMP_RIGHT                :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_NINJA_GIRL_JUMP_RIGHT_FRAME_1,
                ninjas.ImageData.IMAGE_NINJA_GIRL_JUMP_RIGHT_FRAME_2,
                ninjas.ImageData.IMAGE_NINJA_GIRL_JUMP_RIGHT_FRAME_3,
            ],
            8,
            ninjas.MirrorImage.NO,
            ninjas.LoopSprite.NO,
            ninjas.RandomFrames.NO,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'ninja girl fall left'. */
        public      static  SPRITE_NINJA_GIRL_FALL_LEFT                 :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_NINJA_GIRL_FALL_RIGHT_FRAME_1,
                ninjas.ImageData.IMAGE_NINJA_GIRL_FALL_RIGHT_FRAME_2,
                ninjas.ImageData.IMAGE_NINJA_GIRL_FALL_RIGHT_FRAME_3,
            ],
            8,
            ninjas.MirrorImage.YES,
            ninjas.LoopSprite.NO,
            ninjas.RandomFrames.NO,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'ninja girl fall right'. */
        public      static  SPRITE_NINJA_GIRL_FALL_RIGHT                :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_NINJA_GIRL_FALL_RIGHT_FRAME_1,
                ninjas.ImageData.IMAGE_NINJA_GIRL_FALL_RIGHT_FRAME_2,
                ninjas.ImageData.IMAGE_NINJA_GIRL_FALL_RIGHT_FRAME_3,
            ],
            8,
            ninjas.MirrorImage.NO,
            ninjas.LoopSprite.NO,
            ninjas.RandomFrames.NO,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'ninja girl glide left'. */
        public      static  SPRITE_NINJA_GIRL_GLIDE_LEFT                :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_1,
                ninjas.ImageData.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_2,
                ninjas.ImageData.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_3,
                ninjas.ImageData.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_4,
                ninjas.ImageData.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_5,
                ninjas.ImageData.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_6,
                ninjas.ImageData.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_7,
                ninjas.ImageData.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_8,
                ninjas.ImageData.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_9,
                ninjas.ImageData.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_10,
            ],
            8,
            ninjas.MirrorImage.YES,
            ninjas.LoopSprite.YES,
            ninjas.RandomFrames.NO,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'ninja girl glide right'. */
        public      static  SPRITE_NINJA_GIRL_GLIDE_RIGHT               :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_1,
                ninjas.ImageData.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_2,
                ninjas.ImageData.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_3,
                ninjas.ImageData.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_4,
                ninjas.ImageData.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_5,
                ninjas.ImageData.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_6,
                ninjas.ImageData.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_7,
                ninjas.ImageData.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_8,
                ninjas.ImageData.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_9,
                ninjas.ImageData.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_10,
            ],
            8,
            ninjas.MirrorImage.NO,
            ninjas.LoopSprite.YES,
            ninjas.RandomFrames.NO,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'enemy ninja 1 stand left'. */
        public      static  SPRITE_ENEMY_NINJA_1_STAND_LEFT             :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_1,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_2,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_3,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_4,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_5,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_6,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_7,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_8,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_9,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_10,
            ],
            4,
            ninjas.MirrorImage.YES,
            ninjas.LoopSprite.YES,
            ninjas.RandomFrames.NO,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'enemy ninja 1 stand right'. */
        public      static  SPRITE_ENEMY_NINJA_1_STAND_RIGHT            :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_1,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_2,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_3,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_4,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_5,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_6,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_7,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_8,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_9,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_10,
            ],
            4,
            ninjas.MirrorImage.NO,
            ninjas.LoopSprite.YES,
            ninjas.RandomFrames.NO,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'enemy ninja 1 walk left'. */
        public      static  SPRITE_ENEMY_NINJA_1_WALK_LEFT              :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_1,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_2,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_3,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_4,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_5,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_6,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_7,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_8,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_9,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_10,
            ],
            4,
            ninjas.MirrorImage.YES,
            ninjas.LoopSprite.YES,
            ninjas.RandomFrames.NO,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'enemy ninja 1 walk right'. */
        public      static  SPRITE_ENEMY_NINJA_1_WALK_RIGHT             :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_1,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_2,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_3,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_4,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_5,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_6,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_7,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_8,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_9,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_10,
            ],
            4,
            ninjas.MirrorImage.NO,
            ninjas.LoopSprite.YES,
            ninjas.RandomFrames.NO,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'enemy ninja 1 die left'. */
        public      static  SPRITE_ENEMY_NINJA_1_DIE_LEFT               :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_DIE_RIGHT_FRAME_1,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_DIE_RIGHT_FRAME_2,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_DIE_RIGHT_FRAME_3,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_DIE_RIGHT_FRAME_4,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_DIE_RIGHT_FRAME_5,
            ],
            16,
            ninjas.MirrorImage.YES,
            ninjas.LoopSprite.NO,
            ninjas.RandomFrames.NO,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'enemy ninja 1 die right'. */
        public      static  SPRITE_ENEMY_NINJA_1_DIE_RIGHT              :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_DIE_RIGHT_FRAME_1,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_DIE_RIGHT_FRAME_2,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_DIE_RIGHT_FRAME_3,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_DIE_RIGHT_FRAME_4,
                ninjas.ImageData.IMAGE_ENEMY_NINJA_1_DIE_RIGHT_FRAME_5,
            ],
            16,
            ninjas.MirrorImage.NO,
            ninjas.LoopSprite.NO,
            ninjas.RandomFrames.NO,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'water top'. */
        public      static  SPRITE_WATER_TOP                            :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_WATER_TOP_FRAME_1,
                ninjas.ImageData.IMAGE_WATER_TOP_FRAME_2,
                ninjas.ImageData.IMAGE_WATER_TOP_FRAME_3,
                ninjas.ImageData.IMAGE_WATER_TOP_FRAME_4,
                ninjas.ImageData.IMAGE_WATER_TOP_FRAME_5,
                ninjas.ImageData.IMAGE_WATER_TOP_FRAME_6,
                ninjas.ImageData.IMAGE_WATER_TOP_FRAME_7,
                ninjas.ImageData.IMAGE_WATER_TOP_FRAME_8,
            ],
            4,
            ninjas.MirrorImage.NO,
            ninjas.LoopSprite.YES,
            ninjas.RandomFrames.NO,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'grass 1'. */
        public      static  SPRITE_GRASS_1                              :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_GRASS_1_FRAME_1,
                ninjas.ImageData.IMAGE_GRASS_1_FRAME_2,
                ninjas.ImageData.IMAGE_GRASS_1_FRAME_3,
                ninjas.ImageData.IMAGE_GRASS_1_FRAME_4,
                ninjas.ImageData.IMAGE_GRASS_1_FRAME_5,
                ninjas.ImageData.IMAGE_GRASS_1_FRAME_6,
                ninjas.ImageData.IMAGE_GRASS_1_FRAME_7,
                ninjas.ImageData.IMAGE_GRASS_1_FRAME_8,
                ninjas.ImageData.IMAGE_GRASS_1_FRAME_9,
                ninjas.ImageData.IMAGE_GRASS_1_FRAME_10,
                ninjas.ImageData.IMAGE_GRASS_1_FRAME_11,
                ninjas.ImageData.IMAGE_GRASS_1_FRAME_12,
            ],
            12,
            ninjas.MirrorImage.NO,
            ninjas.LoopSprite.YES,
            ninjas.RandomFrames.ONLY_START_FRAME,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'grass 2'. */
        public      static  SPRITE_GRASS_2                              :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_GRASS_2_FRAME_1,
                ninjas.ImageData.IMAGE_GRASS_2_FRAME_2,
                ninjas.ImageData.IMAGE_GRASS_2_FRAME_3,
                ninjas.ImageData.IMAGE_GRASS_2_FRAME_4,
                ninjas.ImageData.IMAGE_GRASS_2_FRAME_5,
                ninjas.ImageData.IMAGE_GRASS_2_FRAME_6,
                ninjas.ImageData.IMAGE_GRASS_2_FRAME_7,
                ninjas.ImageData.IMAGE_GRASS_2_FRAME_8,
                ninjas.ImageData.IMAGE_GRASS_2_FRAME_9,
                ninjas.ImageData.IMAGE_GRASS_2_FRAME_10,
                ninjas.ImageData.IMAGE_GRASS_2_FRAME_11,
                ninjas.ImageData.IMAGE_GRASS_2_FRAME_12,
            ],
            12,
            ninjas.MirrorImage.NO,
            ninjas.LoopSprite.YES,
            ninjas.RandomFrames.ONLY_START_FRAME,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );


        /** Sprite 'grass 3'. */
        public      static  SPRITE_GRASS_3                              :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_GRASS_3_FRAME_1,
                ninjas.ImageData.IMAGE_GRASS_3_FRAME_2,
                ninjas.ImageData.IMAGE_GRASS_3_FRAME_3,
                ninjas.ImageData.IMAGE_GRASS_3_FRAME_4,
                ninjas.ImageData.IMAGE_GRASS_3_FRAME_5,
                ninjas.ImageData.IMAGE_GRASS_3_FRAME_6,
                ninjas.ImageData.IMAGE_GRASS_3_FRAME_7,
                ninjas.ImageData.IMAGE_GRASS_3_FRAME_8,
                ninjas.ImageData.IMAGE_GRASS_3_FRAME_9,
                ninjas.ImageData.IMAGE_GRASS_3_FRAME_10,
                ninjas.ImageData.IMAGE_GRASS_3_FRAME_11,
                ninjas.ImageData.IMAGE_GRASS_3_FRAME_12,
            ],
            12,
            ninjas.MirrorImage.NO,
            ninjas.LoopSprite.YES,
            ninjas.RandomFrames.ONLY_START_FRAME,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'grass 4'. */
        public      static  SPRITE_GRASS_4                              :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_GRASS_4_FRAME_1,
                ninjas.ImageData.IMAGE_GRASS_4_FRAME_2,
                ninjas.ImageData.IMAGE_GRASS_4_FRAME_3,
                ninjas.ImageData.IMAGE_GRASS_4_FRAME_4,
                ninjas.ImageData.IMAGE_GRASS_4_FRAME_5,
                ninjas.ImageData.IMAGE_GRASS_4_FRAME_6,
                ninjas.ImageData.IMAGE_GRASS_4_FRAME_7,
                ninjas.ImageData.IMAGE_GRASS_4_FRAME_8,
                ninjas.ImageData.IMAGE_GRASS_4_FRAME_9,
                ninjas.ImageData.IMAGE_GRASS_4_FRAME_10,
                ninjas.ImageData.IMAGE_GRASS_4_FRAME_11,
                ninjas.ImageData.IMAGE_GRASS_4_FRAME_12,
            ],
            12,
            ninjas.MirrorImage.NO,
            ninjas.LoopSprite.YES,
            ninjas.RandomFrames.ONLY_START_FRAME,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'flame 1 big'. */
        public      static  SPRITE_FLAME_1_BIG                              :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_1,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_2,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_3,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_4,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_5,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_6,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_7,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_8,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_9,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_10,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_11,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_12,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_13,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_14,
            ],
            16,
            ninjas.MirrorImage.NO,
            ninjas.LoopSprite.YES,
            ninjas.RandomFrames.ALL_FRAMES,
            ninjas.SettingGame.DEFAULT_SPRITE_SCALE
        );

        /** Sprite 'flame 1 small'. */
        public      static  SPRITE_FLAME_1_SMALL                            :ninjas.SpriteTemplate         = new ninjas.SpriteTemplate
        (
            [
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_1,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_2,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_3,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_4,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_5,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_6,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_7,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_8,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_9,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_10,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_11,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_12,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_13,
                ninjas.ImageData.IMAGE_FLAME_1_FRAME_14,
            ],
            16,
            ninjas.MirrorImage.NO,
            ninjas.LoopSprite.YES,
            ninjas.RandomFrames.ALL_FRAMES,
            0.7
        );

        /** A reference over all sprite templates. */
        public      static  readonly        ALL_SPRITE_TEMPLATES                        :ninjas.SpriteTemplate[] =
        [
            SpriteData.SPRITE_NINJA_GIRL_STAND_LEFT,
            SpriteData.SPRITE_NINJA_GIRL_STAND_RIGHT,
            SpriteData.SPRITE_NINJA_GIRL_WALK_LEFT,
            SpriteData.SPRITE_NINJA_GIRL_WALK_RIGHT,
            SpriteData.SPRITE_NINJA_GIRL_ATTACK_LEFT,
            SpriteData.SPRITE_NINJA_GIRL_ATTACK_RIGHT,
            SpriteData.SPRITE_NINJA_GIRL_JUMP_LEFT,
            SpriteData.SPRITE_NINJA_GIRL_JUMP_RIGHT,
            SpriteData.SPRITE_NINJA_GIRL_FALL_LEFT,
            SpriteData.SPRITE_NINJA_GIRL_FALL_RIGHT,
            SpriteData.SPRITE_NINJA_GIRL_GLIDE_LEFT,
            SpriteData.SPRITE_NINJA_GIRL_GLIDE_RIGHT,
            SpriteData.SPRITE_ENEMY_NINJA_1_STAND_LEFT,
            SpriteData.SPRITE_ENEMY_NINJA_1_STAND_RIGHT,
            SpriteData.SPRITE_ENEMY_NINJA_1_WALK_LEFT,
            SpriteData.SPRITE_ENEMY_NINJA_1_WALK_RIGHT,
            SpriteData.SPRITE_ENEMY_NINJA_1_DIE_LEFT,
            SpriteData.SPRITE_ENEMY_NINJA_1_DIE_RIGHT,
            SpriteData.SPRITE_WATER_TOP,
            SpriteData.SPRITE_GRASS_1,
            SpriteData.SPRITE_GRASS_2,
            SpriteData.SPRITE_GRASS_3,
            SpriteData.SPRITE_GRASS_4,
            SpriteData.SPRITE_FLAME_1_BIG,
            SpriteData.SPRITE_FLAME_1_SMALL,
        ];
    }
