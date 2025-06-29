import * as matter from 'matter-js';
import { Player } from '../object/being/Player';
import { Bot } from '../object/being/Bot';
import { Obstacle } from '../object/primal/Obstacle';
import { Movable } from '../object/primal/Movable';
import { Decoration } from '../object/deco/Decoration';
import { SiteTrigger } from '../object/special/SiteTrigger';
import { SigSaw } from '../object/special/SigSaw';
import { Bounce } from '../object/special/Bounce';
import { Platform } from '../object/special/Platform';
import { ParallaxDeco } from '../object/deco/ParallaxDeco';
import { Door } from '../object/special/Door';
import { MatterJsSystem } from '../../engine/MatterJsSystem';
import { CharacterFacing } from '../object/being/CharacterFacing';
import { Billboard } from '../object/deco/Billboard';
import { GameObjectFactory } from '../object/GameObjectFactory';
import { SettingMatter } from '../../base/SettingMatter';
import { ImageData } from '../../data/ImageData';
import { SpriteTemplate } from '../../engine/ui/SpriteTemplate';
import { StaticShape } from '../../engine/shape/Shape';
import { Main } from '../../base/Main';
import { MathUtil } from '../../util/MathUtil';

export enum LevelId {
    LEVEL_START,
    LEVEL_DOJO,
    LEVEL_GARDEN,
    LEVEL_TOWN,
    LEVEL_HARBOUR,
}

/** ********************************************************************************************************************
*   Represents the current level.
***********************************************************************************************************************/
export abstract class Level {
    public id: LevelId                          = null;
    public width: number                        = 0.0;
    public height: number                       = 0.0;
    public playerStartX: number                 = 0.0;
    public playerStartY: number                 = 0.0;
    public playerInitialFacing: CharacterFacing = CharacterFacing.RIGHT;
    public playerInitialFloat: boolean          = false;

    public player: Player                       = null;
    public enemies: Bot[]                       = [];
    public obstacles: Obstacle[]                = [];
    public movables: Movable[]                  = [];
    public decosBg: Decoration[]                = [];
    public decosFg: Decoration[]                = [];
    public siteTriggers: SiteTrigger[]          = [];
    public sigsaws: SigSaw[]                    = [];
    public bounces: Bounce[]                    = [];
    public platforms: Platform[]                = [];
    public parallaxBgs: ParallaxDeco[]          = [];
    public parallaxFgs: ParallaxDeco[]          = [];
    public doors: Door[]                        = [];

    /** ****************************************************************************************************************
    *   Sets the player and the game objects.
    *******************************************************************************************************************/
    protected abstract createGameObjects(): void;

    /** ****************************************************************************************************************
    *   Inits a new level.
    *
    *   @param matterJsSystem The matter.js instance to add all elements to.
    *******************************************************************************************************************/
    public init(matterJsSystem: MatterJsSystem): void {
        this.createGameObjects();

        // adding to world order affects Z layer
        for (const parallaxBg of this.parallaxBgs) {
            matterJsSystem.addToWorld(parallaxBg.shape.body);
        }
        for (const siteTrigger of this.siteTriggers) {
            matterJsSystem.addToWorld(siteTrigger.shape.body);
        }
        for (const decoBg of this.decosBg) {
            matterJsSystem.addToWorld(decoBg.shape.body);
        }
        for (const door of this.doors) {
            matterJsSystem.addToWorld(door.shape.body);
        }
        for (const movable of this.movables) {
            matterJsSystem.addToWorld(movable.shape.body);
        }
        for (const platform of this.platforms) {
            matterJsSystem.addToWorld(platform.shape.body);
            matterJsSystem.addToWorld(platform.frictionShape.body);
        }
        for (const sigsaw of this.sigsaws) {
            matterJsSystem.addToWorld(sigsaw.shape.body);
        }
        for (const bounce of this.bounces) {
            matterJsSystem.addToWorld(bounce.shape.body);
        }
        for (const obstacle of this.obstacles) {
            matterJsSystem.addToWorld(obstacle.shape.body);
        }
        for (const enemy of this.enemies) {
            matterJsSystem.addToWorld(enemy.shape.body);
        }

        matterJsSystem.addToWorld(this.player.shape.body);

        for (const decoFg of this.decosFg) {
            matterJsSystem.addToWorld(decoFg.shape.body);
        }
        for (const parallaxFg of this.parallaxFgs) {
            matterJsSystem.addToWorld(parallaxFg.shape.body);
        }
    }

