import { LevelId } from '../level/Level';
import { CharacterFacing } from './being/CharacterFacing';

export enum GameActionType {
    SWITCH_TO_LEVEL,
}

export type GameActionSwitchLevel = {
    playerStartX?: number,
    playerStartY?: number,
    targetLevel?: LevelId,
    playerInitFacing?: CharacterFacing,
}

/** ********************************************************************************************************************
*   The abstract class of all game objects.
***********************************************************************************************************************/
export class GameAction {
    public type: GameActionType        = null;
    public data: GameActionSwitchLevel = null;

    /** ****************************************************************************************************************
    *   Creates a new game object.
    *
    *   @param type           Action type
    *   @param data           Data for this action to pass
    *******************************************************************************************************************/
    public constructor(
        type: GameActionType,
        data: GameActionSwitchLevel
    ) {
        this.type = type;
        this.data = data;
    }
}
