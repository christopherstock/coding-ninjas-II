/* eslint-disable max-len */

import {CapHorz, DecoPosition, GameObjectBundleFactory, Slope} from '../../game/object/GameObjectBundleFactory';
import {TilesetData} from '../TilesetData';
import {ImageData} from '../ImageData';
import {Level, LevelId} from '../../game/level/Level';
import {GameObjectFactory} from '../../game/object/GameObjectFactory';
import {SpriteTemplate} from '../../engine/ui/SpriteTemplate';
import {SpriteData} from '../SpriteData';
import {SiteContent} from '../../site/SiteContentSystem';
import {SitePanelAppearance} from '../../game/object/special/SiteTrigger';
import {GameAction, GameActionType} from '../../game/object/GameAction';
import {CharacterSpriteData} from '../CharacterSpriteData';
import {CharacterFacing} from '../../game/object/being/CharacterFacing';
import {MirrorImage} from '../../engine/ui/MirrorImage';

/** ********************************************************************************************************************
*   The level data for the dev level.
***********************************************************************************************************************/
export class LevelStart extends Level {
    public  width: number = 8320;
    public  height: number = 2500;
    public  playerStartX: number = 250;
    public  playerStartY: number = 2000;
    public  playerInitialFloat: boolean = false;
    public  playerInitialFacing: CharacterFacing = CharacterFacing.RIGHT;

    /** ****************************************************************************************************************
    *   Inits a new level.
    *******************************************************************************************************************/
    protected createGameObjects(): void {
        // player
        GameObjectBundleFactory.createPlayer(this);

        // parallax bg "Mount Fuji"
        GameObjectFactory.createParallaxDeco(this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage(ImageData.BG_MOUNT_FUJI));

        // home shrine
        this.addHomeShrine();
    }

    /** ****************************************************************************************************************
    *   Adds the startup shrine.
    *******************************************************************************************************************/
    private addHomeShrine(): void {
        // site trigger
        GameObjectFactory.createSiteTrigger(this, 500, 2000, 750, 550, SiteContent.CONTENT_WELCOME, SitePanelAppearance.RIGHT, null);

        // enemies
        GameObjectBundleFactory.createEnemy(this, 200, 2000, CharacterFacing.RIGHT, 200, 1700, CharacterSpriteData.BLUE_NINJA_GUY, false);
        GameObjectBundleFactory.createEnemy(this, 1700, 2000, CharacterFacing.LEFT, 200, 1700, CharacterSpriteData.MASKED_NINJA_GUY, false);

        // trees
        GameObjectBundleFactory.createDecoImage(this, 1200, 2000, DecoPosition.FG, ImageData.TREE_1);

        // statue with bush
        GameObjectBundleFactory.createCandle(this, 2170, 2000, DecoPosition.BG);
        GameObjectBundleFactory.createDecoImage(this, 2060, 2022, DecoPosition.BG, ImageData.BUSH_2);
        GameObjectBundleFactory.createDecoImage(this, 2000, 2000, DecoPosition.BG, ImageData.STATUE_1);
        GameObjectBundleFactory.createDecoImage(this, 1885, 2000, DecoPosition.FG, ImageData.BUSH_1);
        GameObjectBundleFactory.createCandle(this, 1930, 2000, DecoPosition.FG);

        // billboard 'welcome'
        GameObjectBundleFactory.createDecoImage(this, 2500, 2000, DecoPosition.FG, ImageData.BILLBOARD);
        GameObjectBundleFactory.createDecoImage(this, 2500, 2000, DecoPosition.FG, ImageData.BILLBOARD_WELCOME);
        // grass
        GameObjectBundleFactory.createDecoSprite(this, 2500, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, 2550, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, 2600, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, 3050, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, 3100, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, 3150, 2000, DecoPosition.FG, SpriteData.GRASS_1);

        // lion statue with trees and grass
        GameObjectBundleFactory.createDecoImage(this, 3600, 2000, DecoPosition.FG, ImageData.TREE_1, MirrorImage.YES);
        GameObjectBundleFactory.createDecoImage(this, 4285, 2000, DecoPosition.BG, ImageData.STATUE_LION);
        GameObjectBundleFactory.createDecoImage(this, 4600, 2000, DecoPosition.FG, ImageData.TREE_2);
        GameObjectBundleFactory.createDecoSprite(this, 4080, 2000, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, 4130, 2000, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, 4180, 2000, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, 4480, 2000, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, 4530, 2000, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, 4580, 2000, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createCandle(this, 4200, 2000, DecoPosition.FG);
        GameObjectBundleFactory.createCandle(this, 4540, 2000, DecoPosition.FG);

        // boulder and bush
        GameObjectBundleFactory.createDecoImage(this, 5920, 2100, DecoPosition.FG, ImageData.BOULDER_1);
        GameObjectBundleFactory.createDecoImage(this, 5760, 2100, DecoPosition.FG, ImageData.BUSH_2);

        // friend
        GameObjectBundleFactory.createFriend(SpriteData.RED_NINJA_GIRL_STAND_LEFT,    this, 5870, 2100, CharacterFacing.RIGHT, 5870, 6800, CharacterSpriteData.RED_NINJA_GIRL, false);

        // house with door to DoJo
        GameObjectBundleFactory.createDecoImage(this, 6400, 2100, DecoPosition.BG, ImageData.HOUSE_FRONT_3);
        GameObjectBundleFactory.createDecoImage(this, 6380, 1810, DecoPosition.BG, ImageData.HOUSE_ROOF_2);
        GameObjectFactory.createDoor(this, 6600, 2089, ImageData.DOOR_1, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_DOJO, playerStartX: 1020, playerStartY: 1400, playerInitFacing: CharacterFacing.RIGHT }));

        // wooden crates
        GameObjectBundleFactory.createMovableRect(this, 6950, 2100, ImageData.CRATE_WOOD);
        GameObjectBundleFactory.createMovableRect(this, 7095, 2100, ImageData.CRATE_WOOD);
        GameObjectBundleFactory.createMovableRect(this, 7240, 2100, ImageData.CRATE_WOOD);
        GameObjectBundleFactory.createMovableRect(this, 7020, 1975, ImageData.CRATE_WOOD);
        GameObjectBundleFactory.createMovableRect(this, 7155, 1975, ImageData.CRATE_WOOD);

        // bridge and blue water
        GameObjectBundleFactory.createBridge(this, 7110, 2100, true);
        GameObjectBundleFactory.createWaterArea(this, 7040, 2260, 10, 4, ImageData.WATER_CENTER);

        // ground
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, 0,    2000, 40,  5, Slope.NONE, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, 5120, 2000, 5,  5, Slope.DESCENDING, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, 5760, 2100, 10, 5, Slope.NONE,       CapHorz.NONE);
    }
}
