import { ImageSystem } from '../io/ImageSystem';
import { SettingGame } from '../../setting/SettingGame';
import { Main } from '../../base/Main';
import { MirrorImage } from './MirrorImage';
import { LoopSprite } from './LoopSprite';
import { RandomFrames } from './RandomFrames';

/** ********************************************************************************************************************
*   The sprite template that specifies images and their meta information.
***********************************************************************************************************************/
export class SpriteTemplate {
    /** All image ids this sprite consists of. */
    public                  imageIds: string[]               = null;
    /** The number of ticks between frame changes. */
    public                  ticksBetweenFrames: number                 = 0;
    /** Specifies if all frames in this sprite should be mirrored. */
    public                  mirrored: MirrorImage            = null;
    /** Specifies if the frame animation should be repeated infinitely. */
    public                  loop: LoopSprite             = null;
    /** Specifies random behaviour in frame assignment. */
    public                  randomFrames: RandomFrames           = null;
    /** The scale factor for drawing this sprite. Defaults to 1.0. */
    public                  scale: number                 = 0;

    /** Flags if this sprite has only one frame. */
    public                  singleFramed: boolean                = false;

    /** The width of all images in this sprite. */
    public                  width: number                 = 0;
    /** The height of all images in this sprite. */
    public                  height: number                 = 0;

    /** ****************************************************************************************************************
    *   Creates a new sprite.
    *
    *   @param imageIds           All image ids this sprite consists of.
    *   @param ticksBetweenFrames The number of ticks to delay until the frame is changed.
    *   @param mirrored           Specifies if all frames in this sprite should be mirrored.
    *   @param loop               Specifies if the frame animation should be repeated infinitely.
    *   @param randomFrames       Specifies if this template should use a random frame sheme.
    *   @param scale              Specifies the scaling factor for drawing this sprite.
    *******************************************************************************************************************/
    public constructor(
        imageIds: string[],
        ticksBetweenFrames: number,
        mirrored: MirrorImage,
        loop: LoopSprite,
        randomFrames: RandomFrames,
        scale: number
    ) {
        this.imageIds           = imageIds;
        this.ticksBetweenFrames = ticksBetweenFrames;
        this.mirrored           = mirrored;
        this.loop               = loop;
        this.randomFrames       = randomFrames;
        this.scale              = scale;

        this.singleFramed       = (this.imageIds.length === 1);

        if (this.imageIds.length === 0) {
            throw new Error('Fatal! Trying to construct empty sprite!');
        }
    }

    /** ****************************************************************************************************************
    *   Returns the sprite scale factor.
    *
    *   @return The sprite scale factor. Default is 1.0, which is 'no scale'.
    *******************************************************************************************************************/
    public getScale(): number {
        return this.scale;
    }

    /** ****************************************************************************************************************
    *   Assigns the image dimensions of the first frame for this sprite template.
    *
    *   @param imageSystem The image system to use.
    *******************************************************************************************************************/
    public assignImageSizes(imageSystem: ImageSystem): void {
        this.width  = imageSystem.getImage(this.imageIds[ 0 ]).width;
        this.height = imageSystem.getImage(this.imageIds[ 0 ]).height;

        // browse all frames and alert on differing dimensions
        for (const imageId of this.imageIds) {
            if (
                this.width  !== imageSystem.getImage(imageId).width
                || this.height !== imageSystem.getImage(imageId).height
            ) {
                throw new Error('Differing sprite frame size detected in image id [' + imageId + ']');
            }
        }
    }

    /** ****************************************************************************************************************
    *   Creates a single framed sprite template of the specified image.
    *
    *   @param imageId The id of the image to use for this sprite.
    *
    *   @return The SpriteTemplate from the specified image.
    *******************************************************************************************************************/
    public static createFromSingleImage(imageId: string): SpriteTemplate {
        const spriteTemplate: SpriteTemplate = new SpriteTemplate(
            [ imageId ],
            0,
            MirrorImage.NO,
            LoopSprite.NO,
            RandomFrames.NO,
            SettingGame.DEFAULT_SPRITE_SCALE
        );

        spriteTemplate.width  = Main.game.engine.imageSystem.getImage(imageId).width;
        spriteTemplate.height = Main.game.engine.imageSystem.getImage(imageId).height;

        return spriteTemplate;
    }
}
