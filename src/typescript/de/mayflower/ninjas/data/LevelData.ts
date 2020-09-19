
    /* eslint-disable max-len */

    import * as ninjas from '../ninjas';
    import * as matter from 'matter-js';

    /** ****************************************************************************************************************
    *   The level data for the dev level.
    *******************************************************************************************************************/
    export class LevelData extends ninjas.Level
    {
        /** Player start position X. */
        public  playerStartX            :number                             = 480;
        /** Player start position Y. */
        public  playerStartY            :number                             = 1200; // 2000; // 750;
        /** Player initial parachute state. */
        public  playerInitialFloat      :boolean                            = false; // true;
        /** Player initial facing. */
        public  playerInitialFacing     :ninjas.CharacterFacing             = ninjas.CharacterFacing.RIGHT;

        /** The width of this level. */
        public  width                   :number                             = 15000;
        /** The height of this level. */
        public  height                  :number                             = 5000;

        /** ************************************************************************************************************
        *   Inits a new level.
        ***************************************************************************************************************/
        protected createGameObjects() : void
        {
            // player
            ninjas.GameObjectBundleFactory.createPlayer( this );

            // parallax bg
            ninjas.GameObjectFactory.createParallaxDeco( this, 0, 0, 1.0, ninjas.DecoPosition.BG, ninjas.SpriteTemplate.createFromSingleImage( ninjas.ImageData.IMAGE_BG ) );

            // contents
            this.addStartupPlateau();
            this.addSecondPlateau();


            // 3rd plateau
            ninjas.GameObjectBundleFactory.createSolidGround( this, 2460, 2000, 5,  5, ninjas.Slope.NONE, ninjas.CapHorz.BOTH, ninjas.GroundData.TILESET_SNOW );

            // 4th plateau (bounce)
            ninjas.GameObjectFactory.createBounce( this, 3560, 2000, ninjas.SpriteTemplate.createFromSingleImage( ninjas.ImageData.BOUNCE_1 ), 0.00075 );

            // 5th plateau
            ninjas.GameObjectBundleFactory.createSolidGround( this, 4620, 2000, 5,  5, ninjas.Slope.NONE, ninjas.CapHorz.BOTH, ninjas.GroundData.TILESET_SNOW );

            // 6th plateau (platform)
            ninjas.GameObjectFactory.createPlatform( this, ninjas.SpriteTemplate.createFromSingleImage( ninjas.ImageData.PLATFORM_1 ), 3.5, [ matter.Vector.create( 5260, 2000 ), matter.Vector.create( 6000, 2000 ) ] );

            // main plateau
            ninjas.GameObjectBundleFactory.createSolidGround( this, 6250, 2000, 10, 5, ninjas.Slope.NONE,      ninjas.CapHorz.LEFT,  ninjas.GroundData.TILESET_SNOW );
            ninjas.GameObjectBundleFactory.createSolidGround( this, 7530, 2000, 5,  5, ninjas.Slope.ASCENDING, ninjas.CapHorz.NONE,  ninjas.GroundData.TILESET_SNOW );
            ninjas.GameObjectBundleFactory.createSolidGround( this, 8170, 1900, 8,  5, ninjas.Slope.NONE,      ninjas.CapHorz.RIGHT, ninjas.GroundData.TILESET_SNOW );
            // plateau after bridge
            ninjas.GameObjectBundleFactory.createSolidGround( this, 9870, 1900, 20, 5, ninjas.Slope.NONE,      ninjas.CapHorz.BOTH,  ninjas.GroundData.TILESET_SNOW );
            // bridge and blue water
            ninjas.GameObjectBundleFactory.createWaterArea(   this, 9150, 2060, 6, 4, ninjas.ImageData.IMAGE_WATER_CENTER );
            ninjas.GameObjectBundleFactory.createBridge(      this, 9220, 1900 );
            // site triggers
            ninjas.GameObjectFactory.createSiteTrigger( this, 12000, 1900, 3000, 500, ninjas.SiteContent.CONTENT_WELCOME, ninjas.SitePanelAppearance.RIGHT, null );
/*
            // obstacles
            ninjas.GameObjectBundleFactory.createObstacle(    this, 1400, 2000, ninjas.ImageData.IMAGE_STATUE_2 );
            ninjas.GameObjectBundleFactory.createObstacle(    this, 7450, 1900, ninjas.ImageData.IMAGE_STATUE_3 );



            // movables
            ninjas.GameObjectBundleFactory.createMovableRect( this, 1650, 2000, ninjas.ImageData.IMAGE_POT_1 );
            ninjas.GameObjectBundleFactory.createMovableCircular( this, 2300, 2000, 0.0, ninjas.ImageData.IMAGE_TEST_SPHERE );

            // deco
            ninjas.GameObjectBundleFactory.createDecoImage(  this, 3050, 1900, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_TREE_1 );
            ninjas.GameObjectBundleFactory.createDecoImage(  this, 3450, 1900, ninjas.DecoPosition.FG, ninjas.ImageData.IMAGE_BUSH_1 );
            ninjas.GameObjectBundleFactory.createDecoImage(  this, 3550, 1900, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_BUSH_2 );

            // enemies
            ninjas.GameObjectBundleFactory.createEnemy( this, 6000, 1900, ninjas.CharacterFacing.LEFT, 0,  5000,  ninjas.CharacterSpriteData.CHARACTER_SPRITE_SET_BLUE_NINJA_GUY );
            ninjas.GameObjectBundleFactory.createEnemy( this, 7000, 1900, ninjas.CharacterFacing.LEFT, 0,  5000,  ninjas.CharacterSpriteData.CHARACTER_SPRITE_SET_BLUE_NINJA_GUY );

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
*/
        }

        /** ************************************************************************************************************
        *   Adds the 1st plateau (startup shrine).
        ***************************************************************************************************************/
        private addStartupPlateau() : void
        {
            // ground
            ninjas.GameObjectBundleFactory.createSolidGround( this, 400, 2000, 5,  5, ninjas.Slope.NONE, ninjas.CapHorz.BOTH, ninjas.GroundData.TILESET_SNOW );

            // status with bush
            ninjas.GameObjectBundleFactory.createDecoImage( this, 780, 2000, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_STATUE_3 );
            ninjas.GameObjectBundleFactory.createDecoImage( this, 830, 2000, ninjas.DecoPosition.FG, ninjas.ImageData.IMAGE_BUSH_1 );

            // table with flasks
            ninjas.GameObjectBundleFactory.createObstacle(    this, 420, 2000, ninjas.ImageData.IMAGE_TABLE_1 );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 430, 1830, ninjas.ImageData.IMAGE_FLASK_1 );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 462, 1830, ninjas.ImageData.IMAGE_FLASK_2 );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 513, 1830, ninjas.ImageData.IMAGE_FLASK_3 );

            // pot
            ninjas.GameObjectBundleFactory.createMovableRect( this, 558, 2000, ninjas.ImageData.IMAGE_POT_1 );

            // flasks on the floor
            ninjas.GameObjectBundleFactory.createMovableRect( this, 633, 2000, ninjas.ImageData.IMAGE_FLASK_2 );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 684, 2000, ninjas.ImageData.IMAGE_FLASK_1 );
        }

        /** ************************************************************************************************************
        *   Adds the 2nd plateau (sigsaw).
        ***************************************************************************************************************/
        private addSecondPlateau() : void
        {
            // sigsaw
            ninjas.GameObjectFactory.createSigsaw( this, 1400, 2000, ninjas.SpriteTemplate.createFromSingleImage( ninjas.ImageData.SIGSAW_1 ), -1.0, ninjas.BodyDensity.DEFAULT );

            // wooden crates
            ninjas.GameObjectBundleFactory.createMovableRect( this, 1400, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 1525, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 1684, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 1841, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 1966, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );

            ninjas.GameObjectBundleFactory.createMovableRect( this, 1400, 1875, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 1525, 1875, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 1684, 1875, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 1841, 1875, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 1966, 1875, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
        }
    }
