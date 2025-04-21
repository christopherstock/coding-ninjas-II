import * as matter from 'matter-js';
import * as ninjas from '../../../ninjas';

/** ********************************************************************************************************************
*   Represents a non-colliding decoration.
***********************************************************************************************************************/
export class Door extends ninjas.Decoration
{
    /** ****************************************************************************************************************
    *   Creates a new Door.
    *
    *   @param shape               The shape for this object.
    *   @param spriteTemplate      The sprite template to use.
    *   @param x                   Startup position X.
    *   @param y                   Startup position Y.
    *   @param content             The site content to display on releasing this trigger.
    *   @param sitePanelAppearance The position for the site panel to appear.
    *******************************************************************************************************************/
    public constructor
    (
        shape               :ninjas.Shape,
        spriteTemplate      :ninjas.SpriteTemplate,
        x                   :number,
        y                   :number
    )
    {
        super
        (
            shape,
            spriteTemplate,
            x,
            y
        );
    }

    /** ****************************************************************************************************************
    *   Renders this door.
    *******************************************************************************************************************/
    public render() : void
    {
        super.render();

        // check if player collides with this trigger
        if ( this.checkPlayerCollision() )
        {
            console.log('player4 collisiuon');
        }
        else
        {
            console.log('NO player4 collisiuon');
        }
    }

    /** ****************************************************************************************************************
    *   Renders this site trigger.
    *******************************************************************************************************************/
    private checkPlayerCollision() : boolean
    {
        return (
            matter.Bounds.overlaps( this.shape.body.bounds, ninjas.Main.game.level.player.shape.body.bounds )
        );
    }
}
