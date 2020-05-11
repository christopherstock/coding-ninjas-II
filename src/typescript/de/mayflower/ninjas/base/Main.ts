
    import * as ninjas from '../ninjas';

    /** ****************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO Create different ground tilesets.
    *   TODO Add 'katana strike' action in air.
    *   TODO Add destroyable obstacles.
    *   TODO Add new ninja sprites.
    *   TODO Debug switch for Light or dark preloader.
    *   TODO Disable Right+Meta interference in browser.
    *   TODO More cool flask images.
    *   TODO Add 'slide' action.
    *   TODO Add event triggers! ( for falling obstacles, new enemies etc )
    *   TODO Green bubbling water - fix tiles. etc.
    *   TODO Sound effects for ninja girl actions and enemies
    *   TODO Particle fx smashed crates, startup window etc.
    *   TODO Enum 'wearpon' with according damage values.
    *   TODO Try different physics demo elements on the player!
    *   TODO Remove static access on Main.game.
    *   TODO Bots that help you and talk to you?
    *   TODO Player shooting or throwing objects?
    *   TODO Debug Disable Pointer control.
    *   TODO Improve image sequence handling in ImageData?
    *   TODO Replace obsolete wow lib with Ant Design RC-Anim Lib?
    *   TODO Add destroyable movables.
    *   TODO Add pickable items and item sprites.
    *   TODO Fix flickering for side-panel antd-comps before 1st popup (preload?).
    *   TODO Add decoration particle effects on smashing objects / windows etc.
    *   TODO Create HUD ( for items etc )?
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
