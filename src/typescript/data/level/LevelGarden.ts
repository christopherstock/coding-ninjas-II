/* eslint-disable max-len */

import { Level, LevelId } from '../../game/level/Level';
import { CapHorz, CapVert, DecoPosition, GameObjectBundleFactory, Slope } from '../../game/object/GameObjectBundleFactory';
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

        // billboard 'welcome'
        GameObjectBundleFactory.createDecoImage(this, 4000, 1400, DecoPosition.FG, ImageData.BILLBOARD);
        GameObjectBundleFactory.createDecoImage(this, 4000, 1400, DecoPosition.FG, ImageData.BILLBOARD_WELCOME);

        // bridge and blue water
        GameObjectBundleFactory.createBridge(this, 2374, 1400);
        GameObjectBundleFactory.createWaterArea(this, 2304, 1560, 6, 4, ImageData.WATER_CENTER);

        // pots
        GameObjectBundleFactory.createMovableRect(this, -1800 + 2558, -700 + 2100, ImageData.POT_1);
        GameObjectBundleFactory.createMovableRect(this, -1800 + 2058, -700 + 2100, ImageData.POT_1);

        // door to market
        GameObjectFactory.createDoor(this, 500, 1400, ImageData.DOOR_6, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_MARKET, playerStartX: 3725 }));

        // ground
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_GREENFIELD, 0, 1400, 18,  3, Slope.NONE, CapHorz.NONE, CapVert.TOP);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_GREENFIELD, 3072, 1400, 31,  3, Slope.NONE, CapHorz.NONE, CapVert.TOP);
    }
}
