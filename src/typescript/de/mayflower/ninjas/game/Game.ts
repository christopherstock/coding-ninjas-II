
    import * as ninjas from '../ninjas';
    import * as matter from 'matter-js';

    /** ****************************************************************************************************************
    *   Specifies the game logic and all primal components of the game.
    *******************************************************************************************************************/
    export class Game
    {
        /** The game engine. */
        public      engine                  :ninjas.Engine                  = null;
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
        public launch() : void
        {
            // create the game engine
            this.engine = new ninjas.Engine( this );

            // start the preloader after a short delay .. runs smoother for the user
            window.setTimeout
            (
                () => { this.engine.launch(); },
                ( ninjas.SettingDebug.DEBUG_NO_DELAY_AROUND_PRELOADER ? 0 : 500 )
            );
        }

        /** ************************************************************************************************************
        *   Starts the game loop.
        ***************************************************************************************************************/
        public start() : void
        {
            ninjas.Debug.init.log( 'Starting the game loop' );
            ninjas.Debug.init.log();

            // set the number of blend panel ticks
            this.blendPanelTicks = ninjas.SettingGame.BLEND_PANEL_TICKS;

            // init matter.js engine
            this.engine.initMatterJS();

            // play bg sound
            this.bgMusic = this.engine.soundSystem.playSound( ninjas.SoundData.BG_CHINESE, true );

            // launch initial level
            this.resetAndLaunchLevel( new ninjas.LevelData() );

            // update camera bounds
            this.updateAndAssignCamera();

            // start the renderer
            this.engine.matterJsSystem.startRenderer();

            // invoke engine ticks repeatedly
            window.requestAnimationFrame(
                () => { this.tickGame(); }
            );
        };

        /** ************************************************************************************************************
        *   Paints all overlays after Matter.js completed rendering the scene.
        *
        *   @param context The 2D rendering context to draw onto.
        ***************************************************************************************************************/
        public paintHUD( context:CanvasRenderingContext2D ) : void
        {
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
            this.camera.reset( this );
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
            this.level.init( this.engine.matterJsSystem );

            // reset camera
            this.resetCamera();
        }

        /** ************************************************************************************************************
        *   Being invoked each tick of the game loop in order to render the game.
        ***************************************************************************************************************/
        private tickGame() : void
        {
            if ( ninjas.SettingDebug.DEBUG_MODE )
            {
                // start fpsMetet tick
                this.engine.fpsMeter.tickStart();
            }

            // render one game tick
            this.render();

            // update MatterJS 2d engine
            this.engine.matterJsSystem.updateEngine( ninjas.SettingMatter.RENDER_DELTA );

            if ( ninjas.SettingDebug.DEBUG_MODE )
            {
                // stop fpsMeter tick
                this.engine.fpsMeter.tick();
            }

            window.requestAnimationFrame(
                () => { this.tickGame(); }
            );
        }

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

            // update camera bounds
            this.updateAndAssignCamera();

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

                    ninjas.Debug.init.log( 'Resetting and switching to level 1' );
                    this.resetAndLaunchLevel( new ninjas.LevelData() );
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
                ninjas.DrawUtil.fillRect
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

        /** ************************************************************************************************************
        *   Updates the level camera and then assigns it onto the player.
        *   by updating the rendered bounds of the camera onto the matter.js rendering engine.
        ***************************************************************************************************************/
        private updateAndAssignCamera() : void
        {
            const cameraBounds :matter.Bounds = this.camera.update(
                this.level.player.shape.body.position.x,
                this.level.player.shape.body.position.y,
                this.level.player.collidesBottom,
                this.engine.siteSystem.getCameraTargetX(),
                this.engine.canvasSystem.getHeight() * ninjas.SettingEngine.CAMERA_RATIO_Y
            );
            this.engine.matterJsSystem.setRenderBounds( cameraBounds );
        }
    }
