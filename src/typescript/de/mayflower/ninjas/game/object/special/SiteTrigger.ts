import * as matter from 'matter-js';
import {Decoration} from "../deco/Decoration";
import {SiteContent} from "../../../site/SiteContentSystem";
import {Shape} from "../../../engine/shape/Shape";
import {SpriteTemplate} from "../../../engine/ui/SpriteTemplate";
import {SitePanelPosition} from "../../../engine/SitePanel";
import {Main} from "../../../base/Main";
import {CharacterFacing} from "../being/CharacterFacing";

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
export class SiteTrigger extends Decoration
{
    /** The site content to show when this trigger is released. */
    private     readonly            content                         :SiteContent             = null;
    /** A fixed position for the panel to popup, if desired. */
    private     readonly            sitePanelAppearance             :SitePanelAppearance     = null;

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
        shape               :Shape,
        spriteTemplate      :SpriteTemplate,
        x                   :number,
        y                   :number,
        content             :SiteContent,
        sitePanelAppearance :SitePanelAppearance
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
                const panelPosition:SitePanelPosition = this.determinePanelPosition();

                if ( Main.game.engine.siteSystem.show( this.content, panelPosition ) )
                {
                    Main.game.level.setShrineBookOpen( this.content, true );
                    this.sitePanelActive = true;
                }
            }
        }
        else
        {
            if ( this.sitePanelActive )
            {
                if ( Main.game.engine.siteSystem.hide() )
                {
                    Main.game.level.setShrineBookOpen( this.content, false );
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
            matter.Bounds.overlaps( this.shape.body.bounds, Main.game.level.player.shape.body.bounds )
        );
    }

    /** ****************************************************************************************************************
    *   Determines the position of the panel to show according to the player's current facing direction.
    *
    *   @return The position of the panel to be shown.
    *******************************************************************************************************************/
    private determinePanelPosition() : SitePanelPosition
    {
        switch ( this.sitePanelAppearance )
        {
            case SitePanelAppearance.PLAYER_FACING:
            {
                if ( Main.game.level.player.facing === CharacterFacing.LEFT )
                {
                    return SitePanelPosition.LEFT;
                }

                return SitePanelPosition.RIGHT;
            }

            case SitePanelAppearance.LEFT:
            {
                return SitePanelPosition.LEFT;
            }

            case SitePanelAppearance.RIGHT:
            {
                return SitePanelPosition.RIGHT;
            }
        }
    }
}
