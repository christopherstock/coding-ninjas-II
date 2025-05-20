/* eslint-disable max-len */

import { Vector } from 'matter-js';
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
import { MirrorImage } from '../../engine/ui/MirrorImage';
import { Platform } from '../../game/object/special/Platform';

export class LevelGarden extends Level {
    public id: LevelId = LevelId.LEVEL_GARDEN;
    public width: number = 16000;
    public height: number = 4800;
    public playerStartX: number = 15520;
    public playerStartY: number = 1400;
    public playerInitialFacing: CharacterFacing = CharacterFacing.LEFT;
    public playerInitialFloat: boolean = false;

    protected createGameObjects(): void {

        GameObjectBundleFactory.createPlayer(this);
        GameObjectFactory.createParallaxDeco(this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage(ImageData.BG_GARDEN));

        this.addStartZone();
/*
        this.addGreenMiddleZone();
        this.addSnowZone();
*/
        this.addGrounds();
    }

    private addStartZone(): void {
        const x: number = 9500;
        const y: number = 1400;

        // door back to DoJo
        GameObjectFactory.createDoor(this, x + 6000, y, ImageData.DOOR_3, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_DOJO, playerStartX: 10240 - 640 + 12, playerStartY: 1400 }));

        // boulders
        GameObjectBundleFactory.createDecoImage(this, x + 5400, y + 20, DecoPosition.BG, ImageData.BOULDER_1);
        GameObjectBundleFactory.createDecoImage(this, x + 5500, y, DecoPosition.FG, ImageData.BOULDER_2);

        // construction tools
        GameObjectBundleFactory.createDecoImage(this, x + 5000, y, DecoPosition.FG, ImageData.CONCRETE_MIXER);
        GameObjectBundleFactory.createDecoImage(this, x + 4500, y, DecoPosition.FG, ImageData.GENERATOR);
        GameObjectBundleFactory.createDecoImage(this, x + 4000, y, DecoPosition.FG, ImageData.PYLONS);

        // billboard 'swift games workshop'
        GameObjectBundleFactory.createBillboard(this, x + 4300, y, DecoPosition.BG, ImageData.BILLBOARD_SWIFT, 'https://github.com/christopherstock/DevCamp2019_SwiftSpriteKitWorkshop/tree/master');

        // platform
        GameObjectFactory.createPlatform(this, SpriteTemplate.createFromSingleImage(ImageData.PLATFORM_GRASS_SMALL), Platform.SPEED_NORMAL, [ Vector.create(x + 2100, y - 90), Vector.create(x + 3700, y - 90) ]);

        // water
        GameObjectBundleFactory.createWaterArea(this, x + 2304, y, 11, 3, ImageData.WATER_CENTER);
        /*
        GameObjectBundleFactory.createBridge(this, 2374, y);

        // pots and stone sphere
        // GameObjectBundleFactory.createMovableRect(this, -1800 + 2558, -700 + 2100, ImageData.POT_1);
        // GameObjectBundleFactory.createMovableCircular(this, 1600, y, 0.0, ImageData.STONE_SPHERE);

        // bounce
        // GameObjectFactory.createBounce(this, 2000, 1250, SpriteTemplate.createFromSingleImage(ImageData.BOUNCE_SMALL), 0.00075);

        // sigsaw
        GameObjectFactory.createSigsaw(this, 3200, 1250, SpriteTemplate.createFromSingleImage(ImageData.SIGSAW_SMALL), -1);
*/
    }

    private addGreenMiddleZone(): void {
        const x: number = 6000;
        const y: number = 1400;

        // pylons
        GameObjectBundleFactory.createDecoImage(this, x + 17 * 128 - 250, y, DecoPosition.FG, ImageData.PYLONS);

        // billboard 'mf outrun'
        GameObjectBundleFactory.createBillboard(this, x + 11 * 128 - 1000, y, DecoPosition.BG, ImageData.BILLBOARD_MF_OUTRUN, 'https://christopherstock.github.io/OutRunMF/dist/');
    }

    private addSnowZone(): void {
        const x: number = 0;
        const y: number = 1400;

        // house with door to town
        GameObjectBundleFactory.createDecoImage(this, 195 + 90, y, DecoPosition.BG, ImageData.HOUSE_FRONT_4);
        GameObjectBundleFactory.createDecoImage(this, 175 + 90, 1105, DecoPosition.BG, ImageData.HOUSE_ROOF_3);
        GameObjectFactory.createDoor(this, 500, y, ImageData.DOOR_7, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_TOWN, playerInitFacing: CharacterFacing.RIGHT }), MirrorImage.YES);

        // billboard 'react clicker'
        GameObjectBundleFactory.createBillboard(this, x + 1000, y, DecoPosition.BG, ImageData.BILLBOARD_REACT_CLICKER, 'https://christopherstock.github.io/ReactPrimer/dist/');

        // water
        GameObjectBundleFactory.createWaterArea(this, 42 * 128, y, 6, 3, ImageData.WATER_CENTER);
    }

    private addGrounds(): void {
        const y: number = 1400;

        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_GRASS, 13084, y, 23,  3, Slope.NONE, CapHorz.LEFT, CapVert.TOP);
/*
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_GRASS, 6000, y, 19,  3, Slope.NONE, CapHorz.BOTH);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_GRASS, 0, y, 43,  3, Slope.NONE, CapHorz.RIGHT);
*/
    }
}
