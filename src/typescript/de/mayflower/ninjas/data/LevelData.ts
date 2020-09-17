
    /* eslint-disable max-len */

    import * as ninjas from '../ninjas';

    /** ****************************************************************************************************************
    *   The level data for the dev level.
    *******************************************************************************************************************/
    export class LevelData extends ninjas.Level
    {
        /** Player start position X. */
        public      playerStartX            :number                     = 5020; // 1600;
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
            ninjas.GameObjectBundleFactory.createObstacle(    this, 7450, 1900, ninjas.ImageData.IMAGE_STATUE_3 );
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

            // sprites
            ninjas.GameObjectBundleFactory.createDecoSprite( this, 5100, 1900, ninjas.DecoPosition.FG, ninjas.SpriteTemplateData.SPRITE_GRASS_1 );
            ninjas.GameObjectBundleFactory.createDecoSprite( this, 5200, 1900, ninjas.DecoPosition.FG, ninjas.SpriteTemplateData.SPRITE_GRASS_2 );
            ninjas.GameObjectBundleFactory.createDecoSprite( this, 5300, 1900, ninjas.DecoPosition.FG, ninjas.SpriteTemplateData.SPRITE_GRASS_3 );
            ninjas.GameObjectBundleFactory.createDecoSprite( this, 5400, 1900, ninjas.DecoPosition.FG, ninjas.SpriteTemplateData.SPRITE_GRASS_4 );

            // candles
            ninjas.GameObjectBundleFactory.createCandle( this, 5600, 1900 );
            ninjas.GameObjectBundleFactory.createCandle( this, 5720, 1900 );
            ninjas.GameObjectBundleFactory.createCandle( this, 5840, 1900 );

            // deco
            ninjas.GameObjectBundleFactory.createDecoImage(   this, 6000, 1900, ninjas.DecoPosition.FG, ninjas.ImageData.IMAGE_CAGE  );
            ninjas.GameObjectBundleFactory.createDecoImage(   this, 6300, 1900, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_STOVE );

            // sig saw
            ninjas.GameObjectFactory.createSigsaw( this, 3600, 1700, 600, 40, ninjas.SpriteTemplate.createFromSingleImage( ninjas.ImageData.SIGSAW_1 ) );
            // bounce
            ninjas.GameObjectFactory.createBounce( this, 2500, 1700, 600, 40, ninjas.SpriteTemplate.createFromSingleImage( ninjas.ImageData.SIGSAW_1 ) );

            // wooden crate
            ninjas.GameObjectBundleFactory.createCrate( this, 6900, 1900, ninjas.CrateType.WOODEN );

            // chandelier
            ninjas.GameObjectBundleFactory.createDecoImage(   this, 7073, 1705, ninjas.DecoPosition.FG, ninjas.ImageData.IMAGE_CHANDELIER );
            ninjas.GameObjectBundleFactory.createDecoSprite(  this, 7066, 1501, ninjas.DecoPosition.FG, ninjas.SpriteTemplateData.SPRITE_FLAME_1_BIG );
            ninjas.GameObjectBundleFactory.createDecoSprite(  this, 7120, 1486, ninjas.DecoPosition.FG, ninjas.SpriteTemplateData.SPRITE_FLAME_1_BIG );
            ninjas.GameObjectBundleFactory.createDecoSprite(  this, 7254, 1488, ninjas.DecoPosition.FG, ninjas.SpriteTemplateData.SPRITE_FLAME_1_BIG );
            ninjas.GameObjectBundleFactory.createDecoSprite(  this, 7305, 1517, ninjas.DecoPosition.FG, ninjas.SpriteTemplateData.SPRITE_FLAME_1_BIG );

            // flying ground
            ninjas.GameObjectBundleFactory.createFlyingGround( this, 6000,  1500, 5, ninjas.Slope.NONE, ninjas.JumpPassThrough.YES, ninjas.CapHorz.BOTH );
        }
    }
