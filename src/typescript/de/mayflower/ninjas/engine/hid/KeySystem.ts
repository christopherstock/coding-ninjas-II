import { Debug } from '../../base/Debug';

/** ********************************************************************************************************************
*   The key system that manages all pressed keys.
***********************************************************************************************************************/
export class KeySystem {
    /** All 'pressed' information for all keys. */
    private             keysPressed: boolean[]                  = [];
    /** All 'needs release' information for all keys. */
    private             keysNeedRelease: boolean[]                  = [];

    /** ****************************************************************************************************************
    *   Creates a new key system.
    *******************************************************************************************************************/
    public constructor() {
        window.addEventListener( 'keydown',     ( event: Event ) => { this.onKeyDown( event ); }, false );
        window.addEventListener( 'keyup',       ( event: Event ) => { this.onKeyUp(   event ); }, false );

        window.addEventListener( 'onkeydown',   ( event: Event ) => { this.onKeyDown( event ); }, false );
        window.addEventListener( 'onkeyup',     ( event: Event ) => { this.onKeyUp(   event ); }, false );
    }

    /** ****************************************************************************************************************
    *   This method is always invoked by the system if a key is pressed.
    *
    *   @param event The system's propagated key event.
    *******************************************************************************************************************/
    public onKeyDown( event: Event ): void {
        // event.preventDefault();

        const keyID: string = ( event as KeyboardEvent ).key.toLowerCase();

        if ( !this.keysNeedRelease[ keyID ] && !this.keysPressed[ keyID ] ) {
            this.keysPressed[ keyID ] = true;

            Debug.key.log( 'key pressed ['  + keyID + ']' );
        }
    }

    /** ****************************************************************************************************************
    *   This method is always invoked by the system if a key is released.
    *
    *   @param event The system's propagated key event.
    *******************************************************************************************************************/
    public onKeyUp( event: Event ): void {
        // event.preventDefault();

        const keyID: string = ( event as KeyboardEvent ).key.toLowerCase();

        this.keysPressed[     keyID ] = false;
        this.keysNeedRelease[ keyID ] = false;

        Debug.key.log( 'key released ['  + keyID + ']' );
    }

    /** ****************************************************************************************************************
    *   Checks if the key with the given keyCode is currently pressed.
    *
    *   @param  keyCode The keyCode of the key to return pressed state.
    *
    *   @return         <code>true</code> if this key is currently pressed.
    *                   Otherwise <code>false</code>.
    *******************************************************************************************************************/
    public isPressed( keyCode: string ): boolean {
        return this.keysPressed[ keyCode.toLowerCase() ];
    }

    /** ****************************************************************************************************************
    *   Flags that a key needs release before being able to be pressed again.
    *
    *   @param keyCode The keyCode of the key to mark as 'needs key release'.
    *******************************************************************************************************************/
    public setNeedsRelease( keyCode: string ): void {
        this.keysNeedRelease[ keyCode.toLowerCase() ] = true;
        this.keysPressed[     keyCode.toLowerCase() ] = false;
    }

    /** ****************************************************************************************************************
    *   Flags all keys as released.
    *******************************************************************************************************************/
    public releaseAllKeys(): void {
        this.keysPressed = [];
    }
}
