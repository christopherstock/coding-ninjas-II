/* eslint-disable max-len */

import * as matter from 'matter-js';
import { CapHorz, DecoPosition, GameObjectBundleFactory, Slope } from '../../game/object/GameObjectBundleFactory';
import { GroundData } from '../GroundData';
import { ImageData } from '../ImageData';
import { Level, LevelId } from '../../game/level/Level';
import { GameObjectFactory } from '../../game/object/GameObjectFactory';
import { SpriteTemplate } from '../../engine/ui/SpriteTemplate';
import { SpriteTemplateData } from '../SpriteTemplateData';
import { SiteContent } from '../../site/SiteContentSystem';
import { SitePanelAppearance } from '../../game/object/special/SiteTrigger';
import { GameAction, GameActionType } from '../../game/object/GameAction';
import { CharacterSpriteData } from '../CharacterSpriteData';
import { CharacterFacing } from '../../game/object/being/CharacterFacing';

/** ********************************************************************************************************************
*   The level data for the dev level.
***********************************************************************************************************************/
export class LevelStart extends Level {
    public  playerStartX: number                             = 2480;
    public  playerStartY: number                             = 2000;
    public  playerInitialFloat: boolean                            = false;
    public  playerInitialFacing: CharacterFacing             = CharacterFacing.RIGHT;

    public  width: number                             = 12500;
    public  height: number                             = 2500;

    /** ****************************************************************************************************************
    *   Inits a new level.
    *******************************************************************************************************************/
    protected createGameObjects(): void {
        // player
        GameObjectBundleFactory.createPlayer( this );

        // parallax bg "Mount Fuji"
        GameObjectFactory.createParallaxDeco( this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage( ImageData.IMAGE_BG_MOUNT_FUJI ) );

        // home shrine
        this.addHomeShrine();
    }

