
    import * as ninjas from '../../ninjas';

    /** ****************************************************************************************************************
    *   The key system that manages all pressed keys.
    *******************************************************************************************************************/
    export class KeySystem
    {
        /** All 'pressed' information for all keys. */
        private             keysPressed         :boolean[]                  = [];
        /** All 'needs release' information for all keys. */
        private             keysNeedRelease     :boolean[]                  = [];

        /** ************************************************************************************************************
        *   Creates a new key system.
        ***************************************************************************************************************/
        public constructor()
        {
            window.addEventListener( 'keydown',     ( event :Event ) => { this.onKeyDown( event ); }, false );
            window.addEventListener( 'keyup',       ( event :Event ) => { this.onKeyUp(   event ); },   false );

            window.addEventListener( 'onkeydown',   ( event :Event ) => { this.onKeyDown( event ); }, false );
            window.addEventListener( 'onkeyup',     ( event :Event ) => { this.onKeyUp(   event ); },   false );
        }

        /** ************************************************************************************************************
        *   This method is always invoked by the system if a key is pressed.
        *
        *   @param event The system's propagated key event.
        ***************************************************************************************************************/
        public onKeyDown( event:Event ) : void
        {
            const keyCode :string = ( event as KeyboardEvent ).key;

            if ( !this.keysNeedRelease[ keyCode ] ) {
                this.keysPressed[ keyCode ] = true;

                ninjas.Debug.key.log( 'key pressed ['  + keyCode + ']' );
            }
        }

        /** ************************************************************************************************************
        *   This method is always invoked by the system if a key is released.
        *
        *   @param event The system's propagated key event.
        ***************************************************************************************************************/
        public onKeyUp( event:Event ) : void
        {
            const keyCode :string = ( event as KeyboardEvent ).key;

            this.keysPressed[     keyCode ] = false;
            this.keysNeedRelease[ keyCode ] = false;

            ninjas.Debug.key.log( 'key released ['  + keyCode + ']' );
        }

        /** ************************************************************************************************************
        *   Checks if the key with the given keyCode is currently pressed.
        *
        *   @param  keyCode The keyCode of the key to return pressed state.
        *
        *   @return         <code>true</code> if this key is currently pressed.
        *                   Otherwise <code>false</code>.
        ***************************************************************************************************************/
        public isPressed( keyCode:string ):boolean
        {
            return this.keysPressed[ keyCode ];
        }

        /** ************************************************************************************************************
        *   Flags that a key needs release before being able to be pressed again.
        *
        *   @param keyCode The keyCode of the key to mark as 'needs key release'.
        ***************************************************************************************************************/
        public setNeedsRelease( keyCode:string ) : void
        {
            this.keysNeedRelease[ keyCode ] = true;
            this.keysPressed[     keyCode ] = false;
        }

        /** ************************************************************************************************************
        *   Flags all keys as released.
        ***************************************************************************************************************/
        public releaseAllKeys() : void
        {
            this.keysPressed = [];
        }
    }
