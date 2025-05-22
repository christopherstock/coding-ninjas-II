import { SettingDebug } from '../../base/SettingDebug';
import { DebugLog } from '../../base/DebugLog';
import { ImageUtil } from '../../util/ImageUtil';

/** ********************************************************************************************************************
*   Loads and manages all desired sounds.
***********************************************************************************************************************/
export class SoundSystem {
    /** All sound file names to load. */
    private     readonly        fileNames: string[]                       = null;
    /** The method to invoke when all sounds are loaded. */
    private     readonly        onLoadComplete: ()=> void                     = null;

    /** The number of currently loaded sounds. */
    private                     loadedSoundCount: number                         = 0;
    /** All loaded sound objects. */
    private                     sounds: HTMLAudioElement[]             = [];

    /** ****************************************************************************************************************
    *   Preloads all images into memory.
    *
    *   @param fileNames      The names of all image files to load.
    *   @param onLoadComplete The method to invoke when all image files are loaded.
    *******************************************************************************************************************/
    public constructor(fileNames: string[], onLoadComplete: ()=> void) {
        this.fileNames      = fileNames;
        this.onLoadComplete = onLoadComplete;
    }

    /** ****************************************************************************************************************
    *   Creates and plays a COPY of the specified audio object.
    *
    *   @param id   The ID of the audio object to play.
    *   @param loop Specifies if playback for this sound should be repeated infinitely.
    *
    *   @return A reference to the instanced audio clip.
    *******************************************************************************************************************/
    public playSound(id: string, loop: boolean = false): HTMLAudioElement {
        if (!SettingDebug.DISABLE_SOUNDS) {
            if (this.sounds[ id ] !== null) {
                const clipClone: HTMLAudioElement = this.sounds[ id ].cloneNode(true);
                clipClone.loop = loop;
                clipClone.play().then(
                    () => {
                        // console.log('playing!');
                    }
                ).catch(
                    (e: Error) => {
                        // console.log('NOT playing!');
                    }
                );

                return clipClone;
            }
        }

        return null;
    }

    /** ****************************************************************************************************************
    *   Loads all specified sound files into system memory.
    *******************************************************************************************************************/
    public loadSounds(): void {
        DebugLog.sound.log('Preloading [' + String(this.fileNames.length) + '] sounds');

        if (this.fileNames.length === 0) {
            this.onLoadComplete();
        }

        for (const fileName of this.fileNames) {
            try {
                this.sounds[ fileName ]              = new Audio();
                this.sounds[ fileName ].src          = fileName;
                this.sounds[ fileName ].onloadeddata = (): void => { this.onLoadSound(); };
                this.sounds[ fileName ].onerror      = (): void => { this.onLoadSoundError(); };

                if (ImageUtil.isMac()) {
                    this.onLoadSound();
                }
            } catch (e) {
                DebugLog.sound.log('Error on creating Audio element: ' + String(e.message));
                this.onLoadSoundError();
            }
        }
    }

    /** ****************************************************************************************************************
    *   Being invoked when one sound was loaded completely.
    *******************************************************************************************************************/
    private onLoadSound(): void {
        if (++this.loadedSoundCount >= this.fileNames.length) {
            DebugLog.sound.log('All [' + String(this.fileNames.length) + '] sounds loaded');

            this.onLoadComplete();
        }
    }

    /** ****************************************************************************************************************
    *   Being invoked when one sound was loaded completely.
    *******************************************************************************************************************/
    private onLoadSoundError(): void {
        DebugLog.sound.log('ERROR on loading audio element!');

        this.onLoadSound();
    }
}
