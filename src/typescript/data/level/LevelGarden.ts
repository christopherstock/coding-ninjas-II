/* eslint-disable max-len */

import {Level, LevelId} from '../../game/level/Level';
import {
    CapHorz,
    CapVert,
    DecoPosition,
    GameObjectBundleFactory,
    Slope,
} from '../../game/object/GameObjectBundleFactory';
import {GameObjectFactory} from '../../game/object/GameObjectFactory';
import {ImageData} from '../ImageData';
import {GameAction, GameActionType} from '../../game/object/GameAction';
import {TilesetData} from '../TilesetData';
import {SpriteTemplate} from '../../engine/ui/SpriteTemplate';
import {CharacterFacing} from '../../game/object/being/CharacterFacing';

export class LevelGarden extends Level {
    public id: LevelId = LevelId.LEVEL_GARDEN;
    public width: number = 12500;
    public height: number = 12500;
    public playerStartX: number = 12020;
    public playerStartY: number = 1400;
    public playerInitialFacing: CharacterFacing = CharacterFacing.LEFT;
    public playerInitialFloat: boolean = false;

    protected createGameObjects(): void {

        GameObjectBundleFactory.createPlayer(this);
        GameObjectFactory.createParallaxDeco(this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage(ImageData.BG_GARDEN));

        this.addGardenSetup();
    }

    private addGardenSetup(): void {
        const x: number = 6000;

        // door back to DoJo
        GameObjectFactory.createDoor(this, x + 6000, 1400, ImageData.DOOR_5, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_DOJO, playerStartX: 7200 + 12, playerStartY: 1400 }));

        // boulders
        GameObjectBundleFactory.createDecoImage(this, x + 5400, 1420, DecoPosition.BG, ImageData.BOULDER_1);
        GameObjectBundleFactory.createDecoImage(this, x + 5500, 1400, DecoPosition.FG, ImageData.BOULDER_2);

        // construction tools
        GameObjectBundleFactory.createDecoImage(this, x + 5000, 1400, DecoPosition.FG, ImageData.CONCRETE_MIXER);
        GameObjectBundleFactory.createDecoImage(this, x + 4500, 1400, DecoPosition.FG, ImageData.GENERATOR);
        GameObjectBundleFactory.createDecoImage(this, x + 4000, 1400, DecoPosition.FG, ImageData.PYLONS);

        // billboard 'swift games workshop'
        GameObjectBundleFactory.createBillboard(this, x + 3000, 1400, DecoPosition.BG, ImageData.BILLBOARD_SWIFT, 'https://github.com/christopherstock/DevCamp2019_SwiftSpriteKitWorkshop/tree/master');

        // billboard 'mf outrun'
        GameObjectBundleFactory.createBillboard(this, x, 1400, DecoPosition.BG, ImageData.BILLBOARD_MF_OUTRUN, 'https://christopherstock.github.io/OutRunMF/dist/');

        // billboard 'react clicker'
        GameObjectBundleFactory.createBillboard(this, x - 4000, 1400, DecoPosition.BG, ImageData.BILLBOARD_REACT_CLICKER, 'https://christopherstock.github.io/ReactPrimer/dist/');

        /*
        // bridge and blue water
        GameObjectBundleFactory.createBridge(this, 2374, 1400);
        GameObjectBundleFactory.createWaterArea(this, 2304, 1560, 6, 4, ImageData.WATER_CENTER);

        // pots and stone sphere
        // GameObjectBundleFactory.createMovableRect(this, -1800 + 2558, -700 + 2100, ImageData.POT_1);
        // GameObjectBundleFactory.createMovableCircular(this, 1600, 1400, 0.0, ImageData.STONE_SPHERE);

        // magic items

        // sigsaw
        GameObjectFactory.createSigsaw(this, 3200, 1250, SpriteTemplate.createFromSingleImage(ImageData.SIGSAW_SMALL), -1);
        // platform
        GameObjectFactory.createPlatform(this, SpriteTemplate.createFromSingleImage(ImageData.PLATFORM_SMALL), 3.5, [ matter.Vector.create(4000, 1300), matter.Vector.create(5000, 1300) ]);
        // bounce
        GameObjectFactory.createBounce(this, 2000, 1250, SpriteTemplate.createFromSingleImage(ImageData.BOUNCE_SMALL), 0.00075);
*/
        // door to town
        GameObjectFactory.createDoor(this, 500, 1400, ImageData.DOOR_6, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_TOWN, playerStartX: 720, playerStartY: 1400, playerInitFacing: CharacterFacing.RIGHT }));

        // ground
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_GRASS, x + 3072, 1400, 31,  3, Slope.NONE, CapHorz.NONE, CapVert.TOP);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DESERT, x + 2048, 1400, 8,  3, Slope.NONE, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DARK_GROUND, x, 1400, 16,  3, Slope.NONE, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, 0, 1400, 6000 / 128,  3, Slope.NONE, CapHorz.NONE);
    }
}
