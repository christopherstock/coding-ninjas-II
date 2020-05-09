
    import * as ninjas from '../ninjas';

    /** ****************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO Rearrange res/image/sprites structure!
    *   TODO Add new ninja sprites.
    *   TODO Improved preloader.
    *   TODO Add 'katana strike' action on ground and in air.
    *   TODO Add event triggers ( for falling obstacles, new enemies etc )
    *
    *   TODO Particle fx smashed crates, startup window etc.
    *   TODO Remove static access on Main.game.
    *   TODO Sound effects for ninja girl and enemies?
    *   TODO Add 'slide' action.
    *   TODO Try different physics demo elements on the player!
    *   TODO Bots that help you and talk to you?
    *   TODO Debug Disable Pointer control.
    *   TODO Improve image sequence handling in ImageData?
    *   TODO Replace obsolete wow lib with Ant Design RC-Anim Lib?
    *   TODO Add destroyable movables.
    *   TODO Add pickable items and item sprites.
    *   TODO Green water etc.
    *   TODO Fix flickering for side-panel antd-comps before 1st popup (preload?).
    *   TODO Add decoration particle effects on smashing objects / windows etc.
    *   TODO Create HUD ( for items etc ).
    *   TODO create class HUD with own paint-method.
    *   TODO Create item pickup HUD effect?
    *   TODO Add Camera joyride on level startup?
    *******************************************************************************************************************/
    export class Main
    {
        /** The singleton game instance. */
        public      static          game                    :ninjas.Game                    = null;

        /** ************************************************************************************************************
        *   This method is invoked when the application starts.
        ***************************************************************************************************************/
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
