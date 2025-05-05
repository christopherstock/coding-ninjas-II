import * as matter from 'matter-js';
import { SpriteTemplate } from '../../engine/ui/SpriteTemplate';
import { ImageData } from '../../data/ImageData';
import { ShapeRectangle } from '../../engine/shape/ShapeRectangle';
import { DebugColor } from '../../base/SettingDebug';
import { StaticShape } from '../../engine/shape/Shape';
import { BodyDensity, BodyFriction, BodyRestitution, SettingMatter } from '../../base/SettingMatter';
import { ShapeCircle } from '../../engine/shape/ShapeCircle';
import { ShapeFreeForm } from '../../engine/shape/ShapeFreeForm';
import { Level } from '../level/Level';
import { SiteContent } from '../../site/SiteContentSystem';
import { Item } from './primal/Item';
import { JumpPassThrough, Obstacle } from './primal/Obstacle';
import { CharacterSpriteSet } from './being/CharacterSpriteSet';
import { Bot } from './being/Bot';
import { Decoration } from './deco/Decoration';
import { DecoPosition } from './GameObjectBundleFactory';
import { ParallaxDeco } from './deco/ParallaxDeco';
import { Platform } from './special/Platform';
import { Movable } from './primal/Movable';
import { Door } from './special/Door';
import { SigSaw } from './special/SigSaw';
import { Bounce } from './special/Bounce';
import { SitePanelAppearance, SiteTrigger } from './special/SiteTrigger';
import { GameAction } from './GameAction';
import { CharacterFacing } from './being/CharacterFacing';
import {Breakable} from "./GameObject";

/** ********************************************************************************************************************
*   Creates customized instances of game objects.
***********************************************************************************************************************/
export abstract class GameObjectFactory {
    /** ****************************************************************************************************************
    *   Creates a wooden crate.
    *
    *   TODO remove and simplify!
    *
    *   @param x        Anchor X.
    *   @param yBottom  Anchor for bottom Y.
    *
    *   @return The created box.
    *******************************************************************************************************************/
    public static createWoodenCrate(x: number, yBottom: number): Movable {
        const sprtiteTemplate: SpriteTemplate = SpriteTemplate.createFromSingleImage(
            ImageData.CRATE_WOOD
        );

        return new Movable
        (
            new ShapeRectangle
            (
                sprtiteTemplate.width,
                sprtiteTemplate.height,
                DebugColor.COLOR_DEBUG_MOVABLE,
                StaticShape.NO,
                0.0,
                BodyFriction.NONE,
                BodyDensity.WOOD,
                BodyRestitution.WOOD
            ),
            sprtiteTemplate,
            x,
            (yBottom - sprtiteTemplate.height)
        );
    }

    /** ****************************************************************************************************************
    *   Creates a bouncing movable with rectangular shape.
    *
    *   @param x        Anchor X.
    *   @param yBottom  Anchor for bottom Y.
    *   @param imageId  The id of the image to use.
    *
    *   @return The created movable.
    *******************************************************************************************************************/
    public static createMovableRect(
        x: number,
        yBottom: number,
        imageId: string,
        density: number,
        friction: number,
        breakable: Breakable = Breakable.NO
    ): Movable {
        const sprtiteTemplate: SpriteTemplate = SpriteTemplate.createFromSingleImage(imageId);

        return new Movable
        (
            new ShapeRectangle
            (
                sprtiteTemplate.width,
                sprtiteTemplate.height,
                DebugColor.COLOR_DEBUG_MOVABLE,
                StaticShape.NO,
                0.0,
                friction,
                density,
                BodyRestitution.DEFAULT // BodyRestitution.RUBBER
            ),
            sprtiteTemplate,
            x,
            (yBottom - sprtiteTemplate.height),
            breakable
        );
    }

