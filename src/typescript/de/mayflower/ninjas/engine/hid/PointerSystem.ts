
    import * as ninjas from '../../ninjas';

    /** ****************************************************************************************************************
    *   The pointer system that manages all pointer interactions.
    *******************************************************************************************************************/
    export class PointerSystem
    {
        /** Indicates if the left canvas half is currently pointer pressed. */
        public              leftCanvasHalfPressed               :boolean            = false;
        /** Indicates if the right canvas half is currently pointer pressed. */
        public              rightCanvasHalfPressed              :boolean            = false;
        /** Indicates a canvas tab. */
        public              canvasTabbed                        :boolean            = false;

        /** ************************************************************************************************************
        *   Creates a new key system.
        ***************************************************************************************************************/
        public constructor()
        {
            ninjas.Debug.pointer.log( 'Setup pointer system' );

            const canvas:HTMLCanvasElement = ninjas.Main.game.engine.canvasSystem.getCanvas();

            canvas.addEventListener( 'onpointermove', ( event:Event ) => { this.onPointerMove( event ); }, false );
            canvas.addEventListener( 'onpointerdown', ( event:Event ) => { this.onPointerDown( event ); }, false );
            window.addEventListener( 'onpointerup',   ( event:Event ) => { this.onPointerUp(   event ); }, false );

            canvas.addEventListener( 'pointermove', ( event:Event ) => { this.onPointerMove( event ); }, false );
            canvas.addEventListener( 'pointerdown', ( event:Event ) => { this.onPointerDown( event ); }, false );
            window.addEventListener( 'pointerup',   ( event:Event ) => { this.onPointerUp(   event ); }, false );

            canvas.addEventListener( 'touchmove',   ( event:Event ) => { this.onTouchMove( event ); }, false );
            canvas.addEventListener( 'touchstart',  ( event:Event ) => { this.onTouchDown( event ); }, false );
            window.addEventListener( 'touchend',    ( event:Event ) => { this.onTouchUp(   event ); }, false );
        }

        /** ************************************************************************************************************
        *   This method is invoked when the pointer is moved.
        *
        *   @param event The system's propagated pointer event.
        ***************************************************************************************************************/
        public onPointerMove( event:Event ) : void
        {
            ninjas.Debug.pointer.log( 'pointer move' );

            event.preventDefault();
        }

        /** ************************************************************************************************************
        *   This method is invoked when the pointer is pressed.
        *
        *   @param event The system's propagated pointer event.
        ***************************************************************************************************************/
        public onPointerDown( event:any ) : void
        {
            ninjas.Debug.pointer.log( 'pointer down' );

            event.preventDefault();

            if ( ninjas.Main.game.level !== null )
            {
                const playerCenterX :number = (
                    ninjas.Main.game.level.player.shape.body.position.x
                ) - ninjas.Main.game.camera.getOffsetX();

                if ( event.clientX < playerCenterX )
                {
                    this.leftCanvasHalfPressed = true;
                    this.canvasTabbed           = true;
                }
                else
                {
                    this.rightCanvasHalfPressed = true;
                    this.canvasTabbed           = true;
                }
            }
        }

        /** ************************************************************************************************************
        *   This method is invoked when the pointer is released.
        *
        *   @param event The system's propagated pointer event.
        ***************************************************************************************************************/
        public onPointerUp( event:Event ) : void
        {
            ninjas.Debug.pointer.log( 'pointer up' );

            event.preventDefault();

            this.leftCanvasHalfPressed  = false;
            this.rightCanvasHalfPressed = false;
        }

        /** ************************************************************************************************************
        *   This method is invoked when the touch is moved.
        *
        *   @param event The system's propagated touch event.
        ***************************************************************************************************************/
        public onTouchMove( event:Event ) : void
        {
            ninjas.Debug.pointer.log( 'touch move' );

            event.preventDefault();
        }

        /** ************************************************************************************************************
        *   This method is invoked when the touch is pressed.
        *
        *   @param event The system's propagated touch  event.
        ***************************************************************************************************************/
        public onTouchDown( event:any ) : void
        {
            ninjas.Debug.pointer.log( 'touch down' );

            event.preventDefault();

            if ( ninjas.Main.game.level !== null )
            {
                const playerCenterX:number = (
                    ninjas.Main.game.level.player.shape.body.position.x
                ) - ninjas.Main.game.camera.getOffsetX();

                if ( event.touches[ 0 ].pageX < playerCenterX )
                {
                    this.leftCanvasHalfPressed = true;
                    this.canvasTabbed           = true;
                }
                else
                {
                    this.rightCanvasHalfPressed = true;
                    this.canvasTabbed           = true;
                }
            }
        }

        /** ************************************************************************************************************
        *   This method is invoked when the touch  is released.
        *
        *   @param event The system's propagated touch  event.
        ***************************************************************************************************************/
        public onTouchUp( event:Event ) : void
        {
            ninjas.Debug.pointer.log( 'touch  up' );

            event.preventDefault();

            this.leftCanvasHalfPressed  = false;
            this.rightCanvasHalfPressed = false;
        }
    }
