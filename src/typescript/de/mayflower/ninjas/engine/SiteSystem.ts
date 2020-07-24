
    import * as ninjas from '../ninjas';
    const wow :any = require( 'wowjs' );

    /** ****************************************************************************************************************
    *   Specifies the current site panel animation state.
    *******************************************************************************************************************/
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

    /** ****************************************************************************************************************
    *   Manages the communication between the game and the company presentation.
    *******************************************************************************************************************/
    export class SiteSystem
    {
        /** The content system. */
        private     readonly    contentSystem               :ninjas.SiteContentSystem       = null;
        /** The active site panel. */
        private     readonly    sitePanel                   :ninjas.SitePanel               = null;

        /** The current animation of the site panel. */
        private                 animationState              :ninjas.SitePanelAnimation      = SitePanelAnimation.HIDDEN;
        /** Flags if the panel is shown for the 1st time. */
        private                 firstShow                   :boolean                        = true;

        /** The current width of the panel. */
        private                 panelWidth                  :number                         = 0;
        /** The current height of the panel. */
        private                 panelHeight                 :number                         = 0;

        /** The current width of the panel including border size. */
        private                 panelAndBorderWidth         :number                         = 0;

        /** The left camera target X if the border is shown right. */
        private                 leftCameraTargetX           :number                         = 0;
        /** The right camera target X if the border is shown left. */
        private                 rightCameraTargetX          :number                         = 0;

        /** The WOW animation system. */
        private                 wowSystem                   :any                            = null;

        /** ************************************************************************************************************
        *   Creates a new site system.
        ***************************************************************************************************************/
        public constructor()
        {
            this.contentSystem = new ninjas.SiteContentSystem();
            this.contentSystem.initAllContents();

            this.sitePanel     = new ninjas.SitePanel();

            this.updatePanelSizeAndPosition();
            this.initWowSystem();
        }

        /** ************************************************************************************************************
        *   Being invoked when a site shall be shown.
        *
        *   @param content  The content to display in the site panel
        *   @param position The position for the panel to show up.
        *
        *   @return If showing the site succeeded.
        ***************************************************************************************************************/
        public show( content:ninjas.SiteContent, position:ninjas.SitePanelPosition ) : boolean
        {
            // only show if hidden
            if ( this.animationState !== ninjas.SitePanelAnimation.HIDDEN )
            {
                return false;
            }

            ninjas.Debug.site.log( 'Showing site panel' );
            this.animationState = ninjas.SitePanelAnimation.SHOWING;

            // set content for site panel
            this.contentSystem.mountContent( content, this.sitePanel.getMountPoint() );

            this.sitePanel.setPosition( position );
            this.updatePanelSizeAndPosition();

            if ( this.firstShow )
            {
                this.firstShow = false;

                // set visibility to 'hidden' fixes unanimated flickering the panel on 1st creation!
                this.sitePanel.outerAbsoluteContainer.style.visibility = 'hidden';
            }
            else
            {
                // set visibility to 'visible' fixes unanimated flickering the panel on 1st creation!
                this.sitePanel.outerAbsoluteContainer.style.visibility = 'visible';
            }

            if ( position === ninjas.SitePanelPosition.RIGHT )
            {
                this.sitePanel.outerAbsoluteContainer.style.backgroundImage = (
                    'url( '
                    + ninjas.Main.game.engine.imageSystem.getImage( ninjas.ImageData.IMAGE_SITE_PANEL_BG_RIGHT ).src
                    + ')'
                );
            }
            else
            {
                this.sitePanel.outerAbsoluteContainer.style.backgroundImage = (
                    'url( '
                    + ninjas.Main.game.engine.imageSystem.getImage( ninjas.ImageData.IMAGE_SITE_PANEL_BG_LEFT ).src
                    + ')'
                );
            }

            this.sitePanel.animateIn();
            this.sitePanel.addToDom();

            this.wowSystem.sync();

            window.setTimeout(
                () => {
                    if ( this.animationState === ninjas.SitePanelAnimation.SHOWING )
                    {
                        this.animationState = ninjas.SitePanelAnimation.PRESENT;
                    }
                },
                ninjas.SettingGame.SITE_PANEL_ANIMATION_DURATION
            );

            return true;
        }

        /** ************************************************************************************************************
        *   Immediately hides and removes the panel, no matter which state it currently is in.
        ***************************************************************************************************************/
        public reset() : void
        {
            this.animationState = ninjas.SitePanelAnimation.HIDDEN;
            this.sitePanel.removeFromDom();
        }

        /** ************************************************************************************************************
        *   Being invoked when a site shall be hidden.
        *
        *   @return If hiding the site succeeded.
        ***************************************************************************************************************/
        public hide() : boolean
        {
            if ( this.animationState !== ninjas.SitePanelAnimation.PRESENT )
            {
                return false;
            }

            ninjas.Debug.site.log( 'Hiding site panel' );
            this.animationState = ninjas.SitePanelAnimation.HIDING;

            this.sitePanel.animateOut();
            this.wowSystem.sync();

            window.setTimeout(
                () => {
                    this.animationState = ninjas.SitePanelAnimation.HIDDEN;
                    this.sitePanel.removeFromDom();
                },
                ( ninjas.SettingGame.SITE_PANEL_ANIMATION_DURATION / 2 )
            );

            return true;
        }

        /** ************************************************************************************************************
        *   Being invoked when the panel size should be set according to the current canvas size.
        ***************************************************************************************************************/
        public updatePanelSizeAndPosition() : void
        {
            // calculate and clip panel size
            this.panelWidth = (
                ninjas.Main.game.engine.canvasSystem.getWidth() / 2 - ninjas.SettingGame.SITE_PANEL_BORDER_SIZE_OUTER
            );
            if ( this.panelWidth < ninjas.SettingGame.SITE_PANEL_MIN_WIDTH )
            {
                this.panelWidth = ninjas.SettingGame.SITE_PANEL_MIN_WIDTH;
            } else if ( this.panelWidth > ninjas.SettingGame.SITE_PANEL_MAX_WIDTH )
            {
                this.panelWidth = ninjas.SettingGame.SITE_PANEL_MAX_WIDTH;
            }

            this.panelHeight = (
                ninjas.Main.game.engine.canvasSystem.getHeight() - 2 * ninjas.SettingGame.SITE_PANEL_BORDER_SIZE_OUTER
            );
            if ( this.panelHeight > ninjas.SettingGame.SITE_PANEL_MAX_HEIGHT )
            {
                this.panelHeight = ninjas.SettingGame.SITE_PANEL_MAX_HEIGHT;
            }

            // calculate panel size including border and left and right position
            this.panelAndBorderWidth = this.panelWidth + ninjas.SettingGame.SITE_PANEL_BORDER_SIZE_OUTER;
            this.leftCameraTargetX   = (
                this.panelAndBorderWidth
                + ( ( ninjas.Main.game.engine.canvasSystem.getWidth() - this.panelAndBorderWidth ) / 2 )
            );
            this.rightCameraTargetX  = (
                 ( ninjas.Main.game.engine.canvasSystem.getWidth() - this.panelAndBorderWidth ) / 2
            );

            // update panel size and position
            this.sitePanel.updateSizeAndPosition
            (
                this.panelWidth,
                this.panelHeight
            );
        }

        /** ************************************************************************************************************
        *   Determines if a site panel is currently active.
        *
        *   @return <code>true</code> if a site panel is currently active.
        ***************************************************************************************************************/
        public getCameraTargetX() : number
        {
            // target according to looking direction
            if (
                ninjas.SettingEngine.CAMERA_ALWAYS_CENTER_X
                || this.animationState === ninjas.SitePanelAnimation.HIDDEN
                || this.animationState === ninjas.SitePanelAnimation.HIDING
            ) {
                // center camera X if desired
                switch ( ninjas.Main.game.level.player.lookingDirection )
                {
                    case ninjas.CharacterLookingDirection.LEFT:
                    {
                        return (
                            ninjas.Main.game.engine.canvasSystem.getWidth()
                            * ( 1.0 - ninjas.SettingEngine.CAMERA_RATIO_X )
                        );
                    }

                    case ninjas.CharacterLookingDirection.RIGHT:
                    {
                        return (
                            ninjas.Main.game.engine.canvasSystem.getWidth()
                            * ninjas.SettingEngine.CAMERA_RATIO_X
                        );
                    }
                }

                switch ( ninjas.Main.game.level.player.lookingDirection )
                {
                    case ninjas.CharacterLookingDirection.LEFT:
                    {
                        return this.leftCameraTargetX;
                    }

                    case ninjas.CharacterLookingDirection.RIGHT:
                    {
                        return this.rightCameraTargetX;
                    }
                }
            }

            // target according to active site panel
            switch ( this.sitePanel.getPosition() )
            {
                case ninjas.SitePanelPosition.LEFT:
                {
                    return this.leftCameraTargetX;
                }

                case ninjas.SitePanelPosition.RIGHT:
                {
                    return this.rightCameraTargetX;
                }
            }
        }

        /** ************************************************************************************************************
        *   Inits the WOW animation system.
        ***************************************************************************************************************/
        private initWowSystem() : void
        {
            ninjas.Debug.init.log( 'Initing WOW animations' );

            this.wowSystem = new wow.WOW(
                {
                    boxClass:        'wow',              // animated element css class (default is wow)
                    animateClass:    'animated',         // animation css class (default is animated)
                    offset:          0,                  // distance to the element when triggering the animation
                                                         // (defaults to 0)
                    mobile:          true,               // trigger animations on mobile devices (default is true)
                    scrollContainer: null,               // optional scroll container selector, otherwise use window
                    live:            true,               // act on asynchronously loaded content (default is true)
                    // callback:     function( box ) {}, // the callback is fired every time an animation is started
                                                         // the argument that is passed in is the animated DOM node
                }
            );
            this.wowSystem.init();
        }
    }
