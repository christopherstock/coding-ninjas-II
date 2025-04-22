import { Game } from '../game/Game';
import { SettingGame } from '../setting/SettingGame';
import { Debug } from './Debug';

/** ********************************************************************************************************************
*   The main class contains the application's points of entry and termination.
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
        Debug.init.log( SettingGame.TITLE );
        Debug.init.log();

        // init and start the game engine
        Main.game = new Game();
        Main.game.launch();
    }
}
