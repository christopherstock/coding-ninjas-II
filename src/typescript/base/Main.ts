import { Game } from '../game/Game';
import { SettingGame } from './SettingGame';
import { DebugLog } from './DebugLog';

/** ********************************************************************************************************************
*   The main class contains the applications points of entry and termination.
***********************************************************************************************************************/
export class Main {
    /** The singleton game instance. */
    public      static          game: Game                    = null;

    /** ****************************************************************************************************************
    *   This method is invoked when the application starts.
    *******************************************************************************************************************/
    public static main(): void {
        document.title = SettingGame.TITLE;

        DebugLog.welcome.log(SettingGame.TITLE);
        DebugLog.welcome.log();

        // init and start the game engine
        Main.game = new Game();
        Main.game.launch();
    }
}
