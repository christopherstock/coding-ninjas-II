import * as React  from 'react';
import { DebugLog } from '../../base/DebugLog';
import { SiteContentFactory } from '../SiteContentFactory';
import { Main } from '../../base/Main';
import { ImageData } from '../../data/ImageData';
import { StringUtil } from '../../util/StringUtil';

/** ********************************************************************************************************************
*   A React component with the content for the 'welcome' page.
***********************************************************************************************************************/
export const ContentWelcome: ()=> JSX.Element = (): JSX.Element => {
    DebugLog.react.log('ContentWelcome.render() being invoked');

    return <div style={{ textAlign: 'right' }}>

        {
            SiteContentFactory.createImageFullWidth(
                Main.game.engine.imageSystem.getImage(
                    ImageData.SITE_PANEL_LOGO_RIGHT
                ).src
            )
        }

        { SiteContentFactory.createSpacerVertical() }

        {
            SiteContentFactory.createParagraph(
                'Welcome to '
                + '<span class=\'special\'>Coding Ninjas II</span>.<br>'
                + '<br>'
                + 'This is an interactive project portfolio<br>'
                + 'combined with a <span class=\'special\'>Jump \'n Run</span> experience.<br>'
                + '<br>'
                + 'Can you reach the end of the <span class=\'special\'>CN2</span> world?<br>'
                + '<br>'
                + 'The following <span class=\'special\'>keys</span> control your player:'
                + '<hr style="float: right; width: 275px">',
                'right'
            )
        }

        <table style={{ textAlign: 'right', width: '100%' }}>
            <tbody>
                <tr>
                    <td style={{ verticalAlign: 'top' }}>
                        {
                            SiteContentFactory.createParagraph(
                                '<span class=\'special\'>&#x2190; &#x2192;</span><br>'
                                + '<span class=\'special\'>&#x2191;</span><br>'
                                + '<span class=\'special\'>&#x2193;</span><br>'
                                + '<span class=\'special\'>SPACE</span><br>',
                                'right'
                            )
                        }
                    </td>
                    <td style={{ width: '230px', verticalAlign: 'top' }}>
                        {
                            SiteContentFactory.createParagraph(
                                'Walk<br>'
                                + 'Jump &amp; open Parachute<br>'
                                + 'Open Doors &amp; close Parachute<br>'
                                + 'Strike Katana<br>',
                                'right'
                            )
                        }
                    </td>
                </tr>
            </tbody>
        </table>

        { SiteContentFactory.createSpacerVertical() }
        { SiteContentFactory.createParagraph('Toggle background music:', 'right') }
        {
            SiteContentFactory.createSwitch(
                'notification',
                'poweroff',
                // !StringUtil.isMac(),
                (Main.game.bgMusic !== null && !Main.game.bgMusic.paused),
                (checked: boolean) => {

                    DebugLog.sound.log('Toggle bg music to [' + String(checked) + ']');

                    Main.game.toggleBgMusic(checked);
                }
            )
        }

        { false && SiteContentFactory.createSpacerVertical() }
        { false && <div>
            {
                SiteContentFactory.createParagraph(
                    'Version: <span class=\'special\'>1.0.0-rc</span> (release candidate)',
                    'right'
                )
            }
            { /* SiteContentFactory.createProgress('line', 100.00) */ }
        </div> }

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

        { StringUtil.isMobile() && SiteContentFactory.createSpacerVertical() }
        { StringUtil.isMobile() && <div>
            {
                SiteContentFactory.createButton(
                    'right',
                    'Dismiss Sider',
                    'primary',
                    '',
                    () => {
                        for (const trigger of Main.game.level.siteTriggers) {
                            trigger.dismiss = true;
                        }
                    },
                    'Dismiss Sider'
                )
            }
        </div>
        }

    </div>;
}
