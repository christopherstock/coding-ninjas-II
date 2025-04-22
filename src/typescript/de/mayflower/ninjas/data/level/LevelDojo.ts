/* eslint-disable max-len */

import { Level, LevelId } from '../../game/level/Level';
import { CapHorz, DecoPosition, GameObjectBundleFactory, Slope } from '../../game/object/GameObjectBundleFactory';
import { GameObjectFactory } from '../../game/object/GameObjectFactory';
import { ImageData } from '../ImageData';
import { GameAction, GameActionType } from '../../game/object/GameAction';
import { GroundData } from '../GroundData';
import { SpriteTemplate } from '../../engine/ui/SpriteTemplate';
import { CharacterFacing } from '../../game/object/being/CharacterFacing';
import {SpriteTemplateData} from "../SpriteTemplateData";

/** ********************************************************************************************************************
*   The level data for the DoJo level.
***********************************************************************************************************************/
export class LevelDojo extends Level {
    public  playerStartX: number = 1400;
    public  playerStartY: number = 1400;
    public  playerInitialFloat: boolean = false;
    public  playerInitialFacing: CharacterFacing = CharacterFacing.RIGHT;

    public  width: number = 2500;
    public  height: number = 2500;

    /** ****************************************************************************************************************
    *   Inits a new level.
    *******************************************************************************************************************/
    protected createGameObjects(): void {
        // player
        GameObjectBundleFactory.createPlayer( this );

        // parallax bg "Mount Fuji"
        GameObjectFactory.createParallaxDeco( this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage( ImageData.BG_TOWN_1 ) );

        // home shrine
        this.addHomeShrine();
    }

    /** ****************************************************************************************************************
    *   Adds the startup shrine.
    *******************************************************************************************************************/
    private addHomeShrine(): void {
        // ground
        GameObjectBundleFactory.createSolidGround( this, 0, 1400, 40,  3, Slope.NONE, CapHorz.NONE, GroundData.TILESET_SNOW );

        // walls
        GameObjectBundleFactory.createSolidGround( this, 0, 0, 1,  11, Slope.NONE, CapHorz.NONE, GroundData.TILESET_SNOW );
        GameObjectBundleFactory.createSolidGround( this, 2372, 0, 1,  11, Slope.NONE, CapHorz.NONE, GroundData.TILESET_SNOW );

        // door
        GameObjectFactory.createDoor( this, 1000, 1400, ImageData.DOOR_2, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_START, playerStartX: 2320 } ) );

        // table with flasks and pots
        let x = -1800;
        let y = -700;
        GameObjectBundleFactory.createMovableRect( this, x+2420, y+2100, ImageData.TABLE_1 );
        GameObjectBundleFactory.createMovableRect( this, x+2430, y+1930, ImageData.FLASK_1 );
        GameObjectBundleFactory.createMovableRect( this, x+2462, y+1930, ImageData.FLASK_2 );
        GameObjectBundleFactory.createMovableRect( this, x+2513, y+1930, ImageData.FLASK_3 );
        GameObjectBundleFactory.createMovableRect( this, x+2558, y+2100, ImageData.POT_1 );

        GameObjectBundleFactory.createMovableRect( this, x+1920, y+2100, ImageData.TABLE_1 );
        GameObjectBundleFactory.createMovableRect( this, x+1930, y+1930, ImageData.FLASK_1 );
        GameObjectBundleFactory.createMovableRect( this, x+1962, y+1930, ImageData.FLASK_2 );
        GameObjectBundleFactory.createMovableRect( this, x+2013, y+1930, ImageData.FLASK_3 );
        GameObjectBundleFactory.createMovableRect( this, x+2058, y+2100, ImageData.POT_1 );

        // flasks on the floor
        GameObjectBundleFactory.createMovableRect( this, x+2633, y+2100, ImageData.FLASK_2 );
        GameObjectBundleFactory.createMovableRect( this, x+2684, y+2100, ImageData.FLASK_1 );

        // chandelier
        x = -12300;
        y = -700;

        GameObjectBundleFactory.createDecoImage(   this, x+13673, y+1805, DecoPosition.FG, ImageData.CHANDELIER );
        GameObjectBundleFactory.createDecoSprite(  this, x+13666, y+1601, DecoPosition.FG, SpriteTemplateData.SPRITE_FLAME_1_BIG );
        GameObjectBundleFactory.createDecoSprite(  this, x+13720, y+1586, DecoPosition.FG, SpriteTemplateData.SPRITE_FLAME_1_BIG );
        GameObjectBundleFactory.createDecoSprite(  this, x+13854, y+1588, DecoPosition.FG, SpriteTemplateData.SPRITE_FLAME_1_BIG );
        GameObjectBundleFactory.createDecoSprite(  this, x+13905, y+1617, DecoPosition.FG, SpriteTemplateData.SPRITE_FLAME_1_BIG );

        // candles
        GameObjectBundleFactory.createCandle( this, x+13500, y+2100, DecoPosition.FG );
        GameObjectBundleFactory.createCandle( this, x+13600, y+2100, DecoPosition.FG );
        GameObjectBundleFactory.createCandle( this, x+14000, y+2100, DecoPosition.FG );
        GameObjectBundleFactory.createCandle( this, x+14100, y+2100, DecoPosition.FG );

        // table with flasks
        x = -500;
        GameObjectBundleFactory.createMovableRect( this, x+2420, y+2100, ImageData.TABLE_1 );
        GameObjectBundleFactory.createMovableRect( this, x+2430, y+1930, ImageData.FLASK_1 );
        GameObjectBundleFactory.createMovableRect( this, x+2462, y+1930, ImageData.FLASK_2 );
        GameObjectBundleFactory.createMovableRect( this, x+2513, y+1930, ImageData.FLASK_3 );
        GameObjectBundleFactory.createMovableRect( this, x+2558, y+2100, ImageData.POT_1 );

        // statue
        // GameObjectBundleFactory.createObstacle(this, 2000, 2000, ImageData.STATUE_3 );

        // ground
    }
}
