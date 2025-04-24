/* eslint-disable max-len */

import { Level, LevelId } from '../../game/level/Level';
import {
    CapHorz,
    CapVert,
    DecoPosition,
    GameObjectBundleFactory,
    Slope
} from '../../game/object/GameObjectBundleFactory';
import { GameObjectFactory } from '../../game/object/GameObjectFactory';
import { ImageData } from '../ImageData';
import { GameAction, GameActionType } from '../../game/object/GameAction';
import { TilesetData } from '../TilesetData';
import { SpriteTemplate } from '../../engine/ui/SpriteTemplate';
import { CharacterFacing } from '../../game/object/being/CharacterFacing';

/** ********************************************************************************************************************
*   The level data for the Garden level.
***********************************************************************************************************************/
export class LevelGarden extends Level {
    public width: number = 7040;
    public height: number = 4500;
    public playerStartX: number = 250;
    public playerStartY: number = 1400;
    public playerInitialFloat: boolean = false;
    public playerInitialFacing: CharacterFacing = CharacterFacing.RIGHT;

    /** ****************************************************************************************************************
    *   Inits a new level.
    *******************************************************************************************************************/
    protected createGameObjects(): void {

        GameObjectBundleFactory.createPlayer(this);
        GameObjectFactory.createParallaxDeco(this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage(ImageData.BG_GARDEN));

        this.addGardenSetup();
    }

    /** ****************************************************************************************************************
    *   Adds the garden setup.
    *******************************************************************************************************************/
    private addGardenSetup(): void {
        // door back to DoJo
        GameObjectFactory.createDoor(this, 6000, 1400, ImageData.DOOR_5, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_DOJO, playerStartX: 2820, playerStartY: 1400 }));

        // stone obstacle
        GameObjectBundleFactory.createMovableCircular(this, 1600, 1400, 0.0, ImageData.STONE_SPHERE);

        // door to market
        GameObjectFactory.createDoor(this, 2000, 1400, ImageData.DOOR_6, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_MARKET, playerStartX: 3725 }));

        // pots
        const x = -1800;
        const y = -700;
        GameObjectBundleFactory.createMovableRect(this, x + 2558, y + 2100, ImageData.POT_1);
        GameObjectBundleFactory.createMovableRect(this, x + 2058, y + 2100, ImageData.POT_1);

        // ground and walls
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_GREENFIELD, 0, 1400, 55,  3, Slope.NONE, CapHorz.NONE, CapVert.TOP);
        // GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_GREENFIELD, 0, 0, 1,  14, Slope.NONE, CapHorz.NONE, CapVert.NONE);
        // GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_GREENFIELD, 6912, 0, 1,  14, Slope.NONE, CapHorz.NONE, CapVert.NONE);
    }
}
