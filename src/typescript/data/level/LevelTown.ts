/* eslint-disable max-len */

import { Level, LevelId } from '../../game/level/Level';
import { CapHorz, DecoPosition, GameObjectBundleFactory, Slope } from '../../game/object/GameObjectBundleFactory';
import { GameObjectFactory } from '../../game/object/GameObjectFactory';
import { ImageData } from '../ImageData';
import { GameAction, GameActionType } from '../../game/object/GameAction';
import { TilesetData } from '../TilesetData';
import { SpriteTemplate } from '../../engine/ui/SpriteTemplate';
import { CharacterFacing } from '../../game/object/being/CharacterFacing';
import { SpriteData } from '../SpriteData';
import { CharacterSpriteData } from '../CharacterSpriteData';

export class LevelTown extends Level {
    public id: LevelId = LevelId.LEVEL_TOWN;
    public width: number = 11520;
    public height: number = 4500;
    public playerStartX: number = 720;
    public playerStartY: number = 1400;
    public playerInitialFacing: CharacterFacing = CharacterFacing.RIGHT;
    public playerInitialFloat: boolean = false;

    protected createGameObjects(): void {

        GameObjectBundleFactory.createPlayer(this);
        GameObjectFactory.createParallaxDeco(this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage(ImageData.BG_TOWN));

        this.addTownSetup();
    }

    private addTownSetup(): void {
        // house with door back to garden
        GameObjectBundleFactory.createDecoImage(this, 500, 1400, DecoPosition.BG, ImageData.HOUSE_FRONT_3);
        GameObjectBundleFactory.createDecoImage(this, 480, 1120, DecoPosition.BG, ImageData.HOUSE_ROOF_3);
        GameObjectFactory.createDoor(this, 705, 1389, ImageData.DOOR_6, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_GARDEN, playerStartX: 520, playerStartY: 1400 }));

        // friends
        GameObjectBundleFactory.createFriend(SpriteData.RED_NINJA_GIRL_STAND_LEFT,    this, 3000, 1400, CharacterFacing.RIGHT, 3000, 3750, CharacterSpriteData.RED_NINJA_GIRL, false);
        GameObjectBundleFactory.createFriend(SpriteData.MASKED_NINJA_GIRL_STAND_LEFT, this, 4000, 1400, CharacterFacing.RIGHT, 3250, 4000, CharacterSpriteData.MASKED_NINJA_GIRL, false);
        // enemies
        GameObjectBundleFactory.createEnemy(this, 5000, 1400, CharacterFacing.RIGHT, 3750, 5000, CharacterSpriteData.MASKED_NINJA_GUY, false);
        GameObjectBundleFactory.createEnemy(this, 4500, 1400, CharacterFacing.RIGHT, 4500, 5000, CharacterSpriteData.BLUE_NINJA_GUY, false);

        // billboard 'WebGL 3d dev'
        GameObjectBundleFactory.createBillboard(this, 1300, 1400, DecoPosition.FG, ImageData.BILLBOARD_WEB_GL_3D, 'https://christopherstock.github.io/babylon-zero/dist/');

        // billboard 'Hanoi TS'
        GameObjectBundleFactory.createBillboard(this, 2300, 1400, DecoPosition.BG, ImageData.BILLBOARD_HANOI_TS, 'https://christopherstock.github.io/HanoiTS/dist/');

        // house
        GameObjectBundleFactory.createDecoImage(this, 4200, 1400, DecoPosition.BG, ImageData.HOUSE_FRONT_2);
        GameObjectBundleFactory.createDecoImage(this, 4180, 1120, DecoPosition.BG, ImageData.HOUSE_ROOF_1);
        // GameObjectBundleFactory.createDecoImage(this, 4405, 1389, DecoPosition.BG, ImageData.DOOR_4);
        // GameObjectBundleFactory.createDecoImage(this, 4405 + 60, 1389 - 65, DecoPosition.BG, ImageData.DOOR_NO_ENTRY);
        // GameObjectFactory.createDoor(this, 4405, 1389, ImageData.DOOR_4, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_START, playerStartX: 250, playerStartY: 2000 }));

        // house
        GameObjectBundleFactory.createDecoImage(this, 4900, 1400, DecoPosition.BG, ImageData.HOUSE_FRONT_3);
        GameObjectBundleFactory.createDecoImage(this, 4880, 1120, DecoPosition.BG, ImageData.HOUSE_ROOF_2);
        // GameObjectBundleFactory.createDecoImage(this, 5105, 1389, DecoPosition.BG, ImageData.DOOR_4);
        // GameObjectBundleFactory.createDecoImage(this, 5105 + 60, 1389 - 65, DecoPosition.BG, ImageData.DOOR_NO_ENTRY);

        // house
        GameObjectBundleFactory.createDecoImage(this, 5600, 1400, DecoPosition.BG, ImageData.HOUSE_FRONT_4);
        GameObjectBundleFactory.createDecoImage(this, 5580, 1120, DecoPosition.BG, ImageData.HOUSE_ROOF_5);
        // GameObjectBundleFactory.createDecoImage(this, 5805, 1389, DecoPosition.BG, ImageData.DOOR_4);
        // GameObjectBundleFactory.createDecoImage(this, 5805 + 60, 1389 - 65, DecoPosition.BG, ImageData.DOOR_NO_ENTRY);

        // house
        GameObjectBundleFactory.createDecoImage(this, 6300, 1400, DecoPosition.BG, ImageData.HOUSE_FRONT_5);
        GameObjectBundleFactory.createDecoImage(this, 6280, 1120, DecoPosition.BG, ImageData.HOUSE_ROOF_4);
        // GameObjectBundleFactory.createDecoImage(this, 6505, 1389, DecoPosition.BG, ImageData.DOOR_4);
        // GameObjectBundleFactory.createDecoImage(this, 6505 + 60, 1389 - 65, DecoPosition.BG, ImageData.DOOR_NO_ENTRY);

        // billboard 'LWJGL'
        GameObjectBundleFactory.createBillboard(this, 8000, 1400, DecoPosition.FG, ImageData.BILLBOARD_LWJGL, 'https://github.com/christopherstock/shooter-gradle');

        // billboard 'miner VGA'
        GameObjectBundleFactory.createBillboard(this, 9000, 1400, DecoPosition.BG, ImageData.BILLBOARD_MINER, 'https://christopherstock.github.io/MinerTS/dist/');

        // house with door to harbour
        GameObjectBundleFactory.createDecoImage(this, 10000 + 500, 1400, DecoPosition.BG, ImageData.HOUSE_FRONT_5);
        GameObjectBundleFactory.createDecoImage(this, 10000 + 480, 1105, DecoPosition.BG, ImageData.HOUSE_ROOF_4);
        GameObjectFactory.createDoor(this, 10000 + 705, 1389, ImageData.DOOR_5, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_HARBOUR, playerInitFacing: CharacterFacing.RIGHT }));

        // ground
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DARK_GROUND, 0, 1400, 100,  3, Slope.NONE, CapHorz.NONE);
    }
}
