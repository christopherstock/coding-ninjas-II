/* eslint-disable max-len */

import { Level, LevelId } from '../../game/level/Level';
import { CapHorz, CapVert, DecoPosition, GameObjectBundleFactory, Slope } from '../../game/object/GameObjectBundleFactory';
import { GameObjectFactory } from '../../game/object/GameObjectFactory';
import { ImageData } from '../ImageData';
import { GameAction, GameActionType } from '../../game/object/GameAction';
import { TilesetData } from '../TilesetData';
import { SpriteTemplate } from '../../engine/ui/SpriteTemplate';
import { CharacterFacing } from '../../game/object/being/CharacterFacing';
import { SpriteData } from '../SpriteData';
import { BodyDensity, BodyFriction } from '../../base/SettingMatter';
import { Breakable } from '../../game/object/GameObject';

export class LevelDojo extends Level {
    public id: LevelId = LevelId.LEVEL_DOJO;
    public width: number = 3584;
    public height: number = 2500;
    public playerStartX: number = 250;
    public playerStartY: number = 1400;
    public playerInitialFacing: CharacterFacing = CharacterFacing.RIGHT;
    public playerInitialFloat: boolean = false;

    protected createGameObjects(): void {
        // player
        GameObjectBundleFactory.createPlayer(this);

        // parallax bg "DoJo"
        GameObjectFactory.createParallaxDeco(this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage(ImageData.BG_DOJO));

        // home shrine
        this.addHomeShrine();
    }

    private addHomeShrine(): void {
        // door back to start
        GameObjectFactory.createDoor(this, 1000, 1400, ImageData.DOOR_2, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_START, playerStartX: 6620, playerStartY: 2100 }));

        // table with flasks and pots
        let x = -1500;
        let y = -700;
        GameObjectBundleFactory.createMovableRect(this, x + 1920, y + 2100, ImageData.TABLE_1);
        GameObjectBundleFactory.createMovableRect(this, x + 1930, y + 1930, ImageData.FLASK_1, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 1962, y + 1930, ImageData.FLASK_2, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 2013, y + 1930, ImageData.FLASK_3, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 2058, y + 2100, ImageData.POT_1);

        // flasks on the floor
        GameObjectBundleFactory.createMovableRect(this, x + 2133, y + 2100, ImageData.FLASK_2, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 2184, y + 2100, ImageData.FLASK_1, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        // chandelier
        x = -12300;
        y = -700;
        GameObjectBundleFactory.createDecoImage(this, x + 13673, y + 1805, DecoPosition.FG, ImageData.CHANDELIER);
        GameObjectBundleFactory.createDecoSprite(this, x + 13666, y + 1601, DecoPosition.FG, SpriteData.FLAME_1_BIG);
        GameObjectBundleFactory.createDecoSprite(this, x + 13720, y + 1586, DecoPosition.FG, SpriteData.FLAME_1_BIG);
        GameObjectBundleFactory.createDecoSprite(this, x + 13854, y + 1588, DecoPosition.FG, SpriteData.FLAME_1_BIG);
        GameObjectBundleFactory.createDecoSprite(this, x + 13905, y + 1617, DecoPosition.FG, SpriteData.FLAME_1_BIG);
        // candles
        GameObjectBundleFactory.createCandle(this, x + 13520, y + 2100, DecoPosition.FG);
        GameObjectBundleFactory.createCandle(this, x + 13620, y + 2100, DecoPosition.FG);
        GameObjectBundleFactory.createCandle(this, x + 13980, y + 2100, DecoPosition.FG);
        GameObjectBundleFactory.createCandle(this, x + 14080, y + 2100, DecoPosition.FG);

        // billboard 'websites'
        GameObjectBundleFactory.createBillboard(this, 1900, 1400, DecoPosition.FG, ImageData.BILLBOARD_WEBSITES, 'https://php8.christopherstock.de/architekt-baur/1.1/index.php/de/', 'https://www.winklerundschorn.de');

        // door to garden
        GameObjectFactory.createDoor(this, 2800, 1400, ImageData.DOOR_4, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_GARDEN, playerStartX: 6020, playerStartY: 1400, playerInitFacing: CharacterFacing.LEFT }));

        // crates
        GameObjectBundleFactory.createMovableRect(this, 3060, 1400, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, 3205, 1400, ImageData.CRATE_STEEL, BodyDensity.METAL, BodyFriction.METAL, Breakable.NO);
        GameObjectBundleFactory.createMovableRect(this, 3130, 1275, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        // ground and walls
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, 128, 1400, 26,  3, Slope.NONE, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, 0, 0, 1,  14, Slope.NONE, CapHorz.NONE, CapVert.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, 3456, 0, 1,  14, Slope.NONE, CapHorz.NONE, CapVert.NONE);
    }
}
