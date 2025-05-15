import * as matter from 'matter-js';
import { SettingMatter } from '../base/SettingMatter';
import { SettingDebug } from '../base/SettingDebug';
import { SettingEngine } from '../base/SettingEngine';
import { DebugLog } from '../base/DebugLog';
import { CanvasSystem } from './ui/CanvasSystem';

/** ********************************************************************************************************************
*   Manages the Matter.js engine.
***********************************************************************************************************************/
export class MatterJsSystem {
    /** The Matter.js engine. */
    private             readonly    engine: matter.Engine              = null;
    /** The Matter.js renderer. */
    private             readonly    renderer: matter.Render              = null;

    /** ****************************************************************************************************************
    *   Creates a new Matter.js engine.
    *
    *   @param canvasSystem        The canvasSystem to use.
    *   @param callbackAfterRender The function to invoke after  the engine has been rendered and drawed.
    *   @param textureCache        All cached textures to use.
    *******************************************************************************************************************/
    public constructor(
        canvasSystem: CanvasSystem,
        callbackAfterRender: (renderContext: CanvasRenderingContext2D)=> void,
        textureCache: HTMLImageElement[]
    ) {
        // create engine
        this.engine = matter.Engine.create();
        this.engine.world.gravity = {
            x: 0.0,
            y: SettingMatter.DEFAULT_GRAVITY_Y,
            scale: 0.001,
        };
        this.engine.timing.timeScale = 1.0;

        // create renderer
        this.renderer = matter.Render.create(
            {
                canvas:  canvasSystem.getCanvas(),
                engine:  this.engine,
                options: {
                    showCollisions:     (SettingDebug.ENABLE_MATTER_DEBUG_VIEWS),
                    showAxes:           (SettingDebug.ENABLE_MATTER_DEBUG_VIEWS),
                    showAngleIndicator: (SettingDebug.ENABLE_MATTER_DEBUG_VIEWS),
                    showVelocity:       (SettingDebug.ENABLE_MATTER_DEBUG_VIEWS),

                    background:         SettingEngine.COLOR_BG_MATTER_JS_CSS,

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
        DebugLog.init.log(
            'Assigned ['
            + String(Object.keys(this.renderer.textures).length)
            + '] textures to matter.js renderer texture cache'
        );

        // disable blurry image drawing!
        this.renderer.context.imageSmoothingEnabled = false;

        // add drawing callback after rendering
        matter.Events.on(this.renderer, 'afterRender',  () => { callbackAfterRender(this.renderer.context) });
    }

    /** ****************************************************************************************************************
    *   Starts the Matter.js renderer.
    *******************************************************************************************************************/
    public startRenderer(): void {
        matter.Render.run(this.renderer);
    }

    /** ****************************************************************************************************************
    *   Adds the specified constraint to the world.
    *
    *   @param constraint A body, composite or constraint of the Matter.js system.
    *******************************************************************************************************************/
    public addToWorld(constraint: matter.Body|matter.Composite|matter.Constraint): void {
        matter.Composite.add(this.engine.world, constraint);
    }

    /** ****************************************************************************************************************
    *   Removes the specified constraint from the world.
    *
    *   @param constraint A body, composite or constraint of the Matter.js system.
    *******************************************************************************************************************/
    public removeFromWorld(constraint: matter.Body|matter.Composite|matter.Constraint): void {
        matter.Composite.remove(this.engine.world, constraint);
    }

    /** ****************************************************************************************************************
    *   Updates the dimensions of the Matter.js rendering system.
    *******************************************************************************************************************/
    public updateEngineDimensions(canvasSystem: CanvasSystem): void {
        this.renderer.canvas.getContext('2d').scale(canvasSystem.getScale(), canvasSystem.getScale());

        this.renderer.canvas.width  = canvasSystem.getPhysicalWidth();
        this.renderer.canvas.height = canvasSystem.getPhysicalHeight();

        this.renderer.options.width  = canvasSystem.getPhysicalWidth();
        this.renderer.options.height = canvasSystem.getPhysicalHeight();

        DebugLog.canvas.log('Updated matter.js engine dimensions according to canvas.');
    }

    /** ****************************************************************************************************************
    *   Updates the Matter.js engine for the specified rendering delta.
    *******************************************************************************************************************/
    public updateEngine(): void {
        matter.Engine.update(
            this.engine,
            SettingMatter.RENDER_DELTA_DEFAULT
        );
    }

    /** ****************************************************************************************************************
    *   Resets the world of the Matter.js engine.
    *******************************************************************************************************************/
    public resetWorld(): void {
        matter.World.clear(this.engine.world, false);
    }

    /** ****************************************************************************************************************
    *   Sets the bounds of the world to render onto the canvas.
    *
    *   @param bounds The bounds to set for the renderer.
    *******************************************************************************************************************/
    public setRenderBounds(bounds: matter.Bounds): void {
        this.renderer.bounds = bounds;
    }

    public getEngine(): matter.Engine {
        return this.engine;
    }
}
