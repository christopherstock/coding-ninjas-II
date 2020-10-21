
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
        public  playerStartY            :number                             = 1200;
        /** Player initial parachute state. */
        public  playerInitialFloat      :boolean                            = true;
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

            // plateaus
            this.addFirstPlateau();
            this.addSecondPlateau();
            this.addThirdPlateau();
            this.addFourthPlateau();
            this.addFifthPlateau();
            this.addSixthPlateau();
            this.addSeventhPlateau();
        }

        /** ************************************************************************************************************
        *   Adds the 1st plateau (startup shrine).
        ***************************************************************************************************************/
        private addFirstPlateau() : void
        {
            // ground
            ninjas.GameObjectBundleFactory.createSolidGround( this, 400, 2000, 5,  5, ninjas.Slope.NONE, ninjas.CapHorz.BOTH, ninjas.GroundData.TILESET_SNOW );

            if ( true ) return;

            // site trigger
            ninjas.GameObjectFactory.createSiteTrigger( this, 0, 2000, 800, 550, ninjas.SiteContent.CONTENT_WELCOME, ninjas.SitePanelAppearance.LEFT, null );

            // status with bush
            ninjas.GameObjectBundleFactory.createDecoImage( this, 780, 2000, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_STATUE_3 );
            ninjas.GameObjectBundleFactory.createDecoImage( this, 830, 2000, ninjas.DecoPosition.FG, ninjas.ImageData.IMAGE_BUSH_1 );

            // grass
            ninjas.GameObjectBundleFactory.createDecoSprite( this, 660, 2000, ninjas.DecoPosition.FG, ninjas.SpriteTemplateData.SPRITE_GRASS_1 );

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
            ninjas.GameObjectFactory.createSigsaw( this, 1400, 2000, ninjas.SpriteTemplate.createFromSingleImage( ninjas.ImageData.SIGSAW_1 ), -1 );

            // stone obstacle
            ninjas.GameObjectBundleFactory.createObstacle( this, 1991, 2150, ninjas.ImageData.IMAGE_STONE_SPHERE );

            // wooden crates
            // ninjas.GameObjectBundleFactory.createMovableRect( this, 1841, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 1966, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
            // ninjas.GameObjectBundleFactory.createMovableRect( this, 1924, 1875, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
        }

        /** ************************************************************************************************************
        *   Adds the 3rd plateau.
        ***************************************************************************************************************/
        private addThirdPlateau() : void
        {
            // ground
            ninjas.GameObjectBundleFactory.createSolidGround( this, 2460, 2000, 5,  5, ninjas.Slope.NONE, ninjas.CapHorz.BOTH, ninjas.GroundData.TILESET_SNOW );

            // statue
            ninjas.GameObjectBundleFactory.createDecoImage( this, 2580, 2000, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_STATUE_2 );

            // candles
            ninjas.GameObjectBundleFactory.createCandle( this, 2765, 2000, ninjas.DecoPosition.FG );
            ninjas.GameObjectBundleFactory.createCandle( this, 2865, 2000, ninjas.DecoPosition.BG );
            ninjas.GameObjectBundleFactory.createCandle( this, 2965, 2000, ninjas.DecoPosition.FG );

            // bushes
            ninjas.GameObjectBundleFactory.createDecoImage( this, 2630, 2000, ninjas.DecoPosition.FG, ninjas.ImageData.IMAGE_BUSH_1 );
            ninjas.GameObjectBundleFactory.createDecoImage( this, 2690, 2000, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_BUSH_2 );
        }

        /** ************************************************************************************************************
        *   Adds the 4th plateau (bounce).
        ***************************************************************************************************************/
        private addFourthPlateau() : void
        {
            // bounce
            ninjas.GameObjectFactory.createBounce( this, 3560, 2000, ninjas.SpriteTemplate.createFromSingleImage( ninjas.ImageData.BOUNCE_1 ), 0.00075 );

            // wooden crates
            ninjas.GameObjectBundleFactory.createMovableRect( this, 3600, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 3725, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 3884, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 4041, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 4166, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );

            // stones
            ninjas.GameObjectBundleFactory.createMovableRect( this, 3650, 1900, ninjas.ImageData.IMAGE_STONE_SPHERE );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 3750, 1900, ninjas.ImageData.IMAGE_STONE_SPHERE );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 3900, 1900, ninjas.ImageData.IMAGE_STONE_SPHERE );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 4070, 1900, ninjas.ImageData.IMAGE_STONE_SPHERE );
        }

        /** ************************************************************************************************************
        *   Adds the 5th plateau.
        ***************************************************************************************************************/
        private addFifthPlateau() : void
        {
            // ground
            ninjas.GameObjectBundleFactory.createSolidGround( this, 4620, 2000, 5,  5, ninjas.Slope.NONE, ninjas.CapHorz.BOTH, ninjas.GroundData.TILESET_SNOW );

            // statue
            ninjas.GameObjectBundleFactory.createDecoImage( this, 4780, 2000, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_STATUE_1 );

            // bush
            ninjas.GameObjectBundleFactory.createDecoImage( this, 4690, 2000, ninjas.DecoPosition.FG, ninjas.ImageData.IMAGE_BUSH_1 );

            // candles
            ninjas.GameObjectBundleFactory.createCandle( this, 4930, 2000, ninjas.DecoPosition.BG );
            ninjas.GameObjectBundleFactory.createCandle( this, 5060, 2000, ninjas.DecoPosition.FG );

            // wooden crate
            ninjas.GameObjectBundleFactory.createMovableRect( this, 4980, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 5095, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
            ninjas.GameObjectBundleFactory.createMovableRect( this, 5042, 1875, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
        }

        /** ************************************************************************************************************
        *   Adds the 6th plateau (platform).
        ***************************************************************************************************************/
        private addSixthPlateau() : void
        {
            // platform
            ninjas.GameObjectFactory.createPlatform( this, ninjas.SpriteTemplate.createFromSingleImage( ninjas.ImageData.PLATFORM_1 ), 3.5, [ matter.Vector.create( 5260, 2000 ), matter.Vector.create( 6000, 2000 ) ] );
        }

        /** ************************************************************************************************************
        *   Adds the 7th plateau (main).
        ***************************************************************************************************************/
        private addSeventhPlateau() : void
        {
            // bushes and tree before dojo
            ninjas.GameObjectBundleFactory.createDecoImage(  this, 10000, 2100, ninjas.DecoPosition.FG, ninjas.ImageData.IMAGE_BUSH_1 );
            ninjas.GameObjectBundleFactory.createDecoImage(  this, 10070, 2120, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_BUSH_2 );
            ninjas.GameObjectBundleFactory.createDecoImage(  this, 10500, 2100, ninjas.DecoPosition.FG, ninjas.ImageData.IMAGE_TREE_2 );

            // statue before bridge
            ninjas.GameObjectBundleFactory.createDecoImage( this, 8850, 2100, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_STATUE_3 );

            // bridge and blue water
            ninjas.GameObjectBundleFactory.createWaterArea(   this, 9150, 2260, 6, 4, ninjas.ImageData.IMAGE_WATER_CENTER );
            ninjas.GameObjectBundleFactory.createBridge(      this, 9220, 2100 );

            // ground
            ninjas.GameObjectBundleFactory.createSolidGround( this, 6250, 2000, 10, 5, ninjas.Slope.NONE,       ninjas.CapHorz.LEFT,  ninjas.GroundData.TILESET_SNOW );
            ninjas.GameObjectBundleFactory.createSolidGround( this, 7530, 2000, 5,  5, ninjas.Slope.DESCENDING, ninjas.CapHorz.NONE,  ninjas.GroundData.TILESET_SNOW );
            ninjas.GameObjectBundleFactory.createSolidGround( this, 8170, 2100, 8,  5, ninjas.Slope.NONE,       ninjas.CapHorz.RIGHT, ninjas.GroundData.TILESET_SNOW );

            // ground after bridge
            ninjas.GameObjectBundleFactory.createSolidGround( this, 9870, 2100, 20, 5, ninjas.Slope.NONE,      ninjas.CapHorz.BOTH,  ninjas.GroundData.TILESET_SNOW );

            // tree
            ninjas.GameObjectBundleFactory.createDecoImage(  this, 8030, 2100, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_TREE_1 );

            // site trigger
            // ninjas.GameObjectFactory.createSiteTrigger( this, 11400, 2100, 3000, 500, ninjas.SiteContent.CONTENT_WELCOME, ninjas.SitePanelAppearance.RIGHT, null );

            // lion statue
            ninjas.GameObjectBundleFactory.createDecoImage( this, 6500, 2000, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_STATUE_LION );

            // movables
            ninjas.GameObjectBundleFactory.createMovableRect( this, 7350, 2000, ninjas.ImageData.IMAGE_POT_1 );
            ninjas.GameObjectBundleFactory.createMovableCircular( this, 7450, 2000, 0.0, ninjas.ImageData.IMAGE_STONE_SPHERE );

            // boulder and bush
            ninjas.GameObjectBundleFactory.createDecoImage(  this, 7000, 2000, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_BOULDER_1 );
            ninjas.GameObjectBundleFactory.createDecoImage(  this, 6800, 2000, ninjas.DecoPosition.FG, ninjas.ImageData.IMAGE_BUSH_2 );

            // final statue
            ninjas.GameObjectBundleFactory.createObstacle( this, 12300, 2100, ninjas.ImageData.IMAGE_STATUE_1 );

            // dojo
            ninjas.GameObjectBundleFactory.createDecoImage(  this, 11400, 2100, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_DOJO );

            // chandelier
            ninjas.GameObjectBundleFactory.createDecoImage(   this, 11673, 1805, ninjas.DecoPosition.FG, ninjas.ImageData.IMAGE_CHANDELIER );
            ninjas.GameObjectBundleFactory.createDecoSprite(  this, 11666, 1601, ninjas.DecoPosition.FG, ninjas.SpriteTemplateData.SPRITE_FLAME_1_BIG );
            ninjas.GameObjectBundleFactory.createDecoSprite(  this, 11720, 1586, ninjas.DecoPosition.FG, ninjas.SpriteTemplateData.SPRITE_FLAME_1_BIG );
            ninjas.GameObjectBundleFactory.createDecoSprite(  this, 11854, 1588, ninjas.DecoPosition.FG, ninjas.SpriteTemplateData.SPRITE_FLAME_1_BIG );
            ninjas.GameObjectBundleFactory.createDecoSprite(  this, 11905, 1617, ninjas.DecoPosition.FG, ninjas.SpriteTemplateData.SPRITE_FLAME_1_BIG );

            // candles
            ninjas.GameObjectBundleFactory.createCandle( this, 11500, 2100, ninjas.DecoPosition.FG );
            ninjas.GameObjectBundleFactory.createCandle( this, 11600, 2100, ninjas.DecoPosition.FG );
            ninjas.GameObjectBundleFactory.createCandle( this, 12000, 2100, ninjas.DecoPosition.FG );
            ninjas.GameObjectBundleFactory.createCandle( this, 12100, 2100, ninjas.DecoPosition.FG );

            // enemies
            ninjas.GameObjectBundleFactory.createEnemy( this, 10000, 2100, ninjas.CharacterFacing.RIGHT, 10000, 11150, ninjas.CharacterSpriteData.CHARACTER_SPRITE_SET_BLUE_NINJA_GUY );
            ninjas.GameObjectBundleFactory.createEnemy( this, 11670, 2100, ninjas.CharacterFacing.LEFT,  11670, 11870, ninjas.CharacterSpriteData.CHARACTER_SPRITE_SET_BLUE_NINJA_GUY );
            ninjas.GameObjectBundleFactory.createEnemy( this, 8600,  2100, ninjas.CharacterFacing.LEFT,  8600,  9500,  ninjas.CharacterSpriteData.CHARACTER_SPRITE_SET_BLUE_NINJA_GUY );
            ninjas.GameObjectBundleFactory.createEnemy( this, 6700,  2100, ninjas.CharacterFacing.LEFT,  6700,  7250,  ninjas.CharacterSpriteData.CHARACTER_SPRITE_SET_BLUE_NINJA_GUY );
        }
    }
