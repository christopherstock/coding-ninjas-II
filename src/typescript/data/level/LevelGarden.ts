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
import { BodyDensity, BodyFriction } from '../../base/SettingMatter';
import { Breakable } from '../../game/object/GameObject';

export class LevelGarden extends Level {
    public id: LevelId = LevelId.LEVEL_GARDEN;
    public width: number = 16000;
    public height: number = 3784; // 4800;
    public playerStartX: number = 5404; // 15520;
    public playerStartY: number = 3400;
    public playerInitialFacing: CharacterFacing = CharacterFacing.LEFT;
    public playerInitialFloat: boolean = false;

    protected createGameObjects(): void {

        GameObjectBundleFactory.createPlayer(this);
        GameObjectFactory.createParallaxDeco(this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage(ImageData.BG_GARDEN));

        this.addStartZone();
        this.addGreenMiddleZone();
        this.addSigSawZone();
        this.addExitZone();
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

        // platform left
        GameObjectFactory.createPlatform(this, SpriteTemplate.createFromSingleImage(ImageData.PLATFORM_GRASS_SMALL), Platform.SPEED_NORMAL, [ Vector.create(x + 2100, y - 90), Vector.create(x + 3700, y - 90) ]);

        // water
        GameObjectBundleFactory.createWaterArea(this, x + 2304, y, 11, 3, ImageData.WATER_CENTER);
        /*
        GameObjectBundleFactory.createBridge(this, 2374, y);

        // pot
        // GameObjectBundleFactory.createMovableRect(this, -1800 + 2558, -700 + 2100, ImageData.POT_1);
*/
    }

    private addGreenMiddleZone(): void {
        const x: number = 9500;
        const y: number = 1400;

        // pylons
        GameObjectBundleFactory.createDecoImage(this, x + 1926, y, DecoPosition.FG, ImageData.PYLONS);

        // billboard 'mf outrun'
        GameObjectBundleFactory.createBillboard(this, x + 408, y, DecoPosition.BG, ImageData.BILLBOARD_MF_OUTRUN, 'https://christopherstock.github.io/OutRunMF/dist/');

        // platform up
        GameObjectFactory.createPlatform(this, SpriteTemplate.createFromSingleImage(ImageData.PLATFORM_GRASS_SMALL), Platform.SPEED_NORMAL, [ Vector.create(x - 400 - 200, y - 8 * 128), Vector.create(x - 400 - 200, y) ]);

        // water
        GameObjectBundleFactory.createWaterArea(this, x - 7 * 128, y, 7, 3, ImageData.WATER_CENTER);
    }

    private addSigSawZone(): void {
        const x: number = 0;
        const y: number = 3400;

        // sigsaw
        GameObjectFactory.createSigsaw(this, x + 6650, y - 125 - 48, SpriteTemplate.createFromSingleImage(ImageData.SIGSAW_LARGEST), -1);

        // stopper crate
        GameObjectBundleFactory.createObstacle(this, x + 6680, y, ImageData.CRATE_STEEL);

        // crates
        GameObjectBundleFactory.createMovableRect(this, x + 6680, y - 125 - 48, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 6680 + 125, y - 125 - 48, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 6680 + 125 * 2, y - 125 - 48, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 6680 + 62, y - 125 - 48 - 125, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 6680 + 125 + 62, y - 125 - 48 - 125, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 6680 + 125, y - 125 - 48 - 125 - 125, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        // billboard 'react clicker'
        GameObjectBundleFactory.createBillboard(this, x + 6000, y, DecoPosition.BG, ImageData.BILLBOARD_REACT_CLICKER, 'https://christopherstock.github.io/ReactPrimer/dist/');

        // water
        GameObjectBundleFactory.createWaterArea(this, 7708 - 18 * 128 - 5 * 128, y, 4 + 2, 3, ImageData.WATER_CENTER);
    }

    private addExitZone(): void {
        const x: number = 0;
        const y: number = 3016;

        // house with door to town
        GameObjectBundleFactory.createDecoImage(this, x + 195 + 90, y, DecoPosition.BG, ImageData.HOUSE_FRONT_4);
        GameObjectBundleFactory.createDecoImage(this, x + 175 + 90, y - 280, DecoPosition.BG, ImageData.HOUSE_ROOF_3);
        GameObjectFactory.createDoor(this, x + 500, y, ImageData.DOOR_7, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_TOWN, playerInitFacing: CharacterFacing.RIGHT }), MirrorImage.YES);
    }

    private addGrounds(): void {
        const y: number = 1400;

        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_GRASS, 13084, y, 23,  3, Slope.NONE, CapHorz.LEFT, CapVert.TOP);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_GRASS, 9500 - 128, y, 20,  3, Slope.NONE, CapHorz.BOTH);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_GRASS, 7708, y - 8 * 128, 8,  8 + 3 + 16, Slope.NONE, CapHorz.BOTH);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_GRASS, 5404, y + 2000, 18 + 1,  3, Slope.NONE, CapHorz.BOTH);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_GRASS, 5404 - 20 * 128 - 4 * 128, y + 2000 - 384, 20,  5, Slope.DESCENDING, CapHorz.RIGHT);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_GRASS, 28 - 128, 3016, 18 + 1,  3, Slope.NONE, CapHorz.NONE);
    }
}
