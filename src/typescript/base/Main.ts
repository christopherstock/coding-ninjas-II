import { Game } from '../game/Game';
import { SettingGame } from './SettingGame';
import { Debug } from './Debug';

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
        // set webpage title
        document.title = SettingGame.TITLE;

        // acclaim debug console
        Debug.welcome.log(SettingGame.TITLE);
        Debug.welcome.log();

        // init and start the game engine
        Main.game = new Game();
        Main.game.launch();
    }
}
