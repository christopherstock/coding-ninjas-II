import { Level } from '../level/Level';
import { SpriteTemplate } from '../../engine/ui/SpriteTemplate';
import { SpriteData } from '../../data/SpriteData';
import { DebugColor } from '../../base/SettingDebug';
import { ImageData } from '../../data/ImageData';
import { StaticShape } from '../../engine/shape/Shape';
import { TilesetGround } from '../../engine/ui/TilesetGround';
import { ShapeRectangle } from '../../engine/shape/ShapeRectangle';
import { BodyDensity, BodyFriction, BodyRestitution } from '../../base/SettingMatter';
import { MirrorImage } from '../../engine/ui/MirrorImage';
import { Player } from './being/Player';
import { GameObjectFactory } from './GameObjectFactory';
import { JumpPassThrough, Obstacle } from './primal/Obstacle';
import { Movable } from './primal/Movable';
import { CharacterSpriteSet } from './being/CharacterSpriteSet';
import { Bot } from './being/Bot';
import { Decoration } from './deco/Decoration';
import { CharacterFacing } from './being/CharacterFacing';
import { Breakable } from './GameObject';
import { Billboard } from './deco/Billboard';

/* eslint-disable max-len */

/** ********************************************************************************************************************
*   Specifies vertical direction.
***********************************************************************************************************************/
export enum Slope
{
    /** Specifies a flat body. */
    NONE,
    /** A body with ascending surface. */
    ASCENDING,
    /** A body with descending surface. */
    DESCENDING,
}

/** ********************************************************************************************************************
*   Specifies capping for horizontal compound ends.
***********************************************************************************************************************/
export enum CapHorz
{
    /** No horizontal capping. */
    NONE,
    /** Cap left column. */
    LEFT,
    /** Cap right column. */
    RIGHT,
    /** Cap left and right column. */
    BOTH,
}

/** ********************************************************************************************************************
*   Specifies capping for vertical compound edges.
***********************************************************************************************************************/
export enum CapVert
{
    NONE,
    TOP,
    BOTTOM,
    BOTH,
}

/** ********************************************************************************************************************
*   All different crate types.
***********************************************************************************************************************/
export enum CrateType
{
    /** A wooden crate. */
    WOODEN,
}

/** ********************************************************************************************************************
*   Position for decoration.
***********************************************************************************************************************/
export enum DecoPosition
{
    /** Foreground. */
    FG,
    /** Background. */
    BG,
}

/** ********************************************************************************************************************
*   Creates bundled instances of game objects.
***********************************************************************************************************************/
export abstract class GameObjectBundleFactory {
    private static readonly HEIGHT_FLYING_GROUND: number    = 90;
    private static readonly ALTITUDE: number                = 20;
    private static readonly GROUND_TILE_WIDTH: number       = 128;
    private static readonly GROUND_TILE_HEIGHT: number      = 128;

    /** ****************************************************************************************************************
    *   Creates the player.
    *
    *   @param level The level instance to add the player to.
    *******************************************************************************************************************/
    public static createPlayer(level: Level): void {
        const dimensionSprite: SpriteTemplate = SpriteData.MASKED_NINJA_GIRL_STAND_LEFT;
        const firstSprite: SpriteTemplate = (
            level.playerInitialFloat
                ? (
                    level.playerInitialFacing === CharacterFacing.LEFT
                        ? SpriteData.MASKED_NINJA_GIRL_GLIDE_LEFT
                        : SpriteData.MASKED_NINJA_GIRL_GLIDE_RIGHT
                )
                : (
                    level.playerInitialFacing === CharacterFacing.LEFT
                        ? SpriteData.MASKED_NINJA_GIRL_STAND_LEFT
                        : SpriteData.MASKED_NINJA_GIRL_STAND_RIGHT
                )
        );

        level.player = new Player
        (
            GameObjectFactory.createCharacterDiamondShape(
                dimensionSprite,
                DebugColor.COLOR_DEBUG_PLAYER
            ),
            level.playerStartX,
            (level.playerStartY - dimensionSprite.height),
            level.playerInitialFacing,
            firstSprite,
            level.playerInitialFloat
        );
    }

