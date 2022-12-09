import * as ninjas from '../ninjas';

/** ********************************************************************************************************************
*   The main class contains the application's points of entry and termination.
***********************************************************************************************************************/
export class Main
{
    /** The singleton game instance. */
    public      static          game                    :ninjas.Game                    = null;

    /** ****************************************************************************************************************
    *   This method is invoked when the application starts.
    *******************************************************************************************************************/
    public static main() : void
    {
        // set webpage title
        document.title = ninjas.SettingGame.TITLE;

        // acclaim debug console
        ninjas.Debug.init.log( ninjas.SettingGame.TITLE );
        ninjas.Debug.init.log();

        // init and start the game engine
        Main.game = new ninjas.Game();
        Main.game.launch();
    }
}
