import { DebugLog } from '../base/DebugLog';
import { Main } from '../base/Main';
import { SettingEngine } from '../base/SettingEngine';
import { SettingGame } from '../base/SettingGame';
import { ImageData } from '../data/ImageData';
import { SiteContent, SiteContentSystem } from '../site/SiteContentSystem';
import { CharacterFacing } from '../game/object/being/CharacterFacing';
import { CanvasSystem } from './ui/CanvasSystem';
import { SitePanel, SitePanelPosition } from './SitePanel';

const wow: any = require('wowjs');

/** ********************************************************************************************************************
*   Specifies the current site panel animation state.
***********************************************************************************************************************/
export enum SitePanelAnimation
{
    /** Currently offside. */
    HIDDEN,
    /** Currently showing. */
    SHOWING,
    /** Currently hiding. */
    HIDING,
    /** Currently present. */
    PRESENT,
}

/** ********************************************************************************************************************
*   Manages the communication between the game and the company presentation.
***********************************************************************************************************************/
export class SiteSystem {
    private readonly contentSystem: SiteContentSystem   = null;
    private readonly activeSitePanel: SitePanel         = null;

    private animationState: SitePanelAnimation          = SitePanelAnimation.HIDDEN;
    private firstShow: boolean                          = true;

    private panelWidth: number                          = 0;
    private panelHeight: number                         = 0;

    private panelAndBorderWidth: number                 = 0;

    private leftCameraTargetX: number                   = 0;
    private rightCameraTargetX: number                  = 0;

    private wowSystem: any                              = null;

    /** ****************************************************************************************************************
    *   Creates a new site system.
    *******************************************************************************************************************/
    public constructor() {
        this.contentSystem = new SiteContentSystem();
        this.contentSystem.initAllContents();

        this.activeSitePanel     = new SitePanel();

        this.updatePanelSizeAndPosition();
        this.initWowSystem();
    }

    /** ****************************************************************************************************************
    *   Being invoked when a site shall be shown.
    *
    *   @param content  The content to display in the site panel
    *   @param position The position for the panel to show up.
    *
    *   @return If showing the site succeeded.
    *******************************************************************************************************************/
    public show(content: SiteContent, position: SitePanelPosition): boolean {
        // only show if hidden
        if (this.animationState !== SitePanelAnimation.HIDDEN) {
            return false;
        }

        DebugLog.site.log('Showing site panel');
        this.animationState = SitePanelAnimation.SHOWING;

        // set content for site panel
        this.contentSystem.mountContent(content, this.activeSitePanel.getMountPoint());

        this.activeSitePanel.setPosition(position);
        this.updatePanelSizeAndPosition();

        if (this.firstShow) {
            this.firstShow = false;

            // set visibility to 'hidden' fixes unanimated flickering the panel on 1st creation!
            this.activeSitePanel.setVisible(false);
        } else {
            // set visibility to 'visible' fixes unanimated flickering the panel on 1st creation!
            this.activeSitePanel.setVisible(true);
        }

        if (position === SitePanelPosition.RIGHT) {
            this.activeSitePanel.setPanelBgImage(
                Main.game.engine.imageSystem.getImage(ImageData.SITE_PANEL_BG_RIGHT).src
            );
        } else {
            this.activeSitePanel.setPanelBgImage(
                Main.game.engine.imageSystem.getImage(ImageData.SITE_PANEL_BG_LEFT).src
            );
        }

        this.activeSitePanel.animateIn();
        this.activeSitePanel.addToDom();

        this.wowSystem.sync();

        window.setTimeout(
            () => {
                if (this.animationState === SitePanelAnimation.SHOWING) {
                    this.animationState = SitePanelAnimation.PRESENT;
                }
            },
            SettingGame.SITE_PANEL_ANIMATION_DURATION
        );

        return true;
    }

    /** ****************************************************************************************************************
    *   Immediately hides and removes the panel, no matter which state it currently is in.
    *******************************************************************************************************************/
    public reset(): void {
        this.animationState = SitePanelAnimation.HIDDEN;
        this.activeSitePanel.removeFromDom();
    }

    /** ****************************************************************************************************************
    *   Being invoked when a site shall be hidden.
    *
    *   @return If hiding the site succeeded.
    *******************************************************************************************************************/
    public hide(): boolean {
        if (this.animationState !== SitePanelAnimation.PRESENT) {
            return false;
        }

        DebugLog.site.log('Hiding site panel');
        this.animationState = SitePanelAnimation.HIDING;

        this.activeSitePanel.animateOut();
        this.wowSystem.sync();

        window.setTimeout(
            () => {
                this.animationState = SitePanelAnimation.HIDDEN;
                this.activeSitePanel.removeFromDom();
            },
            (SettingGame.SITE_PANEL_ANIMATION_DURATION / 2)
        );

        return true;
    }

