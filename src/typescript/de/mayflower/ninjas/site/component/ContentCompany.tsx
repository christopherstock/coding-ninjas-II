import * as React  from 'react';
import { Debug } from '../../base/Debug';
import { SiteContentFactory } from '../SiteContentFactory';
import { SiteContent } from '../SiteContentSystem';
import { Main } from '../../base/Main';
import { ImageData } from '../../data/ImageData';

/** ********************************************************************************************************************
*   A React component with the content for the 'company' page.
***********************************************************************************************************************/
export const ContentCompany: ()=> JSX.Element = (): JSX.Element => {
    Debug.react.log( 'ContentCompany.render() being invoked' );

    return <div>

        { SiteContentFactory.createStepIndicator( SiteContent.CONTENT_COMPANY ) }
        { SiteContentFactory.createDivider() }
        { SiteContentFactory.createHeadline( 'Our Company' ) }
        { SiteContentFactory.createSpacerVertical() }
        {
            SiteContentFactory.createParagraph(
                'We <span style=\'color: #ff6666;\'>&#x2764;</span> programming! '
                + 'And particularly we love to create:'
            )
        }
        { SiteContentFactory.createSpacerVertical() }
        {
            SiteContentFactory.createCarousel(
                'fade',
                true,
                2500,
                3000,
                [
                    <div className='carouselPage' style={{ 'backgroundImage': 'url( '
                    + Main.game.engine.imageSystem.getImage(
                        ImageData.IMAGE_SITE_PANEL_CAROUSEL_DESKTOP
                    ).src + ' )' }}>
                        <h3>Desktop &amp; Enterprise Applications</h3>
                    </div>,
                    <div className='carouselPage' style={{ 'backgroundImage': 'url( '
                    + Main.game.engine.imageSystem.getImage(
                        ImageData.IMAGE_SITE_PANEL_CAROUSEL_WEBSITES
                    ).src + ' )' }}>
                        <h3>Web Design</h3>
                    </div>,
                    <div className='carouselPage' style={{ 'backgroundImage': 'url( '
                    + Main.game.engine.imageSystem.getImage(
                        ImageData.IMAGE_SITE_PANEL_CAROUSEL_MOBILE
                    ).src + ' )' }}>
                        <h3>Mobile Applications</h3>
                    </div>,
                    <div className='carouselPage' style={{ 'backgroundImage': 'url( '
                    + Main.game.engine.imageSystem.getImage(
                        ImageData.IMAGE_SITE_PANEL_CAROUSEL_WEB_APPS
                    ).src + ' )' }}>
                        <h3>Web Applications</h3>
                    </div>,
                ]
            )
        }
        { SiteContentFactory.createSpacerVertical() }
        {
            SiteContentFactory.createParagraph(
                'Read more about our services on the next site by finding the shrine directly '
                + '<span style=\'color: #ff6666;\'>above</span> this one.'
            )
        }

    </div>;
}