    /** ****************************************************************************************************************
    *   Creates a flying ground.
    *
    *   @param level       The level to add the flying ground to.
    *   @param xLeft       Anchor for left X.
    *   @param yTop        Anchor for top Y.
    *   @param length      The length of the ground.
    *   @param slope       Specifies the slope for this ground.
    *   @param jumpThrough Specified if the player may jump through this ground.
    *   @param capEnds     Specifies end cappings.
    *******************************************************************************************************************/
    public static createFlyingGround(
        level: Level,
        xLeft: number,
        yTop: number,
        length: number,
        slope: Slope,
        jumpThrough: JumpPassThrough,
        capEnds: CapHorz
    ): void {
        let leftTile: SpriteTemplate;
        let centerTile: SpriteTemplate;
        let rightTile: SpriteTemplate;

        let drawY: number;
        let alt: number;

        switch (slope) {
            case Slope.ASCENDING:
            {
                leftTile   = SpriteTemplate.createFromSingleImage(ImageData.GROUND_DARK_FLYING_ASCENDING_LEFT);
                centerTile = SpriteTemplate.createFromSingleImage(ImageData.GROUND_DARK_FLYING_ASCENDING_CENTER);
                rightTile  = SpriteTemplate.createFromSingleImage(ImageData.GROUND_DARK_FLYING_ASCENDING_RIGHT);

                drawY      = yTop - GameObjectBundleFactory.ALTITUDE;
                alt        = -GameObjectBundleFactory.ALTITUDE;

                break;
            }

            case Slope.DESCENDING:
            {
                leftTile   = SpriteTemplate.createFromSingleImage(ImageData.GROUND_DARK_FLYING_DESCENDING_LEFT);
                centerTile = SpriteTemplate.createFromSingleImage(ImageData.GROUND_DARK_FLYING_DESCENDING_CENTER);
                rightTile  = SpriteTemplate.createFromSingleImage(ImageData.GROUND_DARK_FLYING_DESCENDING_RIGHT);

                drawY      = yTop;
                alt        = GameObjectBundleFactory.ALTITUDE;

                break;
            }

            case Slope.NONE:
            default:
            {
                leftTile   = SpriteTemplate.createFromSingleImage(ImageData.GROUND_DARK_FLYING_LEFT);
                centerTile = SpriteTemplate.createFromSingleImage(ImageData.GROUND_DARK_FLYING_CENTER);
                rightTile  = SpriteTemplate.createFromSingleImage(ImageData.GROUND_DARK_FLYING_RIGHT);

                drawY      = yTop;
                alt        = 0;

                break;
            }
        }

        // draw decoration
        for (let tileX: number = 0; tileX < length; ++tileX) {
            if (tileX === 0 && (capEnds === CapHorz.LEFT || capEnds === CapHorz.BOTH)) {
                level.decosBg.push(
                    GameObjectFactory.createDecorationRect(xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH,
                        drawY + leftTile.height, StaticShape.YES, leftTile));
            } else if (tileX === (length - 1) && (capEnds === CapHorz.RIGHT || capEnds === CapHorz.BOTH)) {
                level.decosBg.push(GameObjectFactory.createDecorationRect(xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + rightTile.height, StaticShape.YES, rightTile));
            } else {
                level.decosBg.push(GameObjectFactory.createDecorationRect(xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + centerTile.height, StaticShape.YES, centerTile));
            }

            drawY += alt;
        }

        // add obstacle
        switch (slope) {
            case Slope.NONE:
            {
                level.obstacles.push(GameObjectFactory.createObstacleSpriteless(xLeft, yTop, length * GameObjectBundleFactory.GROUND_TILE_WIDTH, GameObjectBundleFactory.HEIGHT_FLYING_GROUND, 0.0, jumpThrough));
                break;
            }

            case Slope.ASCENDING:
            case Slope.DESCENDING:
            {
                level.obstacles.push(GameObjectFactory.createElevatedRamp(xLeft, yTop, length * GameObjectBundleFactory.GROUND_TILE_WIDTH, GameObjectBundleFactory.HEIGHT_FLYING_GROUND, (alt * length), null, jumpThrough));
                break;
            }
        }
    }

