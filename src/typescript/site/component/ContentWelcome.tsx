import * as React  from 'react';
import { Debug } from '../../base/Debug';
import { SiteContentFactory } from '../SiteContentFactory';
import { Main } from '../../base/Main';
import { ImageData } from '../../data/ImageData';

/** ********************************************************************************************************************
*   A React component with the content for the 'welcome' page.
***********************************************************************************************************************/
export const ContentWelcome: ()=> JSX.Element = (): JSX.Element => {
    Debug.react.log('ContentWelcome.render() being invoked');

    return <div style={{ textAlign: 'right' }}>

        { /* SiteContentFactory.createStepIndicator( SiteContent.CONTENT_WELCOME ) */ }
        { /* SiteContentFactory.createDivider() */ }

        {
            SiteContentFactory.createImageFullWidth(
                Main.game.engine.imageSystem.getImage(
                    ImageData.SITE_PANEL_LOGO
                ).src
            )
        }

        { SiteContentFactory.createSpacerVertical() }

        {
            SiteContentFactory.createParagraph(
                'Welcome to the demo of '
                + '<span class=\'special\'>Coding Ninjas II</span><br>'
                + '<br>'
                + 'This is an interactive website presentation<br>'
                + 'combined with a <span class=\'special\'>Jump \'n Run</span> experience.<br>'
                + '<br>'
                + 'The following <span class=\'special\'>keys</span> control your player:<br>',
                'right'
            )
        }

        { SiteContentFactory.createSpacerVertical() }

        <table style={{ textAlign: 'right', width: '100%' }}>
            <tbody>
                <tr>
                    <td style={{ verticalAlign: 'top' }}>
                        {
                            SiteContentFactory.createParagraph(
                                '<span class=\'special\'>&#x2190; &#x2192;</span><br>'
                                + '<span class=\'special\'>&#x2191;</span><br>'
                                + '<span class=\'special\'>&#x2191; &#x2193;</span><br>'
                                + '<span class=\'special\'>E</span><br>'
                                + '<span class=\'special\'>SPACE</span><br>',
                                'right'
                            )
                        }
                    </td>
                    <td style={{ width: '230px', verticalAlign: 'top' }}>
                        {
                            SiteContentFactory.createParagraph(
                                'Walk<br>'
                                + 'Jump<br>'
                                + 'Open/Close Parachute (in Air)<br>'
                                + 'Open Door<br>'
                                + 'Strike Katana<br>',
                                'right'
                            )
                        }
                    </td>
                </tr>
            </tbody>
        </table>

        { SiteContentFactory.createSpacerVertical() }

        {
            SiteContentFactory.createCarousel(
                'scrollx',
                true,
                2500,
                500,
                [
                    <div className='carouselPage' style={{ 'backgroundImage': 'url( '
                    + Main.game.engine.imageSystem.getImage(
                        ImageData.SITE_PANEL_CAROUSEL_DESKTOP
                    ).src + ' )' }}>
                        <h3>React 16.13.1</h3>
                    </div>,
                    <div className='carouselPage' style={{ 'backgroundImage': 'url( '
                    + Main.game.engine.imageSystem.getImage(
                        ImageData.SITE_PANEL_CAROUSEL_WEBSITES
                    ).src + ' )' }}>
                        <h3>Ant Design 3.26.9</h3>
                    </div>,
                    <div className='carouselPage' style={{ 'backgroundImage': 'url( '
                    + Main.game.engine.imageSystem.getImage(
                        ImageData.SITE_PANEL_CAROUSEL_MOBILE
                    ).src + ' )' }}>
                        <h3>TypeScript 3.7.5</h3>
                    </div>,
                    <div className='carouselPage' style={{ 'backgroundImage': 'url( '
                    + Main.game.engine.imageSystem.getImage(
                        ImageData.SITE_PANEL_CAROUSEL_WEB_APPS
                    ).src + ' )' }}>
                        <h3>Webpack 4.41.6</h3>
                    </div>,
                ]
            )
        }

        { SiteContentFactory.createSpacerVertical() }
        { SiteContentFactory.createParagraph('Project Progress:', 'right') }
        { SiteContentFactory.createProgress('line', 61.8) }

    </div>;
}
