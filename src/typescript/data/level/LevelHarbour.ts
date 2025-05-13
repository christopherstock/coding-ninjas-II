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
import {MirrorImage} from "../../engine/ui/MirrorImage";

export class LevelHarbour extends Level {
    public id: LevelId = LevelId.LEVEL_HARBOUR;
    public width: number = 7680;
    public height: number = 4500;
    public playerStartX: number = 6680; // 250;
    public playerStartY: number = 1400;
    public playerInitialFacing: CharacterFacing = CharacterFacing.RIGHT;
    public playerInitialFloat: boolean = false;

    protected createGameObjects(): void {

        GameObjectBundleFactory.createPlayer(this);
        GameObjectFactory.createParallaxDeco(this, 0, 0, 1.0, DecoPosition.BG, SpriteTemplate.createFromSingleImage(ImageData.BG_HARBOUR));

        this.addHarbourSetup();
    }

    private addHarbourSetup(): void {
        // billboard 'application paper service'
        GameObjectBundleFactory.createBillboard(this, 2000, 1400, DecoPosition.FG, ImageData.BILLBOARD_APPLICATION_PAPER);

        // site trigger 'end of game reached'
        GameObjectFactory.createSiteTrigger(this, 6680, 1400, 1000, 500, SiteContent.CONTENT_FAREWELL, SitePanelAppearance.LEFT, null);

        GameObjectBundleFactory.createDecoImage(this, 6000, 1400, DecoPosition.FG, ImageData.VAN_1);
        GameObjectBundleFactory.createDecoImage(this, 6000 - 300, 1400, DecoPosition.FG, ImageData.VAN_2);
        GameObjectBundleFactory.createDecoImage(this, 6000 - 600, 1400, DecoPosition.FG, ImageData.VAN_3);
        GameObjectBundleFactory.createDecoImage(this, 6000 - 900, 1400, DecoPosition.FG, ImageData.SCOOTER_1);
        GameObjectBundleFactory.createDecoImage(this, 6000 - 1200, 1400, DecoPosition.FG, ImageData.SCOOTER_2);
        GameObjectBundleFactory.createDecoImage(this, 6000 - 1500, 1400, DecoPosition.FG, ImageData.HYDRANT);

        // ground
        GameObjectBundleFactory.createSolidGround(this, TilesetData.TILESET_DESERT, 0, 1400, 60,  3, Slope.NONE, CapHorz.NONE);

        // water areas
        GameObjectBundleFactory.createWaterArea(this, 6000, 1400 + 64, 14, 4, ImageData.WATER_CENTER);
    }
}
