/* eslint-disable max-len */

import { GroundImageSet } from '../engine/ui/GroundImageSet';
import { ImageData } from './ImageData';

/** ********************************************************************************************************************
*   All concrete tilesets the game makes use of.
***********************************************************************************************************************/
export class GroundData {
    /** Tileset 'dark ground'. */
    public      static  TILESET_DARK_GROUND: GroundImageSet             = new GroundImageSet
    (
        ImageData.GROUND_DARK_SOLID_LEFT,
        ImageData.GROUND_DARK_SOLID_RIGHT,
        ImageData.GROUND_DARK_SOLID_TOP,
        ImageData.GROUND_DARK_SOLID_BOTTOM,
        ImageData.GROUND_DARK_SOLID_LEFT_TOP,
        ImageData.GROUND_DARK_SOLID_RIGHT_TOP,
        ImageData.GROUND_DARK_SOLID_LEFT_BOTTOM,
        ImageData.GROUND_DARK_SOLID_RIGHT_BOTTOM,
        ImageData.GROUND_DARK_SOLID_CENTER,
        ImageData.GROUND_DARK_SOLID_ASCENDING_TOP,
        ImageData.GROUND_DARK_SOLID_DESCENDING_TOP,
        ImageData.GROUND_DARK_SOLID_ASCENDING_LEFT_TOP,
        ImageData.GROUND_DARK_SOLID_DESCENDING_LEFT_TOP,
        ImageData.GROUND_DARK_SOLID_ASCENDING_RIGHT_TOP,
        ImageData.GROUND_DARK_SOLID_DESCENDING_RIGHT_TOP,
        ImageData.GROUND_DARK_FLYING_LEFT,
        ImageData.GROUND_DARK_FLYING_CENTER,
        ImageData.GROUND_DARK_FLYING_RIGHT,
        ImageData.GROUND_DARK_FLYING_ASCENDING_LEFT,
        ImageData.GROUND_DARK_FLYING_ASCENDING_CENTER,
        ImageData.GROUND_DARK_FLYING_ASCENDING_RIGHT,
        ImageData.GROUND_DARK_FLYING_DESCENDING_LEFT,
        ImageData.GROUND_DARK_FLYING_DESCENDING_CENTER,
        ImageData.GROUND_DARK_FLYING_DESCENDING_RIGHT
    );

    /** Tileset 'snow'. */
    public      static  TILESET_SNOW: GroundImageSet             = new GroundImageSet
    (
        ImageData.GROUND_SNOW_SOLID_LEFT,
        ImageData.GROUND_SNOW_SOLID_RIGHT,
        ImageData.GROUND_SNOW_SOLID_TOP,
        ImageData.GROUND_SNOW_SOLID_BOTTOM,
        ImageData.GROUND_SNOW_SOLID_LEFT_TOP,
        ImageData.GROUND_SNOW_SOLID_RIGHT_TOP,
        ImageData.GROUND_SNOW_SOLID_LEFT_BOTTOM,
        ImageData.GROUND_SNOW_SOLID_RIGHT_BOTTOM,
        ImageData.GROUND_SNOW_SOLID_CENTER,
        ImageData.GROUND_SNOW_SOLID_ASCENDING_TOP,
        ImageData.GROUND_SNOW_SOLID_DESCENDING_TOP,
        ImageData.GROUND_DARK_SOLID_ASCENDING_LEFT_TOP,
        ImageData.GROUND_DARK_SOLID_DESCENDING_LEFT_TOP,
        ImageData.GROUND_DARK_SOLID_ASCENDING_RIGHT_TOP,
        ImageData.GROUND_DARK_SOLID_DESCENDING_RIGHT_TOP,
        ImageData.GROUND_DARK_FLYING_LEFT,
        ImageData.GROUND_DARK_FLYING_CENTER,
        ImageData.GROUND_DARK_FLYING_RIGHT,
        ImageData.GROUND_DARK_FLYING_ASCENDING_LEFT,
        ImageData.GROUND_DARK_FLYING_ASCENDING_CENTER,
        ImageData.GROUND_DARK_FLYING_ASCENDING_RIGHT,
        ImageData.GROUND_DARK_FLYING_DESCENDING_LEFT,
        ImageData.GROUND_DARK_FLYING_DESCENDING_CENTER,
        ImageData.GROUND_DARK_FLYING_DESCENDING_RIGHT
    );
}
