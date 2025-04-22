export enum GameActionType {
    SWITCH_TO_LEVEL,
}

/** ********************************************************************************************************************
*   The abstract class of all game objects.
***********************************************************************************************************************/
export class GameAction {
    /** Collision shape. */
    public          type: GameActionType                 = null;
    public          data: any                            = null;

    /** ****************************************************************************************************************
    *   Creates a new game object.
    *
    *   @param type           Action type
    *   @param data           Data for this action to pass
    *******************************************************************************************************************/
    public constructor(
        type: GameActionType,
        data: any
    ) {
        this.type = type;
        this.data = data;
    }
}
