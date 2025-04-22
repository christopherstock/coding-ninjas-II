import * as matter from 'matter-js';
import { GameObject } from '../GameObject';
import { Shape } from '../../../engine/shape/Shape';
import { SpriteTemplate } from '../../../engine/ui/SpriteTemplate';
import { SettingMatter } from '../../../setting/SettingMatter';
import { Main } from '../../../base/Main';
import { Debug } from '../../../base/Debug';

/** ********************************************************************************************************************
*   Represents a pickable item.
***********************************************************************************************************************/
export class Item extends GameObject {
    /** Indicates if this item has been picked. */
    public          picked: boolean                        = null;

    /** ****************************************************************************************************************
    *   Creates a new item.
    *
    *   @param shape          The shape for this object.
    *   @param spriteTemplate The sprite template to use for this object.
    *   @param x              Startup position X.
    *   @param y              Startup position Y.
    *******************************************************************************************************************/
    public constructor( shape: Shape, spriteTemplate: SpriteTemplate, x: number, y: number ) {
        super(
            shape,
            spriteTemplate,
            x,
            y
        );

        this.shape.body.collisionFilter = SettingMatter.COLLISION_GROUP_NON_COLLIDING_ITEM;
    }

    /** ****************************************************************************************************************
    *   Renders this item.
    *******************************************************************************************************************/
    public render(): void {
        super.render();

        if ( !this.picked ) {
            this.checkPicked();
        }
    }

    /** ****************************************************************************************************************
    *   Checks if this item is picked up in this frame.
    *******************************************************************************************************************/
    private checkPicked(): void {
        if ( matter.Bounds.overlaps( this.shape.body.bounds, Main.game.level.player.shape.body.bounds ) ) {
            Debug.item.log( 'Player picked item' );

            this.pick();
        }
    }

    /** ****************************************************************************************************************
    *   Picks up this item.
    *******************************************************************************************************************/
    private pick(): void {
        // flag as picked
        this.picked = true;

        // remove item body
        Main.game.engine.matterJsSystem.removeFromWorld( this.shape.body );
    }
}
