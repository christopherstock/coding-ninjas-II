/* eslint-disable max-len */

import * as matter from 'matter-js';
import * as ninjas from '../ninjas';

/** ********************************************************************************************************************
*   The level data for the dev level.
***********************************************************************************************************************/
export class LevelData extends ninjas.Level
{
    /** Player start position X. */
    public  playerStartX            :number                             = 2480;
    /** Player start position Y. */
    public  playerStartY            :number                             = 1200;
    /** Player initial parachute state. */
    public  playerInitialFloat      :boolean                            = true;
    /** Player initial facing. */
    public  playerInitialFacing     :ninjas.CharacterFacing             = ninjas.CharacterFacing.RIGHT;

    /** The width of this level. */
    public  width                   :number                             = 17000;
    /** The height of this level. */
    public  height                  :number                             = 5000;

    /** ****************************************************************************************************************
    *   Inits a new level.
    *******************************************************************************************************************/
    protected createGameObjects() : void
    {
        // player
        ninjas.GameObjectBundleFactory.createPlayer( this );

        // parallax bg
        ninjas.GameObjectFactory.createParallaxDeco( this, 0, 0, 1.0, ninjas.DecoPosition.BG, ninjas.SpriteTemplate.createFromSingleImage( ninjas.ImageData.IMAGE_BG ) );

        // TODO offset x/y param for all plateaus!

        // TODO remove all unused confusing panel images!

        // TODO fix moving plateau

        // plateaus
        this.addFirstPlateau();
        /* if (false) */ this.addSecondPlateau();
        /* if (false) */ this.addThirdPlateau();
        /* if (false) */ this.addFourthPlateau();
        /* if (false) */ this.addFifthPlateau();
        /* if (false) */ this.addSixthPlateau();
        /* if (false) */ this.addSeventhPlateau();
    }

    /** ****************************************************************************************************************
    *   Adds the 1st plateau (startup shrine).
    *******************************************************************************************************************/
    private addFirstPlateau() : void
    {
        // ground
        ninjas.GameObjectBundleFactory.createSolidGround( this, 2400, 2000, 5,  5, ninjas.Slope.NONE, ninjas.CapHorz.BOTH, ninjas.GroundData.TILESET_SNOW );

        // site trigger
        ninjas.GameObjectFactory.createSiteTrigger( this, 2000, 2000, 800, 550, ninjas.SiteContent.CONTENT_WELCOME, ninjas.SitePanelAppearance.LEFT, null );

        // status with bush
        ninjas.GameObjectBundleFactory.createDecoImage( this, 2780, 2000, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_STATUE_3 );
        ninjas.GameObjectBundleFactory.createDecoImage( this, 2830, 2000, ninjas.DecoPosition.FG, ninjas.ImageData.IMAGE_BUSH_1 );

        // grass
        ninjas.GameObjectBundleFactory.createDecoSprite( this, 2660, 2000, ninjas.DecoPosition.FG, ninjas.SpriteTemplateData.SPRITE_GRASS_1 );

        // table with flasks
        ninjas.GameObjectBundleFactory.createObstacle(    this, 2420, 2000, ninjas.ImageData.IMAGE_TABLE_1 );
        ninjas.GameObjectBundleFactory.createMovableRect( this, 2430, 1830, ninjas.ImageData.IMAGE_FLASK_1 );
        ninjas.GameObjectBundleFactory.createMovableRect( this, 2462, 1830, ninjas.ImageData.IMAGE_FLASK_2 );
        ninjas.GameObjectBundleFactory.createMovableRect( this, 2513, 1830, ninjas.ImageData.IMAGE_FLASK_3 );

        // pot
        ninjas.GameObjectBundleFactory.createMovableRect( this, 2558, 2000, ninjas.ImageData.IMAGE_POT_1 );

        // flasks on the floor
        ninjas.GameObjectBundleFactory.createMovableRect( this, 2633, 2000, ninjas.ImageData.IMAGE_FLASK_2 );
        ninjas.GameObjectBundleFactory.createMovableRect( this, 2684, 2000, ninjas.ImageData.IMAGE_FLASK_1 );
    }

