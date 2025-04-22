/* eslint-disable max-len */

import { Level, LevelId } from '../../game/level/Level';
import { CapHorz, DecoPosition, GameObjectBundleFactory, Slope } from '../../game/object/GameObjectBundleFactory';
import { GameObjectFactory } from '../../game/object/GameObjectFactory';
import { ImageData } from '../ImageData';
import { GameAction, GameActionType } from '../../game/object/GameAction';
import { GroundData } from '../GroundData';
import { SpriteTemplate } from '../../engine/ui/SpriteTemplate';
import { CharacterFacing } from '../../game/object/being/CharacterFacing';

/** ********************************************************************************************************************
*   The level data for the dev level.
***********************************************************************************************************************/
export class LevelHut extends Level {
    public  playerStartX: number                             = 1400;
    public  playerStartY: number                             = 1400;
    public  playerInitialFloat: boolean                            = false;
    public  playerInitialFacing: CharacterFacing                    = CharacterFacing.RIGHT;

    public  width: number                             = 2500;
    public  height: number                             = 2500;

    /** ****************************************************************************************************************
    *   Inits a new level.
    *******************************************************************************************************************/
    protected createGameObjects(): void {
        // player
        GameObjectBundleFactory.createPlayer( this );

        // parallax bg "Mount Fuji"
        GameObjectFactory.createParallaxDeco( this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage( ImageData.IMAGE_BG_TOWN_1 ) );

        // home shrine
        this.addHomeShrine();
    }

    /** ****************************************************************************************************************
    *   Adds the startup shrine.
    *******************************************************************************************************************/
    private addHomeShrine(): void {
        // ground
        GameObjectBundleFactory.createSolidGround( this, 0, 1400, 40,  3, Slope.NONE, CapHorz.NONE, GroundData.TILESET_SNOW );
        // GameObjectBundleFactory.createSolidGround( this, 0, 300, 40,  5, Slope.NONE, CapHorz.NONE, GroundData.TILESET_SNOW );
        // GameObjectBundleFactory.createSolidGround( this, 0, 300, 10,  9, Slope.NONE, CapHorz.NONE, GroundData.TILESET_SNOW );
        // GameObjectBundleFactory.createSolidGround( this, 2000, 300, 10,  9, Slope.NONE, CapHorz.NONE, GroundData.TILESET_SNOW );

        // door
        GameObjectFactory.createDoor( this, 1000, 1400, ImageData.IMAGE_DOOR_2, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_START, playerStartX: 2320 } ) );

        // statue
        // GameObjectBundleFactory.createObstacle(this, 2000, 2000, ImageData.IMAGE_STATUE_3 );

        // dojo
        // GameObjectBundleFactory.createDecoImage(this, 4600, 2100, DecoPosition.BG, ImageData.IMAGE_DOJO );

        // bridge and blue water
        // GameObjectBundleFactory.createWaterArea(   this, 3050, 2260, 6, 4, ImageData.IMAGE_WATER_CENTER );
        // GameObjectBundleFactory.createBridge(      this, 3120, 2100 );

        // ground
    }
}