    /** ****************************************************************************************************************
    *   Creates a bouncing movable with a circular shape.
    *
    *   @param x        Anchor X.
    *   @param yBottom  Anchor for bottom Y.
    *   @param imageId  The id of the image to use.
    *   @param angle    The initial rotation angle for this movable.
    *
    *   @return The created movable.
    *******************************************************************************************************************/
    public static createMovableCircular(
        x: number,
        yBottom: number,
        imageId: string,
        angle: number
    ): Movable {
        const sprtiteTemplate: SpriteTemplate = SpriteTemplate.createFromSingleImage(imageId);

        return new Movable
        (
            new ShapeCircle
            (
                sprtiteTemplate.width,
                DebugColor.COLOR_DEBUG_MOVABLE,
                StaticShape.NO,
                angle,
                BodyFriction.DEFAULT,
                BodyDensity.DEFAULT,
                BodyRestitution.DEFAULT // BodyRestitution.RUBBER
            ),
            sprtiteTemplate,
            x,
            (yBottom - sprtiteTemplate.height)
        );
    }

    /** ****************************************************************************************************************
    *   Creates a sphere.
    *
    *   @param x           Anchor X.
    *   @param yBottom     Anchor of bottom Y.
    *   @param friction    The surface friction for this object.
    *   @param density     The density for this object.
    *   @param restitution The restitution for this object.
    *
    *   @return The created sphere.
    *
    *   @throws An error if the dimensions of the assigned sprite are not square.
    *******************************************************************************************************************/
    public static createSphere(
        x: number,
        yBottom: number,
        friction: BodyFriction,
        density: BodyDensity,
        restitution: BodyRestitution
    ): Movable {
        const spriteTemplate: SpriteTemplate = SpriteTemplate.createFromSingleImage(
            ImageData.STONE_SPHERE
        );

        if (spriteTemplate.width !== spriteTemplate.height) {
            throw new Error(
                'Non-square sprite template dimensions for circular deco - sprite image ['
                + spriteTemplate.imageIds[ 0 ]
                + ']'
            );
        }

        return new Movable
        (
            new ShapeCircle
            (
                spriteTemplate.width,
                DebugColor.COLOR_DEBUG_MOVABLE,
                StaticShape.NO,
                0.0,
                friction,
                density,
                restitution
            ),
            spriteTemplate,
            x,
            (yBottom - spriteTemplate.height)
        );
    }

    /** ****************************************************************************************************************
    *   Creates an item.
    *
    *   @param x Anchor X.
    *   @param y Anchor Y.
    *
    *   @return The created item.
    *******************************************************************************************************************/
    public static createItem(x: number, y: number): Item {
        return new Item
        (
            new ShapeRectangle
            (
                30.0,
                52.0,
                DebugColor.COLOR_DEBUG_ITEM,
                StaticShape.YES,
                0.0,
                BodyFriction.DEFAULT,
                BodyDensity.INFINITE,
                BodyRestitution.DEFAULT
            ),
            SpriteTemplate.createFromSingleImage(ImageData.ITEM),
            x,
            y
        );
    }

    /** ****************************************************************************************************************
    *   Creates a rectangular obstacle with a specified sprite.
    *
    *   @param xLeft           Anchor for left X.
    *   @param yBottom         Anchor for top Y.
    *   @param spriteTemplate  The sprite template to use for this obstacle.
    *   @param angle           The initial rotation.
    *   @param jumpPassThrough Specifies if the player can jump through this obstacle.
    *   @param staticShape     Specifies if this obstacle should be static or not.
    *   @param density         The density of this obstacle.
    *   @param restitution     The restitution of this obstacle.
    *
    *   @return The created obstacle.
    *******************************************************************************************************************/
    public static createObstacleSpriteful(
        xLeft: number,
        yBottom: number,
        spriteTemplate: SpriteTemplate,
        angle: number = 0,
        jumpPassThrough: JumpPassThrough = JumpPassThrough.NO,
        staticShape: StaticShape = StaticShape.YES,
        density: BodyDensity = BodyDensity.DEFAULT,
        restitution: BodyRestitution = BodyRestitution.DEFAULT
    ): Obstacle {
        return new Obstacle
        (
            new ShapeRectangle
            (
                spriteTemplate.width,
                spriteTemplate.height,
                DebugColor.COLOR_DEBUG_OBSTACLE,
                staticShape,
                angle,
                BodyFriction.OBSTACLE,
                density,
                restitution
            ),
            xLeft,
            (yBottom - spriteTemplate.height),
            spriteTemplate,
            jumpPassThrough
        );
    }

