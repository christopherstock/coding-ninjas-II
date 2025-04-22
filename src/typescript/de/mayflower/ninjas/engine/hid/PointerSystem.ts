import {Debug} from "../../base/Debug";
import {Main} from "../../base/Main";

/** ********************************************************************************************************************
*   The pointer system that manages all pointer interactions.
***********************************************************************************************************************/
export class PointerSystem
{
    /** Indicates if the left canvas half is currently pointer pressed. */
    public              leftCanvasHalfPressed               :boolean            = false;
    /** Indicates if the right canvas half is currently pointer pressed. */
    public              rightCanvasHalfPressed              :boolean            = false;
    /** Indicates a canvas tab. */
    public              canvasTabbed                        :boolean            = false;

    /** ****************************************************************************************************************
    *   Creates a new key system.
    *******************************************************************************************************************/
    public constructor()
    {
        Debug.pointer.log( 'Setup pointer system' );

        const canvas:HTMLCanvasElement = Main.game.engine.canvasSystem.getCanvas();

        // eslint-disable-next-line max-len
        canvas.addEventListener( 'onpointermove', ( event:Event ) => { this.onPointerMove( event as PointerEvent ); }, false );
        // eslint-disable-next-line max-len
        canvas.addEventListener( 'onpointerdown', ( event:Event ) => { this.onPointerDown( event as PointerEvent ); }, false );
        // eslint-disable-next-line max-len
        window.addEventListener( 'onpointerup',   ( event:Event ) => { this.onPointerUp(   event as PointerEvent ); }, false );

        canvas.addEventListener( 'pointermove', ( event:PointerEvent ) => { this.onPointerMove( event ); }, false );
        canvas.addEventListener( 'pointerdown', ( event:PointerEvent ) => { this.onPointerDown( event ); }, false );
        window.addEventListener( 'pointerup',   ( event:PointerEvent ) => { this.onPointerUp(   event ); }, false );

        canvas.addEventListener( 'touchmove',   ( event:TouchEvent ) => { this.onTouchMove( event ); }, false );
        canvas.addEventListener( 'touchstart',  ( event:TouchEvent ) => { this.onTouchDown( event ); }, false );
        window.addEventListener( 'touchend',    ( event:TouchEvent ) => { this.onTouchUp(   event ); }, false );
    }

    /** ****************************************************************************************************************
    *   This method is invoked when the pointer is moved.
    *
    *   @param event The system's propagated pointer event.
    *******************************************************************************************************************/
    public onPointerMove( event:PointerEvent ) : void
    {
        Debug.pointer.log( 'pointer move' );

        event.preventDefault();
    }

    /** ****************************************************************************************************************
    *   This method is invoked when the pointer is pressed.
    *
    *   @param event The system's propagated pointer event.
    *******************************************************************************************************************/
    public onPointerDown( event:PointerEvent ) : void
    {
        Debug.pointer.log( 'pointer down' );

        event.preventDefault();

        if ( Main.game.level !== null )
        {
            const playerCenterX :number = (
                Main.game.level.player.shape.body.position.x
            ) - Main.game.camera.getOffsetX();

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

    /** ****************************************************************************************************************
    *   This method is invoked when the pointer is released.
    *
    *   @param event The system's propagated pointer event.
    *******************************************************************************************************************/
    public onPointerUp( event:PointerEvent ) : void
    {
        Debug.pointer.log( 'pointer up' );

        event.preventDefault();

        this.leftCanvasHalfPressed  = false;
        this.rightCanvasHalfPressed = false;
    }

    /** ****************************************************************************************************************
    *   This method is invoked when the touch is moved.
    *
    *   @param event The system's propagated touch event.
    *******************************************************************************************************************/
    public onTouchMove( event:TouchEvent ) : void
    {
        Debug.pointer.log( 'touch move' );

        event.preventDefault();
    }

    /** ****************************************************************************************************************
    *   This method is invoked when the touch is pressed.
    *
    *   @param event The system's propagated touch  event.
    *******************************************************************************************************************/
    public onTouchDown( event:TouchEvent ) : void
    {
        Debug.pointer.log( 'touch down' );

        event.preventDefault();

        if ( Main.game.level !== null )
        {
            const playerCenterX:number = (
                Main.game.level.player.shape.body.position.x
            ) - Main.game.camera.getOffsetX();

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

    /** ****************************************************************************************************************
    *   This method is invoked when the touch  is released.
    *
    *   @param event The system's propagated touch  event.
    *******************************************************************************************************************/
    public onTouchUp( event:TouchEvent ) : void
    {
        Debug.pointer.log( 'touch  up' );

        event.preventDefault();

        this.leftCanvasHalfPressed  = false;
        this.rightCanvasHalfPressed = false;
    }
}