    /** ****************************************************************************************************************
    *   Creates a solid ground.
    *
    *   @param level        The level to add the solid ground to.
    *   @param xLeft        Anchor for left X.
    *   @param yTop         Anchor for top Y.
    *   @param lengthHorz   The number of horizontal elements.
    *   @param lengthVert   The number of vertical elements.
    *   @param slope        Specifies the slope for this ground.
    *   @param capHorz      Specifies horizontal end cappings.
    *   @param ground       The set of ground tiles to use.
    *******************************************************************************************************************/
    // eslint-disable-next-line complexity
    public static createSolidGround(
        level: Level,
        ground: TilesetGround,
        xLeft: number,
        yTop: number,
        lengthHorz: number,
        lengthVert: number,
        slope: Slope,
        capHorz: CapHorz = CapHorz.BOTH,
        capVert: CapVert = CapVert.BOTH
    ): void {
        let leftTopTile: SpriteTemplate = null;
        let topTile: SpriteTemplate = null;
        let rightTopTile: SpriteTemplate = null;

        const leftTile: SpriteTemplate = SpriteTemplate.createFromSingleImage(ground.solidLeft);
        const centerTile: SpriteTemplate = SpriteTemplate.createFromSingleImage(ground.solidCenter);
        const rightTile: SpriteTemplate = SpriteTemplate.createFromSingleImage(ground.solidRight);

        const leftBottomTile: SpriteTemplate = SpriteTemplate.createFromSingleImage(ground.solidLeftBottom);
        const bottomTile: SpriteTemplate = SpriteTemplate.createFromSingleImage(ground.solidBottom);
        const rightBottomTile: SpriteTemplate = SpriteTemplate.createFromSingleImage(ground.solidRightBottom);

        let firstLineDrawY: number = 0.0;
        let firstLineAlt: number = 0.0;

        switch (slope) {
            case Slope.NONE:
            {
                leftTopTile    = SpriteTemplate.createFromSingleImage(ground.solidLeftTop);
                topTile        = SpriteTemplate.createFromSingleImage(ground.solidTop);
                rightTopTile   = SpriteTemplate.createFromSingleImage(ground.solidRightTop);

                firstLineDrawY = yTop;
                firstLineAlt   = 0.0;

                break;
            }

            case Slope.ASCENDING:
            {
                leftTopTile    = SpriteTemplate.createFromSingleImage(ground.solidAscendingLeftTop);
                topTile        = SpriteTemplate.createFromSingleImage(ground.solidAscendingTop);
                rightTopTile   = SpriteTemplate.createFromSingleImage(ground.solidAscendingRightTop);

                firstLineDrawY = yTop;
                firstLineAlt   = -GameObjectBundleFactory.ALTITUDE;

                break;
            }

            case Slope.DESCENDING:
            {
                leftTopTile    = SpriteTemplate.createFromSingleImage(ground.solidDescendingLeftTop);
                topTile        = SpriteTemplate.createFromSingleImage(ground.solidDescendingTop);
                rightTopTile   = SpriteTemplate.createFromSingleImage(ground.solidDescendingRightTop);

                firstLineDrawY = yTop + GameObjectBundleFactory.ALTITUDE;
                firstLineAlt   = GameObjectBundleFactory.ALTITUDE;

                break;
            }
        }

        // browse lines
        for (let tileY: number = 0; tileY < lengthVert; ++tileY) {
            if (tileY === 0) {
                // add top line
                let drawY: number = firstLineDrawY;

                for (let tileX: number = 0; tileX < lengthHorz; ++tileX) {
                    if (tileX === 0 && (capHorz === CapHorz.LEFT || capHorz === CapHorz.BOTH)) {
                        level.decosBg.push(GameObjectFactory.createDecorationRect(xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, StaticShape.YES, leftTopTile));
                    } else if (tileX === lengthHorz - 1 && (capHorz === CapHorz.RIGHT || capHorz === CapHorz.BOTH)) {
                        level.decosBg.push(GameObjectFactory.createDecorationRect(xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, StaticShape.YES, rightTopTile));
                    } else {
                        if (capVert === CapVert.BOTTOM || capVert === CapVert.NONE) {
                            level.decosBg.push(GameObjectFactory.createDecorationRect(xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, StaticShape.YES, centerTile));
                        } else {
                            level.decosBg.push(GameObjectFactory.createDecorationRect(xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, StaticShape.YES, topTile));
                        }
                    }

                    drawY += firstLineAlt;
                }
            } else if (tileY === lengthVert - 1) {
                // add bottom line
                let drawY: number = firstLineDrawY + tileY * GameObjectBundleFactory.GROUND_TILE_HEIGHT;

                for (let tileX: number = 0; tileX < lengthHorz; ++tileX) {
                    if (tileX === 0 && (capHorz === CapHorz.LEFT || capHorz === CapHorz.BOTH)) {
                        level.decosBg.push(GameObjectFactory.createDecorationRect(xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, StaticShape.YES, leftBottomTile));
                    } else if (tileX === lengthHorz - 1 && (capHorz === CapHorz.RIGHT || capHorz === CapHorz.BOTH)) {
                        level.decosBg.push(GameObjectFactory.createDecorationRect(xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, StaticShape.YES, rightBottomTile));
                    } else {
                        if (capVert === CapVert.TOP || capVert === CapVert.NONE) {
                            level.decosBg.push(GameObjectFactory.createDecorationRect(xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, StaticShape.YES, centerTile));
                        } else {
                            level.decosBg.push(GameObjectFactory.createDecorationRect(xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, StaticShape.YES, bottomTile));
                        }
                    }

                    drawY += firstLineAlt;
                }
            } else {
                // add middle lines
                let drawY: number = firstLineDrawY + tileY * GameObjectBundleFactory.GROUND_TILE_HEIGHT;

                for (let tileX: number = 0; tileX < lengthHorz; ++tileX) {
                    if (tileX === 0 && (capHorz === CapHorz.LEFT || capHorz === CapHorz.BOTH)) {
                        level.decosBg.push(GameObjectFactory.createDecorationRect(xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, StaticShape.YES, leftTile));
                    } else if (tileX === lengthHorz - 1 && (capHorz === CapHorz.RIGHT || capHorz === CapHorz.BOTH)) {
                        level.decosBg.push(GameObjectFactory.createDecorationRect(xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, StaticShape.YES, rightTile));
                    } else {
                        level.decosBg.push(GameObjectFactory.createDecorationRect(xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, StaticShape.YES, centerTile));
                    }

                    drawY += firstLineAlt;
                }
            }
        }

        // add single obstacle object
        switch (slope) {
            case Slope.NONE:
            {
                level.obstacles.push(GameObjectFactory.createObstacleSpriteless(xLeft, yTop, lengthHorz * GameObjectBundleFactory.GROUND_TILE_WIDTH, lengthVert * GameObjectBundleFactory.GROUND_TILE_HEIGHT, 0.0, JumpPassThrough.NO));
                break;
            }

            case Slope.ASCENDING:
            {
                level.obstacles.push(GameObjectFactory.createElevatedRamp(xLeft, yTop, lengthHorz * GameObjectBundleFactory.GROUND_TILE_WIDTH, lengthVert * GameObjectBundleFactory.GROUND_TILE_HEIGHT, lengthHorz * -GameObjectBundleFactory.ALTITUDE, null, JumpPassThrough.NO));
                break;
            }

            case Slope.DESCENDING:
            {
                level.obstacles.push(GameObjectFactory.createElevatedRamp(xLeft, yTop, lengthHorz * GameObjectBundleFactory.GROUND_TILE_WIDTH, lengthVert * GameObjectBundleFactory.GROUND_TILE_HEIGHT, lengthHorz * GameObjectBundleFactory.ALTITUDE, null, JumpPassThrough.NO));
                break;
            }
        }
    }

