/* eslint-disable max-len */

import * as matter from 'matter-js';
import { CapHorz, DecoPosition, GameObjectBundleFactory, Slope } from '../../game/object/GameObjectBundleFactory';
import { TilesetData } from '../TilesetData';
import { ImageData } from '../ImageData';
import { Level, LevelId } from '../../game/level/Level';
import { GameObjectFactory } from '../../game/object/GameObjectFactory';
import { SpriteTemplate } from '../../engine/ui/SpriteTemplate';
import { SpriteData } from '../SpriteData';
import { SiteContent } from '../../site/SiteContentSystem';
import { SitePanelAppearance } from '../../game/object/special/SiteTrigger';
import { GameAction, GameActionType } from '../../game/object/GameAction';
import { CharacterSpriteData } from '../CharacterSpriteData';
import { CharacterFacing } from '../../game/object/being/CharacterFacing';
import { MirrorImage } from '../../engine/ui/MirrorImage';

/** ********************************************************************************************************************
*   The level data for the dev level.
***********************************************************************************************************************/
export class LevelStart extends Level {
    public  width: number = 12500;
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
        // enemies
        GameObjectBundleFactory.createEnemy(SpriteData.BLUE_NINJA_GUY_STAND_LEFT, this, 200, 2000, CharacterFacing.RIGHT, 200, 1700, CharacterSpriteData.BLUE_NINJA_GUY, false);
        GameObjectBundleFactory.createEnemy(SpriteData.BLUE_NINJA_GUY_STAND_LEFT, this, 1700, 2000, CharacterFacing.LEFT, 200, 1700, CharacterSpriteData.BLUE_NINJA_GUY, false);

        // trees
        GameObjectBundleFactory.createDecoImage(this, 400, 2000, DecoPosition.FG, ImageData.TREE_1, MirrorImage.YES);
        GameObjectBundleFactory.createDecoImage(this, 1200, 2000, DecoPosition.FG, ImageData.TREE_1);

        // statue with bush
        GameObjectBundleFactory.createDecoImage(this, 2000, 2000, DecoPosition.BG, ImageData.STATUE_1);
        GameObjectBundleFactory.createDecoImage(this, 2030, 2022, DecoPosition.BG, ImageData.BUSH_2);
        GameObjectBundleFactory.createDecoImage(this, 1900, 2000, DecoPosition.FG, ImageData.BUSH_1);

        // billboard 'welcome'
        GameObjectBundleFactory.createDecoImage(this, 2500, 2000, DecoPosition.FG, ImageData.BILLBOARD);
        GameObjectBundleFactory.createDecoImage(this, 2500, 2000, DecoPosition.FG, ImageData.BILLBOARD_WELCOME);

        // grass
        GameObjectBundleFactory.createDecoSprite(this, 2300, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, 2350, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, 2400, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, 2600, 2000, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, 2650, 2000, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, 2700, 2000, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, 2900, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, 2950, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, 3000, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, 3200, 2000, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, 3250, 2000, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, 3300, 2000, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, 3500, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, 3550, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, 3600, 2000, DecoPosition.FG, SpriteData.GRASS_1);

        // tree and lion statue
        GameObjectBundleFactory.createDecoImage(this, 3600, 2000, DecoPosition.FG, ImageData.TREE_1);
        GameObjectBundleFactory.createDecoImage(this, 4285, 2000, DecoPosition.BG, ImageData.STATUE_LION);
        GameObjectBundleFactory.createDecoImage(this, 4600, 2000, DecoPosition.FG, ImageData.TREE_1, MirrorImage.YES);

        // bridge and blue water
        GameObjectBundleFactory.createBridge(this, 7110, 2100, true);
        GameObjectBundleFactory.createWaterArea(this, 7040, 2260, 20, 4, ImageData.WATER_CENTER);

        // wooden crates
        GameObjectBundleFactory.createMovableRect(this, 6950, 2100, ImageData.CRATE_WOOD);
        GameObjectBundleFactory.createMovableRect(this, 7095, 2100, ImageData.CRATE_WOOD);
        GameObjectBundleFactory.createMovableRect(this, 7240, 2100, ImageData.CRATE_WOOD);
        GameObjectBundleFactory.createMovableRect(this, 7020, 1975, ImageData.CRATE_WOOD);
        GameObjectBundleFactory.createMovableRect(this, 7155, 1975, ImageData.CRATE_WOOD);

