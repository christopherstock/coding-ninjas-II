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
    public  height: number = 1772;
    public  playerStartX: number = 250;
    public  playerStartY: number = (SettingDebug.DISABLE_FLOATING_STARTUP ? 1000 : 250);
    public  playerInitialFacing: CharacterFacing = CharacterFacing.RIGHT;
    public  playerInitialFloat: boolean = !SettingDebug.DISABLE_FLOATING_STARTUP;

    protected createGameObjects(): void {
        GameObjectBundleFactory.createPlayer(this);
        GameObjectFactory.createParallaxDeco(this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage(ImageData.BG_MOUNT_FUJI));

        this.addStartZone();
        this.addStepsUp();
        this.addUpperGround();
        this.addStepsDown();
        this.addSeaside();
    }

    private addStartZone(): void {
        const x = 0;
        const y = 1000;

        // site trigger
        GameObjectFactory.createSiteTrigger(this, x + 0, y, 1000, 500, SiteContent.CONTENT_WELCOME, SitePanelAppearance.RIGHT, null);

        // tree
        GameObjectBundleFactory.createDecoImage(this, x + 460, y, DecoPosition.FG, ImageData.TREE_3, MirrorImage.YES);

        // masked ninja guy
        GameObjectBundleFactory.createEnemy(this, x + 1900, y, CharacterFacing.LEFT, x + 860, x + 1900, CharacterSpriteData.MASKED_NINJA_GUY, false);

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
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x, y, 48,  6, Slope.NONE, CapHorz.NONE);
    }

    private addStepsUp(): void {
        const x = 6144;
        const y = 900;

        // billboard 'baur'
        GameObjectBundleFactory.createBillboard(this, x - 225, y + 100, DecoPosition.BG, ImageData.BILLBOARD_BAUR, 'https://php8.christopherstock.de/architekt-baur/1.1/index.php/de/');

        // crates
        const cratesX: number = x - 200 + 8 * GameObjectBundleFactory.GROUND_TILE_WIDTH - 100 + 75;
        GameObjectBundleFactory.createMovableRect(this, cratesX - 0, y, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, cratesX - 0 + 125, y, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, cratesX - 0 + 62, y - 125, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        // fence
        const fenceX = x - 200 + 8 * GameObjectBundleFactory.GROUND_TILE_WIDTH;
        GameObjectBundleFactory.createDecoImage(this, fenceX, y - 20, DecoPosition.FG, ImageData.FENCE_1_LEFT);
        GameObjectBundleFactory.createDecoImage(this, fenceX + 256, y - 20, DecoPosition.FG, ImageData.FENCE_1_CENTER);
        GameObjectBundleFactory.createDecoImage(this, fenceX + 512, y - 20, DecoPosition.FG, ImageData.FENCE_1_RIGHT);

        // billboard 'kuhn'
        GameObjectBundleFactory.createBillboard(this, fenceX + 256 * 2 + 300 + 50, y + 100 - 168, DecoPosition.BG, ImageData.BILLBOARD_KUHN, 'https://glaskunst-kuhn.de/index.php/de/');

        // boulder and bush
        GameObjectBundleFactory.createDecoImage(this, fenceX + 550 - 6020 + 5760, y + 100 - 120, DecoPosition.BG, ImageData.BUSH_2);
        GameObjectBundleFactory.createDecoImage(this, fenceX + 550 - 6020 + 5920, y + 100 - 120, DecoPosition.BG, ImageData.BOULDER_1);

        // masked ninja
        GameObjectBundleFactory.createEnemy(this, fenceX, y - 20, CharacterFacing.LEFT, fenceX, fenceX + 590, CharacterSpriteData.MASKED_NINJA_GUY, false);

        // ground & steps
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x, y + 100, 6,  5, Slope.ASCENDING, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x + 6 * GameObjectBundleFactory.GROUND_TILE_WIDTH, y + 100 - 120, 6,  5, Slope.NONE, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x + 12 * GameObjectBundleFactory.GROUND_TILE_WIDTH, y + 100 - 120, 6,  5, Slope.ASCENDING, CapHorz.NONE);
    }

    private addUpperGround(): void {
        const x = 8448;
        const y = 760;

        // edge mark boulder
        GameObjectBundleFactory.createDecoImage(this, x + 15, y, DecoPosition.BG, ImageData.BOULDER_3);

        // crates
        GameObjectBundleFactory.createMovableRect(this, x - 800 - 5870 + 6950, y, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x - 800 - 5870 + 7095, y, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x - 800 - 5870 + 7240, y, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x - 800 - 5870 + 7020, y - 125, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x - 800 - 5870 + 7155, y - 125, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        // lion statue with grass
        GameObjectBundleFactory.createDecoImage(this, x - 200 + 1265, y, DecoPosition.BG, ImageData.STATUE_5);
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

        // boulder
        GameObjectBundleFactory.createDecoImage(this, x + 2240, y, DecoPosition.BG, ImageData.BOULDER_5);

        // tree
        GameObjectBundleFactory.createDecoImage(this, x + 1580, y, DecoPosition.FG, ImageData.TREE_2);

        // masked ninja girl
        GameObjectBundleFactory.createEnemy(this, x + 1500, y, CharacterFacing.RIGHT, x + 1500, x + 2350, CharacterSpriteData.MASKED_NINJA_GIRL, false);

        // ground
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x, y, 20,  5, Slope.NONE, CapHorz.NONE);
    }

    private addStepsDown(): void {
        const x = 11008;
        const y = 1000 - 240;

        // boulder and bush
        // GameObjectBundleFactory.createDecoImage(this, x - 6020 + 5760, 2100, DecoPosition.BG, ImageData.BUSH_2);
        // GameObjectBundleFactory.createDecoImage(this, x - 6020 + 5920, 2100, DecoPosition.FG, ImageData.BOULDER_1);

        // statue shrine
        GameObjectBundleFactory.createStatusShrine(this, x + 12 * 128 + 450, y + 2 * 120);

        // white ninja
        const x2 = 50 + x + 12 * GameObjectBundleFactory.GROUND_TILE_WIDTH;
        GameObjectBundleFactory.createEnemy(this, x2, y + 2 * 120, CharacterFacing.LEFT, x2, x2 + 535, CharacterSpriteData.WHITE_NINJA_GUY, false);

        // billboard 'natalie'
        GameObjectBundleFactory.createBillboard(this, x + 250, y + 140, DecoPosition.BG, ImageData.BILLBOARD_NATALIE, 'https://fraeulein-natalie.de/index.php/de/');

        // billboard 'winkler'
        GameObjectBundleFactory.createBillboard(this, x + 18 * GameObjectBundleFactory.GROUND_TILE_WIDTH + 800, y + 2 * 120 + 240, DecoPosition.BG, ImageData.BILLBOARD_WINKLER, 'https://www.winklerundschorn.de/index.php/de/');

        // steps
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x, y, 12,  5, Slope.DESCENDING, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x + 12 * GameObjectBundleFactory.GROUND_TILE_WIDTH, y + 2 * 120, 6,  5, Slope.NONE, CapHorz.NONE);
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x + 18 * GameObjectBundleFactory.GROUND_TILE_WIDTH, y + 2 * 120, 12,  5, Slope.DESCENDING, CapHorz.NONE);
    }

    private addSeaside(): void {
        const x = 14848;
        const y = 1240;

        // enemy ninja girl
        GameObjectBundleFactory.createEnemy(this, x + 300, y, CharacterFacing.RIGHT, x + 300, x + 1144, CharacterSpriteData.RED_NINJA_GIRL, false);

        // bush & boulder
        GameObjectBundleFactory.createDecoImage(this, x + 50, y, DecoPosition.BG, ImageData.BUSH_3);
        GameObjectBundleFactory.createDecoImage(this, x + 275, y, DecoPosition.BG, ImageData.BOULDER_4);

        // house with door to DoJo
        GameObjectBundleFactory.createDecoImage(this, x + 530, y, DecoPosition.BG, ImageData.HOUSE_FRONT_3);
        GameObjectBundleFactory.createDecoImage(this, x + 510, y - 290, DecoPosition.BG, ImageData.HOUSE_ROOF_2);
        GameObjectFactory.createDoor(this, x + 730, y, ImageData.DOOR_1, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_DOJO, playerInitFacing: CharacterFacing.LEFT }));

        // bridge and water
        GameObjectBundleFactory.createBridge(this, x + 1315, y, true);
        GameObjectBundleFactory.createWaterArea(this, x + 1170, y + 20, 16, 4, ImageData.WATER_CENTER);

        // crates
        GameObjectBundleFactory.createMovableRect(this, x + 1080, y, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 1225, y, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 1370, y, ImageData.CRATE_STEEL, BodyDensity.METAL, BodyFriction.METAL, Breakable.NO);
        GameObjectBundleFactory.createMovableRect(this, x + 1150, y - 125, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);
        GameObjectBundleFactory.createMovableRect(this, x + 1285, y - 125, ImageData.CRATE_WOOD, BodyDensity.DEFAULT, BodyFriction.DEFAULT_MOVABLE, Breakable.YES);

        // lower ground
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x, y, 10, 5, Slope.NONE,       CapHorz.NONE);
    }
}