    /** ****************************************************************************************************************
    *   Creates a water area.
    *
    *   @param level           The level to add the flying ground to.
    *   @param xLeft           Anchor for left X.
    *   @param yTop            Anchor for top Y.
    *   @param length          The length of the area.
    *   @param height          The height of the area.
    *   @param tileCenterImage Tile for water area's center.
    *******************************************************************************************************************/
    public static createWaterArea(
        level: Level,
        xLeft: number,
        yTop: number,
        length: number,
        height: number,
        tileCenterImage: string
    ): void {
        const tileTop: SpriteTemplate = SpriteData.WATER_TOP;
        const tileCenter: SpriteTemplate = SpriteTemplate.createFromSingleImage(tileCenterImage);

        // draw area
        for (let tileX: number = 0; tileX < length; ++tileX) {
            for (let tileY: number = 0; tileY < height; ++tileY) {
                if (tileY === 0) {
                    level.decosBg.push(GameObjectFactory.createDecorationRect(xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, yTop + GameObjectBundleFactory.GROUND_TILE_HEIGHT + tileY * GameObjectBundleFactory.GROUND_TILE_HEIGHT, StaticShape.YES, tileTop));
                } else {
                    level.decosBg.push(GameObjectFactory.createDecorationRect(xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, yTop + GameObjectBundleFactory.GROUND_TILE_HEIGHT + tileY * GameObjectBundleFactory.GROUND_TILE_HEIGHT, StaticShape.YES, tileCenter));
                }
            }
        }
    }

