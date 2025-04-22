import {GameObject} from "../GameObject";
import {Shape} from "../../../engine/shape/Shape";
import {SpriteTemplate} from "../../../engine/ui/SpriteTemplate";
import {SettingMatter} from "../../../setting/SettingMatter";

/** ********************************************************************************************************************
*   Represents a non-colliding decoration.
***********************************************************************************************************************/
export class Decoration extends GameObject
{
    /** ****************************************************************************************************************
    *   Creates a new decoration.
    *
    *   @param shape          The shape for this object.
    *   @param spriteTemplate The sprite template to use.
    *   @param x              Startup position X.
    *   @param y              Startup position Y.
    *******************************************************************************************************************/
    public constructor( shape:Shape, spriteTemplate:SpriteTemplate, x:number, y:number  )
    {
        super
        (
            shape,
            spriteTemplate,
            x,
            y
        );

        this.shape.body.collisionFilter = SettingMatter.COLLISION_GROUP_NON_COLLIDING_DECO;
    }
}
