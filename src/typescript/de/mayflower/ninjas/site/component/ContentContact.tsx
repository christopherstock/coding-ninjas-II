import * as React  from 'react';
import {SiteContentFactory} from "../SiteContentFactory";
import {Debug} from "../../base/Debug";
import {SiteContent} from "../SiteContentSystem";
import {Main} from "../../base/Main";
import {ImageData} from "../../data/ImageData";

/** ********************************************************************************************************************
*   A React component with the content for the 'contact' page.
***********************************************************************************************************************/
export const ContentContact :() => JSX.Element = () :JSX.Element =>
{
    Debug.react.log( 'ContentContact.render() being invoked' );

    return <div>

        { SiteContentFactory.createStepIndicator( SiteContent.CONTENT_CONTACT ) }
        { SiteContentFactory.createDivider() }
        { SiteContentFactory.createHeadline( 'Contact Us!' ) }
        { SiteContentFactory.createSpacerVertical() }

        <div className='card-flip-container'>
            <div className='card-flipper'>
                <div className='card-front' style={
                    {
                        backgroundImage: 'url( '
                        + Main.game.engine.imageSystem.getImage(
                            ImageData.IMAGE_SITE_PANEL_OFFICE_WZBG
                        ).src
                        + ' )',
                    }
                }>
                    <h3>Würzburg</h3>
                </div>
                <div className='card-back'>
                    Mayflower GmbH Würzburg<br />
                    Gneisenaustr. 10|11<br />
                    97074 Würzburg<br />
                    <br />
                    Tel: 0931 35965-1177<br />
                    Fax: 0931 35965-28<br />
                    E-Mail: <a target='_blank' href='mailto:kontakt@mayflower.de'>kontakt@mayflower.de</a>
                </div>
            </div>
        </div>

        { SiteContentFactory.createSpacerVertical() }

        <div className='card-flip-container'>
            <div className='card-flipper'>
                <div className='card-front' style={
                    {
                        backgroundImage: 'url( '
                        + Main.game.engine.imageSystem.getImage(
                            ImageData.IMAGE_SITE_PANEL_OFFICE_MUC
                        ).src
                        + ' )',
                    }
                }>
                    <h3>Munich</h3>
                </div>
                <div className='card-back'>
                    Mayflower GmbH Munich<br />
                    Mannhardtstr. 6<br />
                    80538 München<br />
                    <br />
                    Tel: 089 242054-1177<br />
                    Fax: 089 242054-29<br />
                    E-Mail: <a target='_blank' href='mailto:kontakt@mayflower.de'>kontakt@mayflower.de</a>
                </div>
            </div>
        </div>

        { SiteContentFactory.createSpacerVertical() }

        <div className='card-flip-container'>
            <div className='card-flipper'>
                <div className='card-front' style={
                    {
                        backgroundImage: 'url( '
                        + Main.game.engine.imageSystem.getImage(
                            ImageData.IMAGE_SITE_PANEL_OFFICE_BER
                        ).src
                        + ' )',
                    }
                }>
                    <h3>Berlin</h3>
                </div>
                <div className='card-back'>
                    Mayflower GmbH Berlin<br />
                    Ritterstr. 2a<br />
                    10969 Berlin<br />
                    <br />
                    Tel: 030 22470326<br />
                    E-Mail: <a target='_blank' href='mailto:berlin@mayflower.de'>berlin@mayflower.de</a>
                </div>
            </div>
        </div>

    </div>;
}
