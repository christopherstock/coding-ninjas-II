import * as React  from 'react';
import { SiteContentFactory } from '../SiteContentFactory';
import { DebugLog } from '../../base/DebugLog';
import { Main } from '../../base/Main';
import { ImageData } from '../../data/ImageData';

/** ********************************************************************************************************************
*   A React component with the content for the 'services' page.
***********************************************************************************************************************/
export const ContentFarewell: ()=> JSX.Element = (): JSX.Element => {
    DebugLog.react.log('ContentServices.render() being invoked');

    return <div>

        {
            SiteContentFactory.createImageFullWidth(
                Main.game.engine.imageSystem.getImage(
                    ImageData.SITE_PANEL_LOGO_LEFT
                ).src
            )
        }

        { SiteContentFactory.createSpacerVertical() }

        {
            SiteContentFactory.createParagraph(
                'You have reached the end of the <span class=\'special\'>Coding Ninjas II</span> world.<br>'
                + '<br>'
                + 'Thanks for your interests in my project portfolio.<br>'
                + 'Have a good day and stay safe and sound my friend!<br>'
                + '🧘🏼‍♂️&nbsp;🕉&nbsp;💜&nbsp;🌿&nbsp;🌺',
                'left'
            )
        }

        {
            SiteContentFactory.createImageFloating(
                'left',
                Main.game.engine.imageSystem.getImage(
                    ImageData.SITE_PANEL_SIGNATURE_CHRIS
                ).src
            )
        }

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

    </div>;
}
