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
    public width: number = 10368 + 128;
    public height: number = 2500;
    public playerStartX: number = 1000;
    public playerStartY: number = 1400;
    public playerInitialFacing: CharacterFacing = CharacterFacing.RIGHT;
    public playerInitialFloat: boolean = false;

    protected createGameObjects(): void {
        GameObjectBundleFactory.createPlayer(this);
        GameObjectFactory.createParallaxDeco(this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage(ImageData.BG_DOJO));

        this.addStartZone();
        this.addStoveZone();
        this.addWalls();
    }

    private addStartZone(): void {
        const x = -1600;
        const y = -700;

        // door back to start
        GameObjectFactory.createDoor(this, 1000, 1400, ImageData.DOOR_2, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_START, playerStartX: 15595, playerStartY: 2240 }));

        // chandelier
        this.addChandelier(-11300 - 1450, -700);

        // table with flasks, pots and goblet
        GameObjectBundleFactory.createMovableRect(this, x + 1920, y + 2100, ImageData.TABLE_1, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 1930, y + 1930, ImageData.FLASK_1, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 1962, y + 1930, ImageData.FLASK_2, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 2013, y + 1930, ImageData.FLASK_3, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 2060, y + 2100, ImageData.POT, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 2150, y + 2100, ImageData.GOBLET, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        // flasks on the floor ?
        // GameObjectBundleFactory.createMovableRect(this, x + 2133, y + 2100, ImageData.FLASK_2, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        // GameObjectBundleFactory.createMovableRect(this, x + 2184, y + 2100, ImageData.FLASK_1, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
    }

    private addStoveZone(): void {
        this.addChandelier(-10000 - 1450, -700, true);

        GameObjectBundleFactory.createDecoImage(this, 2249, 1400, DecoPosition.FG, ImageData.STOVE);

        // billboard 'websites'
        GameObjectBundleFactory.createBillboard(this, 2900, 1400, DecoPosition.BG, ImageData.BILLBOARD_WEBSITES, 'https://php8.christopherstock.de/architekt-baur/1.1/index.php/de/', 'https://www.winklerundschorn.de');

        // crates
        GameObjectBundleFactory.createMovableRect(this, 3060, 1400, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, 3205, 1400, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, 3350, 1400, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, 3495, 1400, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, 3640, 1400, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        GameObjectBundleFactory.createMovableRect(this, 3130, 1275, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, 3130 + 145, 1275, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, 3130 + 145 * 2, 1275, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, 3130 + 145 * 3, 1275, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        GameObjectBundleFactory.createMovableRect(this, 3130 + 70, 1150, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, 3130 + 70 + 145, 1150, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, 3130 + 70 + 145 * 2, 1150, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        GameObjectBundleFactory.createMovableRect(this, 3130 + 70 * 2, 1025, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, 3130 + 70 * 2 + 145, 1025, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
    }

    private addExit(): void {
        // door to garden
        GameObjectFactory.createDoor(this, 2800, 1400, ImageData.DOOR_4, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_GARDEN, playerStartX: 6020, playerStartY: 1400, playerInitFacing: CharacterFacing.LEFT }));
/*
        // destroyable crates
        GameObjectBundleFactory.createObstacle(this, x + 2000, 2000, ImageData.CRATE_WOOD, Breakable.YES);
        GameObjectBundleFactory.createObstacle(this, x + 2125, 2000, ImageData.CRATE_WOOD, Breakable.YES);
        GameObjectBundleFactory.createObstacle(this, x + 2250, 2000, ImageData.CRATE_WOOD, Breakable.YES);
        GameObjectBundleFactory.createObstacle(this, x + 2062, 1875, ImageData.CRATE_WOOD, Breakable.YES);
        GameObjectBundleFactory.createObstacle(this, x + 2187, 1875, ImageData.CRATE_WOOD, Breakable.YES);
*/
    }

    private addWalls(): void {
        const DOJO_WIDTH = 10368 + 128;

        // ground
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, 128, 1400, 27 * 3,  3, Slope.NONE, CapHorz.NONE);

        // walls
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, 0, 0, 1,  14, Slope.NONE, CapHorz.NONE, CapVert.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, 10368, 0, 1,  14, Slope.NONE, CapHorz.NONE, CapVert.NONE);
    }

    private addChandelier(x:number, y:number, onlyCandles:boolean = false): void {
        if (!onlyCandles) {
            // chandelier
            GameObjectBundleFactory.createDecoImage(this, x + 13673, y + 1805, DecoPosition.FG, ImageData.CHANDELIER);
            GameObjectBundleFactory.createDecoSprite(this, x + 13666, y + 1601, DecoPosition.FG, SpriteData.FLAME_1_BIG);
            GameObjectBundleFactory.createDecoSprite(this, x + 13720, y + 1586, DecoPosition.FG, SpriteData.FLAME_1_BIG);
            GameObjectBundleFactory.createDecoSprite(this, x + 13854, y + 1588, DecoPosition.FG, SpriteData.FLAME_1_BIG);
            GameObjectBundleFactory.createDecoSprite(this, x + 13905, y + 1617, DecoPosition.FG, SpriteData.FLAME_1_BIG);
        }

        // candles
        GameObjectBundleFactory.createCandle(this, x + 13520, y + 2100, DecoPosition.FG);
        GameObjectBundleFactory.createCandle(this, x + 13620, y + 2100, DecoPosition.FG);
        GameObjectBundleFactory.createCandle(this, x + 13980, y + 2100, DecoPosition.FG);
        GameObjectBundleFactory.createCandle(this, x + 14080, y + 2100, DecoPosition.FG);
    }
}
