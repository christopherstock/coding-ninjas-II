import * as matter from 'matter-js';
import * as ninjas from '../../../ninjas';

/** ********************************************************************************************************************
*   Specifies possible appearances for the site panel.
***********************************************************************************************************************/
export enum SitePanelAppearance
{
    PLAYER_FACING,
    LEFT,
    RIGHT,
}

/** ********************************************************************************************************************
*   Represents a non-colliding decoration.
***********************************************************************************************************************/
export class SiteTrigger extends ninjas.Decoration
{
    /** The site content to show when this trigger is released. */
    private     readonly            content                         :ninjas.SiteContent             = null;
    /** A fixed position for the panel to popup, if desired. */
    private     readonly            sitePanelAppearance             :ninjas.SitePanelAppearance     = null;

    /** Flags if the according site panel is currently displayed. */
    private                         sitePanelActive                 :boolean                        = false;

    /** ****************************************************************************************************************
    *   Creates a new site trigger.
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
        content             :ninjas.SiteContent,
        sitePanelAppearance :ninjas.SitePanelAppearance
    )
    {
        super
        (
            shape,
            spriteTemplate,
            x,
            y
        );

        this.content             = content;
        this.sitePanelAppearance = sitePanelAppearance;
    }

    /** ****************************************************************************************************************
    *   Renders this site trigger.
    *******************************************************************************************************************/
    public render() : void
    {
        super.render();

        // check if player collides with this trigger
        if ( this.checkPlayerCollision() )
        {
            if ( !this.sitePanelActive )
            {
                // get panel popup according to player facing direction
                const panelPosition:ninjas.SitePanelPosition = this.determinePanelPosition();

                if ( ninjas.Main.game.engine.siteSystem.show( this.content, panelPosition ) )
                {
                    ninjas.Main.game.level.setShrineBookOpen( this.content, true );
                    this.sitePanelActive = true;
                }
            }
        }
        else
        {
            if ( this.sitePanelActive )
            {
                if ( ninjas.Main.game.engine.siteSystem.hide() )
                {
                    ninjas.Main.game.level.setShrineBookOpen( this.content, false );
                    this.sitePanelActive = false;
                }
            }
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

    /** ****************************************************************************************************************
    *   Determines the position of the panel to show according to the player's current facing direction.
    *
    *   @return The position of the panel to be shown.
    *******************************************************************************************************************/
    private determinePanelPosition() : ninjas.SitePanelPosition
    {
        switch ( this.sitePanelAppearance )
        {
            case SitePanelAppearance.PLAYER_FACING:
            {
                if ( ninjas.Main.game.level.player.facing === ninjas.CharacterFacing.LEFT )
                {
                    return ninjas.SitePanelPosition.LEFT;
                }

                return ninjas.SitePanelPosition.RIGHT;
            }

            case SitePanelAppearance.LEFT:
            {
                return ninjas.SitePanelPosition.LEFT;
            }

            case SitePanelAppearance.RIGHT:
            {
                return ninjas.SitePanelPosition.RIGHT;
            }
        }
    }
}
