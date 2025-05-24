/* eslint-disable max-len */

import { Level, LevelId } from '../../game/level/Level';
import { CapHorz, DecoPosition, GameObjectBundleFactory, Slope } from '../../game/object/GameObjectBundleFactory';
import { GameObjectFactory } from '../../game/object/GameObjectFactory';
import { ImageData } from '../ImageData';
import { TilesetData } from '../TilesetData';
import { SpriteTemplate } from '../../engine/ui/SpriteTemplate';
import { CharacterFacing } from '../../game/object/being/CharacterFacing';
import { SiteContent } from '../../site/SiteContentSystem';
import { SitePanelAppearance } from '../../game/object/special/SiteTrigger';
import { GameAction, GameActionType } from '../../game/object/GameAction';
import { CharacterSpriteData } from '../CharacterSpriteData';

export class LevelHarbour extends Level {
    public id: LevelId = LevelId.LEVEL_HARBOUR;
    public width: number = 7680;
    public height: number = 2000;
    public playerStartX: number = 520;
    public playerStartY: number = 1400;
    public playerInitialFacing: CharacterFacing = CharacterFacing.RIGHT;
    public playerInitialFloat: boolean = false;

    protected createGameObjects(): void {

        GameObjectBundleFactory.createPlayer(this);
        GameObjectFactory.createParallaxDeco(this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage(ImageData.BG_HARBOUR));

        this.addHarbourSetup();
    }

    private addHarbourSetup(): void {
        // house with door back to town
        GameObjectBundleFactory.createDecoImage(this, 500 - 205, 1400, DecoPosition.BG, ImageData.HOUSE_FRONT_1);
        GameObjectBundleFactory.createDecoImage(this, 500 - 225, 1105, DecoPosition.BG, ImageData.HOUSE_ROOF_3);
        GameObjectFactory.createDoor(this, 500, 1400, ImageData.DOOR_4, new GameAction(GameActionType.SWITCH_TO_LEVEL, { targetLevel: LevelId.LEVEL_TOWN, playerStartX: 13220 + 720, playerStartY: 1000 }));

        // billboard 'application paper service'
        GameObjectBundleFactory.createBillboard(this, 1000, 1400, DecoPosition.FG, ImageData.BILLBOARD_APPLICATION_PAPER);

        // masked ninja guy
        GameObjectBundleFactory.createEnemy(this, 950, 1400, CharacterFacing.LEFT, 950, 950, CharacterSpriteData.MASKED_NINJA_GUY, false);

        // construction tools
        GameObjectBundleFactory.createDecoImage(this, 2780, 1400, DecoPosition.FG, ImageData.CONCRETE_MIXER);
        GameObjectBundleFactory.createDecoImage(this, 3110, 1400, DecoPosition.FG, ImageData.GENERATOR);

        // billboard 'technical paper'
        GameObjectBundleFactory.createBillboard(this, 2000, 1400, DecoPosition.FG, ImageData.BILLBOARD_TECHNICAL_PAPER, 'https://entwickler.de/php/phpstorm-effektiv-nutzen');

        // black ninja guy
        GameObjectBundleFactory.createEnemy(this, 2550, 1400, CharacterFacing.LEFT, 2550, 2550, CharacterSpriteData.BLACK_NINJA_GUY, false);

        // billboard 'meet ups'
        GameObjectBundleFactory.createBillboard(this, 3000, 1400, DecoPosition.FG, ImageData.BILLBOARD_MEET_UPS, 'https://www.meetup.com/wue-tech/events/294033027');

        // pylons
        GameObjectBundleFactory.createDecoImage(this, 2370, 1400, DecoPosition.FG, ImageData.PYLONS);
        GameObjectBundleFactory.createDecoImage(this, 3490, 1400, DecoPosition.FG, ImageData.PYLONS);

        // site trigger 'end of game reached'
        GameObjectFactory.createSiteTrigger(this, 6680, 1400, 1000, 500, SiteContent.CONTENT_FAREWELL, SitePanelAppearance.LEFT, null);

        // hydrant
        GameObjectBundleFactory.createDecoImage(this, 4000, 1400, DecoPosition.FG, ImageData.HYDRANT);
        GameObjectBundleFactory.createDecoImage(this, 5940, 1400, DecoPosition.FG, ImageData.HYDRANT);

        // ninja girl
        GameObjectBundleFactory.createEnemy(this, 3820, 1400, CharacterFacing.LEFT, 3820, 3820, CharacterSpriteData.RED_NINJA_GIRL, false);

        // fence
        GameObjectBundleFactory.createDecoImage(this, 6000 - 1820, 1400, DecoPosition.FG, ImageData.FENCE_1_LEFT);
        GameObjectBundleFactory.createDecoImage(this, 6000 - 1820 + 256, 1400, DecoPosition.FG, ImageData.FENCE_1_CENTER);
        GameObjectBundleFactory.createDecoImage(this, 6000 - 1820 + 256 * 2, 1400, DecoPosition.FG, ImageData.FENCE_1_CENTER);
        GameObjectBundleFactory.createDecoImage(this, 6000 - 1820 + 256 * 3, 1400, DecoPosition.FG, ImageData.FENCE_1_CENTER);
        GameObjectBundleFactory.createDecoImage(this, 6000 - 1820 + 256 * 4, 1400, DecoPosition.FG, ImageData.FENCE_1_CENTER);
        GameObjectBundleFactory.createDecoImage(this, 6000 - 1820 + 256 * 5, 1400, DecoPosition.FG, ImageData.FENCE_1_RIGHT);

        // scooters
        GameObjectBundleFactory.createDecoImage(this, 6000 - 1600, 1400, DecoPosition.FG, ImageData.SCOOTER_2);
        GameObjectBundleFactory.createDecoImage(this, 6000 - 1400, 1400, DecoPosition.FG, ImageData.SCOOTER_1);

        // vans
        GameObjectBundleFactory.createDecoImage(this, 6000 - 1050, 1400, DecoPosition.FG, ImageData.VAN_1);
        GameObjectBundleFactory.createDecoImage(this, 6000 - 650, 1400, DecoPosition.FG, ImageData.VAN_2);

        // ground
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DESERT, 0, 1400, 60,  2, Slope.NONE, CapHorz.NONE);

        // ship
        GameObjectBundleFactory.createDecoImage(this, 6575, 1400 + 120 + 50, DecoPosition.FG, ImageData.SHIP_1);

        // water areas
        GameObjectBundleFactory.createWaterArea(this, 0, 1400 + 128 - 64, 60, 4, ImageData.WATER_CENTER, true);
    }
}