    /** ****************************************************************************************************************
    *   Adds the startup shrine.
    *******************************************************************************************************************/
    private addHomeShrine(): void {
        // ground
        GameObjectBundleFactory.createSolidGround( this, 0, 2000, 40,  5, Slope.NONE, CapHorz.NONE, GroundData.TILESET_SNOW );

        // door
        GameObjectFactory.createDoor( this, 2300, 2000, ImageData.IMAGE_DOOR_1, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_HUT, playerStartX: 1020 } ) );

        // statue
        GameObjectBundleFactory.createDecoImage( this, 2900, 2000, DecoPosition.BG, ImageData.IMAGE_STATUE_1 );

        // enemies
        GameObjectBundleFactory.createEnemy( SpriteTemplateData.SPRITE_BLUE_NINJA_STAND_LEFT, this, 0, 2000, CharacterFacing.RIGHT, 0, 1500, CharacterSpriteData.CHARACTER_SPRITE_SET_BLUE_NINJA, false );

        // friends
        GameObjectBundleFactory.createFriend( SpriteTemplateData.SPRITE_RED_NINJA_GIRL_STAND_LEFT,    this, 3000, 2000, CharacterFacing.RIGHT, 3000, 3750, CharacterSpriteData.CHARACTER_SPRITE_SET_RED_NINJA_GIRL, false );
        GameObjectBundleFactory.createFriend( SpriteTemplateData.SPRITE_MASKED_NINJA_GIRL_STAND_LEFT, this, 4000, 2000, CharacterFacing.RIGHT, 3250, 4000, CharacterSpriteData.CHARACTER_SPRITE_SET_MASKED_NINJA_GIRL, false );
        GameObjectBundleFactory.createFriend( SpriteTemplateData.SPRITE_MASKED_NINJA_GUY_STAND_LEFT,    this, 5000, 2000, CharacterFacing.RIGHT, 3750, 5000, CharacterSpriteData.CHARACTER_SPRITE_SET_MASKED_NINJA_GUY, false );
        GameObjectBundleFactory.createFriend( SpriteTemplateData.SPRITE_BLUE_NINJA_WALK_LEFT,         this, 4500, 2000, CharacterFacing.RIGHT, 4500, 5000, CharacterSpriteData.CHARACTER_SPRITE_SET_BLUE_NINJA, false );

        // trees
        GameObjectBundleFactory.createDecoImage(  this, 400, 2000, DecoPosition.BG, ImageData.IMAGE_TREE_2 );
        GameObjectBundleFactory.createDecoImage(  this, 1200, 2000, DecoPosition.FG, ImageData.IMAGE_TREE_2 );

        // tree and lion statue
        GameObjectBundleFactory.createDecoImage(  this, 3500, 2000, DecoPosition.FG, ImageData.IMAGE_TREE_2 );
        GameObjectBundleFactory.createDecoImage( this, 4500, 2000, DecoPosition.BG, ImageData.IMAGE_STATUE_LION );

        // slope down and solid ground
        GameObjectBundleFactory.createSolidGround( this, 5120, 2000, 5,  5, Slope.DESCENDING, CapHorz.NONE,  GroundData.TILESET_SNOW );
        GameObjectBundleFactory.createSolidGround( this, 5760, 2100, 15, 5, Slope.NONE,       CapHorz.NONE,  GroundData.TILESET_SNOW );

        // bridge and blue water
        GameObjectBundleFactory.createWaterArea(   this, 7680, 2260, 6, 4, ImageData.IMAGE_WATER_CENTER );
        GameObjectBundleFactory.createBridge(      this, 7750, 2100 );

        // table with flasks
        const x = 4000;
        GameObjectBundleFactory.createMovableRect( this, x+2420, 2100, ImageData.IMAGE_TABLE_1 );
        GameObjectBundleFactory.createMovableRect( this, x+2430, 1930, ImageData.IMAGE_FLASK_1 );
        GameObjectBundleFactory.createMovableRect( this, x+2462, 1930, ImageData.IMAGE_FLASK_2 );
        GameObjectBundleFactory.createMovableRect( this, x+2513, 1930, ImageData.IMAGE_FLASK_3 );

        // pot
        GameObjectBundleFactory.createMovableRect( this, x+2558, 2100, ImageData.IMAGE_POT_1 );

        // flasks on the floor
        GameObjectBundleFactory.createMovableRect( this, x+2633, 2100, ImageData.IMAGE_FLASK_2 );
        GameObjectBundleFactory.createMovableRect( this, x+2684, 2100, ImageData.IMAGE_FLASK_1 );

        // statue
        // GameObjectBundleFactory.createObstacle(this, 2000, 2000, ImageData.IMAGE_STATUE_3 );

        // dojo
        // GameObjectBundleFactory.createDecoImage(this, 4600, 2100, DecoPosition.BG, ImageData.IMAGE_DOJO );
    }

    /** ****************************************************************************************************************
    *   Adds the 1st plateau (startup shrine).
    *******************************************************************************************************************/
    private addFirstPlateau(): void {
        // ground
        GameObjectBundleFactory.createSolidGround( this, 2400, 2000, 5,  5, Slope.NONE, CapHorz.BOTH, GroundData.TILESET_SNOW );

        // site trigger
        GameObjectFactory.createSiteTrigger( this, 2000, 2000, 800, 550, SiteContent.CONTENT_WELCOME, SitePanelAppearance.LEFT, null );

        // status with bush
        GameObjectBundleFactory.createDecoImage( this, 2780, 2000, DecoPosition.BG, ImageData.IMAGE_STATUE_3 );
        GameObjectBundleFactory.createDecoImage( this, 2830, 2000, DecoPosition.FG, ImageData.IMAGE_BUSH_1 );

        // grass
        GameObjectBundleFactory.createDecoSprite( this, 2660, 2000, DecoPosition.FG, SpriteTemplateData.SPRITE_GRASS_1 );
    }

    /** ****************************************************************************************************************
    *   Adds the 2nd plateau (sigsaw).
    *******************************************************************************************************************/
    private addSecondPlateau(): void {
        // sigsaw
        GameObjectFactory.createSigsaw( this, 3400, 2000, SpriteTemplate.createFromSingleImage( ImageData.SIGSAW_1 ), -1 );

        // stone obstacle
        GameObjectBundleFactory.createObstacle( this, 3991, 2150, ImageData.IMAGE_STONE_SPHERE );

        // wooden crates
        // GameObjectBundleFactory.createMovableRect( this, 1841, 2000, ImageData.IMAGE_CRATE_WOOD_1 );
        GameObjectBundleFactory.createMovableRect( this, 3966, 2000, ImageData.IMAGE_CRATE_WOOD_1 );
        // GameObjectBundleFactory.createMovableRect( this, 1924, 1875, ImageData.IMAGE_CRATE_WOOD_1 );
    }

    /** ****************************************************************************************************************
    *   Adds the 3rd plateau.
    *******************************************************************************************************************/
    private addThirdPlateau(): void {
        // ground
        GameObjectBundleFactory.createSolidGround( this, 4460, 2000, 5,  5, Slope.NONE, CapHorz.BOTH, GroundData.TILESET_SNOW );

        // statue
        GameObjectBundleFactory.createDecoImage( this, 4580, 2000, DecoPosition.BG, ImageData.IMAGE_STATUE_2 );

        // candles
        GameObjectBundleFactory.createCandle( this, 4765, 2000, DecoPosition.FG );
        GameObjectBundleFactory.createCandle( this, 4865, 2000, DecoPosition.BG );
        GameObjectBundleFactory.createCandle( this, 4965, 2000, DecoPosition.FG );

        // bushes
        GameObjectBundleFactory.createDecoImage( this, 4630, 2000, DecoPosition.FG, ImageData.IMAGE_BUSH_1 );
        GameObjectBundleFactory.createDecoImage( this, 4690, 2000, DecoPosition.BG, ImageData.IMAGE_BUSH_2 );
    }

    /** ****************************************************************************************************************
    *   Adds the 4th plateau (bounce).
    *******************************************************************************************************************/
    private addFourthPlateau(): void {
        // bounce
        GameObjectFactory.createBounce( this, 7460, 2000, SpriteTemplate.createFromSingleImage( ImageData.BOUNCE_1 ), 0.00075 );

        // wooden crates
        GameObjectBundleFactory.createMovableRect( this, 5600, 2000, ImageData.IMAGE_CRATE_WOOD_1 );
        GameObjectBundleFactory.createMovableRect( this, 5725, 2000, ImageData.IMAGE_CRATE_WOOD_1 );
        GameObjectBundleFactory.createMovableRect( this, 5884, 2000, ImageData.IMAGE_CRATE_WOOD_1 );
        GameObjectBundleFactory.createMovableRect( this, 6041, 2000, ImageData.IMAGE_CRATE_WOOD_1 );
        GameObjectBundleFactory.createMovableRect( this, 6166, 2000, ImageData.IMAGE_CRATE_WOOD_1 );

        // stones
        GameObjectBundleFactory.createMovableRect( this, 5650, 1900, ImageData.IMAGE_STONE_SPHERE );
        GameObjectBundleFactory.createMovableRect( this, 5750, 1900, ImageData.IMAGE_STONE_SPHERE );
        GameObjectBundleFactory.createMovableRect( this, 5900, 1900, ImageData.IMAGE_STONE_SPHERE );
        GameObjectBundleFactory.createMovableRect( this, 6070, 1900, ImageData.IMAGE_STONE_SPHERE );
    }

    /** ****************************************************************************************************************
    *   Adds the 5th plateau.
    *******************************************************************************************************************/
    private addFifthPlateau(): void {
        // ground
        GameObjectBundleFactory.createSolidGround( this, 6620, 2000, 5,  5, Slope.NONE, CapHorz.BOTH, GroundData.TILESET_SNOW );

        // statue
        GameObjectBundleFactory.createDecoImage( this, 6780, 2000, DecoPosition.BG, ImageData.IMAGE_STATUE_1 );

        // bush
        GameObjectBundleFactory.createDecoImage( this, 6690, 2000, DecoPosition.FG, ImageData.IMAGE_BUSH_1 );

        // candles
        GameObjectBundleFactory.createCandle( this, 6930, 2000, DecoPosition.BG );
        GameObjectBundleFactory.createCandle( this, 7060, 2000, DecoPosition.FG );

        // wooden crate
        GameObjectBundleFactory.createMovableRect( this, 6980, 2000, ImageData.IMAGE_CRATE_WOOD_1 );
        GameObjectBundleFactory.createMovableRect( this, 7095, 2000, ImageData.IMAGE_CRATE_WOOD_1 );
        GameObjectBundleFactory.createMovableRect( this, 7042, 1875, ImageData.IMAGE_CRATE_WOOD_1 );
    }

    /** ****************************************************************************************************************
    *   Adds the 6th plateau (platform).
    *******************************************************************************************************************/
    private addSixthPlateau(): void {
        // platform
        GameObjectFactory.createPlatform( this, SpriteTemplate.createFromSingleImage( ImageData.PLATFORM_1 ), 3.5, [ matter.Vector.create( 5260, 2000 ), matter.Vector.create( 6000, 2000 ) ] );
    }

    /** ****************************************************************************************************************
    *   Adds the 7th plateau (main).
    *******************************************************************************************************************/
    private addSeventhPlateau(): void {
        // bushes and tree before dojo
        GameObjectBundleFactory.createDecoImage(  this, 12000, 2100, DecoPosition.FG, ImageData.IMAGE_BUSH_1 );
        GameObjectBundleFactory.createDecoImage(  this, 12070, 2120, DecoPosition.BG, ImageData.IMAGE_BUSH_2 );
        GameObjectBundleFactory.createDecoImage(  this, 12500, 2100, DecoPosition.FG, ImageData.IMAGE_TREE_2 );

        // statue before bridge
        GameObjectBundleFactory.createDecoImage( this, 10850, 2100, DecoPosition.BG, ImageData.IMAGE_STATUE_3 );

        // bridge and blue water
        GameObjectBundleFactory.createWaterArea(   this, 11150, 2260, 6, 4, ImageData.IMAGE_WATER_CENTER );
        GameObjectBundleFactory.createBridge(      this, 11220, 2100 );

        // ground
        GameObjectBundleFactory.createSolidGround( this, 8250, 2000, 10, 5, Slope.NONE,       CapHorz.LEFT,  GroundData.TILESET_SNOW );
        GameObjectBundleFactory.createSolidGround( this, 9530, 2000, 5,  5, Slope.DESCENDING, CapHorz.NONE,  GroundData.TILESET_SNOW );
        GameObjectBundleFactory.createSolidGround( this, 10170, 2100, 8,  5, Slope.NONE,       CapHorz.RIGHT, GroundData.TILESET_SNOW );

        // ground after bridge
        GameObjectBundleFactory.createSolidGround( this, 11870, 2100, 20, 5, Slope.NONE,      CapHorz.BOTH,  GroundData.TILESET_SNOW );

        // tree
        GameObjectBundleFactory.createDecoImage(  this, 10030, 2100, DecoPosition.BG, ImageData.IMAGE_TREE_1 );

        // site trigger
        // GameObjectFactory.createSiteTrigger( this, 11400, 2100, 3000, 500, SiteContent.CONTENT_WELCOME, SitePanelAppearance.RIGHT, null );

        // movables
        GameObjectBundleFactory.createMovableRect( this, 9350, 2000, ImageData.IMAGE_POT_1 );
        GameObjectBundleFactory.createMovableCircular( this, 9450, 2000, 0.0, ImageData.IMAGE_STONE_SPHERE );

        // boulder and bush
        GameObjectBundleFactory.createDecoImage(  this, 9000, 2000, DecoPosition.BG, ImageData.IMAGE_BOULDER_1 );
        GameObjectBundleFactory.createDecoImage(  this, 8800, 2000, DecoPosition.FG, ImageData.IMAGE_BUSH_2 );

        // final statue
        GameObjectBundleFactory.createObstacle( this, 14300, 2100, ImageData.IMAGE_STATUE_1 );

        // dojo
        GameObjectBundleFactory.createDecoImage(  this, 13400, 2100, DecoPosition.BG, ImageData.IMAGE_DOJO );

        // chandelier
        GameObjectBundleFactory.createDecoImage(   this, 13673, 1805, DecoPosition.FG, ImageData.IMAGE_CHANDELIER );
        GameObjectBundleFactory.createDecoSprite(  this, 13666, 1601, DecoPosition.FG, SpriteTemplateData.SPRITE_FLAME_1_BIG );
        GameObjectBundleFactory.createDecoSprite(  this, 13720, 1586, DecoPosition.FG, SpriteTemplateData.SPRITE_FLAME_1_BIG );
        GameObjectBundleFactory.createDecoSprite(  this, 13854, 1588, DecoPosition.FG, SpriteTemplateData.SPRITE_FLAME_1_BIG );
        GameObjectBundleFactory.createDecoSprite(  this, 13905, 1617, DecoPosition.FG, SpriteTemplateData.SPRITE_FLAME_1_BIG );

        // candles
        GameObjectBundleFactory.createCandle( this, 13500, 2100, DecoPosition.FG );
        GameObjectBundleFactory.createCandle( this, 13600, 2100, DecoPosition.FG );
        GameObjectBundleFactory.createCandle( this, 14000, 2100, DecoPosition.FG );
        GameObjectBundleFactory.createCandle( this, 14100, 2100, DecoPosition.FG );

        // enemies
        GameObjectBundleFactory.createEnemy( SpriteTemplateData.SPRITE_BLUE_NINJA_STAND_LEFT, this, 12000, 2100, CharacterFacing.RIGHT, 10000, 11150, CharacterSpriteData.CHARACTER_SPRITE_SET_BLUE_NINJA );
        GameObjectBundleFactory.createEnemy( SpriteTemplateData.SPRITE_BLUE_NINJA_STAND_LEFT, this, 13670, 2100, CharacterFacing.LEFT,  11670, 11870, CharacterSpriteData.CHARACTER_SPRITE_SET_BLUE_NINJA );
        GameObjectBundleFactory.createEnemy( SpriteTemplateData.SPRITE_BLUE_NINJA_STAND_LEFT, this, 10600,  2100, CharacterFacing.LEFT,  8600,  9500,  CharacterSpriteData.CHARACTER_SPRITE_SET_BLUE_NINJA );
        GameObjectBundleFactory.createEnemy( SpriteTemplateData.SPRITE_BLUE_NINJA_STAND_LEFT, this, 8700,  2100, CharacterFacing.LEFT,  6700,  7250,  CharacterSpriteData.CHARACTER_SPRITE_SET_BLUE_NINJA );
    }
}
