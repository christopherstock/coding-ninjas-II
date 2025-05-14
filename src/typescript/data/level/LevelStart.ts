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
import { CharacterFacing } from '../../game/object/being/CharacterFacing';
import { MirrorImage } from '../../engine/ui/MirrorImage';
import { SettingDebug } from '../../base/SettingDebug';
import { CharacterSpriteData } from '../CharacterSpriteData';
import { GameAction, GameActionType } from '../../game/object/GameAction';
import { BodyDensity, BodyFriction } from '../../base/SettingMatter';
import { Breakable } from '../../game/object/GameObject';

export class LevelStart extends Level {
    public id: LevelId = LevelId.LEVEL_START;
    public  width: number = 18066;
    public  height: number = 5000;
    public  playerStartX: number = (SettingDebug.DEBUG_MODE ? 250 /* 11008 */ : 250);
    public  playerStartY: number = (SettingDebug.NO_FLOATING_STARTUP ? 2000 : 1250);
    public  playerInitialFacing: CharacterFacing = CharacterFacing.RIGHT;
    public  playerInitialFloat: boolean = !SettingDebug.NO_FLOATING_STARTUP;

    protected createGameObjects(): void {
        GameObjectBundleFactory.createPlayer(this);
        GameObjectFactory.createParallaxDeco(this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage(ImageData.BG_MOUNT_FUJI));

        this.addStartingZone();
        this.addStepsUp();
        this.addUpperGround();
        this.addStepsDown();
        this.addSeaside();
    }

    private addStartingZone(): void {
        const x = 0;
        const y = 2000;

        // site trigger with tree
        GameObjectFactory.createSiteTrigger(this, x + 0, y, 1000, 500, SiteContent.CONTENT_WELCOME, SitePanelAppearance.RIGHT, null);
        GameObjectBundleFactory.createDecoImage(this, x + 500, y, DecoPosition.FG, ImageData.TREE_1);

        // statue shrine
        GameObjectBundleFactory.createStatusShrine(this, x + 2750, y);

        // crate
        GameObjectBundleFactory.createMovableRect(this, x + 3000, y, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 3000 + 145, y, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 3000 + 70, y - 125, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        // billboard 'welcome' with grass
        GameObjectBundleFactory.createBillboard(this, x + 3500, y, DecoPosition.FG, ImageData.BILLBOARD_WELCOME, 'https://www.christopherstock.de');
        GameObjectBundleFactory.createDecoSprite(this, x + 3500, y, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, x + 3550, y, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, x + 3600, y, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, x + 4050, y, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, x + 4100, y, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, x + 4150, y, DecoPosition.FG, SpriteData.GRASS_2);

        // tree, boulders & bushes
        GameObjectBundleFactory.createDecoImage(this, x + 4830, y, DecoPosition.FG, ImageData.TREE_1, MirrorImage.YES);
        GameObjectBundleFactory.createDecoImage(this, x + 5200, y + 20, DecoPosition.BG, ImageData.BOULDER_1);
        GameObjectBundleFactory.createDecoImage(this, x + 5300, y, DecoPosition.FG, ImageData.BOULDER_2);
        GameObjectBundleFactory.createDecoImage(this, 6000 - 285, y, DecoPosition.FG, ImageData.BUSH_2);
        GameObjectBundleFactory.createDecoImage(this, 6000 - 160, y + 22, DecoPosition.BG, ImageData.BUSH_1);

        // blue ninja
        GameObjectBundleFactory.createEnemy(this, x + 5100, y, CharacterFacing.RIGHT, x + 5100, x + 5100 + 758, CharacterSpriteData.BLUE_NINJA_GUY, false);
        GameObjectBundleFactory.createEnemy(this, x + 4120, y, CharacterFacing.RIGHT, x + 4120, x + 4120 + 685, CharacterSpriteData.BLACK_NINJA_GUY, false);

        // ground
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x + 0, y, 48,  5, Slope.NONE, CapHorz.NONE);
    }

