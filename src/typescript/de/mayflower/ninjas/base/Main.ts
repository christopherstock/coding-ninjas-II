
    import * as ninjas from '../ninjas';

    /** ****************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO Improve image sequence handling in ImageData?
    *   TODO Green water etc.
    *   TODO Add destroyable movables.
    *   TODO One player - many outfits! General player with custom sprite sets.
    *   TODO Add pickable items and item sprites.
    *   TODO Remove enemy flickering on startup..! :p
    *   TODO Fix flickering for side-panel before 1st popup.
    *   TODO Add 'katana strike' action on ground and in air.
    *   TODO Replace obsolete wow lib with Ant Design RC-Anim Lib.
    *   TODO Add decoration particle effects on smashing objects / windows etc.
    *   TODO Add event triggers ( for falling obstacles, new enemies etc )
    *   TODO Debug Disable Pointer control.
    *   TODO Try different physics demo elements on the player!
    *   TODO Remove static access on Main.game.
    *   TODO Particle fx smashed crates, startup window etc.
    *   TODO Sound effects for ninja girl and enemies?
    *   TODO Add 'slide' action.
    *   TODO Create HUD ( for items etc ).
    *   TODO create class HUD with own paint-method.
    *   TODO Create item pickup HUD effect?
    *   TODO Add Camera joyride on level startup?
    *******************************************************************************************************************/
    export class Main
    {
        /** The singleton instance of the game engine. */
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
            Main.game.preload();
        }
    }
