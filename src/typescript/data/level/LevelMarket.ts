/* eslint-disable max-len */

import { Level, LevelId } from '../../game/level/Level';
import { CapHorz, DecoPosition, GameObjectBundleFactory, Slope } from '../../game/object/GameObjectBundleFactory';
import { GameObjectFactory } from '../../game/object/GameObjectFactory';
import { ImageData } from '../ImageData';
import { GameAction, GameActionType } from '../../game/object/GameAction';
import { TilesetData } from '../TilesetData';
import { SpriteTemplate } from '../../engine/ui/SpriteTemplate';
import { CharacterFacing } from '../../game/object/being/CharacterFacing';

/** ********************************************************************************************************************
*   The level data for the Garden level.
***********************************************************************************************************************/
export class LevelMarket extends Level {
    public playerStartX: number = 1400;
    public playerStartY: number = 1400;
    public playerInitialFloat: boolean = false;
    public playerInitialFacing: CharacterFacing = CharacterFacing.RIGHT;

    public width: number = 15000;
    public height: number = 4500;

    /** ****************************************************************************************************************
    *   Inits a new level.
    *******************************************************************************************************************/
    protected createGameObjects(): void {

        GameObjectBundleFactory.createPlayer(this);
        GameObjectFactory.createParallaxDeco(this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage(ImageData.BG_MARKET));

        this.addMarketSetup();
    }

    /** ****************************************************************************************************************
    *   Adds the garden setup.
    *******************************************************************************************************************/
    private addMarketSetup(): void {
        // ground
        GameObjectBundleFactory.createSolidGround(this, 0, 1400, 40,  3, Slope.NONE, CapHorz.NONE, TilesetData.TILESET_DARK_GROUND);

        // walls
        GameObjectBundleFactory.createSolidGround(this, 0, 0, 1,  11, Slope.NONE, CapHorz.NONE, TilesetData.TILESET_SNOW);
        GameObjectBundleFactory.createSolidGround(this, 2372, 0, 1,  11, Slope.NONE, CapHorz.NONE, TilesetData.TILESET_SNOW);

        // door back to start level
        GameObjectFactory.createDoor(this, 1000, 1400, ImageData.DOOR_7, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_START, playerStartX: 6730, playerStartY: 2100 }));
    }
}