    /** ****************************************************************************************************************
    *   Creates a rectangular obstacle without an assigned sprite.
    *
    *   @param xLeft           Anchor for left X.
    *   @param yTop            Anchor for top Y.
    *   @param width           Width of the obstacle.
    *   @param height          Height of the obstacle.
    *   @param angle           The initial rotation.
    *   @param jumpPassThrough Specifies if the player can jump through this obstacle.
    *
    *   @return The created obstacle.
    *******************************************************************************************************************/
    public static createObstacleSpriteless(
        xLeft: number,
        yTop: number,
        width: number,
        height: number,
        angle: number,
        jumpPassThrough: JumpPassThrough
    ): Obstacle {
        return new Obstacle
        (
            new ShapeRectangle
            (
                width,
                height,
                DebugColor.COLOR_DEBUG_OBSTACLE,
                StaticShape.YES,
                angle,
                BodyFriction.OBSTACLE,
                BodyDensity.INFINITE,
                BodyRestitution.DEFAULT
            ),
            xLeft,
            yTop,
            null,
            jumpPassThrough
        );
    }

    /** ****************************************************************************************************************
    *   Creates a free form.
    *
    *   @param x              Anchor X.
    *   @param y              Anchor Y.
    *   @param vertices       All vertices that build up the free form.
    *   @param angle          The initial rotation of the form.
    *   @param spriteTemplate The sprite template to use for this game object.
    *
    *   @return The created obstacle.
    *******************************************************************************************************************/
    public static createFreeForm(
        x: number, y: number, vertices: matter.Vector[], angle: number, spriteTemplate: SpriteTemplate
    ): Obstacle {
        return new Obstacle
        (
            new ShapeFreeForm
            (
                vertices,
                DebugColor.COLOR_DEBUG_OBSTACLE,
                StaticShape.YES,
                angle,
                BodyFriction.DEFAULT,
                BodyDensity.INFINITE,
                BodyRestitution.DEFAULT
            ),
            x,
            y,
            spriteTemplate,
            JumpPassThrough.NO
        );
    }

    /** ****************************************************************************************************************
    *   Creates an elevated ramp obstacle.
    *
    *   @param x               Anchor X.
    *   @param y               Anchor Y.
    *   @param width           The ramp width.
    *   @param height          The ramp height.
    *   @param deltaY          The slope of the ramp. Can be positive (descending) or negative (ascending).
    *   @param spriteTemplate  The sprite template to use for this game object.
    *   @param jumpPassThrough Specifies if the player may jump through this obstacle.
    *
    *   @return The created obstacle ramp.
    *******************************************************************************************************************/
    public static createElevatedRamp(
        x: number,
        y: number,
        width: number,
        height: number,
        deltaY: number,
        spriteTemplate: SpriteTemplate,
        jumpPassThrough: JumpPassThrough
    ): Obstacle {
        const vertices: matter.Vector[] = [];

        // shape ramp
        vertices.push(matter.Vector.create(0.0,   0.0));
        vertices.push(matter.Vector.create(width, deltaY));
        vertices.push(matter.Vector.create(width, height + deltaY));
        vertices.push(matter.Vector.create(0.0,   height));

        if (deltaY <= 0.0) {
            y += deltaY;
        }

        return new Obstacle
        (
            new ShapeFreeForm
            (
                vertices,
                DebugColor.COLOR_DEBUG_OBSTACLE,
                StaticShape.YES,
                0.0,
                BodyFriction.DEFAULT,
                BodyDensity.INFINITE,
                BodyRestitution.DEFAULT
            ),
            x,
            y,
            spriteTemplate,
            jumpPassThrough
        );
    }

