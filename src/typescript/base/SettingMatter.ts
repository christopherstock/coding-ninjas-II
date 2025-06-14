import * as matter from 'matter-js';

/** ********************************************************************************************************************
*   All adjustments and balancings for the Matter.js engine.
***********************************************************************************************************************/
export class SettingMatter {
    /** The rendering delta (in ms) between render ticks for default rendering. */
    public static readonly RENDER_DELTA_DEFAULT: number         = 10.0;
    /** The default vertical gravity for all objects. */
    public static readonly DEFAULT_GRAVITY_Y: number            = 2.0;
    /** The force the player dispenses on with an attack of his katana. */
    public static readonly PLAYER_ATTACK_FORCE: number          = 7.5;
    /** The players jump force. */
    public static readonly PLAYER_JUMP_POWER: number            = -10.50;
    /** The players speed in world coordinate per tick. */
    public static readonly PLAYER_SPEED_MOVE: number            = 7.5;
    /** The players gap size y of its physical body corners. */
    public static readonly PLAYER_EDGE_GAP_Y: number            = 17.0; // 7.5;
    /** The enemies' moving speed X. */
    public static readonly BOT_SPEED_MOVE: number               = 3.0;

    public  static  readonly    COLLISION_GROUP_COLLIDING: matter.ICollisionFilter    = {
        category: 0x0001,
        mask:     0x0001,
        group:    0x0001,
    };

    public  static  readonly    COLLISION_GROUP_NON_COLLIDING_ITEM: matter.ICollisionFilter    = {
        mask:     0x0000,
    };

    public  static  readonly    COLLISION_GROUP_NON_COLLIDING_DECO: matter.ICollisionFilter    = {
        mask:     0x0000,
    };

    public  static  readonly    COLLISION_GROUP_NON_COLLIDING_DEAD_OBJECT: matter.ICollisionFilter    = {
        mask:     0x0000,
    };

    public  static  readonly    COLLISION_GROUP_NON_COLLIDING_BOT: matter.ICollisionFilter    = {
        mask:     0x0000,
    };

    public  static  readonly    COLLISION_GROUP_NON_COLLIDING_RUBBLE: matter.ICollisionFilter    = {
        mask:     0x0000,
    };
}

/** ****************************************************************************************************************
*   Possible frictions for Matter.js bodies.
*******************************************************************************************************************/
export enum BodyFriction
{
    DEFAULT         = 0.1,
    PLAYER          = 0.75,
    METAL           = 1.0,
    DEFAULT_MOVABLE = 0.001,
    OBSTACLE        = 0.001,
    RUBBER          = 0.001,
    WOOD            = 1.0,
    GLASS           = 0.01,
    MINIMUM         = 0.001,
    NONE            = 0.0,
}

/** ****************************************************************************************************************
*   Possible air frictions for Matter.js bodies.
*******************************************************************************************************************/
export enum BodyFrictionAir
{
    DEFAULT     = 0.01,
    GLIDING     = 0.125,
}

/** ****************************************************************************************************************
*   Possible densities for Matter.js bodies.
*******************************************************************************************************************/
export enum BodyDensity
{
    DEFAULT     = 0.001,
    PLAYER      = 0.0035,
    TABLE       = 0.1,
    METAL       = 0.2,

    WOOD        = 0.004,
    RUBBER      = 0.0001,
    MINIMUM     = 0.000001,
    INFINITE    = Infinity,
}

/** ****************************************************************************************************************
*   Possible restitutions for Matter.js bodies.
*******************************************************************************************************************/
export enum BodyRestitution
{
    DEFAULT     = 0.0,
    WOOD        = 0.75,
    RUBBER      = 0.9,
}
