import * as React  from 'react';
import {Debug} from "../../base/Debug";
import {SiteContentFactory} from "../SiteContentFactory";
import {Main} from "../../base/Main";
import {ImageData} from "../../data/ImageData";

/** ********************************************************************************************************************
*   A React component with the content for the 'welcome' page.
***********************************************************************************************************************/
export const ContentWelcome :() => JSX.Element = () :JSX.Element =>
{
    Debug.react.log( 'ContentWelcome.render() being invoked' );

    return <div>

        { /* SiteContentFactory.createStepIndicator( SiteContent.CONTENT_WELCOME ) */ }

        { /* SiteContentFactory.createDivider() */ }

        {
            SiteContentFactory.createImageFullWidth(
                Main.game.engine.imageSystem.getImage(
                    ImageData.IMAGE_SITE_PANEL_LOGO
                ).src
            )
        }

        { SiteContentFactory.createSpacerVertical() }

        { /*

        <a target='_blank' title='Würzburg Web Week' href='https://wueww.de/'>
            {
                SiteContentFactory.createImageFloating(
                    'right',
                    Main.game.engine.imageSystem.getImage(
                        ImageData.IMAGE_SITE_PANEL_LOGO_WEBWEEK
                    ).src
                )
            }
        </a>

        */ }

        {
            SiteContentFactory.createParagraph
            (
                'Welcome to the Demo of '
                + '<a target=\'_blank\' title=\'Coding Ninjas II\' '
                + 'href=\'https://developercamp.io/\'>Coding Ninjas II</a>.'
            )
        }

        { SiteContentFactory.createSpacerVertical() }

        { /* SiteContentFactory.createDivider() */ }

        {
            SiteContentFactory.createCarousel
            (
                'scrollx',
                true,
                1250,
                500,
                [
                    <div className='carouselPage' style={ { 'backgroundImage': 'url( '
                    + Main.game.engine.imageSystem.getImage(
                        ImageData.IMAGE_SITE_PANEL_CAROUSEL_DESKTOP
                    ).src + ' )' } }>
                        <h3>React 16.13.1</h3>
                    </div>,
                    <div className='carouselPage' style={ { 'backgroundImage': 'url( '
                    + Main.game.engine.imageSystem.getImage(
                        ImageData.IMAGE_SITE_PANEL_CAROUSEL_WEBSITES
                    ).src + ' )' } }>
                        <h3>Ant Design 3.26.9</h3>
                    </div>,
                    <div className='carouselPage' style={ { 'backgroundImage': 'url( '
                    + Main.game.engine.imageSystem.getImage(
                        ImageData.IMAGE_SITE_PANEL_CAROUSEL_MOBILE
                    ).src + ' )' } }>
                        <h3>TypeScript 3.7.5</h3>
                    </div>,
                    <div className='carouselPage' style={ { 'backgroundImage': 'url( '
                    + Main.game.engine.imageSystem.getImage(
                        ImageData.IMAGE_SITE_PANEL_CAROUSEL_WEB_APPS
                    ).src + ' )' } }>
                        <h3>Webpack 4.41.6</h3>
                    </div>,
                ]
            )
        }

        { /*

        <a target='_blank' title='Coding Ninjas on GitHub'
            href='https://github.com/christopherstock/coding-ninjas'>
            { SiteContentFactory.createAvatar( '', 'github' ) }
        </a>

        */ }

        {
            /*
            SiteContentFactory.createParagraph
            (
                'Get the source on <a target=\'_blank\' title=\'Coding Ninjas on GitHub\' '
                + 'href=\'https://github.com/christopherstock/coding-ninjas\'>GitHub</a>',
                'sitePanel defaultParagraph avatarLine'
            )
            */
        }
        { /* SiteContentFactory.createDivider() */ }
        {
            /*
            SiteContentFactory.createParagraph
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
        { /* SiteContentFactory.createDivider() */ }
        {
            /*
            SiteContentFactory.createSwitch
            (
                'notification',
                'poweroff',
                !ImageUtil.isMac(),
                ( checked:boolean ) => {

                    Debug.sound.log( 'Toggle bg music to [' + String( checked ) + ']' );

                    Main.game.toggleBgMusic( checked );
                }
            )
            */
        }
        { /* SiteContentFactory.createParagraph( 'Toggle background music' ) */ }

        { SiteContentFactory.createSpacerVertical() }

        { /* SiteContentFactory.createDivider()                                        */ }
        { SiteContentFactory.createParagraph( 'Current progress of the project is:' ) }
        { /* SiteContentFactory.createSpacerVertical() */ }
        { SiteContentFactory.createProgress( 'line', 72.6 )        }

    </div>;
}
