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
import { BodyDensity, BodyFriction } from '../../base/SettingMatter';
import { Breakable } from '../../game/object/GameObject';
import { MirrorImage } from '../../engine/ui/MirrorImage';
import { CharacterSpriteData } from '../CharacterSpriteData';

export class LevelDojo extends Level {
    public id: LevelId = LevelId.LEVEL_DOJO;
    public width: number = 10240;
    public height: number = 1784;
    public playerStartX: number = 1020;
    public playerStartY: number = 1400;
    public playerInitialFacing: CharacterFacing = CharacterFacing.LEFT;
    public playerInitialFloat: boolean = false;

    protected createGameObjects(): void {
        GameObjectBundleFactory.createPlayer(this);
        GameObjectFactory.createParallaxDeco(this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage(ImageData.BG_DOJO));

        this.addStartZone();
        this.addStoveZone();
        this.addObstacleZone();
        this.addExit();

        this.addWalls();
    }

    private addStartZone(): void {
        const x = 0;
        const y = -700;

        // door back to start zone
        GameObjectFactory.createDoor(this, 1000, 1400, ImageData.DOOR_2, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_START, playerStartX: 15595, playerStartY: 1240 }));

        // chandelier
        this.addChandelier(-12760, -700);

        // white ninja
        GameObjectBundleFactory.createEnemy(this, x + 1750, y + 2100, CharacterFacing.LEFT, x + 1250, x + 2150, CharacterSpriteData.WHITE_NINJA_GUY, false);

        // table with flasks
        GameObjectBundleFactory.createMovableRect(this, x - 1600 + 1920, y + 2100, ImageData.TABLE_1, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x - 1600 + 1930, y + 1930, ImageData.FLASK_1, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x - 1600 + 1962, y + 1930, ImageData.FLASK_2, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x - 1600 + 2013, y + 1930, ImageData.FLASK_5, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        // flasks, pot and goblet on the floor
        GameObjectBundleFactory.createMovableRect(this, x + 150, y + 2100, ImageData.FLASK_3, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 200,  y + 2100, ImageData.FLASK_4, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x - 1600 + 2060, y + 2100, ImageData.POT, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x - 1600 + 2150, y + 2100, ImageData.GOBLET, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
    }

    private addStoveZone(): void {
        this.addChandelier(-11450, -700, true);

        // pot & goblet
        GameObjectBundleFactory.createMovableRect(this, 1900, 1400, ImageData.POT, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, 1990, 1400, ImageData.GOBLET, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        // stove
        GameObjectBundleFactory.createDecoImage(this, 2249, 1400, DecoPosition.FG, ImageData.STOVE);

        // pot & goblet
        GameObjectBundleFactory.createMovableRect(this, 2800, 1400, ImageData.GOBLET, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, 2900, 1400, ImageData.POT, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        // billboard 'web apps'
        GameObjectBundleFactory.createBillboard(this, 2900, 1400, DecoPosition.FG, ImageData.BILLBOARD_WEB_APPS);

        // crates
        const x: number = 470;
        GameObjectBundleFactory.createMovableRect(this, x + 3060, 1400, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 3205, 1400, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 3350, 1400, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        // GameObjectBundleFactory.createMovableRect(this, x + 3495, 1400, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        // GameObjectBundleFactory.createMovableRect(this, x + 3640, 1400, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        GameObjectBundleFactory.createMovableRect(this, x + 3130, 1275, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 3130 + 145, 1275, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        // GameObjectBundleFactory.createMovableRect(this, x + 3130 + 145 * 2, 1275, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        // GameObjectBundleFactory.createMovableRect(this, x + 3130 + 145 * 3, 1275, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        GameObjectBundleFactory.createMovableRect(this, x + 3130 + 70, 1150, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        // GameObjectBundleFactory.createMovableRect(this, x + 3130 + 70 + 145, 1150, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        // GameObjectBundleFactory.createMovableRect(this, x + 3130 + 70 + 145 * 2, 1150, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        // GameObjectBundleFactory.createMovableRect(this, x + 3130 + 70 * 2, 1025, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        // GameObjectBundleFactory.createMovableRect(this, x + 3130 + 70 * 2 + 145, 1025, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        // billboard 'flash'
        GameObjectBundleFactory.createBillboard(this, 3900, 1400, DecoPosition.FG, ImageData.BILLBOARD_FLASH, 'https://christopherstock.github.io/ApacheRoyalePrimer/showcase/martinApacheRoyale0.9/index.html');

        this.addChandelier(-11450 + 2500 - 20, -700, true);

        // black ninja
        GameObjectBundleFactory.createEnemy(this, 3840, 1400, CharacterFacing.LEFT, 3840, 4840, CharacterSpriteData.BLACK_NINJA_GUY, false);
    }

    private addObstacleZone(): void {
        const x = 5000;
        const y = 1400;

        // bounces
        GameObjectFactory.createBounce(this, x + 200,  y - 150, SpriteTemplate.createFromSingleImage(ImageData.BOUNCE_MEDIUM), 0.00075);
        GameObjectFactory.createBounce(this, x + 2452, y - 150, SpriteTemplate.createFromSingleImage(ImageData.BOUNCE_MEDIUM), 0.00075);

        this.addChandelier(-4150 - 1350 - 2000 - 300, -700 - 200 - 400 + 90);
        this.addChandelier(-4150 - 1350 - 2000 - 300 + 640 + 300 + 10, -700 - 200 - 400 + 90);

        // billboard 'J2ME'
        GameObjectBundleFactory.createBillboard(this, x + 1100 + 17, y - 512, DecoPosition.BG, ImageData.BILLBOARD_J2ME, 'https://web.archive.org/web/20060505212355/http://airgamer.de/cms/front_content.php?idart=1540');

        // pots & goblets
        GameObjectBundleFactory.createMovableRect(this, x + 1000, y - 512, ImageData.GOBLET, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 1100, y - 512, ImageData.POT, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 2000, y - 512, ImageData.GOBLET, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 2100, y - 512, ImageData.POT, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        // ninja girl
        GameObjectBundleFactory.createEnemy(this, x + 1100 - 250, y - 512, CharacterFacing.LEFT, x + 1100 - 250, x + 2100, CharacterSpriteData.RED_NINJA_GIRL, false);
    }

    private addExit(): void {
        // chandelier
        this.addChandelier(-4150, -700);

        // statue with candles
        GameObjectBundleFactory.createDecoImage(this, 8250, 1400, DecoPosition.BG, ImageData.STATUE_3);
        this.addChandelier(-4150 - 1350, -700, true);

        // crates
        const x: number = 5550;
        GameObjectBundleFactory.createMovableRect(this, x + 3060, 1400, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 3205, 1400, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 3350, 1400, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 3130, 1275, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 3130 + 145, 1275, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 3130 + 70, 1150, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        // masked ninja girl
        GameObjectBundleFactory.createEnemy(this, x + 3360, 1400, CharacterFacing.LEFT, x + 3360, x + 3823, CharacterSpriteData.MASKED_NINJA_GIRL, false);

        // door to garden
        GameObjectFactory.createDoor(this, this.width - 640, 1400, ImageData.DOOR_2, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_GARDEN, playerInitFacing: CharacterFacing.LEFT }), MirrorImage.YES);
    }

    private addWalls(): void {
        // ground
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DARK_GROUND, 128, 1400, 27 * 3,  3, Slope.NONE, CapHorz.NONE);

        // walls
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DARK_GROUND, 0, 0, 1,  14, Slope.NONE, CapHorz.NONE, CapVert.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DARK_GROUND, this.width - 128, 0, 1,  14, Slope.NONE, CapHorz.NONE, CapVert.NONE);

        // obstacle
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DARK_GROUND, 5000 + 200 + 460, 1400 - 512, 14,  6, Slope.NONE, CapHorz.BOTH, CapVert.TOP);
    }

    private addChandelier(x: number, y: number, onlyCandles: boolean = false): void {
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
