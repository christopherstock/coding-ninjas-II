
    /* eslint-disable max-len */

    import * as ninjas from '../ninjas';

    /** ****************************************************************************************************************
    *   The level data for the dev level.
    *******************************************************************************************************************/
    export class LevelData extends ninjas.Level
    {
        /** Player start position X. */
        public      playerStartX            :number                     = 1600;
        /** Player start position Y. */
        public      playerStartY            :number                     = 750;
        /** Player starts with an open parachute. */
        public      playerInitialFloat      :boolean                    = true;

        /** The width of this level. */
        public      width                   :number                     = 12000;
        /** The height of this level. */
        public      height                  :number                     = 5000;

        /** ************************************************************************************************************
        *   Inits a new level.
        ***************************************************************************************************************/
        protected createGameObjects() : void
        {
            // player
            ninjas.GameObjectBundleFactory.createPlayer
            (
                this,
                this.playerStartX,
                this.playerStartY,
                ninjas.CharacterLookingDirection.RIGHT,
                this.playerInitialFloat
            );

            // bridge and blue water
            ninjas.GameObjectBundleFactory.createWaterArea(   this, 4300,  2060, 6, 4, ninjas.ImageData.IMAGE_WATER_CENTER );
            ninjas.GameObjectBundleFactory.createBridge(      this, 4370,  1900 );

            // solid grounds
            ninjas.GameObjectBundleFactory.createSolidGround( this, 1400, 2000, 10, 5, ninjas.Slope.NONE,      ninjas.CapHorz.LEFT,  ninjas.GroundData.TILESET_SNOW );
            ninjas.GameObjectBundleFactory.createSolidGround( this, 2680, 2000, 5,  5, ninjas.Slope.ASCENDING, ninjas.CapHorz.NONE,  ninjas.GroundData.TILESET_SNOW );
            ninjas.GameObjectBundleFactory.createSolidGround( this, 3320, 1900, 8,  5, ninjas.Slope.NONE,      ninjas.CapHorz.RIGHT, ninjas.GroundData.TILESET_SNOW );
            ninjas.GameObjectBundleFactory.createSolidGround( this, 5020, 1900, 20, 5, ninjas.Slope.NONE,      ninjas.CapHorz.BOTH,  ninjas.GroundData.TILESET_SNOW );

            // obstacles
            ninjas.GameObjectBundleFactory.createObstacle(    this, 1400, 2000, ninjas.ImageData.IMAGE_STATUE_2 );
            ninjas.GameObjectBundleFactory.createObstacle(    this, 7470, 1900, ninjas.ImageData.IMAGE_STATUE_3 );
            ninjas.GameObjectBundleFactory.createObstacle(    this, 2100, 2000, ninjas.ImageData.IMAGE_TABLE_1 );

            // movables
            ninjas.GameObjectBundleFactory.createMovableRect( this, 1650, 2000, ninjas.ImageData.IMAGE_POT_1 );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 2120, 1830, ninjas.ImageData.IMAGE_FLASK_1 );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 2158, 1830, ninjas.ImageData.IMAGE_FLASK_2 );
            ninjas.GameObjectBundleFactory.createMovableCircular( this, 2300, 2000, 0.0, ninjas.ImageData.IMAGE_TEST_SPHERE );

            // deco
            ninjas.GameObjectBundleFactory.createDecoImage(  this, 3050, 1900, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_TREE_1 );
            ninjas.GameObjectBundleFactory.createDecoImage(  this, 3450, 1900, ninjas.DecoPosition.FG, ninjas.ImageData.IMAGE_BUSH_1 );
            ninjas.GameObjectBundleFactory.createDecoImage(  this, 3550, 1900, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_BUSH_2 );

            // parallax deco bg
            ninjas.GameObjectFactory.createParallaxDeco( this, 0, 0, 1.0, ninjas.DecoPosition.BG, ninjas.SpriteTemplate.createFromSingleImage( ninjas.ImageData.IMAGE_BG ) );

            // enemies
            ninjas.GameObjectBundleFactory.createEnemy( this, 6000, 1900, ninjas.CharacterLookingDirection.LEFT, 0,  5000,  ninjas.CharacterSpriteData.CHARACTER_SPRITE_SET_BLUE_NINJA_GUY );
            ninjas.GameObjectBundleFactory.createEnemy( this, 7000, 1900, ninjas.CharacterLookingDirection.LEFT, 0,  5000,  ninjas.CharacterSpriteData.CHARACTER_SPRITE_SET_BLUE_NINJA_GUY );

            // site triggers
            ninjas.GameObjectFactory.createSiteTrigger( this, 7000, 1900, 600, 400, ninjas.SiteContent.CONTENT_WELCOME, ninjas.SitePanelAppearance.RIGHT, null );

