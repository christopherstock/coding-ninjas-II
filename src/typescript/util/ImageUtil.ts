import { MathUtil } from './MathUtil';

/** ********************************************************************************************************************
*   Offers additional Input/Output functionality.
***********************************************************************************************************************/
export class ImageUtil {
    /** ****************************************************************************************************************
    *   Flips an image horizontally.
    *
    *   @param original      The image to flip horizontally.
    *   @param onLoadCallack The function to invoke when the target image is mirrored.
    *
    *   @return The newly created but not already loaded mirrored image.
    *******************************************************************************************************************/
    public static flipImageHorizontal(original: HTMLImageElement, onLoadCallack: ()=> void): HTMLImageElement {
        const canvas: HTMLCanvasElement = document.createElement('canvas');
        canvas.width  = original.width;
        canvas.height = original.height;

        const context: CanvasRenderingContext2D = canvas.getContext('2d');
        context.scale(-1, 1);
        context.drawImage(original, -original.width, 0);

        const target: HTMLImageElement = new Image();
        target.crossOrigin = 'anonymous';
        target.src = canvas.toDataURL();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        target.onload = (event: Event): void => { onLoadCallack(); };

        return target;
    }

    /** ****************************************************************************************************************
    *   Flips an image horizontally.
    *
    *   @param original      The image to flip horizontally.
    *   @param onLoadCallack The function to invoke when the target image is mirrored.
    *
    *   @return The newly created but not already loaded mirrored image.
    *******************************************************************************************************************/
    public static darkenImage(original: HTMLImageElement, onLoadCallack: ()=> void): HTMLImageElement {
        const DARKEN_FACTOR = String(MathUtil.getRandomInt(80, 95)) + '%';

        const canvas: HTMLCanvasElement = document.createElement('canvas');
        canvas.width  = original.width;
        canvas.height = original.height;

        const context: CanvasRenderingContext2D = canvas.getContext('2d');
        context.filter = 'brightness(' + DARKEN_FACTOR + ')';
        context.scale(1, 1);
        context.drawImage(original, 0, 0);

        const target: HTMLImageElement = new Image();
        target.crossOrigin = 'anonymous';
        target.src = canvas.toDataURL();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        target.onload = (event: Event): void => { onLoadCallack(); };

        return target;
    }
}