    /** ****************************************************************************************************************
    *   Creates a crate.
    *
    *   @param level        The level to add the solid ground to.
    *   @param xLeft        Anchor for left X.
    *   @param yBottom      Anchor for bottom Y.
    *   @param type         The type of crate to create.
    *******************************************************************************************************************/
    public static createCrate(
        level: Level,
        xLeft: number,
        yBottom: number,
        type: CrateType
    ): void {
        let crate: Movable = null;

        switch (type) {
            case CrateType.WOODEN:
            {
                crate = GameObjectFactory.createWoodenCrate(xLeft, yBottom);
                break;
            }
        }

        level.movables.push(crate);
    }

    /** ****************************************************************************************************************
    *   Creates a bridge.
    *
    *   @param level   The level to add the solid ground to.
    *   @param xLeft   Anchor for left X.
    *   @param yBottom Anchor for bottom Y.
    *******************************************************************************************************************/
    public static createBridge(
        level: Level,
        xLeft: number,
        yBottom: number,
        onlyHalf: boolean = false
    ): void {
        const WIDTH_TOTAL: number = (onlyHalf ? 350 : 700);
        // let WIDTH_SLOPE :number = 128;
        // let ALTITUDE    :number = 30;

        // add obctacles
        level.obstacles.push(GameObjectFactory.createObstacleSpriteless(xLeft, yBottom, WIDTH_TOTAL, 10, null, JumpPassThrough.NO));
        // level.obstacles.push( GameObjectFactory.createElevatedRamp( xLeft, yBottom, WIDTH_SLOPE, 10, -ALTITUDE, null, JumpPassThrough.NO ) );
        // level.obstacles.push( GameObjectFactory.createElevatedRamp( xLeft + WIDTH_TOTAL - WIDTH_SLOPE, yBottom - ALTITUDE, WIDTH_SLOPE, 10, ALTITUDE, null, JumpPassThrough.NO ) );

        // add deco
        const sprtiteTemplate: SpriteTemplate = SpriteTemplate.createFromSingleImage(onlyHalf ? ImageData.BRIDGE_2 : ImageData.BRIDGE_1);
        level.decosFg.push(GameObjectFactory.createDecorationRect(xLeft - 115, yBottom + 121, StaticShape.YES, sprtiteTemplate));
    }

    /** ****************************************************************************************************************
    *   Creates a movable with a rectangular shape.
    *
    *   @param level    The level to add the decoration to.
    *   @param xLeft    Anchor for left X.
    *   @param yBottom  Anchor for bottom Y.
    *   @param imageId  The id of the image.
    *******************************************************************************************************************/
    public static createMovableRect(
        level: Level,
        xLeft: number,
        yBottom: number,
        imageId: string,
        density: number = BodyDensity.DEFAULT,
        friction: number = BodyFriction.DEFAULT_MOVABLE,
        breakable: Breakable = Breakable.NO
    ): void {
        const movable: Movable = GameObjectFactory.createMovableRect(
            xLeft,
            yBottom,
            imageId,
            density,
            friction,
            breakable
        );

        level.movables.push(movable);
    }

    /** ****************************************************************************************************************
    *   Creates a movable with a circular shape.
    *
    *   @param level    The level to add the decoration to.
    *   @param xLeft    Anchor for left X.
    *   @param yBottom  Anchor for bottom Y.
    *   @param angle    The initial rotation angle for this movable.
    *   @param imageId  The id of the image.
    *******************************************************************************************************************/
    public static createMovableCircular(
        level: Level,
        xLeft: number,
        yBottom: number,
        angle: number,
        imageId: string
    ): void {
        const movable: Movable = GameObjectFactory.createMovableCircular(
            xLeft,
            yBottom,
            imageId,
            angle
        );

        level.movables.push(movable);
    }