/*
            // sprites
            ninjas.GameObjectBundleFactory.createDecoSprite( this, 75,    5000, ninjas.DecoPosition.FG, ninjas.SpriteData.SPRITE_GRASS_1 );

            // candle
            ninjas.GameObjectBundleFactory.createCandle(      this, 3815,  4060                                                               );

            // nature below shrine 4
            ninjas.GameObjectBundleFactory.createCrate(      this, 7500, 4800, ninjas.CrateType.WOODEN                                      );

            // nature before shrine 6
            ninjas.GameObjectBundleFactory.createDecoImage(   this, 11370, 5100, ninjas.DecoPosition.FG, ninjas.Image.IMAGE_CAGE              );
            ninjas.GameObjectBundleFactory.createDecoImage(   this, 12400, 5100, ninjas.DecoPosition.BG, ninjas.Image.IMAGE_STOVE             );

            // shrine 6 (DoJo)
            ninjas.GameObjectBundleFactory.createDecoImage(   this, 15073, 4705, ninjas.DecoPosition.FG, ninjas.Image.IMAGE_CHANDELIER            );
            ninjas.GameObjectBundleFactory.createDecoSprite(  this, 15066, 4501, ninjas.DecoPosition.FG, ninjas.SpriteData.SPRITE_FLAME_1_BIG );
            ninjas.GameObjectBundleFactory.createDecoSprite(  this, 15120, 4486, ninjas.DecoPosition.FG, ninjas.SpriteData.SPRITE_FLAME_1_BIG );
            ninjas.GameObjectBundleFactory.createDecoSprite(  this, 15254, 4488, ninjas.DecoPosition.FG, ninjas.SpriteData.SPRITE_FLAME_1_BIG );
            ninjas.GameObjectBundleFactory.createDecoSprite(  this, 15305, 4517, ninjas.DecoPosition.FG, ninjas.SpriteData.SPRITE_FLAME_1_BIG );
*/
/*
            // flying grounds
            ninjas.GameObjectBundleFactory.createFlyingGround( this, 3525,  4060, 11, ninjas.Slope.NONE, ninjas.JumpPassThrough.NO, ninjas.CapHorz.BOTH );
            ninjas.GameObjectBundleFactory.createFlyingGround( this, 5062,  4430, 3,  ninjas.Slope.NONE, ninjas.JumpPassThrough.NO, ninjas.CapHorz.BOTH );
            ninjas.GameObjectBundleFactory.createFlyingGround( this, 7350,  4280, 6,  ninjas.Slope.NONE, ninjas.JumpPassThrough.NO, ninjas.CapHorz.BOTH );
            ninjas.GameObjectBundleFactory.createFlyingGround( this, 9800,  4560, 3,  ninjas.Slope.NONE, ninjas.JumpPassThrough.NO, ninjas.CapHorz.BOTH );
            ninjas.GameObjectBundleFactory.createFlyingGround( this, 10800, 4350, 3,  ninjas.Slope.NONE, ninjas.JumpPassThrough.NO, ninjas.CapHorz.BOTH );
 */
        }
    }
