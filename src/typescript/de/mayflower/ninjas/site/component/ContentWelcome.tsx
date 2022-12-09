
    import * as ninjas from '../../ninjas';
    import * as React  from 'react';

    /** ****************************************************************************************************************
    *   A React component with the content for the 'welcome' page.
    *******************************************************************************************************************/
    export const ContentWelcome :() => JSX.Element = () :JSX.Element =>
    {
        ninjas.Debug.react.log( 'ContentWelcome.render() being invoked' );

        return <div>

            { /* ninjas.SiteContentFactory.createStepIndicator( ninjas.SiteContent.CONTENT_WELCOME ) */ }

            { /* ninjas.SiteContentFactory.createDivider() */ }

            {
                ninjas.SiteContentFactory.createImageFullWidth(
                    ninjas.Main.game.engine.imageSystem.getImage(
                        ninjas.ImageData.IMAGE_SITE_PANEL_LOGO
                    ).src
                )
            }

            { ninjas.SiteContentFactory.createSpacerVertical() }

            { /*

            <a target='_blank' title='Würzburg Web Week' href='https://wueww.de/'>
                {
                    ninjas.SiteContentFactory.createImageFloating(
                        'right',
                        ninjas.Main.game.engine.imageSystem.getImage(
                            ninjas.ImageData.IMAGE_SITE_PANEL_LOGO_WEBWEEK
                        ).src
                    )
                }
            </a>

            */ }

            {
                ninjas.SiteContentFactory.createParagraph
                (
                    'Welcome to the Demo of '
                    + '<a target=\'_blank\' title=\'Coding Ninjas II\' '
                    + 'href=\'https://developercamp.io/\'>Coding Ninjas II</a>.'
                )
            }

            { ninjas.SiteContentFactory.createSpacerVertical() }

            { /* ninjas.SiteContentFactory.createDivider() */ }

            {
                ninjas.SiteContentFactory.createCarousel
                (
                    'scrollx',
                    true,
                    1250,
                    500,
                    [
                        <div className='carouselPage' style={ { 'backgroundImage': 'url( '
                        + ninjas.Main.game.engine.imageSystem.getImage(
                            ninjas.ImageData.IMAGE_SITE_PANEL_CAROUSEL_DESKTOP
                        ).src + ' )' } }>
                            <h3>React 16.13.1</h3>
                        </div>,
                        <div className='carouselPage' style={ { 'backgroundImage': 'url( '
                        + ninjas.Main.game.engine.imageSystem.getImage(
                            ninjas.ImageData.IMAGE_SITE_PANEL_CAROUSEL_WEBSITES
                        ).src + ' )' } }>
                            <h3>Ant Design 3.26.9</h3>
                        </div>,
                        <div className='carouselPage' style={ { 'backgroundImage': 'url( '
                        + ninjas.Main.game.engine.imageSystem.getImage(
                            ninjas.ImageData.IMAGE_SITE_PANEL_CAROUSEL_MOBILE
                        ).src + ' )' } }>
                            <h3>TypeScript 3.7.5</h3>
                        </div>,
                        <div className='carouselPage' style={ { 'backgroundImage': 'url( '
                        + ninjas.Main.game.engine.imageSystem.getImage(
                            ninjas.ImageData.IMAGE_SITE_PANEL_CAROUSEL_WEB_APPS
                        ).src + ' )' } }>
                            <h3>Webpack 4.41.6</h3>
                        </div>,
                    ]
                )
            }

            { /*

            <a target='_blank' title='Coding Ninjas on GitHub'
                href='https://github.com/christopherstock/coding-ninjas'>
                { ninjas.SiteContentFactory.createAvatar( '', 'github' ) }
            </a>

            */ }

            {
                /*
                ninjas.SiteContentFactory.createParagraph
                (
                    'Get the source on <a target=\'_blank\' title=\'Coding Ninjas on GitHub\' '
                    + 'href=\'https://github.com/christopherstock/coding-ninjas\'>GitHub</a>',
                    'sitePanel defaultParagraph avatarLine'
                )
                */
            }
            { /* ninjas.SiteContentFactory.createDivider() */ }
            {
                /*
                ninjas.SiteContentFactory.createParagraph
                (
                    'Use the <span style=\'color: #b42157;\'>arrow keys</span> to move and jump around.<br>'
                    + 'Use the <span style=\'color: #b42157;\'>space bar</span> to open your parachute '
                    + 'while in air.<br>'
                    + 'The user interfaces can be operated using <span style=\'color: #b42157;\'>'
                    + 'your mouse</span>.<br>'
                    + 'Can you find all <span style=\'color: #b42157;\'>six shrines?</span>.<br>'
                )
                */
            }
            { /* ninjas.SiteContentFactory.createDivider() */ }
            {
                /*
                ninjas.SiteContentFactory.createSwitch
                (
                    'notification',
                    'poweroff',
                    !ninjas.ImageUtil.isMac(),
                    ( checked:boolean ) => {

                        ninjas.Debug.sound.log( 'Toggle bg music to [' + String( checked ) + ']' );

                        ninjas.Main.game.toggleBgMusic( checked );
                    }
                )
                */
            }
            { /* ninjas.SiteContentFactory.createParagraph( 'Toggle background music' ) */ }

            { ninjas.SiteContentFactory.createSpacerVertical() }

            { /* ninjas.SiteContentFactory.createDivider()                                        */ }
            { ninjas.SiteContentFactory.createParagraph( 'Current progress of the project is:' ) }
            { /* ninjas.SiteContentFactory.createSpacerVertical() */ }
            { ninjas.SiteContentFactory.createProgress( 'line', 72.6 )        }

        </div>;
    }
