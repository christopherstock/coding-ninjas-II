import { DebugLog } from '../../base/DebugLog';
import { Main } from '../../base/Main';
import { ImageUtil } from '../../util/ImageUtil';

/** ********************************************************************************************************************
*   The system realizes dynamic image loading.
***********************************************************************************************************************/
export class ImageSystem {
    /** All image file names to load. */
    private     readonly            fileNames: string[]                       = null;
    /** All image file names to mirror. */
    private     readonly            mirroredFileNames: string[]                       = null;
    /** The method to invoke when all images are loaded. */
    private     readonly            onLoadComplete: ()=> void                     = null;

    /** The number of images to load. */
    private                         imagesToLoad: number                         = 0;
    /** The number of currently loaded images. */
    private                         loadedImageCount: number                         = 0;

    /** The number of images that need to be mirrored. */
    private                         imagesToMirrorCount: number                         = 0;
    /** The number of currently mirrored images. */
    private                         mirroredImageCount: number                         = 0;

    /** All loaded image objects. */
    private                         originalImages: HTMLImageElement[]             = [];
    /** All loaded and mirrored image objects. */
    private                         mirroredImages: HTMLImageElement[]             = [];

    /** ****************************************************************************************************************
    *   Preloads all images into memory.
    *
    *   @param fileNames         The names of all image files to load.
    *   @param mirroredFileNames The names of all mirrored image files to load.
    *   @param onLoadComplete    The method to invoke when all image files are loaded.
    *******************************************************************************************************************/
    public constructor(fileNames: string[], mirroredFileNames: string[], onLoadComplete: ()=> void) {
        this.fileNames         = fileNames;
        this.mirroredFileNames = mirroredFileNames;
        this.onLoadComplete    = onLoadComplete;
    }

    /** ****************************************************************************************************************
    *   Returns the image with the specified id.
    *
    *   @param id The id of the image to receive.
    *
    *   @throws Error if the id doesn't exist.
    *******************************************************************************************************************/
    public getImage(id: string): HTMLImageElement {
        if (!this.originalImages[ id ]) {
            throw new Error('The image id [' + id + '] doesn\'t exist in the image array stack.');
        }

        return this.originalImages[ id ];
    }

    /** ****************************************************************************************************************
    *   Returns the mirrored image with the specified id.
    *
    *   @param id The id of the mirrored image to receive.
    *******************************************************************************************************************/
    public getMirroredImage(id: string): HTMLImageElement {
        return this.mirroredImages[ id ];
    }

    /** ****************************************************************************************************************
    *   Loads all specified image files into system memory.
    *******************************************************************************************************************/
    public loadImages(): void {
        DebugLog.image.log('Loading [' + String(this.fileNames.length) + '] images');

        // load all images
        this.imagesToLoad = this.fileNames.length;
        for (const fileName of this.fileNames) {
            DebugLog.image.log(' Loading Image [' + fileName + ']');

            this.originalImages[ fileName ]        = new Image();
            this.originalImages[ fileName ].src    = fileName;
            this.originalImages[ fileName ].onload = (event: Event): void => { this.onLoadImage(event); };
        }
    }

    /** ****************************************************************************************************************
    *   Mirrors all specified image files in system memory.
    *******************************************************************************************************************/
    public mirrorImages(): void {
        DebugLog.image.log('Mirroring [' + String(this.mirroredFileNames.length) + '] images');

        // mirror determined images
        this.imagesToMirrorCount = this.mirroredFileNames.length;
        for (const mirroredFileName of this.mirroredFileNames) {
            this.mirroredImages[ mirroredFileName ] = ImageUtil.flipImageHorizontal(
                this.originalImages[ mirroredFileName ],
                () => { this.onMirrorImage(); }
            );
            DebugLog.image.log(' Completed Mirroring Image [' + mirroredFileName + ']');
        }
    }

    /** ****************************************************************************************************************
    *   Delivers an associated array with all images where the src is the key.
    *
    *   @return An associated array of all images. Source attribute is the key.
    *******************************************************************************************************************/
    public getAll(): HTMLImageElement[] {
        const ret: HTMLImageElement[] = [];

        for (const fileName of this.fileNames) {
            ret[ this.getImage(fileName).src ] = this.getImage(fileName);
        }

        for (const mirroredFileName of this.mirroredFileNames) {
            ret[ this.getMirroredImage(mirroredFileName).src ] = this.getMirroredImage(mirroredFileName);
        }

        return ret;
    }

    /** ****************************************************************************************************************
    *   Being invoked when one image was loaded completely.
    *
    *   @param event The according image event.
    *******************************************************************************************************************/
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private onLoadImage(event: Event): void {
        Main.game.engine.preloader.setLoadingPercentage(
            5 + (50 * this.loadedImageCount / this.imagesToLoad));

        if (++this.loadedImageCount === this.imagesToLoad) {
            DebugLog.image.log('All [' + String(this.imagesToLoad) + '] images loaded');

            this.mirrorImages();
        }
    }

    /** ****************************************************************************************************************
    *   Being invoked when one image was mirrored.
    *******************************************************************************************************************/
    private onMirrorImage(): void {
        Main.game.engine.preloader.setLoadingPercentage(
            55 + (20 * this.mirroredImageCount / this.imagesToMirrorCount)
        );

        if (++this.mirroredImageCount === this.imagesToMirrorCount) {
            DebugLog.image.log('All [' + String(this.imagesToMirrorCount) + '] images mirrored');

            this.onLoadComplete();
        }
    }
}
