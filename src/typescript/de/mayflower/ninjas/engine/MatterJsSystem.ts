
    import * as matter from 'matter-js';
    import * as ninjas from '../ninjas';

    /** ****************************************************************************************************************
    *   Manages the Matter.js engine.
    *******************************************************************************************************************/
    export class MatterJsSystem
    {
        /** The Matter.js engine. */
        private             readonly    engine                      :matter.Engine              = null;
        /** The Matter.js renderer. */
        private             readonly    renderer                    :matter.Render              = null;

        /** ************************************************************************************************************
        *   Creates a new Matter.js engine.
        *
        *   @param canvasSystem        The canvasSystem to use.
        *   @param callbackAfterRender The function to invoke after  the engine has been rendered and drawed.
        *   @param textureCache        All cached textures to use.
        ***************************************************************************************************************/
        public constructor
        (
            canvasSystem        :ninjas.CanvasSystem,
            callbackAfterRender :( renderContext:CanvasRenderingContext2D ) => void,
            textureCache        :HTMLImageElement[]
        )
        {
            // create engine
            this.engine = matter.Engine.create();
            this.engine.world.gravity = {
                x: 0.0,
                y: ninjas.SettingMatter.DEFAULT_GRAVITY_Y,
                scale: 0.001,
            };
            this.engine.timing.timeScale = 1.0;

            // create renderer
            this.renderer = matter.Render.create(
                {
                    canvas:  canvasSystem.getCanvas(),
                    engine:  this.engine,
                    options: {
                        showCollisions:     ( ninjas.SettingDebug.MATTERJS_DEBUG_VIEWS ),
                        showAxes:           ( ninjas.SettingDebug.MATTERJS_DEBUG_VIEWS ),
                        showAngleIndicator: ( ninjas.SettingDebug.MATTERJS_DEBUG_VIEWS ),
                        showVelocity:       ( ninjas.SettingDebug.MATTERJS_DEBUG_VIEWS ),

                        background:         ninjas.SettingEngine.COLOR_BG_MATTER_JS_CSS,

                        width:              canvasSystem.getWidth(),
                        height:             canvasSystem.getHeight(),

                        hasBounds:          true,
                        wireframes:         false,

                        // pixelRatio:         1,
/*
                        showSleeping:       true,
                        showDebug:          true,
                        showBroadphase:     true,
                        showBounds:         true,
                        showSeparations:    true,
                        showPositions:      true,
                        showIds:            true,
                        showShadows:        true,
                        showVertexNumbers:  true,
                        showConvexHulls:    true,
                        showInternalEdges:  true,
*/
                    } as any,
                }
            );

            // set all loaded image as MatterJS texture cache
            this.renderer.textures = textureCache;
            ninjas.Debug.init.log(
                'Assigned ['
                + String( Object.keys( this.renderer.textures ).length )
                + '] textures to renderer texture cache '
            );

            // disable blurry image drawing!
            this.renderer.context.imageSmoothingEnabled = false;

            // add drawing callback after rendering
            matter.Events.on( this.renderer, 'afterRender',  () => { callbackAfterRender( this.renderer.context ) } );
        }

        /** ************************************************************************************************************
        *   Starts the Matter.js renderer.
        ***************************************************************************************************************/
        public startRenderer() : void
        {
            matter.Render.run( this.renderer );
        }

        /** ************************************************************************************************************
        *   Adds the specified constraint to the world.
        *
        *   @param constraint A body, composite or constraint of the Matter.js system.
        ***************************************************************************************************************/
        public addToWorld( constraint:matter.Body|matter.Composite|matter.Constraint ) : void
        {
            matter.Composite.add( this.engine.world, constraint );
        }

        /** ************************************************************************************************************
        *   Removes the specified constraint from the world.
        *
        *   @param constraint A body, composite or constraint of the Matter.js system.
        ***************************************************************************************************************/
        public removeFromWorld( constraint:matter.Body|matter.Composite|matter.Constraint ) : void
        {
            matter.Composite.remove( this.engine.world, constraint );
        }

        /** ************************************************************************************************************
        *   Updates the dimensions of the Matter.js rendering system.
        ***************************************************************************************************************/
        public updateEngineDimensions( canvasSystem:ninjas.CanvasSystem ) : void
        {
            // get inner window dimensions
            const windowWidth  :number = window.innerWidth;
            const windowHeight :number = window.innerHeight;
            let   canvasWidth  :number = 0;
            let   canvasHeight :number = 0;
            let   canvasScaleX  :number = 0;
            let   canvasScaleY :number = 0;

            // clip to minimum canvas dimensions
            if ( windowWidth <= ninjas.SettingEngine.CANVAS_MIN_WIDTH  )
            {
                canvasScaleX = 1.0;
                canvasWidth = ninjas.SettingEngine.CANVAS_MIN_WIDTH;
            }
            else if ( windowWidth > ninjas.SettingEngine.CANVAS_MIN_WIDTH  )
            {
                canvasScaleX = ( windowWidth / ninjas.SettingEngine.CANVAS_MIN_WIDTH );
                canvasWidth = windowWidth;
            }

            if ( windowHeight <= ninjas.SettingEngine.CANVAS_MIN_HEIGHT )
            {
                canvasScaleY = 1.0;
                canvasHeight = ninjas.SettingEngine.CANVAS_MIN_HEIGHT;
            }
            else if ( windowHeight > ninjas.SettingEngine.CANVAS_MIN_HEIGHT )
            {
                canvasScaleY = ( windowHeight / ninjas.SettingEngine.CANVAS_MIN_HEIGHT );
                canvasHeight = windowHeight;
            }

            const canvasScale :number = Math.min( canvasScaleX, canvasScaleY );

            this.renderer.canvas.getContext('2d').scale( canvasScale, canvasScale );

            this.renderer.canvas.width  = ninjas.SettingEngine.CANVAS_MIN_WIDTH  * canvasScale;
            this.renderer.canvas.height = ninjas.SettingEngine.CANVAS_MIN_HEIGHT * canvasScale;

            this.renderer.options.width  = ninjas.SettingEngine.CANVAS_MIN_WIDTH  * canvasScale;
            this.renderer.options.height = ninjas.SettingEngine.CANVAS_MIN_HEIGHT * canvasScale;

            ninjas.Debug.canvas.log( 'Updated matter.js engine dimensions according to canvas.' );
        }

        /** ************************************************************************************************************
        *   Updates the Matter.js engine for the specified rendering delta.
        ***************************************************************************************************************/
        public updateEngine() : void
        {
            matter.Engine.update(
                this.engine,
                ninjas.SettingMatter.RENDER_DELTA_DEFAULT
            );
        }

        /** ************************************************************************************************************
        *   Resets the world of the Matter.js engine.
        ***************************************************************************************************************/
        public resetWorld() : void
        {
            matter.World.clear( this.engine.world, false );
        }

        /** ************************************************************************************************************
        *   Sets the bounds of the world to render onto the canvas.
        *
        *   @param bounds The bounds to set for the renderer.
        ***************************************************************************************************************/
        public setRenderBounds( bounds:matter.Bounds ) : void
        {
            this.renderer.bounds = bounds;
        }
    }