    /** ****************************************************************************************************************
    *   Being invoked when the panel size should be set according to the current canvas size.
    *******************************************************************************************************************/
    public updatePanelSizeAndPosition(): void {
        const canvasSystem: CanvasSystem = Main.game.engine.canvasSystem;

        // calculate and clip panel size
        this.panelWidth = (
            canvasSystem.getPhysicalWidth() / 2 - SettingGame.SITE_PANEL_BORDER_SIZE_OUTER
        );
        if (this.panelWidth < SettingGame.SITE_PANEL_MIN_WIDTH) {
            this.panelWidth = SettingGame.SITE_PANEL_MIN_WIDTH;
        } else if (this.panelWidth > SettingGame.SITE_PANEL_MAX_WIDTH) {
            this.panelWidth = SettingGame.SITE_PANEL_MAX_WIDTH;
        }

        this.panelHeight = (
            canvasSystem.getPhysicalHeight() - 2 * SettingGame.SITE_PANEL_BORDER_SIZE_OUTER
        );
        if (
            SettingGame.SITE_PANEL_MAX_HEIGHT !== -1
            && this.panelHeight > SettingGame.SITE_PANEL_MAX_HEIGHT
        ) {
            this.panelHeight = SettingGame.SITE_PANEL_MAX_HEIGHT;
        }

        // calculate panel size including border and left and right position
        this.panelAndBorderWidth = this.panelWidth + SettingGame.SITE_PANEL_BORDER_SIZE_OUTER;
        this.leftCameraTargetX   = (
            this.panelAndBorderWidth
            + ((canvasSystem.getPhysicalWidth() - this.panelAndBorderWidth) / 2)
        );
        this.rightCameraTargetX  = (
            (canvasSystem.getPhysicalWidth() - this.panelAndBorderWidth) / 2
        );

        // update panel size and position
        this.activeSitePanel.updateSizeAndPosition(
            this.panelWidth,
            this.panelHeight
        );
    }

    /** ****************************************************************************************************************
    *   Determines if a site panel is currently active.
    *
    *   @return <code>true</code> if a site panel is currently active.
    *******************************************************************************************************************/
    public getCameraTargetX(): number {
        // center camera X if no panels are showing
        if (
            SettingEngine.CENTER_CAMERA_X_ON_PANELS
            || this.animationState === SitePanelAnimation.HIDDEN
            || this.animationState === SitePanelAnimation.HIDING
        ) {
            // center camera X if desired
            switch (Main.game.level.player.facing) {
                case CharacterFacing.LEFT:
                {
                    return (
                        Main.game.engine.canvasSystem.getWidth()
                        * (1.0 - SettingEngine.CAMERA_RATIO_X)
                    );
                }

                case CharacterFacing.RIGHT:
                {
                    return (
                        Main.game.engine.canvasSystem.getWidth()
                        * SettingEngine.CAMERA_RATIO_X
                    );
                }
            }

            // target according to player facing
            switch (Main.game.level.player.facing) {
                case CharacterFacing.LEFT:
                {
                    return this.leftCameraTargetX;
                }

                case CharacterFacing.RIGHT:
                {
                    return this.rightCameraTargetX;
                }
            }
        }

        // target according to active site panel
        switch (this.activeSitePanel.getPosition()) {
            case SitePanelPosition.LEFT:
            {
                return this.leftCameraTargetX;
            }

            case SitePanelPosition.RIGHT:
            {
                return this.rightCameraTargetX;
            }
        }
    }

    /** ****************************************************************************************************************
    *   Inits the WOW animation system.
    *******************************************************************************************************************/
    private initWowSystem(): void {
        DebugLog.init.log('Init WOW animations');

        this.wowSystem = new wow.WOW(
            {
                boxClass:        'wow',              // animated element css class (default is wow)
                animateClass:    'animated',         // animation css class (default is animated)
                offset:          0,                  // distance to the element when triggering the animation default 0
                mobile:          true,               // trigger animations on mobile devices (default is true)
                scrollContainer: null,               // optional scroll container selector, otherwise use window
                live:            true,               // act on asynchronously loaded content (default is true)
                // callback:     function( box ) {}, // the callback is fired every time an animation is started
                //                                   // the argument that is passed in is the animated DOM node
            }
        );
        this.wowSystem.init();
    }
}