    /** ****************************************************************************************************************
    *   Creates an enemy.
    *
    *   @param x                  Anchor X.
    *   @param yBottom            Anchor bottom Y.
    *   @param facingDirection    The enemies initial facing and walking direction.
    *   @param walkingTargetLeft  Left walking target X.
    *   @param walkingTargetRight Right walking target X.
    *   @param characterSpriteSet The sprite set to use for this enemy.
    *   @param friendly           If the bot is not an enemy but a friend.
    *   @param blocksPlayer       If the bots body is able to collide with the player.
    *
    *   @return The created enemy.
    *******************************************************************************************************************/
    public static createBot(
        spriteTemplate: SpriteTemplate,
        x: number,
        yBottom: number,
        facingDirection: CharacterFacing,
        walkingTargetLeft: number,
        walkingTargetRight: number,
        characterSpriteSet: CharacterSpriteSet,
        friendly: boolean,
        blocksPlayer: boolean
    ): Bot {
        const diamondShape = GameObjectFactory.createCharacterDiamondShape(
            spriteTemplate,
            DebugColor.COLOR_DEBUG_BOT
        );
        if (blocksPlayer) {
            diamondShape.body.collisionFilter = SettingMatter.COLLISION_GROUP_COLLIDING;
        } else {
            diamondShape.body.isStatic = true;
            diamondShape.body.collisionFilter = SettingMatter.COLLISION_GROUP_NON_COLLIDING_BOT;
        }

        return new Bot
        (
            diamondShape,
            x,
            yBottom - spriteTemplate.height,
            walkingTargetLeft,
            walkingTargetRight,
            facingDirection,
            spriteTemplate,
            characterSpriteSet,
            friendly,
            blocksPlayer
        );
    }

    /** ****************************************************************************************************************
    *   Creates a rectangular decoration with dimensions from the assigned sprite.
    *
    *   @param xLeft          Anchor for left X.
    *   @param yBottom        Anchor for bottom Y.
    *   @param isStatic       Specifies if the decoration is static.
    *   @param spriteTemplate The sprite template to use for this decoration.
    *   @param debugColor     The debug color for this deco if no sprite is assigned.
    *
    *   @return The created decoration.
    *******************************************************************************************************************/
    public static createDecorationRect(
        xLeft: number,
        yBottom: number,
        isStatic: StaticShape,
        spriteTemplate: SpriteTemplate,
        debugColor: DebugColor = DebugColor.COLOR_DEBUG_DECORATION
    ): Decoration {
        return new Decoration
        (
            new ShapeRectangle
            (
                spriteTemplate.width,
                spriteTemplate.height,
                debugColor,
                isStatic,
                0.0,
                BodyFriction.DEFAULT,
                BodyDensity.DEFAULT,
                BodyRestitution.DEFAULT
            ),
            spriteTemplate,
            xLeft,
            (yBottom - spriteTemplate.height)
        );
    }

    /** ****************************************************************************************************************
    *   Creates a circular decoration with dimensions from the assigned sprite.
    *
    *   @param xLeft          Anchor for left X.
    *   @param yBottom        Anchor for bottom Y.
    *   @param isStatic       Specifies if the decoration is static.
    *   @param spriteTemplate The sprite template to use for this decoration.
    *
    *   @return The created decoration.
    *
    *   @throws An error if the dimensions of the assigned sprite are not square.
    *******************************************************************************************************************/
    public static createDecorationCircular(
        xLeft: number,
        yBottom: number,
        isStatic: StaticShape,
        spriteTemplate: SpriteTemplate
    ): Decoration {
        if (spriteTemplate.width !== spriteTemplate.height) {
            throw new Error('Non-square sprite template dimensions for circular deco - sprite image ['
                + String(spriteTemplate.imageIds[ 0 ])
                + ']'
            );
        }

        return new Decoration
        (
            new ShapeCircle
            (
                spriteTemplate.width,
                DebugColor.COLOR_DEBUG_DECORATION,
                isStatic,
                0.0,
                BodyFriction.DEFAULT,
                BodyDensity.DEFAULT,
                BodyRestitution.DEFAULT
            ),
            spriteTemplate,
            xLeft,
            (yBottom - spriteTemplate.height)
        );
    }

