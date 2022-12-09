import * as React  from 'react';
import * as ninjas from '../../ninjas';

/** ********************************************************************************************************************
*   A React component with the content for the 'company' page.
***********************************************************************************************************************/
export const ContentCompany :() => JSX.Element = () :JSX.Element =>
{
    ninjas.Debug.react.log( 'ContentCompany.render() being invoked' );

    return <div>

        { ninjas.SiteContentFactory.createStepIndicator( ninjas.SiteContent.CONTENT_COMPANY ) }
        { ninjas.SiteContentFactory.createDivider() }
        { ninjas.SiteContentFactory.createHeadline( 'Our Company' ) }
        { ninjas.SiteContentFactory.createSpacerVertical() }
        {
            ninjas.SiteContentFactory.createParagraph
            (
                'We <span style=\'color: #ff6666;\'>&#x2764;</span> programming! '
                + 'And particularly we love to create:'
            )
        }
        { ninjas.SiteContentFactory.createSpacerVertical() }
        {
            ninjas.SiteContentFactory.createCarousel
            (
                'fade',
                true,
                2500,
                3000,
                [
                    <div className='carouselPage' style={ { 'backgroundImage': 'url( '
                    + ninjas.Main.game.engine.imageSystem.getImage(
                        ninjas.ImageData.IMAGE_SITE_PANEL_CAROUSEL_DESKTOP
                    ).src + ' )' } }>
                        <h3>Desktop &amp; Enterprise Applications</h3>
                    </div>,
                    <div className='carouselPage' style={ { 'backgroundImage': 'url( '
                    + ninjas.Main.game.engine.imageSystem.getImage(
                        ninjas.ImageData.IMAGE_SITE_PANEL_CAROUSEL_WEBSITES
                    ).src + ' )' } }>
                        <h3>Web Design</h3>
                    </div>,
                    <div className='carouselPage' style={ { 'backgroundImage': 'url( '
                    + ninjas.Main.game.engine.imageSystem.getImage(
                        ninjas.ImageData.IMAGE_SITE_PANEL_CAROUSEL_MOBILE
                    ).src + ' )' } }>
                        <h3>Mobile Applications</h3>
                    </div>,
                    <div className='carouselPage' style={ { 'backgroundImage': 'url( '
                    + ninjas.Main.game.engine.imageSystem.getImage(
                        ninjas.ImageData.IMAGE_SITE_PANEL_CAROUSEL_WEB_APPS
                    ).src + ' )' } }>
                        <h3>Web Applications</h3>
                    </div>,
                ]
            )
        }
        { ninjas.SiteContentFactory.createSpacerVertical() }
        {
            ninjas.SiteContentFactory.createParagraph
            (
                'Read more about our services on the next site by finding the shrine directly '
                + '<span style=\'color: #ff6666;\'>above</span> this one.'
            )
        }

    </div>;
}
