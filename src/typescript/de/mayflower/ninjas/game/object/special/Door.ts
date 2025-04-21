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
    *   @param action              The action to trigger on door interaction.
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
        const doorActivated: boolean = matter.Bounds.overlaps(
            this.shape.body.bounds,
            ninjas.Main.game.level.player.shape.body.bounds
        );

        if (doorActivated) {
            this.action.data.targetLevel.playerStartX = this.action.data.playerStartX;
            this.action.data.targetLevel.playerInitialFacing = ninjas.Main.game.level.player.facing;

            ninjas.Main.game.resetAndLaunchLevel( this.action.data.targetLevel );
        }

        return doorActivated;
    }
}