    /** ****************************************************************************************************************
    *   Creates a parallax scrolling decoration.
    *
    *   @param level          The level to append this parallax deco to.
    *   @param x              Anchor X.
    *   @param y              Anchor Y.
    *   @param parallaxRatio  The parallax ratio according to the level width.
    *   @param decoPosition   The position of this decoration - foreground or background.
    *   @param spriteTemplate The decoration sprite.
    *******************************************************************************************************************/
    public static createParallaxDeco(
        level: Level,
        x: number,
        y: number,
        parallaxRatio: number,
        decoPosition: DecoPosition,
        spriteTemplate: SpriteTemplate
    ): void {
        const parallaxDeco: ParallaxDeco = new ParallaxDeco
        (
            new ShapeRectangle
            (
                spriteTemplate.width,
                spriteTemplate.height,
                DebugColor.COLOR_TRANSPARENT,
                StaticShape.YES,
                0.0,
                BodyFriction.DEFAULT,
                BodyDensity.INFINITE,
                BodyRestitution.DEFAULT
            ),
            spriteTemplate,
            x,
            y,
            parallaxRatio
        );

        switch (decoPosition) {
            case DecoPosition.FG:
            {
                level.parallaxFgs.push(parallaxDeco);
                break;
            }

            case DecoPosition.BG:
            {
                level.parallaxBgs.push(parallaxDeco);
                break;
            }
        }
    }

    /** ****************************************************************************************************************
    *   Creates a site trigger.
    *
    *   @param level               The level to add the site trigger to.
    *   @param x                   Anchor X.
    *   @param yBottom             Anchor of bottom Y.
    *   @param width               Width for the site trigger.
    *   @param height              Height for the site trigger.
    *   @param content             The site content to display on releasing this trigger.
    *   @param sitePanelAppearance The position for the site panel to appear.
    *   @param spriteTemplate      The decoration sprite to display in bg of this site trigger.
    *******************************************************************************************************************/
    public static createSiteTrigger(
        level: Level,
        x: number,
        yBottom: number,
        width: number,
        height: number,
        content: SiteContent,
        sitePanelAppearance: SitePanelAppearance,
        spriteTemplate: SpriteTemplate
    ): void {
        const siteTrigger: SiteTrigger = new SiteTrigger
        (
            new ShapeRectangle
            (
                width,
                height,
                DebugColor.COLOR_DEBUG_SITE_TRIGGER,
                StaticShape.YES,
                0.0,
                BodyFriction.DEFAULT,
                BodyDensity.INFINITE,
                BodyRestitution.DEFAULT
            ),
            spriteTemplate,
            x,
            yBottom - height,
            content,
            sitePanelAppearance
        );

        level.siteTriggers.push(siteTrigger);
    }

    /** ****************************************************************************************************************
    *   Creates a door.
    *
    *   @param level               The level to add the site trigger to.
    *   @param x                   Anchor X.
    *   @param yBottom             Anchor of bottom Y.
    *   @param imageId             Image ID of the sprite for the door to use.
    *******************************************************************************************************************/
    public static createDoor(
        level: Level,
        x: number,
        yBottom: number,
        imageId: string,
        action: GameAction
    ): void {
        const spriteTemplate: SpriteTemplate = SpriteTemplate.createFromSingleImage(imageId);

        const door: Door = new Door
        (
            new ShapeRectangle
            (
                spriteTemplate.width,
                spriteTemplate.height,
                DebugColor.COLOR_DEBUG_SITE_TRIGGER,
                StaticShape.YES,
                0.0,
                BodyFriction.DEFAULT,
                BodyDensity.INFINITE,
                BodyRestitution.DEFAULT
            ),
            spriteTemplate,
            x,
            yBottom - spriteTemplate.height,
            action
        );

        level.doors.push(door);
    }

    /** ****************************************************************************************************************
    *   Creates a sigsaw.
    *
    *   @param level            The level to add the sigsaw to.
    *   @param xLeft            Anchor X.
    *   @param yTop             Anchor Y.
    *   @param spriteTemplate   The decoration sprite.
    *   @param maxRotationSpeed The maximum rotation speed per tick. -1 disables this maximum.
    *******************************************************************************************************************/
    public static createSigsaw(
        level: Level,
        xLeft: number,
        yTop: number,
        spriteTemplate: SpriteTemplate,
        maxRotationSpeed: number
    ): void {
        const sigsaw: SigSaw = new SigSaw
        (
            new ShapeRectangle
            (
                spriteTemplate.width,
                spriteTemplate.height,
                DebugColor.COLOR_DEBUG_SIGSAW,
                StaticShape.NO,
                0.0,
                2.5,
                0.001,
                BodyRestitution.DEFAULT
            ),
            spriteTemplate,
            xLeft,
            yTop,
            maxRotationSpeed
        );

        level.sigsaws.push(sigsaw);
    }

