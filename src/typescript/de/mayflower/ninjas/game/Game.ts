
    import * as ninjas from '../ninjas';
    import * as matter from 'matter-js';

    /** ****************************************************************************************************************
    *   Specifies the game logic and all primal components of the game.
    *******************************************************************************************************************/
    export class Game
    {
        /** The preloader instance. */
        public      preloader               :ninjas.Preloader               = null;
        /** The game engine. */
        public      engine                  :ninjas.GameEngine              = null;
        /** The custom camera system. */
        public      camera                  :ninjas.Camera                  = null;
        /** The custom level. */
        public      level                   :ninjas.Level                   = null;
        /** The currently assigned background music. */
        private     bgMusic                 :HTMLAudioElement               = null;
        /** The remaining ticks for the blend panel to disappear. */
        private     blendPanelTicks         :number                         = 0;

        /** ************************************************************************************************************
        *   Shows the preloader.
        ***************************************************************************************************************/
        public preload() : void
        {
            this.preloader = new ninjas.Preloader( () => { this.onPreloaderSetup(); } );
            this.engine    = new ninjas.GameEngine();

            this.preloader.preload();
        }

        /** ************************************************************************************************************
        *   Resets the camera.
        ***************************************************************************************************************/
        public resetCamera() : void
        {
            this.camera = new ninjas.Camera(
                ninjas.SettingEngine.CAMERA_MOVING_SPEED,
                ninjas.SettingEngine.CAMERA_MOVING_MINIMUM,
                ninjas.SettingEngine.CAMERA_MOVING_MAXIMUM,
                this.level.width,
                this.level.height,
                this.engine.canvasSystem.getWidth(),
                this.engine.canvasSystem.getHeight()
            );
            this.camera.reset();
        }

        /** ************************************************************************************************************
        *   Being invoked when the preloader is set up.
        ***************************************************************************************************************/
        public onPreloaderSetup() : void
        {
            ninjas.Debug.preloader.log( 'Preloader setup complete.' );
            this.preloader.setLoadingPercentage( 5 );

            this.engine.initImageSystem();
        };

        /** ************************************************************************************************************
        *   Starts the game loop.
        ***************************************************************************************************************/
        public start() : void
        {
            ninjas.Debug.preloader.log( 'Starting the game loop' );
            ninjas.Debug.preloader.log();

            // set the number of blend panel ticks
            this.blendPanelTicks = ninjas.SettingGame.BLEND_PANEL_TICKS;

            // play bg sound
            this.bgMusic = this.engine.soundSystem.playSound( ninjas.Sound.BG_CHINESE, true );

            // launch initial level
            this.resetAndLaunchLevel( new ninjas.LevelWebsite() );

            // start the renderer
            this.engine.matterJsSystem.startRenderer();

            // end the preloader thread
            this.preloader.stopThread();

            // invoke engine ticks repeatedly
            window.setInterval(
                this.tickGame,
                ninjas.SettingGame.TICK_DELAY_DELTA
            );
        };

        /** ************************************************************************************************************
        *   Paints all overlays after Matter.js completed rendering the scene.
        *
        *   @param context The 2D rendering context to draw onto.
        ***************************************************************************************************************/
        public paintHUD( context:CanvasRenderingContext2D ) : void
        {
/*
            let testHudWidth:number  = 150;
            let testHudHeight:number = 50;
*/
            // paint blend overlay
            if ( !ninjas.SettingDebug.DISABLE_BLEND_PANEL )
            {
                this.paintBlendPanel( context );
            }
        }

        /** ************************************************************************************************************
        *   Pauses or resumes the background music.
        *
        *   @param enable Specifies if the background music shall be enabled or not.
        ***************************************************************************************************************/
        public toggleBgMusic( enable:boolean ) : void
        {
            if ( this.bgMusic !== null )
            {
                if ( enable )
                {
                    // noinspection JSIgnoredPromiseFromCall
                    this.bgMusic.play().then().catch( ( e :Error ) => { return e; } );
                }
                else
                {
                    this.bgMusic.pause();
                }
            }
        }

        /** ************************************************************************************************************
        *   Inits the level.
        ***************************************************************************************************************/
        private resetAndLaunchLevel( levelToLaunch:ninjas.Level ) : void
        {
            // clear world
            this.engine.matterJsSystem.resetWorld();

            // assign and init level
            this.level = levelToLaunch;
            this.level.init();

            // reset camera
            this.resetCamera();
        }

        /** ************************************************************************************************************
        *   Being invoked each tick of the game loop in order to render the game.
        ***************************************************************************************************************/
        private tickGame :() => void = () :void =>
        {
            if ( ninjas.SettingDebug.DEBUG_MODE )
            {
                // start fpsMetet tick
                this.engine.fpsMeter.tickStart();
            }

            // render one game tick
            this.render();

            // update MatterJS 2d engine
            this.engine.matterJsSystem.updateEngine( ninjas.SettingGame.RENDER_DELTA );

            if ( ninjas.SettingDebug.DEBUG_MODE )
            {
                // stop fpsMetet tick
                this.engine.fpsMeter.tick();
            }
        };

        /** ************************************************************************************************************
        *   Renders all game components.
        ***************************************************************************************************************/
        private render() : void
        {
            // hide blend panel if active
            if ( this.blendPanelTicks > 0 )
            {
                --this.blendPanelTicks;
            }

            // handle menu key
            this.handleMenuKey();

            // render level
            this.level.render( this.engine.keySystem );

            // update camera
            const cameraBounds :matter.Bounds = this.camera.update(
                this.level.player.shape.body.position.x,
                this.level.player.shape.body.position.y,
                this.level.player.collidesBottom,
                this.engine.siteSystem.getCameraTargetX(),
                this.engine.canvasSystem.getHeight() * ninjas.SettingEngine.CAMERA_RATIO_Y
            );
            this.engine.matterJsSystem.setRenderBounds( cameraBounds );

            // render parallax elements
            this.level.renderParallaxElements();
        }

        /** ************************************************************************************************************
        *   Handles pressed menu keys.
        ***************************************************************************************************************/
        private handleMenuKey() : void
        {
            if ( ninjas.SettingDebug.DEBUG_MODE )
            {
                if ( this.engine.keySystem.isPressed( ninjas.Key.KEY_1 ) )
                {
                    this.engine.keySystem.setNeedsRelease( ninjas.Key.KEY_1 );

                    ninjas.Debug.preloader.log( 'Resetting and switching to level 1' );
                    this.resetAndLaunchLevel( new ninjas.LevelWebsite() );
                }
/*
                if ( ninjas.Main.game.engine.keySystem.isPressed( ninjas.Key.KEY_2 ) )
                {
                    ninjas.Main.game.engine.keySystem.setNeedsRelease( ninjas.Key.KEY_2 );

                    ninjas.Debug.init.log( 'Resetting and switching to level 2' );
                    this.resetAndLaunchLevel( new ninjas.LevelAllElements() );
                }

                if ( ninjas.Main.game.engine.keySystem.isPressed( ninjas.Key.KEY_3 ) )
                {
                    ninjas.Main.game.engine.keySystem.setNeedsRelease( ninjas.Key.KEY_3 );

                    ninjas.Debug.init.log( 'Resetting and switching to level 3' );
                    this.resetAndLaunchLevel( new ninjas.LevelEnchantedWoods() );
                }
*/
            }
        }

        /** ************************************************************************************************************
        *   Paints the blend panel overlay over the entire canvas.
        *
        *   @param context The 2D rendering context to draw onto.
        ***************************************************************************************************************/
        private paintBlendPanel( context:CanvasRenderingContext2D ) : void
        {
            if ( this.blendPanelTicks > 0 )
            {
                ninjas.Drawing.fillRect
                (
                    context,
                    0,
                    0,
                    this.engine.canvasSystem.getWidth(),
                    this.engine.canvasSystem.getHeight(),
                    'rgba( 0, 0, 0, '
                    + String( this.blendPanelTicks / ninjas.SettingGame.BLEND_PANEL_TICKS )
                    + ' )'
                );
            }
        }
    }