    /** ****************************************************************************************************************
    *   Adds the 2nd plateau (sigsaw).
    *******************************************************************************************************************/
    private addSecondPlateau() : void
    {
        // sigsaw
        ninjas.GameObjectFactory.createSigsaw( this, 3400, 2000, ninjas.SpriteTemplate.createFromSingleImage( ninjas.ImageData.SIGSAW_1 ), -1 );

        // stone obstacle
        ninjas.GameObjectBundleFactory.createObstacle( this, 3991, 2150, ninjas.ImageData.IMAGE_STONE_SPHERE );

        // wooden crates
        // ninjas.GameObjectBundleFactory.createMovableRect( this, 1841, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
        ninjas.GameObjectBundleFactory.createMovableRect( this, 3966, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
        // ninjas.GameObjectBundleFactory.createMovableRect( this, 1924, 1875, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
    }

    /** ****************************************************************************************************************
    *   Adds the 3rd plateau.
    *******************************************************************************************************************/
    private addThirdPlateau() : void
    {
        // ground
        ninjas.GameObjectBundleFactory.createSolidGround( this, 4460, 2000, 5,  5, ninjas.Slope.NONE, ninjas.CapHorz.BOTH, ninjas.GroundData.TILESET_SNOW );

        // statue
        ninjas.GameObjectBundleFactory.createDecoImage( this, 4580, 2000, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_STATUE_2 );

        // candles
        ninjas.GameObjectBundleFactory.createCandle( this, 4765, 2000, ninjas.DecoPosition.FG );
        ninjas.GameObjectBundleFactory.createCandle( this, 4865, 2000, ninjas.DecoPosition.BG );
        ninjas.GameObjectBundleFactory.createCandle( this, 4965, 2000, ninjas.DecoPosition.FG );

        // bushes
        ninjas.GameObjectBundleFactory.createDecoImage( this, 4630, 2000, ninjas.DecoPosition.FG, ninjas.ImageData.IMAGE_BUSH_1 );
        ninjas.GameObjectBundleFactory.createDecoImage( this, 4690, 2000, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_BUSH_2 );
    }

    /** ****************************************************************************************************************
    *   Adds the 4th plateau (bounce).
    *******************************************************************************************************************/
    private addFourthPlateau() : void
    {
        // bounce
        ninjas.GameObjectFactory.createBounce( this, 7460, 2000, ninjas.SpriteTemplate.createFromSingleImage( ninjas.ImageData.BOUNCE_1 ), 0.00075 );

        // wooden crates
        ninjas.GameObjectBundleFactory.createMovableRect( this, 5600, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
        ninjas.GameObjectBundleFactory.createMovableRect( this, 5725, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
        ninjas.GameObjectBundleFactory.createMovableRect( this, 5884, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
        ninjas.GameObjectBundleFactory.createMovableRect( this, 6041, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
        ninjas.GameObjectBundleFactory.createMovableRect( this, 6166, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );

        // stones
        ninjas.GameObjectBundleFactory.createMovableRect( this, 5650, 1900, ninjas.ImageData.IMAGE_STONE_SPHERE );
        ninjas.GameObjectBundleFactory.createMovableRect( this, 5750, 1900, ninjas.ImageData.IMAGE_STONE_SPHERE );
        ninjas.GameObjectBundleFactory.createMovableRect( this, 5900, 1900, ninjas.ImageData.IMAGE_STONE_SPHERE );
        ninjas.GameObjectBundleFactory.createMovableRect( this, 6070, 1900, ninjas.ImageData.IMAGE_STONE_SPHERE );
    }

    /** ****************************************************************************************************************
    *   Adds the 5th plateau.
    *******************************************************************************************************************/
    private addFifthPlateau() : void
    {
        // ground
        ninjas.GameObjectBundleFactory.createSolidGround( this, 6620, 2000, 5,  5, ninjas.Slope.NONE, ninjas.CapHorz.BOTH, ninjas.GroundData.TILESET_SNOW );

        // statue
        ninjas.GameObjectBundleFactory.createDecoImage( this, 6780, 2000, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_STATUE_1 );

        // bush
        ninjas.GameObjectBundleFactory.createDecoImage( this, 6690, 2000, ninjas.DecoPosition.FG, ninjas.ImageData.IMAGE_BUSH_1 );

        // candles
        ninjas.GameObjectBundleFactory.createCandle( this, 6930, 2000, ninjas.DecoPosition.BG );
        ninjas.GameObjectBundleFactory.createCandle( this, 7060, 2000, ninjas.DecoPosition.FG );

        // wooden crate
        ninjas.GameObjectBundleFactory.createMovableRect( this, 6980, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
        ninjas.GameObjectBundleFactory.createMovableRect( this, 7095, 2000, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
        ninjas.GameObjectBundleFactory.createMovableRect( this, 7042, 1875, ninjas.ImageData.IMAGE_CRATE_WOOD_1 );
    }

    /** ****************************************************************************************************************
    *   Adds the 6th plateau (platform).
    *******************************************************************************************************************/
    private addSixthPlateau() : void
    {
        // platform
        ninjas.GameObjectFactory.createPlatform( this, ninjas.SpriteTemplate.createFromSingleImage( ninjas.ImageData.PLATFORM_1 ), 3.5, [ matter.Vector.create( 5260, 2000 ), matter.Vector.create( 6000, 2000 ) ] );
    }

    /** ****************************************************************************************************************
    *   Adds the 7th plateau (main).
    *******************************************************************************************************************/
    private addSeventhPlateau() : void
    {
        // bushes and tree before dojo
        ninjas.GameObjectBundleFactory.createDecoImage(  this, 12000, 2100, ninjas.DecoPosition.FG, ninjas.ImageData.IMAGE_BUSH_1 );
        ninjas.GameObjectBundleFactory.createDecoImage(  this, 12070, 2120, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_BUSH_2 );
        ninjas.GameObjectBundleFactory.createDecoImage(  this, 12500, 2100, ninjas.DecoPosition.FG, ninjas.ImageData.IMAGE_TREE_2 );

        // statue before bridge
        ninjas.GameObjectBundleFactory.createDecoImage( this, 10850, 2100, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_STATUE_3 );

        // bridge and blue water
        ninjas.GameObjectBundleFactory.createWaterArea(   this, 11150, 2260, 6, 4, ninjas.ImageData.IMAGE_WATER_CENTER );
        ninjas.GameObjectBundleFactory.createBridge(      this, 11220, 2100 );

        // ground
        ninjas.GameObjectBundleFactory.createSolidGround( this, 8250, 2000, 10, 5, ninjas.Slope.NONE,       ninjas.CapHorz.LEFT,  ninjas.GroundData.TILESET_SNOW );
        ninjas.GameObjectBundleFactory.createSolidGround( this, 9530, 2000, 5,  5, ninjas.Slope.DESCENDING, ninjas.CapHorz.NONE,  ninjas.GroundData.TILESET_SNOW );
        ninjas.GameObjectBundleFactory.createSolidGround( this, 10170, 2100, 8,  5, ninjas.Slope.NONE,       ninjas.CapHorz.RIGHT, ninjas.GroundData.TILESET_SNOW );

        // ground after bridge
        ninjas.GameObjectBundleFactory.createSolidGround( this, 11870, 2100, 20, 5, ninjas.Slope.NONE,      ninjas.CapHorz.BOTH,  ninjas.GroundData.TILESET_SNOW );

        // tree
        ninjas.GameObjectBundleFactory.createDecoImage(  this, 10030, 2100, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_TREE_1 );

        // site trigger
        // ninjas.GameObjectFactory.createSiteTrigger( this, 11400, 2100, 3000, 500, ninjas.SiteContent.CONTENT_WELCOME, ninjas.SitePanelAppearance.RIGHT, null );

        // lion statue
        ninjas.GameObjectBundleFactory.createDecoImage( this, 8500, 2000, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_STATUE_LION );

        // movables
        ninjas.GameObjectBundleFactory.createMovableRect( this, 9350, 2000, ninjas.ImageData.IMAGE_POT_1 );
        ninjas.GameObjectBundleFactory.createMovableCircular( this, 9450, 2000, 0.0, ninjas.ImageData.IMAGE_STONE_SPHERE );

        // boulder and bush
        ninjas.GameObjectBundleFactory.createDecoImage(  this, 9000, 2000, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_BOULDER_1 );
        ninjas.GameObjectBundleFactory.createDecoImage(  this, 8800, 2000, ninjas.DecoPosition.FG, ninjas.ImageData.IMAGE_BUSH_2 );

        // final statue
        ninjas.GameObjectBundleFactory.createObstacle( this, 14300, 2100, ninjas.ImageData.IMAGE_STATUE_1 );

        // dojo
        ninjas.GameObjectBundleFactory.createDecoImage(  this, 13400, 2100, ninjas.DecoPosition.BG, ninjas.ImageData.IMAGE_DOJO );

        // chandelier
        ninjas.GameObjectBundleFactory.createDecoImage(   this, 13673, 1805, ninjas.DecoPosition.FG, ninjas.ImageData.IMAGE_CHANDELIER );
        ninjas.GameObjectBundleFactory.createDecoSprite(  this, 13666, 1601, ninjas.DecoPosition.FG, ninjas.SpriteTemplateData.SPRITE_FLAME_1_BIG );
        ninjas.GameObjectBundleFactory.createDecoSprite(  this, 13720, 1586, ninjas.DecoPosition.FG, ninjas.SpriteTemplateData.SPRITE_FLAME_1_BIG );
        ninjas.GameObjectBundleFactory.createDecoSprite(  this, 13854, 1588, ninjas.DecoPosition.FG, ninjas.SpriteTemplateData.SPRITE_FLAME_1_BIG );
        ninjas.GameObjectBundleFactory.createDecoSprite(  this, 13905, 1617, ninjas.DecoPosition.FG, ninjas.SpriteTemplateData.SPRITE_FLAME_1_BIG );

        // candles
        ninjas.GameObjectBundleFactory.createCandle( this, 13500, 2100, ninjas.DecoPosition.FG );
        ninjas.GameObjectBundleFactory.createCandle( this, 13600, 2100, ninjas.DecoPosition.FG );
        ninjas.GameObjectBundleFactory.createCandle( this, 14000, 2100, ninjas.DecoPosition.FG );
        ninjas.GameObjectBundleFactory.createCandle( this, 14100, 2100, ninjas.DecoPosition.FG );

        // enemies
        ninjas.GameObjectBundleFactory.createEnemy( this, 12000, 2100, ninjas.CharacterFacing.RIGHT, 10000, 11150, ninjas.CharacterSpriteData.CHARACTER_SPRITE_SET_BLUE_NINJA_GUY );
        ninjas.GameObjectBundleFactory.createEnemy( this, 13670, 2100, ninjas.CharacterFacing.LEFT,  11670, 11870, ninjas.CharacterSpriteData.CHARACTER_SPRITE_SET_BLUE_NINJA_GUY );
        ninjas.GameObjectBundleFactory.createEnemy( this, 10600,  2100, ninjas.CharacterFacing.LEFT,  8600,  9500,  ninjas.CharacterSpriteData.CHARACTER_SPRITE_SET_BLUE_NINJA_GUY );
        ninjas.GameObjectBundleFactory.createEnemy( this, 8700,  2100, ninjas.CharacterFacing.LEFT,  6700,  7250,  ninjas.CharacterSpriteData.CHARACTER_SPRITE_SET_BLUE_NINJA_GUY );
    }
}