        // house with door to DoJo
        GameObjectBundleFactory.createDecoImage(this, 6400, 2100, DecoPosition.BG, ImageData.HOUSE_FRONT_3);
        GameObjectBundleFactory.createDecoImage(this, 6380, 1810, DecoPosition.BG, ImageData.HOUSE_ROOF_2);
        GameObjectFactory.createDoor(this, 6600, 2089, ImageData.DOOR_1, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_DOJO, playerStartX: 1020, playerStartY: 1400 }));

        // ground
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, 0,    2000, 40,  5, Slope.NONE, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, 5120, 2000, 5,  5, Slope.DESCENDING, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, 5760, 2100, 10, 5, Slope.NONE,       CapHorz.NONE);
    }

    /** ****************************************************************************************************************
    *   Adds the special spare parts (plateaus etc)
    *******************************************************************************************************************/
    private addSpareParts(): void {
        // sigsaw
        GameObjectFactory.createSigsaw(this, 3400, 2000, SpriteTemplate.createFromSingleImage(ImageData.SIGSAW_1), -1);

        // platform
        GameObjectFactory.createPlatform(this, SpriteTemplate.createFromSingleImage(ImageData.PLATFORM_1), 3.5, [ matter.Vector.create(5260, 2000), matter.Vector.create(6000, 2000) ]);

        // bounce
        GameObjectFactory.createBounce(this, 7460, 2000, SpriteTemplate.createFromSingleImage(ImageData.BOUNCE_1), 0.00075);

        // site trigger
        GameObjectFactory.createSiteTrigger(this, 2000, 2000, 800, 550, SiteContent.CONTENT_WELCOME, SitePanelAppearance.LEFT, null);
    }

    /** ****************************************************************************************************************
    *   Adds the 3rd plateau.
    *******************************************************************************************************************/
    private addThirdPlateau(): void {
        // candles
        GameObjectBundleFactory.createCandle(this, 4765, 2000, DecoPosition.FG);
        GameObjectBundleFactory.createCandle(this, 4865, 2000, DecoPosition.BG);
        GameObjectBundleFactory.createCandle(this, 4965, 2000, DecoPosition.FG);

        // wooden crates
        GameObjectBundleFactory.createMovableRect(this, 5600, 2000, ImageData.CRATE_WOOD);
        GameObjectBundleFactory.createMovableRect(this, 5725, 2000, ImageData.CRATE_WOOD);
        GameObjectBundleFactory.createMovableRect(this, 5884, 2000, ImageData.CRATE_WOOD);
        GameObjectBundleFactory.createMovableRect(this, 6041, 2000, ImageData.CRATE_WOOD);
        GameObjectBundleFactory.createMovableRect(this, 6166, 2000, ImageData.CRATE_WOOD);

        // stones
        GameObjectBundleFactory.createMovableRect(this, 5650, 1900, ImageData.STONE_SPHERE);
        GameObjectBundleFactory.createMovableRect(this, 5750, 1900, ImageData.STONE_SPHERE);
        GameObjectBundleFactory.createMovableRect(this, 5900, 1900, ImageData.STONE_SPHERE);
        GameObjectBundleFactory.createMovableRect(this, 6070, 1900, ImageData.STONE_SPHERE);

        // candles
        GameObjectBundleFactory.createCandle(this, 6930, 2000, DecoPosition.BG);
        GameObjectBundleFactory.createCandle(this, 7060, 2000, DecoPosition.FG);

        // wooden crate
        GameObjectBundleFactory.createMovableRect(this, 6980, 2000, ImageData.CRATE_WOOD);
        GameObjectBundleFactory.createMovableRect(this, 7095, 2000, ImageData.CRATE_WOOD);
        GameObjectBundleFactory.createMovableRect(this, 7042, 1875, ImageData.CRATE_WOOD);

        // movables
        GameObjectBundleFactory.createMovableRect(this, 9350, 2000, ImageData.POT_1);
        GameObjectBundleFactory.createMovableCircular(this, 9450, 2000, 0.0, ImageData.STONE_SPHERE);

        // boulder and bush
        GameObjectBundleFactory.createDecoImage(this, 9000, 2000, DecoPosition.BG, ImageData.BOULDER_1);
        GameObjectBundleFactory.createDecoImage(this, 8800, 2000, DecoPosition.FG, ImageData.BUSH_2);

        // enemies
        GameObjectBundleFactory.createEnemy(SpriteData.BLUE_NINJA_GUY_STAND_LEFT, this, 12000, 2100, CharacterFacing.RIGHT, 10000, 11150, CharacterSpriteData.BLUE_NINJA_GUY);
        GameObjectBundleFactory.createEnemy(SpriteData.BLUE_NINJA_GUY_STAND_LEFT, this, 13670, 2100, CharacterFacing.LEFT,  11670, 11870, CharacterSpriteData.BLUE_NINJA_GUY);
        GameObjectBundleFactory.createEnemy(SpriteData.BLUE_NINJA_GUY_STAND_LEFT, this, 10600,  2100, CharacterFacing.LEFT,  8600,  9500,  CharacterSpriteData.BLUE_NINJA_GUY);
        GameObjectBundleFactory.createEnemy(SpriteData.BLUE_NINJA_GUY_STAND_LEFT, this, 8700,  2100, CharacterFacing.LEFT,  6700,  7250,  CharacterSpriteData.BLUE_NINJA_GUY);
    }
}
