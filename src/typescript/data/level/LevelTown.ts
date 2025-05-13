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
    public width: number = 7680;
    public height: number = 4500;
    public playerStartX: number = 705;
    public playerStartY: number = 1400;
    public playerInitialFacing: CharacterFacing = CharacterFacing.RIGHT;
    public playerInitialFloat: boolean = false;

    protected createGameObjects(): void {

        GameObjectBundleFactory.createPlayer(this);
        GameObjectFactory.createParallaxDeco(this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage(ImageData.BG_TOWN));

        this.addTownSetup();
    }

    private addTownSetup(): void {
        // walls
        // GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DARK_GROUND, 0, 0, 1,  11, Slope.NONE, CapHorz.NONE);
        // GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DARK_GROUND, 2372, 0, 1,  11, Slope.NONE, CapHorz.NONE);

        // house with door to harbour
        GameObjectBundleFactory.createDecoImage(this, 500, 1400, DecoPosition.BG, ImageData.HOUSE_FRONT_5);
        GameObjectBundleFactory.createDecoImage(this, 480, 1120, DecoPosition.BG, ImageData.HOUSE_ROOF_4);
        GameObjectFactory.createDoor(this, 705, 1389, ImageData.DOOR_8, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_HARBOUR, playerStartX: 520, playerStartY: 1400, playerInitFacing: CharacterFacing.RIGHT }));

        // friends
        GameObjectBundleFactory.createFriend(SpriteData.RED_NINJA_GIRL_STAND_LEFT,    this, 3000, 1400, CharacterFacing.RIGHT, 3000, 3750, CharacterSpriteData.RED_NINJA_GIRL, false);
        GameObjectBundleFactory.createFriend(SpriteData.MASKED_NINJA_GIRL_STAND_LEFT, this, 4000, 1400, CharacterFacing.RIGHT, 3250, 4000, CharacterSpriteData.MASKED_NINJA_GIRL, false);
        // enemies
        GameObjectBundleFactory.createEnemy(this, 5000, 1400, CharacterFacing.RIGHT, 3750, 5000, CharacterSpriteData.MASKED_NINJA_GUY, false);
        GameObjectBundleFactory.createEnemy(this, 4500, 1400, CharacterFacing.RIGHT, 4500, 5000, CharacterSpriteData.BLUE_NINJA_GUY, false);

        // billboard '3d dev'
        GameObjectBundleFactory.createBillboard(this, 2000, 1400, DecoPosition.FG, ImageData.BILLBOARD_3D_DEV, 'https://christopherstock.github.io/babylon-zero/dist/', 'https://github.com/christopherstock/shooter-gradle');

        // house with door back to garden
        GameObjectBundleFactory.createDecoImage(this, 3500, 1400, DecoPosition.BG, ImageData.HOUSE_FRONT_1);
        GameObjectBundleFactory.createDecoImage(this, 3480, 1105, DecoPosition.BG, ImageData.HOUSE_ROOF_3);
        GameObjectFactory.createDoor(this, 3705, 1389, ImageData.DOOR_4, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_GARDEN, playerStartX: 520, playerStartY: 1400 }));

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

        // ground
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DARK_GROUND, 0, 1400, 60,  3, Slope.NONE, CapHorz.NONE);
    }
}
