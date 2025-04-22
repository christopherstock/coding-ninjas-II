import { SettingGame } from '../setting/SettingGame';
import { Main } from '../base/Main';

/** ********************************************************************************************************************
*   Contains all possible positions for the site panel.
***********************************************************************************************************************/
export enum SitePanelPosition
{
    /** Site panel appearing left. */
    LEFT,
    /** Site panel appearing right. */
    RIGHT,
}

/** ********************************************************************************************************************
*   Represents a site panel that shows a site content.
***********************************************************************************************************************/
export class SitePanel {
    /** The outer container div. */
    private                 outerAbsoluteContainer: HTMLDivElement             = null;
    /** The inner container div. */
    private                 innerRelativeContainer: HTMLDivElement             = null;

    /** The position for this panel to show up. */
    private                 position: SitePanelPosition   = null;

    /** ****************************************************************************************************************
    *   Creates a new site panel.
    *******************************************************************************************************************/
    public constructor() {
        this.createOuterAbsoluteContainer();
        this.createInnerRelativeContainer();

        // add inner to outer container
        this.outerAbsoluteContainer.appendChild(this.innerRelativeContainer);
    }

    /** ****************************************************************************************************************
    *   Sets the position of the panel.
    *******************************************************************************************************************/
    public setPosition(position: SitePanelPosition): void {
        this.position = position;
    }

    /** ****************************************************************************************************************
    *   Sets the visibility of the panel.
    *
    *   @param visible Flags if the panel shall be visible.
    *******************************************************************************************************************/
    public setVisible(visible: boolean): void {
        this.outerAbsoluteContainer.style.visibility = (visible ? 'visible' : 'hidden');
    }

    /** ****************************************************************************************************************
    *   Sets the background image for the panel.
    *
    *   @param src The source of the background image to set.
    *******************************************************************************************************************/
    public setPanelBgImage(src: string): void {
        this.outerAbsoluteContainer.style.backgroundImage = ('url( ' + src + ')');
    }

    /** ****************************************************************************************************************
    *   Appends the outer container to the DOM.
    *******************************************************************************************************************/
    public addToDom(): void {
        document.body.appendChild(this.outerAbsoluteContainer);
    }

    /** ****************************************************************************************************************
    *   Removed the outer container from the DOM.
    *******************************************************************************************************************/
    public removeFromDom(): void {
        this.outerAbsoluteContainer.remove();
    }

    /** ****************************************************************************************************************
    *   Updates the position and the location of this site panel.
    *
    *   @param width  The new panel width.
    *   @param height The new panel height.
    *******************************************************************************************************************/
    public updateSizeAndPosition(width: number, height: number): void {
        // outer container size
        this.outerAbsoluteContainer.style.width  = String(width) + 'px';
        this.outerAbsoluteContainer.style.height = String(height) + 'px';

        this.outerAbsoluteContainer.style.backgroundSize  = String(width) + 'px ' + String(height) + 'px';

        // debug outer container
        // this.outerAbsoluteContainer.style.backgroundColor = '#ff0000';
        this.outerAbsoluteContainer.style.backgroundColor = 'transparent';

        const CANVAS_OFFSET_X: number = (
            (window.innerWidth - Main.game.engine.canvasSystem.getPhysicalWidth()) / 2
        );

        // outer container position
        switch (this.position) {
            case SitePanelPosition.LEFT:
            {
                this.outerAbsoluteContainer.style.left = String(
                    SettingGame.SITE_PANEL_BORDER_SIZE_OUTER
                    + CANVAS_OFFSET_X
                ) + 'px';
                break;
            }

            case SitePanelPosition.RIGHT:
            {
                this.outerAbsoluteContainer.style.left = String(
                    (
                        Main.game.engine.canvasSystem.getPhysicalWidth()
                        - width
                        - SettingGame.SITE_PANEL_BORDER_SIZE_OUTER
                    )
                ) + 'px';
                break;
            }
        }
        this.outerAbsoluteContainer.style.top = String(
            ((Main.game.engine.canvasSystem.getPhysicalHeight() - height) / 2)
        ) + 'px';

        // inner container size
        this.innerRelativeContainer.style.width  = String(
            (width - 2 * SettingGame.SITE_PANEL_BORDER_SIZE_INNER)
        ) + 'px';

        // inner container position
        this.innerRelativeContainer.style.top  = String(
            SettingGame.SITE_PANEL_BORDER_SIZE_INNER_TOP
        ) + 'px';
        this.innerRelativeContainer.style.left = String(
            SettingGame.SITE_PANEL_BORDER_SIZE_INNER
        ) + 'px';
    }

    /** ****************************************************************************************************************
    *   Returns the current panel position.
    *
    *   @return The current position of this panel.
    *******************************************************************************************************************/
    public getPosition(): SitePanelPosition {
        return this.position;
    }

    /** ****************************************************************************************************************
    *   Sets WOW classes for animating the panel in.
    *******************************************************************************************************************/
    public animateIn(): void {
        // set animation class
        switch (this.position) {
            case SitePanelPosition.LEFT:
            {
                // this.outerAbsoluteContainer.className = 'sitePanel outerAbsoluteContainer wow bounceInLeft';
                this.outerAbsoluteContainer.className = 'sitePanel outerAbsoluteContainer wow fadeIn';
                break;
            }

            case SitePanelPosition.RIGHT:
            {
                // this.outerAbsoluteContainer.className = 'sitePanel outerAbsoluteContainer wow bounceInRight';
                this.outerAbsoluteContainer.className = 'sitePanel outerAbsoluteContainer wow fadeIn';
                break;
            }
        }
    }

    /** ****************************************************************************************************************
    *   Sets WOW classes for animating the panel out.
    *******************************************************************************************************************/
    public animateOut(): void {
        // set animation class
        switch (this.position) {
            case SitePanelPosition.LEFT:
            {
                // this.outerAbsoluteContainer.className = 'sitePanel outerAbsoluteContainer wow bounceOutLeft';
                this.outerAbsoluteContainer.className = 'sitePanel outerAbsoluteContainer wow fadeOut';
                break;
            }

            case SitePanelPosition.RIGHT:
            {
                // this.outerAbsoluteContainer.className = 'sitePanel outerAbsoluteContainer wow bounceOutRight';
                this.outerAbsoluteContainer.className = 'sitePanel outerAbsoluteContainer wow fadeOut';
                break;
            }
        }
    }

    /** ****************************************************************************************************************
    *   Returns the container to remove and add various contents.
    *
    *   @return The inner relative container div.
    *******************************************************************************************************************/
    public getMountPoint(): HTMLDivElement {
        return this.innerRelativeContainer;
    }

    /** ****************************************************************************************************************
    *   Creates the outer container with absolute position.
    *******************************************************************************************************************/
    private createOuterAbsoluteContainer(): void {
        this.outerAbsoluteContainer = document.createElement('div');

        this.outerAbsoluteContainer.setAttribute(
            'data-wow-duration',
            String(SettingGame.SITE_PANEL_ANIMATION_DURATION)
            + 'ms'
        );
        this.outerAbsoluteContainer.setAttribute('data-wow-delay',    '0ms');
    }

    /** ****************************************************************************************************************
    *   Creates the inner container with relative position.
    *******************************************************************************************************************/
    private createInnerRelativeContainer(): void {
        this.innerRelativeContainer = document.createElement('div');
        this.innerRelativeContainer.className = 'sitePanel innerRelativeContainer';

        this.innerRelativeContainer.setAttribute(
            'data-wow-delay',
            String(SettingGame.SITE_PANEL_ANIMATION_DURATION)
            + 'ms'
        );
    }
}