    /** ****************************************************************************************************************
    *   Creates a decoration from a single image.
    *
    *   @param level    The level to add the decoration to.
    *   @param xLeft    Anchor for left X.
    *   @param yBottom  Anchor for bottom Y.
    *   @param position The position for the decoration.
    *   @param imageId  The id of the image.
    *******************************************************************************************************************/
    public static createDecoImage(
        level: Level,
        xLeft: number,
        yBottom: number,
        position: DecoPosition,
        imageId: string,
        mirror: MirrorImage = MirrorImage.NO
    ): void {
        const spriteTemplate: SpriteTemplate = SpriteTemplate.createFromSingleImage(imageId, mirror);

        GameObjectBundleFactory.createDecoSprite(
            level,
            xLeft,
            yBottom,
            position,
            spriteTemplate
        );
    }

    /** ****************************************************************************************************************
    *   Creates an obstacle from a single image.
    *
    *   @param level    The level to add the wall to.
    *   @param xLeft    Anchor for left X.
    *   @param yBottom  Anchor for bottom Y.
    *   @param imageId  The id of the image.
    *******************************************************************************************************************/
    public static createObstacle(
        level: Level,
        xLeft: number,
        yBottom: number,
        imageId: string,
        breakable: Breakable = Breakable.NO
    ): void {
        const spriteTemplate: SpriteTemplate = SpriteTemplate.createFromSingleImage(imageId);

        const obstacle: Obstacle = GameObjectFactory.createObstacleSpriteful(
            xLeft,
            yBottom,
            spriteTemplate,
            0,
            JumpPassThrough.NO,
            StaticShape.YES,
            BodyDensity.DEFAULT,
            BodyRestitution.DEFAULT,
            breakable
        );

        level.obstacles.push(obstacle);
    }

    /** ****************************************************************************************************************
    *   Creates an enemy and adds it to the level stack.
    *
    *   @param spriteTemplate     Sprite Template to use for the enemy.
    *   @param level              The level to add the enemy to.
    *   @param xLeft              Anchor X.
    *   @param yBottom            Anchor bottom Y.
    *   @param facingDirection    The enemies initial facing and walking direction.
    *   @param walkingTargetLeft  Left walking target X.
    *   @param walkingTargetRight Right walking target X.
    *   @param characterSpriteSet The sprite set to use for this enemy.
    *   @param blocksPlayer       If the enemy body collides with the player.
    *******************************************************************************************************************/
    public static createEnemy(
        level: Level,
        xLeft: number,
        yBottom: number,
        facingDirection: CharacterFacing,
        walkingTargetLeft: number,
        walkingTargetRight: number,
        characterSpriteSet: CharacterSpriteSet,
        blocksPlayer: boolean = true
    ): void {
        const enemy: Bot = GameObjectFactory.createBot(
            characterSpriteSet.spriteStandLeft,
            xLeft,
            yBottom,
            facingDirection,
            walkingTargetLeft,
            walkingTargetRight,
            characterSpriteSet,
            false,
            blocksPlayer
        );

        level.enemies.push(enemy);
    }


    /** ****************************************************************************************************************
    *   Creates an enemy and adds it to the level stack.
    *
    *   @param level              The level to add the enemy to.
    *   @param xLeft              Anchor X.
    *   @param yBottom            Anchor bottom Y.
    *   @param facingDirection    The enemies initial facing and walking direction.
    *   @param walkingTargetLeft  Left walking target X.
    *   @param walkingTargetRight Right walking target X.
    *   @param characterSpriteSet The sprite set to use for this enemy.
    *   @param friendly           If the bot is not an enemy but a friend.
    *   @param blocksPlayer       If the bots body is able to collide with the player.
    *******************************************************************************************************************/
    public static createFriend(
        spriteTemplate: SpriteTemplate,
        level: Level,
        xLeft: number,
        yBottom: number,
        facingDirection: CharacterFacing,
        walkingTargetLeft: number,
        walkingTargetRight: number,
        characterSpriteSet: CharacterSpriteSet,
        blocksPlayer: boolean = true
    ): void {
        const friend: Bot = GameObjectFactory.createBot(
            spriteTemplate,
            xLeft,
            yBottom,
            facingDirection,
            walkingTargetLeft,
            walkingTargetRight,
            characterSpriteSet,
            true,
            blocksPlayer
        );

        level.enemies.push(friend);
    }

