
    /* eslint-disable max-len */

    import * as ninjas from '../ninjas';

    /** ****************************************************************************************************************
    *   All concrete tilesets the game makes use of.
    *******************************************************************************************************************/
    export class GroundData
    {
        /** Tileset 'dark ground'. */
        public      static  TILESET_DARK_GROUND                         :ninjas.GroundImageSet             = new ninjas.GroundImageSet
        (
            ninjas.ImageData.IMAGE_GROUND_SOLID_LEFT,
            ninjas.ImageData.IMAGE_GROUND_SOLID_RIGHT,
            ninjas.ImageData.IMAGE_GROUND_SOLID_TOP,
            ninjas.ImageData.IMAGE_GROUND_SOLID_BOTTOM,
            ninjas.ImageData.IMAGE_GROUND_SOLID_LEFT_TOP,
            ninjas.ImageData.IMAGE_GROUND_SOLID_RIGHT_TOP,
            ninjas.ImageData.IMAGE_GROUND_SOLID_LEFT_BOTTOM,
            ninjas.ImageData.IMAGE_GROUND_SOLID_RIGHT_BOTTOM,
            ninjas.ImageData.IMAGE_GROUND_SOLID_CENTER,
            ninjas.ImageData.IMAGE_GROUND_SOLID_ASCENDING_TOP,
            ninjas.ImageData.IMAGE_GROUND_SOLID_DESCENDING_TOP,
            ninjas.ImageData.IMAGE_GROUND_SOLID_ASCENDING_LEFT_TOP,
            ninjas.ImageData.IMAGE_GROUND_SOLID_DESCENDING_LEFT_TOP,
            ninjas.ImageData.IMAGE_GROUND_SOLID_ASCENDING_RIGHT_TOP,
            ninjas.ImageData.IMAGE_GROUND_SOLID_DESCENDING_RIGHT_TOP,
            ninjas.ImageData.IMAGE_GROUND_FLYING_LEFT,
            ninjas.ImageData.IMAGE_GROUND_FLYING_CENTER,
            ninjas.ImageData.IMAGE_GROUND_FLYING_RIGHT,
            ninjas.ImageData.IMAGE_GROUND_FLYING_ASCENDING_LEFT,
            ninjas.ImageData.IMAGE_GROUND_FLYING_ASCENDING_CENTER,
            ninjas.ImageData.IMAGE_GROUND_FLYING_ASCENDING_RIGHT,
            ninjas.ImageData.IMAGE_GROUND_FLYING_DESCENDING_LEFT,
            ninjas.ImageData.IMAGE_GROUND_FLYING_DESCENDING_CENTER,
            ninjas.ImageData.IMAGE_GROUND_FLYING_DESCENDING_RIGHT
        );
    }