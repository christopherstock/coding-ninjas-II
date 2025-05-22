/* eslint-disable max-len */

import { Level, LevelId } from '../../game/level/Level';
import { CapHorz, DecoPosition, GameObjectBundleFactory, Slope } from '../../game/object/GameObjectBundleFactory';
import { GameObjectFactory } from '../../game/object/GameObjectFactory';
import { ImageData } from '../ImageData';
import { GameAction, GameActionType } from '../../game/object/GameAction';
import { TilesetData } from '../TilesetData';
import { SpriteTemplate } from '../../engine/ui/SpriteTemplate';
import { CharacterFacing } from '../../game/object/being/CharacterFacing';
import { CharacterSpriteData } from '../CharacterSpriteData';

export class LevelTown extends Level {
    public id: LevelId = LevelId.LEVEL_TOWN;
    public width: number = 14720;
    public height: number = 1400 + 128 * 2;
    public playerStartX: number = 3840; // 520;
    public playerStartY: number = 1300; // 1400;
    public playerInitialFacing: CharacterFacing = CharacterFacing.RIGHT;
    public playerInitialFloat: boolean = false;

    protected createGameObjects(): void {

        GameObjectBundleFactory.createPlayer(this);
        GameObjectFactory.createParallaxDeco(this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage(ImageData.BG_TOWN));

        this.addStartZone();

        this.addFirstFloor();
        this.addSecondFloor();

        // this.addTownSetup();

        this.addExitZone();

        this.addGrounds();
    }