    /** ****************************************************************************************************************
    *   Creates a decoration from a sprite.
    *
    *   @param level          The level to add the decoration to.
    *   @param xLeft          Anchor for left X.
    *   @param yBottom        Anchor for bottom Y.
    *   @param position       The position for the decoration.
    *   @param spriteTemplate The sprite template to use.
    *******************************************************************************************************************/
    public static createDecoSprite(
        level: Level,
        xLeft: number,
        yBottom: number,
        position: DecoPosition,
        spriteTemplate: SpriteTemplate
    ): void {
        const deco: Decoration = GameObjectFactory.createDecorationRect(xLeft, yBottom, StaticShape.YES, spriteTemplate);

        switch (position) {
            case DecoPosition.FG:
            {
                level.decosFg.push(deco);
                break;
            }

            case DecoPosition.BG:
            {
                level.decosBg.push(deco);
                break;
            }
        }
    }

    public static createBillboard(
        level: Level,
        xLeft: number,
        yBottom: number,
        position: DecoPosition,
        imageId: string
    ): void {
        GameObjectBundleFactory.createDecoImage(level, xLeft, yBottom, position, ImageData.BILLBOARD);

        const spriteTemplate: SpriteTemplate = SpriteTemplate.createFromSingleImage(imageId);
        const billboard: Billboard = new Billboard
        (
            new ShapeRectangle
            (
                spriteTemplate.width,
                spriteTemplate.height,
                DebugColor.COLOR_DEBUG_DECORATION,
                StaticShape.YES,
                0.0,
                BodyFriction.DEFAULT,
                BodyDensity.DEFAULT,
                BodyRestitution.DEFAULT
            ),
            spriteTemplate,
            xLeft,
            (yBottom - spriteTemplate.height)
        );

        switch (position) {
            case DecoPosition.FG:
            {
                level.decosFg.push(billboard);
                break;
            }

            case DecoPosition.BG:
            {
                level.decosBg.push(billboard);
                break;
            }
        }
    }

    /** ****************************************************************************************************************
    *   Creates a rubble pile.
    *
    *   @param level       The level to add the decoration to.
    *   @param xLeft       Anchor for left X.
    *   @param yBottom     Anchor for bottom Y.
    *   @param length      Length of the bottom stone row.
    *******************************************************************************************************************/
    /*
    public static createRubblePile
    (
        level       :Level,
        xLeft       :number,
        yBottom     :number,
        length      :number
    )
    : void
    {
        for ( let i:number = 0; i < length; ++i )
        {
            let imageId:string = null;

            switch ( MathUtil.getRandomInt( 0, 2 ) )
            {
                case 0: imageId = ImageData.RUBBLE_1;      break;
                case 1: imageId = ImageData.RUBBLE_2;      break;
                case 2: imageId = ImageData.RUBBLE_3;      break;
            }

            GameObjectBundleFactory.createMovableCircular
            (
                level,
                xLeft + ( i * 50 ),
                yBottom,
                imageId,
                MathUtil.getRandomInt( 0, 359 )
            );
        }
    }
    */

    /** ****************************************************************************************************************
    *   Creates a candle deco.
    *
    *   @param level       The level to add the decoration to.
    *   @param xLeft       Anchor for left X.
    *   @param yBottom     Anchor for bottom Y.
    *   @param position    The position for the candle - foreground or background.
    *******************************************************************************************************************/
    public static createCandle(
        level: Level,
        xLeft: number,
        yBottom: number,
        position: DecoPosition
    ): void {
        GameObjectBundleFactory.createDecoImage(level, xLeft,      yBottom,       position, ImageData.CANDLE);
        GameObjectBundleFactory.createDecoSprite(level, xLeft - 17, yBottom - 153, position, SpriteData.FLAME_1_BIG);
    }

    public static createStatusShrine(
        level: Level,
        xLeft: number,
        yBottom: number
    ): void {
        GameObjectBundleFactory.createCandle(level, xLeft, yBottom, DecoPosition.BG);
        GameObjectBundleFactory.createDecoImage(level, xLeft - 110, yBottom + 22, DecoPosition.BG, ImageData.BUSH_2);
        GameObjectBundleFactory.createDecoImage(level, xLeft - 170, yBottom, DecoPosition.BG, ImageData.STATUE_1);
        GameObjectBundleFactory.createDecoImage(level, xLeft - 285, yBottom, DecoPosition.FG, ImageData.BUSH_1);
        GameObjectBundleFactory.createCandle(level, xLeft - 240, yBottom, DecoPosition.FG);
    }
}
