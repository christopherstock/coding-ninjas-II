
import * as matter from 'matter-js';
import * as ninjas from '../../../ninjas';

/** ****************************************************************************************************************
    *   Represents a non-colliding decoration.
    *******************************************************************************************************************/
export class ParallaxDeco extends ninjas.Decoration
{
    /** The parallax ratio from this game object to the level width. Defaults to 1.0. */
    private     readonly        parallaxRatio           :number             = 0.0;

    /** ************************************************************************************************************
        *   Creates a new parallax decoration.
        *
        *   @param shape          The shape for this object.
        *   @param spriteTemplate The sprite template to use.
        *   @param x              Startup position X.
        *   @param y              Startup position Y.
        *   @param parallaxRatio  The parallax ratio from this game object to the level width. Defaults to 1.0.
        ***************************************************************************************************************/
    public constructor(
        shape:ninjas.Shape, spriteTemplate:ninjas.SpriteTemplate, x:number, y:number, parallaxRatio:number
    ) {
        super
        (
            shape,
            spriteTemplate,
            x,
            y
        );

        this.parallaxRatio = parallaxRatio;

        this.setVisible( false );
    }

    /** ************************************************************************************************************
        *   Renders this decoration.
        ***************************************************************************************************************/
    public render() : void
    {
        super.render();

        this.setVisible( true );

        this.setParallaxPosition();
    }

    /** ************************************************************************************************************
        *   Sets the current parallax position of this deco.
        ***************************************************************************************************************/
    private setParallaxPosition() : void
    {
        const levelWidth  :number = ninjas.Main.game.level.width;
        const levelHeight :number = ninjas.Main.game.level.height;

        const cameraOffsetX :number = ninjas.Main.game.camera.getOffsetX();
        const cameraOffsetY :number = ninjas.Main.game.camera.getOffsetY();

        const canvasWidth  :number = ninjas.Main.game.engine.canvasSystem.getWidth();
        const canvasHeight :number = ninjas.Main.game.engine.canvasSystem.getHeight();

        let imgOffsetX :number = (
            0 - ( this.shape.getWidth()  - canvasWidth  ) * cameraOffsetX / ( levelWidth  - canvasWidth  )
        );
        let imgOffsetY :number = (
            0 - ( this.shape.getHeight() - canvasHeight ) * cameraOffsetY / ( levelHeight - canvasHeight )
        );

        imgOffsetX *= this.parallaxRatio;
        imgOffsetY *= this.parallaxRatio;

        matter.Body.setPosition
        (
            this.shape.body,
            matter.Vector.create
            (
                imgOffsetX + cameraOffsetX + ( this.shape.getWidth()  / 2 ),
                imgOffsetY + cameraOffsetY + ( this.shape.getHeight() / 2 )
            )
        )
    }
}