    private addStartZone(): void {
        const y: number = 1400;

        // house with door back to garden
        GameObjectBundleFactory.createDecoImage(this, 300, y, DecoPosition.BG, ImageData.HOUSE_FRONT_3);
        GameObjectBundleFactory.createDecoImage(this, 280, y - 280, DecoPosition.BG, ImageData.HOUSE_ROOF_3);
        GameObjectFactory.createDoor(this, 505, 1389, ImageData.DOOR_6, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_GARDEN, playerStartX: 520, playerStartY: 3016 }));

        // black ninja
        GameObjectBundleFactory.createEnemy(this, 1100, y, CharacterFacing.LEFT, 340, 1100, CharacterSpriteData.BLACK_NINJA_GUY, false);

        // pink house
        GameObjectBundleFactory.createDecoImage(this, 900 + 216 * 2, y, DecoPosition.BG, ImageData.HOUSE_FRONT_2);
        GameObjectBundleFactory.createDecoImage(this, 900 + 216 * 2 - 20, y - 280, DecoPosition.BG, ImageData.HOUSE_ROOF_1);

        // tree
        GameObjectBundleFactory.createDecoImage(this, 800, y, DecoPosition.BG, ImageData.TREE_3);

        // fences
        GameObjectBundleFactory.createDecoImage(this, 57, y + 22, DecoPosition.FG, ImageData.FENCE_2);
        GameObjectBundleFactory.createDecoImage(this, 900, y + 22, DecoPosition.FG, ImageData.FENCE_3);
        GameObjectBundleFactory.createDecoImage(this, 900 + 216, y + 22, DecoPosition.FG, ImageData.FENCE_3);

        // bush
        GameObjectBundleFactory.createDecoImage(this, 305 - 180 + 75, y + 5, DecoPosition.FG, ImageData.BUSH_2);

        // scooter & van
        GameObjectBundleFactory.createDecoImage(this, 1480, y, DecoPosition.FG, ImageData.SCOOTER_1);
        GameObjectBundleFactory.createDecoImage(this, 1880, y, DecoPosition.FG, ImageData.VAN_2);

        // billboard 'WebGL 3d dev'
        GameObjectBundleFactory.createBillboard(this, 2350, y, DecoPosition.FG, ImageData.BILLBOARD_WEB_GL_3D, 'https://christopherstock.github.io/babylon-zero/dist/');

        // hydrant & bushes
        GameObjectBundleFactory.createDecoImage(this, 2320, y, DecoPosition.FG, ImageData.HYDRANT);
        GameObjectBundleFactory.createDecoImage(this, 3020 - 285, y, DecoPosition.FG, ImageData.BUSH_2);
        GameObjectBundleFactory.createDecoImage(this, 3020 - 160, y + 22, DecoPosition.BG, ImageData.BUSH_1);
    }

    private addFirstFloor(): void {
        const x: number = 3840;
        const y: number = 1300;

        // enemies
        GameObjectBundleFactory.createEnemy(this, x + 40, y, CharacterFacing.RIGHT, x + 40, x + 800, CharacterSpriteData.RED_NINJA_GIRL, false);
        GameObjectBundleFactory.createEnemy(this, x + 800, y, CharacterFacing.LEFT, x + 40, x + 800, CharacterSpriteData.MASKED_NINJA_GIRL, false);
        GameObjectBundleFactory.createEnemy(this, x + 680, y, CharacterFacing.RIGHT, x + 680, x + 1670, CharacterSpriteData.MASKED_NINJA_GUY, false);
        GameObjectBundleFactory.createEnemy(this, x + 1670, y, CharacterFacing.LEFT, x + 680, x + 1670, CharacterSpriteData.BLUE_NINJA_GUY, false);

        // red house
        GameObjectBundleFactory.createDecoImage(this, x + 200, y, DecoPosition.BG, ImageData.HOUSE_FRONT_4);
        GameObjectBundleFactory.createDecoImage(this, x + 200 - 20, y - 280, DecoPosition.BG, ImageData.HOUSE_ROOF_2);

        // yellow house
        GameObjectBundleFactory.createDecoImage(this, x + 1210, y, DecoPosition.BG, ImageData.HOUSE_FRONT_1);
        GameObjectBundleFactory.createDecoImage(this, x + 1210 - 20, y - 280, DecoPosition.BG, ImageData.HOUSE_ROOF_2);

        // fence
        GameObjectBundleFactory.createDecoImage(this, x + 200 + 600, y, DecoPosition.BG, ImageData.FENCE_4);
        GameObjectBundleFactory.createDecoImage(this, x + 200 + 210 + 600, y, DecoPosition.BG, ImageData.FENCE_4);
        GameObjectBundleFactory.createDecoImage(this, x + 200 + 210 * 2 + 600, y, DecoPosition.BG, ImageData.FENCE_4);
        GameObjectBundleFactory.createDecoImage(this, x + 200 + 210 * 3 + 600, y, DecoPosition.BG, ImageData.FENCE_4);
        GameObjectBundleFactory.createDecoImage(this, x + 200 + 210 * 4 + 600, y, DecoPosition.BG, ImageData.FENCE_4);

        // bush
        GameObjectBundleFactory.createDecoImage(this, x + 200 + 210 * 5 + 600 - 130, y, DecoPosition.FG, ImageData.BUSH_2);

        // scooter
        GameObjectBundleFactory.createDecoImage(this, x + 200 + 205, y, DecoPosition.FG, ImageData.SCOOTER_2);

        // tree
        GameObjectBundleFactory.createDecoImage(this, x + 200 + 210 + 600 - 100, y, DecoPosition.FG, ImageData.TREE_4);
    }

    private addSecondFloor(): void {
        const x: number = 6600;
        const y: number = 1200;

        // statue
        GameObjectBundleFactory.createDecoImage(this, x + 670, y, DecoPosition.BG, ImageData.STATUE_4);



    }

    private addTownSetup(): void {
        const y = 1400;

        // billboard 'Hanoi TS'
        GameObjectBundleFactory.createBillboard(this, 2300, y, DecoPosition.BG, ImageData.BILLBOARD_HANOI_TS, 'https://christopherstock.github.io/HanoiTS/dist/');

        // house
        GameObjectBundleFactory.createDecoImage(this, 5600, y, DecoPosition.BG, ImageData.HOUSE_FRONT_4);
        GameObjectBundleFactory.createDecoImage(this, 5580, y - 280, DecoPosition.BG, ImageData.HOUSE_ROOF_5);
        // GameObjectBundleFactory.createDecoImage(this, 5805, 1389, DecoPosition.BG, ImageData.DOOR_4);
        // GameObjectBundleFactory.createDecoImage(this, 5805 + 60, 1389 - 65, DecoPosition.BG, ImageData.DOOR_NO_ENTRY);

        // house
        GameObjectBundleFactory.createDecoImage(this, 6300, y, DecoPosition.BG, ImageData.HOUSE_FRONT_5);
        GameObjectBundleFactory.createDecoImage(this, 6280, y - 280, DecoPosition.BG, ImageData.HOUSE_ROOF_4);
        // GameObjectBundleFactory.createDecoImage(this, 6505, 1389, DecoPosition.BG, ImageData.DOOR_4);
        // GameObjectBundleFactory.createDecoImage(this, 6505 + 60, 1389 - 65, DecoPosition.BG, ImageData.DOOR_NO_ENTRY);

        // billboard 'LWJGL'
        GameObjectBundleFactory.createBillboard(this, 8000, y, DecoPosition.FG, ImageData.BILLBOARD_LWJGL, 'https://github.com/christopherstock/shooter-gradle');

        // billboard 'miner VGA'
        GameObjectBundleFactory.createBillboard(this, 9000, y, DecoPosition.BG, ImageData.BILLBOARD_MINER, 'https://christopherstock.github.io/MinerTS/dist/');
    }

    private addExitZone(): void {
        const x: number = this.width - 1500;
        const y: number = 1000;

        // house with door to harbour
        GameObjectBundleFactory.createDecoImage(this, x + 500, y, DecoPosition.BG, ImageData.HOUSE_FRONT_5);
        GameObjectBundleFactory.createDecoImage(this, x + 480, y - 295, DecoPosition.BG, ImageData.HOUSE_ROOF_4);
        GameObjectFactory.createDoor(this, x + 705, y - 11, ImageData.DOOR_5, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_HARBOUR, playerInitFacing: CharacterFacing.RIGHT }));
    }

    private addGrounds(): void {
        const y: number = 1400;

        // ground and steps
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DARK_GROUND, 0, y, 25,  3, Slope.NONE, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DARK_GROUND, 25 * 128, y, 5,  5, Slope.ASCENDING, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DARK_GROUND, 25 * 128 + 5 * 128, y - 20 * 5, 15,  3, Slope.NONE, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DARK_GROUND, 25 * 128 + 5 * 128 + 15 * 128, y - 20 * 5, 5,  5, Slope.ASCENDING, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DARK_GROUND, 25 * 128 + 5 * 128 + 15 * 128 + 5 * 128, y - 20 * 5 - 20 * 5, 15,  3, Slope.NONE, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DARK_GROUND, 25 * 128 + 5 * 128 + 15 * 128 + 5 * 128 + 15 * 128, y - 20 * 5 - 20 * 5, 5,  5, Slope.ASCENDING, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DARK_GROUND, 25 * 128 + 5 * 128 + 15 * 128 + 5 * 128 + 15 * 128 + 5 * 128, y - 20 * 5 - 20 * 5 - 20 * 5, 15,  3, Slope.NONE, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DARK_GROUND, 25 * 128 + 5 * 128 + 15 * 128 + 5 * 128 + 15 * 128 + 5 * 128 + 15 * 128, y - 20 * 5 - 20 * 5 - 20 * 5, 5,  5, Slope.ASCENDING, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DARK_GROUND, 11520, y - 20 * 5 - 20 * 5 - 20 * 5 - 20 * 5, 25,  3, Slope.NONE, CapHorz.NONE);
    }
}
