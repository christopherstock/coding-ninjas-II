/* eslint-disable max-len */

import {Vector} from 'matter-js';
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
import {MirrorImage} from '../../engine/ui/MirrorImage';
import {Platform} from '../../game/object/special/Platform';
import {BodyDensity, BodyFriction} from '../../base/SettingMatter';
import {Breakable} from '../../game/object/GameObject';
import {CharacterSpriteData} from '../CharacterSpriteData';

export class LevelGarden extends Level {
    public id: LevelId = LevelId.LEVEL_GARDEN;
    public width: number = 16000;
    public height: number = 3784;
    public playerStartX: number = 15520;
    public playerStartY: number = 1400;
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

        // tree & bush
        GameObjectBundleFactory.createDecoImage(this, x + 5250, y, DecoPosition.BG, ImageData.TREE_3, MirrorImage.YES);
        GameObjectBundleFactory.createDecoImage(this, x + 6200, y, DecoPosition.FG, ImageData.BUSH_3);

        // door back to DoJo
        GameObjectFactory.createDoor(this, x + 6000, y, ImageData.DOOR_3, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_DOJO, playerStartX: 10240 - 640 + 12, playerStartY: 1400 }));

        // masked ninja guy
        GameObjectBundleFactory.createEnemy(this, x + 4750, y, CharacterFacing.RIGHT, x + 4250, x + 5450, CharacterSpriteData.MASKED_NINJA_GUY, false);

        // boulders
        GameObjectBundleFactory.createDecoImage(this, x + 5090, y + 20, DecoPosition.BG, ImageData.BOULDER_4);

        // billboard 'swift games workshop'
        GameObjectBundleFactory.createBillboard(this, x + 4300, y, DecoPosition.BG, ImageData.BILLBOARD_SWIFT, 'https://github.com/christopherstock/DevCamp2019_SwiftSpriteKitWorkshop/tree/master');

        // platform left
        GameObjectFactory.createPlatform(this, SpriteTemplate.createFromSingleImage(ImageData.PLATFORM_GRASS_SMALL), Platform.SPEED_NORMAL, [ Vector.create(x + 2100, y - 90), Vector.create(x + 3700, y - 90) ]);

        // tree & boulders
        GameObjectBundleFactory.createDecoImage(this, x + 3750, y, DecoPosition.BG, ImageData.TREE_3, MirrorImage.NO);
        // GameObjectBundleFactory.createDecoImage(this, x + 3640, y, DecoPosition.BG, ImageData.BOULDER_4);
        GameObjectBundleFactory.createDecoImage(this, x + 3640, y + 20, DecoPosition.BG, ImageData.BOULDER_1);
        GameObjectBundleFactory.createDecoImage(this, x + 3740, y, DecoPosition.FG, ImageData.BOULDER_2);

        // water
        GameObjectBundleFactory.createWaterArea(this, x + 2304, y, 11, 3, ImageData.WATER_CENTER);
    }

    private addGreenMiddleZone(): void {
        const x: number = 9500;
        const y: number = 1400;

        // billboard 'mf outrun'
        GameObjectBundleFactory.createBillboard(this, x + 408, y, DecoPosition.BG, ImageData.BILLBOARD_MF_OUTRUN, 'https://christopherstock.github.io/OutRunMF/dist/');
/*
        // construction tools
        GameObjectBundleFactory.createDecoImage(this, x + 490, y, DecoPosition.FG, ImageData.CONCRETE_MIXER);
        GameObjectBundleFactory.createDecoImage(this, x + 870, y, DecoPosition.FG, ImageData.GENERATOR);
        GameObjectBundleFactory.createDecoImage(this, x + 1330, y, DecoPosition.FG, ImageData.PYLONS);
*/
        // crates
        GameObjectBundleFactory.createMovableRect(this, x - 400 + 408, y, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x - 400 + 408 + 125, y, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x - 400 + 408 + 62, y - 125, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        // tree & bushes
        GameObjectBundleFactory.createDecoImage(this, x + 700 + 4830 - 4400 - 70, y, DecoPosition.FG, ImageData.TREE_3, MirrorImage.YES);
        GameObjectBundleFactory.createDecoImage(this, x + 700 + 4830 - 4400 - 70 + 700, y, DecoPosition.FG, ImageData.BOULDER_4);
        GameObjectBundleFactory.createDecoImage(this, x + 700 + 4830 - 4400 - 70 + 1000, y, DecoPosition.FG, ImageData.BUSH_3);
/*
        // bushes
        GameObjectBundleFactory.createDecoImage(this, x + 700 + 5200 - 4400, y + 20, DecoPosition.BG, ImageData.BOULDER_1);
        GameObjectBundleFactory.createDecoImage(this, x + 700 + 5300 - 4400, y, DecoPosition.FG, ImageData.BOULDER_2);
        GameObjectBundleFactory.createDecoImage(this, x + 700 + 6000 - 285 - 4400, y, DecoPosition.FG, ImageData.BUSH_2);
        GameObjectBundleFactory.createDecoImage(this, x + 700 + 6000 - 160 - 4400, y + 22, DecoPosition.BG, ImageData.BUSH_1);

        // pylons
        GameObjectBundleFactory.createDecoImage(this, x + 1926, y, DecoPosition.FG, ImageData.PYLONS);
*/
        // blue ninja guy
        GameObjectBundleFactory.createEnemy(this, x + 258, y, CharacterFacing.RIGHT, x + 258, x + 1258, CharacterSpriteData.BLUE_NINJA_GUY, false);

        // platform up
        GameObjectFactory.createPlatform(this, SpriteTemplate.createFromSingleImage(ImageData.PLATFORM_GRASS_SMALL), Platform.SPEED_NORMAL, [ Vector.create(x - 400 - 200, y - 8 * 128), Vector.create(x - 400 - 200, y) ]);

        // masked ninja girl
        GameObjectBundleFactory.createEnemy(this, 7850, y - 8 * 128, CharacterFacing.RIGHT, 7850, 8510, CharacterSpriteData.MASKED_NINJA_GIRL, false);

        // water
        GameObjectBundleFactory.createWaterArea(this, x - 7 * 128, y, 7, 3, ImageData.WATER_CENTER);

        // tree & bushes
        GameObjectBundleFactory.createDecoImage(this, 7800 - 70, y - 8*128, DecoPosition.FG, ImageData.BOULDER_4);
        GameObjectBundleFactory.createDecoImage(this, 8000 - 70, y - 8*128, DecoPosition.FG, ImageData.BUSH_3);
        GameObjectBundleFactory.createDecoImage(this, 8200 - 70, y - 8*128, DecoPosition.FG, ImageData.BOULDER_4);
        GameObjectBundleFactory.createDecoImage(this, 8400 - 70, y - 8*128, DecoPosition.FG, ImageData.BUSH_3);
        GameObjectBundleFactory.createDecoImage(this, 8600 - 70, y - 8*128, DecoPosition.FG, ImageData.BOULDER_4);
        GameObjectBundleFactory.createDecoImage(this, 8200 - 70 - 300, y - 8*128, DecoPosition.FG, ImageData.TREE_3, MirrorImage.YES);
    }

    private addSigSawZone(): void {
        const x: number = 0;
        const y: number = 3400;

        // sigsaw
        GameObjectFactory.createSigsaw(this, x + 6650, y - 125 - 48, SpriteTemplate.createFromSingleImage(ImageData.SIGSAW_LARGEST), -1);

        // bushes
        GameObjectBundleFactory.createDecoImage(this, x + 7100, y, DecoPosition.BG, ImageData.BUSH_3);
        GameObjectBundleFactory.createDecoImage(this, x + 7350, y, DecoPosition.BG, ImageData.BOULDER_4);

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
        GameObjectBundleFactory.createBillboard(this, x + 6000, y, DecoPosition.FG, ImageData.BILLBOARD_REACT_CLICKER, 'https://christopherstock.github.io/ReactPrimer/dist/');

        // statue, bush & boulder
        GameObjectBundleFactory.createDecoImage(this, x + 5785, y, DecoPosition.BG, ImageData.STATUE_2);
        GameObjectBundleFactory.createDecoImage(this, x + 5530, y, DecoPosition.FG, ImageData.BUSH_3);
        GameObjectBundleFactory.createDecoImage(this, x + 6030, y, DecoPosition.FG, ImageData.BOULDER_4);

        // red ninja girl
        GameObjectBundleFactory.createEnemy(this, x + 5500, y, CharacterFacing.RIGHT, x + 5500, x + 6457, CharacterSpriteData.RED_NINJA_GIRL, false);

        // water
        GameObjectBundleFactory.createWaterArea(this, 7708 - 18 * 128 - 5 * 128, y, 4 + 2, 3, ImageData.WATER_CENTER);
    }

    private addExitZone(): void {
        const x: number = 0;
        const y: number = 3016;

        // trees
        GameObjectBundleFactory.createDecoImage(this, x + 4500, y + 370, DecoPosition.FG, ImageData.TREE_4);
        GameObjectBundleFactory.createDecoImage(this, x + 4500 - 128*2, y + 370 - 20*2, DecoPosition.BG, ImageData.TREE_4);
        GameObjectBundleFactory.createDecoImage(this, x + 4500 - 128*4, y + 370 - 20*4, DecoPosition.FG, ImageData.TREE_4);
        GameObjectBundleFactory.createDecoImage(this, x + 4500 - 128*6, y + 370 - 20*6, DecoPosition.BG, ImageData.TREE_4);
        GameObjectBundleFactory.createDecoImage(this, x + 4500 - 128*8, y + 370 - 20*8, DecoPosition.FG, ImageData.TREE_4);
        GameObjectBundleFactory.createDecoImage(this, x + 4500 - 128*10, y + 370 - 20*10, DecoPosition.BG, ImageData.TREE_4);
        GameObjectBundleFactory.createDecoImage(this, x + 4500 - 128*12, y + 370 - 20*12, DecoPosition.FG, ImageData.TREE_4);
        GameObjectBundleFactory.createDecoImage(this, x + 4500 - 128*14, y + 370 - 20*14, DecoPosition.BG, ImageData.TREE_4);
        GameObjectBundleFactory.createDecoImage(this, x + 4500 - 128*16, y + 370 - 20*16, DecoPosition.FG, ImageData.TREE_4);

        // white ninja
        GameObjectBundleFactory.createEnemy(this, x + 1250, y, CharacterFacing.RIGHT, x + 1250, x + 2150, CharacterSpriteData.WHITE_NINJA_GUY, false);

        // tree
        GameObjectBundleFactory.createDecoImage(this, x + 1390, y, DecoPosition.FG, ImageData.BOULDER_4);
        GameObjectBundleFactory.createDecoImage(this, x + 1520, y, DecoPosition.FG, ImageData.TREE_1);
        GameObjectBundleFactory.createDecoImage(this, x + 2130, y, DecoPosition.FG, ImageData.BUSH_3);

        // house with door to town
        GameObjectBundleFactory.createDecoImage(this, x + 195 + 90 + 600 - 30 - 70 - 100, y, DecoPosition.FG, ImageData.TREE_3, MirrorImage.YES);
        GameObjectBundleFactory.createDecoImage(this, x + 195 + 90 + 600 - 30, y + 20, DecoPosition.FG, ImageData.FENCE_2);
        GameObjectBundleFactory.createDecoImage(this, x + 195 + 90 + 600 - 30 + 216, y + 20, DecoPosition.FG, ImageData.FENCE_3);
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
