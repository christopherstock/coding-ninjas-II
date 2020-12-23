
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
            let   canvasWidth  :number = 0;
            let   canvasHeight :number = 0;
            let   canvasScaleX :number = 0;
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

            // calculate canvas scaling
            this.canvasScale  = Math.min( canvasScaleX, canvasScaleY );

            // remember target canvas size
            this.canvasWidth  = ninjas.SettingEngine.CANVAS_MIN_WIDTH;
            this.canvasHeight = ninjas.SettingEngine.CANVAS_MIN_HEIGHT;

            // set physical canvas element size
            this.canvas.width  = ( ninjas.SettingEngine.CANVAS_MIN_WIDTH  * this.canvasScale );
            this.canvas.height = ( ninjas.SettingEngine.CANVAS_MIN_HEIGHT * this.canvasScale );

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