    /** ****************************************************************************************************************
    *   Creates a platform that moves in the air.
    *
    *   @param level          The level to add the platform to.
    *   @param spriteTemplate The decoration sprite.
    *   @param speed          Moving speed of the platform in px per tick.
    *   @param waypoints      Moving waypoints. First waypoint is the startup position.
    *
    *   @return The created decoration.
    *******************************************************************************************************************/
    public static createPlatform(
        level: Level,
        spriteTemplate: SpriteTemplate,
        speed: number,
        waypoints: matter.Vector[]
    ): void {
        const platform: Platform = new Platform
        (
            new ShapeRectangle
            (
                spriteTemplate.width,
                spriteTemplate.height,
                DebugColor.COLOR_DEBUG_PLATFORM,
                StaticShape.YES,
                0.0,
                BodyFriction.DEFAULT,
                BodyDensity.INFINITE,
                BodyRestitution.DEFAULT
            ),
            spriteTemplate,
            speed,
            waypoints
        );

        level.platforms.push(platform);
    }

    /** ****************************************************************************************************************
    *   Creates a bounce.
    *
    *   @param level          The level to add the sigsaw to.
    *   @param xLeft          Anchor X.
    *   @param yTop           Anchor Y.
    *   @param spriteTemplate The decoration sprite.
    *   @param density        The density for the Bounce.
    *
    *   @return The created decoration.
    *******************************************************************************************************************/
    public static createBounce(
        level: Level,
        xLeft: number,
        yTop: number,
        spriteTemplate: SpriteTemplate,
        density: number
    ): void {
        const bounce: Bounce = new Bounce
        (
            new ShapeRectangle
            (
                spriteTemplate.width,
                spriteTemplate.height,
                DebugColor.COLOR_DEBUG_BOUNCE,
                StaticShape.NO,
                0.0,
                BodyFriction.DEFAULT,
                density,
                BodyRestitution.DEFAULT
            ),
            spriteTemplate,
            xLeft,
            yTop
        );

        level.bounces.push(bounce);
    }

    /** ****************************************************************************************************************
    *   Creates a diamond shape for the given sprite template.
    *
    *   @param spriteTemplate The sprite template to create a diamond shape for.
    *   @param debugColor     The debug color to use for this shape.
    *
    *   @return The created diamond shape.
    *******************************************************************************************************************/
    public static createCharacterDiamondShape(
        spriteTemplate: SpriteTemplate,
        debugColor: DebugColor
    ): ShapeFreeForm {
        const gapSizeX: number = (spriteTemplate.width / 2);
        const gapSizeY: number = SettingMatter.PLAYER_EDGE_GAP_Y;

        const vertices: matter.Vector[] = [];

        // draw diamond path
        vertices.push(matter.Vector.create(gapSizeX,                        0.0));
        vertices.push(matter.Vector.create(spriteTemplate.width - gapSizeX, 0.0));
        vertices.push(matter.Vector.create(spriteTemplate.width,            gapSizeY));
        vertices.push(matter.Vector.create(spriteTemplate.width,            spriteTemplate.height - gapSizeY));
        vertices.push(matter.Vector.create(spriteTemplate.width - gapSizeX, spriteTemplate.height));
        vertices.push(matter.Vector.create(gapSizeX,                        spriteTemplate.height));
        vertices.push(matter.Vector.create(0.0,                             spriteTemplate.height - gapSizeY));
        vertices.push(matter.Vector.create(0.0,                             gapSizeY));

        return new ShapeFreeForm
        (
            vertices,
            debugColor,
            StaticShape.NO,
            0.0,
            BodyFriction.PLAYER,
            BodyDensity.PLAYER,
            BodyRestitution.DEFAULT
        );
    }
}
