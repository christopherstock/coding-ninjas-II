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

/** ********************************************************************************************************************
*   The level data for the dev level.
***********************************************************************************************************************/
export class LevelStart extends Level {
    public id: LevelId = LevelId.LEVEL_START;
    public  width: number = 8320;
    public  height: number = 2500;
    public  playerStartX: number = 250;
    public  playerStartY: number = (SettingDebug.NO_FLOATING_STARTUP ? 2000 : 1250);
    public  playerInitialFacing: CharacterFacing = CharacterFacing.RIGHT;
    public  playerInitialFloat: boolean = !SettingDebug.NO_FLOATING_STARTUP;

    /** ****************************************************************************************************************
    *   Inits a new level.
    *******************************************************************************************************************/
    protected createGameObjects(): void {
        // player
        GameObjectBundleFactory.createPlayer(this);

        // parallax bg "Mount Fuji"
        GameObjectFactory.createParallaxDeco(this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage(ImageData.BG_MOUNT_FUJI));

        this.addUpperGround();
        this.addSlopeGround();
        this.addLowerGround();
    }

    private addUpperGround(): void {

        const x = 0;

        // site trigger with tree
        GameObjectFactory.createSiteTrigger(this, x + 0, 2000, 1000, 500, SiteContent.CONTENT_WELCOME, SitePanelAppearance.RIGHT, null);
        GameObjectBundleFactory.createDecoImage(this, x + 500, 2000, DecoPosition.FG, ImageData.TREE_1);

        // statue shrine
        GameObjectBundleFactory.createStatusShrine(this, x + 1625, 2000);

        // destroyable statue
        GameObjectBundleFactory.createObstacle(this, x + 2000, 2000, ImageData.STATUE_1, Breakable.YES);

        // billboard 'welcome'
        GameObjectBundleFactory.createDecoImage(this, x + 2500, 2000, DecoPosition.FG, ImageData.BILLBOARD);
        GameObjectBundleFactory.createDecoImage(this, x + 2500, 2000, DecoPosition.FG, ImageData.BILLBOARD_WELCOME);

        // grass
        GameObjectBundleFactory.createDecoSprite(this, x + 2500, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, x + 2550, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, x + 2600, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, x + 3050, 2000, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, x + 3100, 2000, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, x + 3150, 2000, DecoPosition.FG, SpriteData.GRASS_2);

        // enemies
        GameObjectBundleFactory.createEnemy(this, x + 3350, 2000, CharacterFacing.RIGHT, 3350, 4850, CharacterSpriteData.BLUE_NINJA_GUY, false);
        GameObjectBundleFactory.createEnemy(this, x + 4850, 2000, CharacterFacing.LEFT, 3350, 4850, CharacterSpriteData.MASKED_NINJA_GUY, false);

        // lion statue with trees and grass
        GameObjectBundleFactory.createDecoImage(this, x + 3630, 2000, DecoPosition.FG, ImageData.TREE_1, MirrorImage.YES);
        GameObjectBundleFactory.createDecoImage(this, x + 4265, 2000, DecoPosition.BG, ImageData.STATUE_LION);
        GameObjectBundleFactory.createDecoImage(this, x + 4580, 2000, DecoPosition.FG, ImageData.TREE_2);
        GameObjectBundleFactory.createDecoSprite(this, x + 4080, 2000, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, x + 4130, 2000, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, x + 4180, 2000, DecoPosition.FG, SpriteData.GRASS_2);
        GameObjectBundleFactory.createDecoSprite(this, x + 4480, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, x + 4530, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createDecoSprite(this, x + 4580, 2000, DecoPosition.FG, SpriteData.GRASS_1);
        GameObjectBundleFactory.createCandle(this, x + 4200, 2000, DecoPosition.FG);
        GameObjectBundleFactory.createCandle(this, x + 4540, 2000, DecoPosition.FG);

        // upper ground
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x + 0,    2000, 40,  5, Slope.NONE, CapHorz.NONE);
    }

    private addSlopeGround(): void {
        const x = 5920 + 0;

        // DODO 2 slopes/steps

        // boulder and bush
        GameObjectBundleFactory.createDecoImage(this, x - 6020 + 5760, 2100, DecoPosition.BG, ImageData.BUSH_2);
        GameObjectBundleFactory.createDecoImage(this, x - 6020 + 5920, 2100, DecoPosition.FG, ImageData.BOULDER_1);

        // slope
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_SNOW, x - 5920 + 5120, 2000, 5,  5, Slope.DESCENDING, CapHorz.NONE);
    }

    private addLowerGround(): void {
        const x = 5870 + 0;

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
    }
}
