
import * as ninjas from '../../ninjas';

/** ****************************************************************************************************************
    *   Manages the canvas.
    *******************************************************************************************************************/
export class CanvasSystem
{
    /** The canvas element. */
    private     readonly        canvas                  :HTMLCanvasElement              = null;
    /** The canvas rendering context. */
    private     readonly        canvasContext           :CanvasRenderingContext2D       = null;
    /** The current width of the canvas. */
    private                     canvasWidth             :number                         = 0;
    /** The current height of the canvas. */
    private                     canvasHeight            :number                         = 0;
    /** The physical width of the canvas. */
    private                     canvasPhysicalWidth     :number                         = 0;
    /** The physical height of the canvas. */
    private                     canvasPhysicalHeight    :number                         = 0;
    /** The current scale (X and Y) of the canvas. */
    private                     canvasScale             :number                         = 0;

    /** ************************************************************************************************************
        *   Constructs a new canvas system.
        ***************************************************************************************************************/
    public constructor()
    {
        // create
        this.canvas = document.createElement( 'canvas' );

        // reference 2d rendering context
        this.canvasContext = this.canvas.getContext( '2d' );

        // sharp images please!
        this.canvasContext.imageSmoothingEnabled = false;

        // append to body
        document.body.appendChild( this.canvas );
    }

    /** ************************************************************************************************************
        *   Updates the canvas dimensions according to current screen size.
        ***************************************************************************************************************/
    public updateDimensions() : void
    {
        // get inner window dimensions
        const windowWidth  :number = window.innerWidth;
        const windowHeight :number = window.innerHeight;

        // calculate scaling factors X and Y
        const canvasScaleX :number = ( windowWidth  / ninjas.SettingEngine.CANVAS_MIN_WIDTH  );
        const canvasScaleY :number = ( windowHeight / ninjas.SettingEngine.CANVAS_MIN_HEIGHT );

        // pick smallest canvas scaling factor - lower clip to 1.0
        this.canvasScale  = Math.min( canvasScaleX, canvasScaleY );
        this.canvasScale  = Math.max( this.canvasScale, 1.0 );

        // remember target canvas size
        this.canvasWidth  = ninjas.SettingEngine.CANVAS_MIN_WIDTH;
        this.canvasHeight = ninjas.SettingEngine.CANVAS_MIN_HEIGHT;

        // set physical canvas element size
        this.canvasPhysicalWidth  = ( ninjas.SettingEngine.CANVAS_MIN_WIDTH  * this.canvasScale );
        this.canvasPhysicalHeight = ( ninjas.SettingEngine.CANVAS_MIN_HEIGHT * this.canvasScale );

        if ( ninjas.SettingEngine.NO_CANVAS_SCALING )
        {
            this.canvasScale  = 1.0;
            this.canvasScale  = 1.0;
            this.canvasWidth  = windowWidth;
            this.canvasHeight = windowHeight;
            this.canvasPhysicalWidth  = windowWidth;
            this.canvasPhysicalHeight = windowHeight;
        }

        // assign physical dimensions to canvas
        this.canvas.width  = this.canvasPhysicalWidth;
        this.canvas.height = this.canvasPhysicalHeight;

        // apply canvas scaling last
        this.canvasContext.scale( this.canvasScale, this.canvasScale );

        ninjas.Debug.canvas.log(
            'Updated canvas dimensions to ['
                + String( this.canvasWidth  )
                + ']x['
                + String( this.canvasHeight )
                + '] scaling ['
                + String( canvasScaleX )
                + ']x['
                + String( canvasScaleY )
                + '] min ['
                + String( this.canvasScale )
                + ']'
        );
    }

    /** ************************************************************************************************************
        *   Returns the current canvas width.
        *
        *   @return Current canvas width.
        ***************************************************************************************************************/
    public getWidth() : number
    {
        return this.canvasWidth;
    }

    /** ************************************************************************************************************
        *   Returns the current canvas height.
        *
        *   @return Current canvas height.
        ***************************************************************************************************************/
    public getHeight() : number
    {
        return this.canvasHeight;
    }

    /** ************************************************************************************************************
        *   Returns the physical canvas width.
        *
        *   @return Current physical canvas width.
        ***************************************************************************************************************/
    public getPhysicalWidth() : number
    {
        return this.canvasPhysicalWidth;
    }

    /** ************************************************************************************************************
        *   Returns the physical canvas height.
        *
        *   @return Current physical canvas height.
        ***************************************************************************************************************/
    public getPhysicalHeight() : number
    {
        return this.canvasPhysicalHeight;
    }

    /** ************************************************************************************************************
        *   Returns the current canvas scaling (X and Y).
        *
        *   @return Current canvas scaling.
        ***************************************************************************************************************/
    public getScale() : number
    {
        return this.canvasScale;
    }

    /** ************************************************************************************************************
        *   Returns the current canvas object.
        *
        *   @return The HTML canvas object.
        ***************************************************************************************************************/
    public getCanvas() : HTMLCanvasElement
    {
        return this.canvas;
    }

    /** ************************************************************************************************************
        *   Returns the current canvas rendering context.
        *
        *   @return The canvas 2d rendering context.
        ***************************************************************************************************************/
    public getCanvasContext() : CanvasRenderingContext2D
    {
        return this.canvasContext;
    }
}
