/* eslint-disable max-len */

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
import { BodyDensity, BodyFriction } from '../../base/SettingMatter';
import { SettingDebug } from '../../base/SettingDebug';
import { Breakable } from '../../game/object/GameObject';

export class LevelStart extends Level {
    public id: LevelId = LevelId.LEVEL_START;
    public  width: number = 16000;
    public  height: number = 2500;
    public  playerStartX: number = 6000; // 250;
    public  playerStartY: number = (SettingDebug.NO_FLOATING_STARTUP ? 2000 : 1250);
    public  playerInitialFacing: CharacterFacing = CharacterFacing.RIGHT;
    public  playerInitialFloat: boolean = !SettingDebug.NO_FLOATING_STARTUP;

    protected createGameObjects(): void {
        // player
        GameObjectBundleFactory.createPlayer(this);

        // parallax bg "Mount Fuji"
        GameObjectFactory.createParallaxDeco(this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage(ImageData.BG_MOUNT_FUJI));

        this.addStartingZone();
        this.addStepsUp();
        this.addUpperGround();
        // this.addLowerGround();
    }

    private addStartingZone(): void {
        const x = 0;

        // site trigger with tree
        GameObjectFactory.createSiteTrigger(this, x + 0, 2000, 1000, 500, SiteContent.CONTENT_WELCOME, SitePanelAppearance.RIGHT, null);
        GameObjectBundleFactory.createDecoImage(this, x + 500, 2000, DecoPosition.FG, ImageData.TREE_1);

        // statue shrine
        GameObjectBundleFactory.createStatusShrine(this, x + 2750, 2000);

        // billboard 'welcome' with grass
        GameObjectBundleFactory.createBillboard(this, x + 3500, 2000, DecoPosition.FG, ImageData.BILLBOARD_WELCOME, 'https://www.christopherstock.de');
        GameObjectBundleFactory.createDecoSprite(this, x + 3500, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, x + 3550, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, x + 3600, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, x + 4050, 2000, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, x + 4100, 2000, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, x + 4150, 2000, DecoPosition.FG, SpriteData.GRASS_2);

        // tree, boulders & bushes
        GameObjectBundleFactory.createDecoImage(this, x + 4830, 2000, DecoPosition.FG, ImageData.TREE_1, MirrorImage.YES);
        GameObjectBundleFactory.createDecoImage(this, x + 5200, 2020, DecoPosition.BG, ImageData.BOULDER_1);
        GameObjectBundleFactory.createDecoImage(this, x + 5300, 2000, DecoPosition.FG, ImageData.BOULDER_1);
        GameObjectBundleFactory.createDecoImage(this, 6000 - 285, 2000, DecoPosition.FG, ImageData.BUSH_2);
        GameObjectBundleFactory.createDecoImage(this, 6000 - 160, 2000 + 22, DecoPosition.BG, ImageData.BUSH_1);

        // ground
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x + 0, 2000, 48,  5, Slope.NONE, CapHorz.NONE);
/*
        // enemies
        GameObjectBundleFactory.createEnemy(this, x + 4350, 2000, CharacterFacing.RIGHT, 4350, 5850, CharacterSpriteData.BLUE_NINJA_GUY, false);
        GameObjectBundleFactory.createEnemy(this, x + 5850, 2000, CharacterFacing.LEFT, 4350, 5850, CharacterSpriteData.MASKED_NINJA_GUY, false);
*/
        /*
        // destroyable crates
        GameObjectBundleFactory.createObstacle(this, x + 2000, 2000, ImageData.CRATE_WOOD, Breakable.YES);
        GameObjectBundleFactory.createObstacle(this, x + 2125, 2000, ImageData.CRATE_WOOD, Breakable.YES);
        GameObjectBundleFactory.createObstacle(this, x + 2250, 2000, ImageData.CRATE_WOOD, Breakable.YES);
        GameObjectBundleFactory.createObstacle(this, x + 2062, 1875, ImageData.CRATE_WOOD, Breakable.YES);
        GameObjectBundleFactory.createObstacle(this, x + 2187, 1875, ImageData.CRATE_WOOD, Breakable.YES);
*/
    }

    private addStepsUp(): void {
        const x = 6144;

        // boulder and bush
        // GameObjectBundleFactory.createDecoImage(this, x - 6020 + 5760, 2100, DecoPosition.BG, ImageData.BUSH_2);
        // GameObjectBundleFactory.createDecoImage(this, x - 6020 + 5920, 2100, DecoPosition.FG, ImageData.BOULDER_1);

        // steps
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x, 2000, 6,  5, Slope.ASCENDING, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x + 6 * GameObjectBundleFactory.GROUND_TILE_WIDTH, 2000 - 120, 6,  5, Slope.NONE, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x + 12 * GameObjectBundleFactory.GROUND_TILE_WIDTH, 2000 - 120, 6,  5, Slope.ASCENDING, CapHorz.NONE);
    }

    private addUpperGround(): void {
        const x = 8448;
        const y = 2000 -240;
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x, y, 20,  5, Slope.NONE, CapHorz.NONE);

        // lion statue with trees and grass
        GameObjectBundleFactory.createDecoImage(this, x - 200 + 1265, y, DecoPosition.BG, ImageData.STATUE_LION);
        GameObjectBundleFactory.createDecoImage(this, x - 200 + 1580, y, DecoPosition.FG, ImageData.TREE_2);
        GameObjectBundleFactory.createDecoSprite(this, x - 200 + 1080, y, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, x - 200 + 1130, y, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, x - 200 + 1180, y, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, x - 200 + 1480, y, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, x - 200 + 1530, y, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, x - 200 + 1580, y, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createCandle(this, x - 200 + 1200, y, DecoPosition.FG);
        GameObjectBundleFactory.createCandle(this, x - 200 + 1540, y, DecoPosition.FG);
    }

    private addSeaside(): void {
        const x = 8448;
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, 8448, 2000 - 240, 6,  5, Slope.NONE, CapHorz.NONE);
/*
        // friend
        GameObjectBundleFactory.createFriend(SpriteData.RED_NINJA_GIRL_STAND_LEFT, this, x - 5870 + 5870, 2100, CharacterFacing.RIGHT, 5870, 6800, CharacterSpriteData.RED_NINJA_GIRL, false);

        // house with door to DoJo
        GameObjectBundleFactory.createDecoImage(this, x - 5870 + 6400, 2100, DecoPosition.BG, ImageData.HOUSE_FRONT_3);
        GameObjectBundleFactory.createDecoImage(this, x - 5870 + 6380, 1810, DecoPosition.BG, ImageData.HOUSE_ROOF_2);
        GameObjectFactory.createDoor(this, x - 5870 + 6600, 2089, ImageData.DOOR_1, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_DOJO, playerStartX: 1020, playerStartY: 1400, playerInitFacing: CharacterFacing.RIGHT }));

        // crates
        GameObjectBundleFactory.createMovableRect(this, x - 5870 + 6950, 2100, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x - 5870 + 7095, 2100, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x - 5870 + 7240, 2100, ImageData.CRATE_STEEL, BodyDensity.METAL, BodyFriction.METAL, Breakable.NO);
        GameObjectBundleFactory.createMovableRect(this, x - 5870 + 7020, 1975, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x - 5870 + 7155, 1975, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        // bridge and blue water
        GameObjectBundleFactory.createBridge(this, x - 5870 + 7110, 2100, true);
        GameObjectBundleFactory.createWaterArea(this, x - 5870 + 7040, 2260, 10, 4, ImageData.WATER_CENTER);

        // lower ground
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x - 5870 + 5760, 2100, 10, 5, Slope.NONE,       CapHorz.NONE);
*/
    }
}
