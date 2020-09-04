
    import * as ninjas from '../ninjas';

    /** ****************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   CLEANUP
    *   =======
    *   TODO Group all deco images into subfolders.
    *   TODO Remove static access on Main.game.
    *   TODO Improve image sequence handling in ImageData (ALL_IMAGES) by class access?
    *   TODO AliveState for character (alive, dying, dead)
    *   TODO React Components to React Hooks.
    *
    *   NEW ENGINE FEATURES
    *   ===================
    *   TODO Debug Disable Pointer control.
    *   TODO Add canvas max width?
    *   TODO Fix falling/standing-flickering when player lands on flask.
    *   TODO Add canvas upscaling / downscaling?
    *   TODO Add BotMind.ENEMY, etc.
    *   TODO Add destroyable obstacles.
    *   TODO Add destroyable movables.
    *   TODO Add decoration particle effects on smashing objects / windows etc.
    *   TODO Panel left AND right?
    *   TODO Selectable panel animations.
    *   TODO Setting for light or dark preloader.
    *   TODO Enum 'wearpon' with according damage values.
    *   TODO Try different elements from the Matter.js "physics demos" to face the player?
    *   TODO Add Camera joyride on level startup?
    *   TODO Create HUD ( for items etc )?
    *   TODO create class HUD with own paint-method.
    *
    *   NEW GAME FEATURES
    *   =================
    *   TODO Green bubbling water - fix tiles. etc.
    *   TODO Create different ground tilesets.
    *   TODO Doors that warp.
    *   TODO Add 'katana strike' action in air.
    *   TODO More cool flask images.
    *   TODO Particle fx smashed crates, startup window etc.
    *   TODO Add new ninja sprites.
    *   TODO Add 'crouch' action.
    *   TODO Add 'crouch slide' action.
    *   TODO Much more air friction for parachute.
    *   TODO Add 'shuriken throw' action.
    *   TODO Bots that help you and talk to you.
    *   TODO Add event triggers! ( for falling obstacles, new enemies etc )
    *   TODO Sound effects for ninja girl actions and enemies
    *   TODO Player shooting or throwing objects.
    *   TODO Collectables
    *   TODO Create item pickup HUD effect?
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
