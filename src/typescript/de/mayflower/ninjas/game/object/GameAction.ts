import * as matter from 'matter-js';
import * as ninjas from '../../ninjas';

export enum GameActionType {
    SWITCH_TO_LEVEL,
}

/** ********************************************************************************************************************
*   The abstract class of all game objects.
***********************************************************************************************************************/
export class GameAction
{
    /** Collision shape. */
    public          type                    :GameActionType                 = null;
    public          data                    :any                            = null;

    /** ****************************************************************************************************************
    *   Creates a new game object.
    *
    *   @param shape          The shape for this object.
    *   @param spriteTemplate The sprite template to use for this game object.
    *   @param x              Startup position X.
    *   @param y              Startup position Y.
    *******************************************************************************************************************/
    public constructor
    (
        type          :GameActionType,
        data          :any
    )
    {
        this.type = type;
        this.data = data;
    }
}
