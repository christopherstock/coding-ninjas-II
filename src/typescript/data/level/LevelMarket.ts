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

/** ********************************************************************************************************************
*   The level data for the Garden level.
***********************************************************************************************************************/
export class LevelMarket extends Level {
    public width: number = 15000;
    public height: number = 4500;
    public playerStartX: number = 4500;
    public playerStartY: number = 1400;
    public playerInitialFloat: boolean = false;
    public playerInitialFacing: CharacterFacing = CharacterFacing.RIGHT;

    /** ****************************************************************************************************************
    *   Inits a new level.
    *******************************************************************************************************************/
    protected createGameObjects(): void {

        GameObjectBundleFactory.createPlayer(this);
        GameObjectFactory.createParallaxDeco(this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage(ImageData.BG_MARKET));

        this.addMarketSetup();
    }

    /** ****************************************************************************************************************
    *   Adds the garden setup.
    *******************************************************************************************************************/
    private addMarketSetup(): void {
        // ground
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DARK_GROUND, 0, 1400, 80,  3, Slope.NONE, CapHorz.NONE);

        // walls
        // GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DARK_GROUND, 0, 0, 1,  11, Slope.NONE, CapHorz.NONE);
        // GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DARK_GROUND, 2372, 0, 1,  11, Slope.NONE, CapHorz.NONE);

        // friends
        GameObjectBundleFactory.createFriend(SpriteData.RED_NINJA_GIRL_STAND_LEFT,    this, 3000, 1400, CharacterFacing.RIGHT, 3000, 3750, CharacterSpriteData.RED_NINJA_GIRL, false);
        GameObjectBundleFactory.createFriend(SpriteData.MASKED_NINJA_GIRL_STAND_LEFT, this, 4000, 1400, CharacterFacing.RIGHT, 3250, 4000, CharacterSpriteData.MASKED_NINJA_GIRL, false);
        // enemies
        GameObjectBundleFactory.createEnemy(SpriteData.MASKED_NINJA_GUY_STAND_LEFT,    this, 5000, 1400, CharacterFacing.RIGHT, 3750, 5000, CharacterSpriteData.MASKED_NINJA_GUY, false);
        GameObjectBundleFactory.createEnemy(SpriteData.BLUE_NINJA_GUY_WALK_LEFT,         this, 4500, 1400, CharacterFacing.RIGHT, 4500, 5000, CharacterSpriteData.BLUE_NINJA_GUY, false);

        // billboard 'services'
        GameObjectBundleFactory.createDecoImage(this, 2000, 1400, DecoPosition.FG, ImageData.BILLBOARD);
        GameObjectBundleFactory.createDecoImage(this, 2000, 1400, DecoPosition.FG, ImageData.BILLBOARD_WELCOME);

        // house with door to garden
        GameObjectBundleFactory.createDecoImage(this, 3500, 1400, DecoPosition.BG, ImageData.HOUSE_FRONT_1);
        GameObjectBundleFactory.createDecoImage(this, 3480, 1105, DecoPosition.BG, ImageData.HOUSE_ROOF_3);
        GameObjectFactory.createDoor(this, 3705, 1389, ImageData.DOOR_4, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_GARDEN, playerStartX: 2020, playerStartY: 1400 }));

        // house with door to start
        GameObjectBundleFactory.createDecoImage(this, 4200, 1400, DecoPosition.BG, ImageData.HOUSE_FRONT_2);
        GameObjectBundleFactory.createDecoImage(this, 4180, 1120, DecoPosition.BG, ImageData.HOUSE_ROOF_1);
        GameObjectFactory.createDoor(this, 4405, 1389, ImageData.DOOR_4, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_START, playerStartX: 250, playerStartY: 2000 }));
    }
}