    /** ****************************************************************************************************************
    *   Renders all level components (except parallax game objects).
    *******************************************************************************************************************/
    public render(): void {
        for (const decoBg of this.decosBg) {
            decoBg.render();
        }
        for (const siteTrigger of this.siteTriggers) {
            siteTrigger.render();
        }
        for (const door of this.doors) {
            door.render();
        }
        for (const sigsaw of this.sigsaws) {
            sigsaw.render();
        }
        for (const bounce of this.bounces) {
            bounce.render();
        }
        for (const platform of this.platforms) {
            platform.render();
        }
        for (const obstacle of this.obstacles) {
            obstacle.render();
        }
        for (const movable of this.movables) {
            movable.render();
        }

        this.player.render();

        for (const enemy of this.enemies) {
            enemy.render();
        }

        for (const decoFg of this.decosFg) {
            decoFg.render();
        }
    }

    /** ****************************************************************************************************************
    *   Renders all parallax game objects.
    *******************************************************************************************************************/
    public renderParallaxElements(): void {
        for (const gameObject of this.parallaxBgs) {
            gameObject.render();
        }

        for (const gameObject of this.parallaxFgs) {
            gameObject.render();
        }
    }

    public getClickableBillboards(): Billboard[] {
        const decos = this.decosFg.concat(this.decosBg);
        const billboards: Billboard[] = [];

        for (const deco of decos) {
            if (deco instanceof Billboard && deco.urlLeftHalf !== null) {
                billboards.push(deco);
            }
        }

        return billboards;
    }

    public addParticleEffect(
        numberOfParticles: number,
        x: number,
        y: number,
        velocity: matter.Vector,
        angularVelocity: number
    ): void {
        for (let i: number = 0; i < numberOfParticles; ++i) {
            let image = ImageData.RUBBLE_1;
            switch (MathUtil.getRandomInt(1, 4)) {
                case 1: image = ImageData.RUBBLE_1; break;
                case 2: image = ImageData.RUBBLE_2; break;
                case 3: image = ImageData.RUBBLE_3; break;
                case 4: image = ImageData.RUBBLE_4; break;
            }

            const deco: Decoration = GameObjectFactory.createDecorationRect(
                x,
                y,
                StaticShape.NO,
                SpriteTemplate.createFromSingleImage(image)
            );

            deco.shape.body.collisionFilter = SettingMatter.COLLISION_GROUP_NON_COLLIDING_RUBBLE;
            deco.shape.body.mass = 1.0;
            deco.shape.body.friction = 1.0;
            deco.shape.body.restitution = 0.0;

            matter.Body.setVelocity(deco.shape.body, matter.Vector.create(
                velocity.x * (0.5 + 0.1 * (MathUtil.getRandomInt(0, 5))),
                velocity.y * (0.5 + 0.1 * (MathUtil.getRandomInt(0, 5)))
            ));
            matter.Body.setAngle(deco.shape.body, MathUtil.getRandomInt(0, 359));
            matter.Body.setAngularVelocity(deco.shape.body,
                angularVelocity * (0.5 + 0.1 * (MathUtil.getRandomInt(0, 10)))
            );

            Main.game.engine.matterJsSystem.addToWorld(deco.shape.body);

            this.decosFg.push(deco);
        }
    }
}
