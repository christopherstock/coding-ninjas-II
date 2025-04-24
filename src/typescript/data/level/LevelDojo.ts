/* eslint-disable max-len */

import { Level, LevelId } from '../../game/level/Level';
import {
    CapHorz,
    CapVert,
    DecoPosition,
    GameObjectBundleFactory,
    Slope,
} from '../../game/object/GameObjectBundleFactory';
import { GameObjectFactory } from '../../game/object/GameObjectFactory';
import { ImageData } from '../ImageData';
import { GameAction, GameActionType } from '../../game/object/GameAction';
import { TilesetData } from '../TilesetData';
import { SpriteTemplate } from '../../engine/ui/SpriteTemplate';
import { CharacterFacing } from '../../game/object/being/CharacterFacing';
import { SpriteData } from '../SpriteData';

/** ********************************************************************************************************************
*   The level data for the DoJo level.
***********************************************************************************************************************/
export class LevelDojo extends Level {
    public width: number = 3584;
    public height: number = 2500;
    public playerStartX: number = 250;
    public playerStartY: number = 1400;
    public playerInitialFloat: boolean = false;
    public playerInitialFacing: CharacterFacing = CharacterFacing.RIGHT;

    /** ****************************************************************************************************************
    *   Inits a new level.
    *******************************************************************************************************************/
    protected createGameObjects(): void {
        // player
        GameObjectBundleFactory.createPlayer(this);

        // parallax bg "Mount Fuji"
        GameObjectFactory.createParallaxDeco(this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage(ImageData.BG_TOWN));

        // home shrine
        this.addHomeShrine();
    }

    /** ****************************************************************************************************************
    *   Adds the startup shrine.
    *******************************************************************************************************************/
    private addHomeShrine(): void {
        // door back to start
        GameObjectFactory.createDoor(this, 1000, 1400, ImageData.DOOR_2, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_START, playerStartX: 6630, playerStartY: 2100 }));

        // table with flasks and pots
        let x = -1500;
        let y = -700;
        GameObjectBundleFactory.createMovableRect(this, x + 1920, y + 2100, ImageData.TABLE_1);
        GameObjectBundleFactory.createMovableRect(this, x + 1930, y + 1930, ImageData.FLASK_1);
        GameObjectBundleFactory.createMovableRect(this, x + 1962, y + 1930, ImageData.FLASK_2);
        GameObjectBundleFactory.createMovableRect(this, x + 2013, y + 1930, ImageData.FLASK_3);
        GameObjectBundleFactory.createMovableRect(this, x + 2058, y + 2100, ImageData.POT_1);

        // flasks on the floor
        GameObjectBundleFactory.createMovableRect(this, x + 2133, y + 2100, ImageData.FLASK_2);
        GameObjectBundleFactory.createMovableRect(this, x + 2184, y + 2100, ImageData.FLASK_1);

        // chandelier and candles
        x = -12300;
        y = -700;
        GameObjectBundleFactory.createDecoImage(this, x + 13673, y + 1805, DecoPosition.FG, ImageData.CHANDELIER);
        GameObjectBundleFactory.createDecoSprite(this, x + 13666, y + 1601, DecoPosition.FG, SpriteData.FLAME_1_BIG);
        GameObjectBundleFactory.createDecoSprite(this, x + 13720, y + 1586, DecoPosition.FG, SpriteData.FLAME_1_BIG);
        GameObjectBundleFactory.createDecoSprite(this, x + 13854, y + 1588, DecoPosition.FG, SpriteData.FLAME_1_BIG);
        GameObjectBundleFactory.createDecoSprite(this, x + 13905, y + 1617, DecoPosition.FG, SpriteData.FLAME_1_BIG);
        GameObjectBundleFactory.createCandle(this, x + 13500, y + 2100, DecoPosition.FG);
        GameObjectBundleFactory.createCandle(this, x + 13600, y + 2100, DecoPosition.FG);
        GameObjectBundleFactory.createCandle(this, x + 14000, y + 2100, DecoPosition.FG);
        GameObjectBundleFactory.createCandle(this, x + 14100, y + 2100, DecoPosition.FG);

        // billboard 'welcome'
        GameObjectBundleFactory.createDecoImage(this, 1900, 1400, DecoPosition.FG, ImageData.BILLBOARD);
        GameObjectBundleFactory.createDecoImage(this, 1900, 1400, DecoPosition.FG, ImageData.BILLBOARD_WELCOME);

        // door to garden
        GameObjectFactory.createDoor(this, 2800, 1400, ImageData.DOOR_4, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_GARDEN, playerStartX: 1020, playerStartY: 1400 }));

        // ground and walls
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, 128, 1400, 26,  3, Slope.NONE, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, 0, 0, 1,  14, Slope.NONE, CapHorz.NONE, CapVert.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, 3456, 0, 1,  14, Slope.NONE, CapHorz.NONE, CapVert.NONE);
    }
}