    private addStepsUp(): void {
        const x = 6144;
        const y = 2000 - 100;

        // billboard 'Hanoi TS'
        GameObjectBundleFactory.createBillboard(this, x - 225, y + 100, DecoPosition.BG, ImageData.BILLBOARD_HANOI_TS, 'https://christopherstock.github.io/HanoiTS/dist/');

        // fence
        const fenceX = x - 200 + 8 * GameObjectBundleFactory.GROUND_TILE_WIDTH;
        GameObjectBundleFactory.createDecoImage(this, fenceX, 2000 - 120, DecoPosition.FG, ImageData.FENCE_LEFT);
        GameObjectBundleFactory.createDecoImage(this, fenceX + 256, 2000 - 120, DecoPosition.FG, ImageData.FENCE_CENTER);
        GameObjectBundleFactory.createDecoImage(this, fenceX + 256 * 2, 2000 - 120, DecoPosition.FG, ImageData.FENCE_RIGHT);

        // boulder and bush
        GameObjectBundleFactory.createDecoImage(this, fenceX + 550 - 6020 + 5760, 2000 - 120, DecoPosition.BG, ImageData.BUSH_2);
        GameObjectBundleFactory.createDecoImage(this, fenceX + 550 - 6020 + 5920, 2000 - 120, DecoPosition.BG, ImageData.BOULDER_1);

        // masked ninja
        GameObjectBundleFactory.createEnemy(this, fenceX, 2000 - 120, CharacterFacing.LEFT, fenceX, fenceX + 590, CharacterSpriteData.MASKED_NINJA_GUY, false);

        // ground & steps
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x, 2000, 6,  5, Slope.ASCENDING, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x + 6 * GameObjectBundleFactory.GROUND_TILE_WIDTH, 2000 - 120, 6,  5, Slope.NONE, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x + 12 * GameObjectBundleFactory.GROUND_TILE_WIDTH, 2000 - 120, 6,  5, Slope.ASCENDING, CapHorz.NONE);
    }

    private addUpperGround(): void {
        const x = 8448;
        const y = 1760;

        // boulders
        GameObjectBundleFactory.createDecoImage(this, x + 80, y, DecoPosition.BG, ImageData.BOULDER_3);

        // crates
        GameObjectBundleFactory.createMovableRect(this, x - 800 - 5870 + 6950, y, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x - 800 - 5870 + 7095, y, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x - 800 - 5870 + 7240, y, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x - 800 - 5870 + 7020, y - 125, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x - 800 - 5870 + 7155, y - 125, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        // lion statue with grass
        GameObjectBundleFactory.createDecoImage(this, x - 200 + 1265, y, DecoPosition.BG, ImageData.STATUE_LION);
        GameObjectBundleFactory.createDecoSprite(this, x - 200 + 1080, y, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, x - 200 + 1130, y, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, x - 200 + 1180, y, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, x - 200 + 1480, y, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, x - 200 + 1530, y, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, x - 200 + 1580, y, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createCandle(this, x - 200 + 1200, y, DecoPosition.FG);
        GameObjectBundleFactory.createCandle(this, x - 200 + 1540, y, DecoPosition.FG);

        // tree
        GameObjectBundleFactory.createDecoImage(this, x + 1580, y, DecoPosition.FG, ImageData.TREE_2);

        // masked ninja girl
        GameObjectBundleFactory.createEnemy(this, x + 1500, y, CharacterFacing.RIGHT, x + 1500, x + 2350, CharacterSpriteData.MASKED_NINJA_GIRL, false);

        // ground
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x, y, 20,  5, Slope.NONE, CapHorz.NONE);
    }

    private addStepsDown(): void {
        const x = 11008;
        const y = 2000 - 240;

        // boulder and bush
        // GameObjectBundleFactory.createDecoImage(this, x - 6020 + 5760, 2100, DecoPosition.BG, ImageData.BUSH_2);
        // GameObjectBundleFactory.createDecoImage(this, x - 6020 + 5920, 2100, DecoPosition.FG, ImageData.BOULDER_1);

        // statue shrine
        GameObjectBundleFactory.createStatusShrine(this, x + 12 * 128 + 450, y + 2 * 120);

        // masked ninja guy
        const x2 = 50 + x + 12 * GameObjectBundleFactory.GROUND_TILE_WIDTH;
        GameObjectBundleFactory.createEnemy(this, x2, y + 2 * 120, CharacterFacing.LEFT, x2, x2 + 535, CharacterSpriteData.WHITE_NINJA_GUY, false);

        // billboard 'flash'
        GameObjectBundleFactory.createBillboard(this, x + 250, y + 140, DecoPosition.BG, ImageData.BILLBOARD_FLASH, 'https://christopherstock.github.io/ApacheRoyalePrimer/showcase/martinApacheRoyale0.9/index.html');

        // billboard 'kuhn'
        GameObjectBundleFactory.createBillboard(this, x + 18 * GameObjectBundleFactory.GROUND_TILE_WIDTH + 800, y + 2 * 120 + 240, DecoPosition.BG, ImageData.BILLBOARD_KUHN, 'https://glaskunst-kuhn.de/index.php/de/');

        // steps
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x, y, 12,  5, Slope.DESCENDING, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x + 12 * GameObjectBundleFactory.GROUND_TILE_WIDTH, y + 2 * 120, 6,  5, Slope.NONE, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x + 18 * GameObjectBundleFactory.GROUND_TILE_WIDTH, y + 2 * 120, 12,  5, Slope.DESCENDING, CapHorz.NONE);
    }

    private addSeaside(): void {
        const x = 14848;
        const y = 2240;

        // friend
        GameObjectBundleFactory.createFriend(SpriteData.RED_NINJA_GIRL_STAND_LEFT, this, x + 300, y, CharacterFacing.RIGHT, x + 300, x + 1144, CharacterSpriteData.RED_NINJA_GIRL, false);

        // house with door to DoJo
        GameObjectBundleFactory.createDecoImage(this, x - 5870 + 6400, y, DecoPosition.BG, ImageData.HOUSE_FRONT_3);
        GameObjectBundleFactory.createDecoImage(this, x - 5870 + 6380, y - 290, DecoPosition.BG, ImageData.HOUSE_ROOF_2);
        GameObjectFactory.createDoor(this, x - 5870 + 6600, y, ImageData.DOOR_1, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_DOJO, playerInitFacing: CharacterFacing.LEFT }));

        // bridge and water
        GameObjectBundleFactory.createBridge(this, x + 75 - 5870 + 7110, y, true);
        GameObjectBundleFactory.createWaterArea(this, x - 5870 + 7040, 2260, 16, 4, ImageData.WATER_CENTER);

        // crates
        GameObjectBundleFactory.createMovableRect(this, x - 5870 + 6950, 2100 + 140, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x - 5870 + 7095, 2100 + 140, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x - 5870 + 7240, 2100 + 140, ImageData.CRATE_STEEL, BodyDensity.METAL, BodyFriction.METAL, Breakable.NO);
        GameObjectBundleFactory.createMovableRect(this, x - 5870 + 7020, 1975 + 140, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x - 5870 + 7155, 1975 + 140, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        // lower ground
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x, y, 10, 5, Slope.NONE,       CapHorz.NONE);
    }
}
