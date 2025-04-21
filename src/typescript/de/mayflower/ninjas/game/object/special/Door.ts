import * as matter from 'matter-js';
import * as ninjas from '../../../ninjas';

/** ********************************************************************************************************************
*   Represents a non-colliding decoration.
***********************************************************************************************************************/
export class Door extends ninjas.Decoration
{
    private action: ninjas.GameAction = null;

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
        y                   :number,
        action              :ninjas.GameAction
    )
    {
        super
        (
            shape,
            spriteTemplate,
            x,
            y
        );

        this.action = action;
    }

    /** ****************************************************************************************************************
    *   Renders this door.
    *******************************************************************************************************************/
    public render() : void
    {
        super.render();
    }

    /** ****************************************************************************************************************
    *   Renders this site trigger.
    *******************************************************************************************************************/
    public checkPlayerInteraction() : boolean
    {
        const doorActivated: boolean = matter.Bounds.overlaps( this.shape.body.bounds, ninjas.Main.game.level.player.shape.body.bounds );

        if (doorActivated) {
            ninjas.Debug.init.log( 'Resetting and switching to level 2' );

            console.log('door opens ..');
            this.action.data.targetLevel.playerStartX = this.action.data.playerStartX;
            this.action.data.targetLevel.playerInitialFacing = ninjas.Main.game.level.player.facing;

            ninjas.Main.game.resetAndLaunchLevel( this.action.data.targetLevel );
        }

        return doorActivated;
    }
}
