import * as matter from 'matter-js';
import { Decoration } from '../deco/Decoration';
import { GameAction } from '../GameAction';
import { Shape } from '../../../engine/shape/Shape';
import { SpriteTemplate } from '../../../engine/ui/SpriteTemplate';
import { Main } from '../../../base/Main';

/** ********************************************************************************************************************
*   Represents a non-colliding decoration.
***********************************************************************************************************************/
export class Door extends Decoration {
    private readonly action: GameAction = null;

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
    public constructor(
        shape: Shape,
        spriteTemplate: SpriteTemplate,
        x: number,
        y: number,
        action: GameAction
    ) {
        super(
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
    public render(): void {
        super.render();
    }

    /** ****************************************************************************************************************
    *   Renders this site trigger.
    *******************************************************************************************************************/
    public checkInteraction(): boolean {
        const doorActivated: boolean = matter.Bounds.overlaps(
            this.shape.body.bounds,
            Main.game.level.player.shape.body.bounds
        );

        if (doorActivated) {
            Main.game.startBlendPanelAnim();
            Main.game.resetAndLaunchLevel(
                this.action.data.targetLevel,
                this.action.data.playerStartX,
                this.action.data.playerStartY,
                this.action.data.playerInitFacing !== undefined
                    ? this.action.data.playerInitFacing
                    : Main.game.level.player.facing
            );
        }

        return doorActivated;
    }
}
