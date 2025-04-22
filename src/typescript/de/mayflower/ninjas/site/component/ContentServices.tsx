import * as React  from 'react';
import { SiteContentFactory } from '../SiteContentFactory';
import { Debug } from '../../base/Debug';
import { SiteContent } from '../SiteContentSystem';

/** ********************************************************************************************************************
*   A React component with the content for the 'services' page.
***********************************************************************************************************************/
export const ContentServices: ()=> JSX.Element = (): JSX.Element => {
    Debug.react.log('ContentServices.render() being invoked');

    return <div>

        { SiteContentFactory.createStepIndicator(SiteContent.CONTENT_SERVICES) }
        { SiteContentFactory.createDivider() }
        { SiteContentFactory.createHeadline('Our Services') }
        { SiteContentFactory.createSpacerVertical() }
        {
            SiteContentFactory.createParagraph(
                'We offer our services for the following platforms. Please click on one of the tabs to read '
                + 'more about our skills and experiences:'
            )
        }
        { SiteContentFactory.createSpacerVertical() }
        {
            SiteContentFactory.createTabbedPane(
                0,
                [
                    <span>{ SiteContentFactory.createIcon('desktop') } Enterprise</span>,
                    <span>{ SiteContentFactory.createIcon('cloud') } Web</span>,
                    <span>{ SiteContentFactory.createIcon('mobile') } Mobile</span>,
                ],
                [
                    <div>
                        <h3>Desktop &amp; Enterprise</h3>
                        {
                            SiteContentFactory.createParagraph(
                                'Originally started as a purely Java development company over 16 years ago, '
                                + 'today \'Coding Ninjas\' maintains the traditions of desktop software '
                                + 'development while nurturing experience in the web and mobile application '
                                + 'development areas.<br>'
                                + '<br>'
                                + 'We offer platform-specific and cross-platform desktop app development '
                                + 'services to help you turn a solid software idea into a market sensation, '
                                + 'as well as couple your manufactured devices and equipment with '
                                + 'complementary software to gain customer loyalty and outdo competitors.'
                            )
                        }
                        { SiteContentFactory.createSpacerVertical() }
                        { SiteContentFactory.createBadge('JAVA', 'white', '#ff3568') }
                        {
                            SiteContentFactory.createParagraph(
                                '&bull; Java Micro Edition (J2ME)<br>'
                                + '&bull; Java Desktop applications (J2SE)<br>'
                                + '&bull; Java Enterprise Edition (J2EE)<br>'
                                + '&bull;  Spring Boot'
                            )
                        }
                    </div>,
                    <div>
                        <h3>Web Development</h3>
                        {
                            SiteContentFactory.createParagraph(
                                'Our dedicated web development experts team bring in over 16 years of '
                                + 'domain experience. Over 200 web applications delivered by \'Coding Ninjas\' '
                                + 'power businesses across various industries.<br>' +
                                '<br>' +
                                'Be it custom web app development from scratch, migration from your legacy '
                                + 'application to a new solution, or enhancement of the front-end '
                                + 'functionality, we are eager to accept your web development challenge '
                                + 'staying within time and budget limits.'
                            )
                        }
                        { SiteContentFactory.createSpacerVertical() }
                        { SiteContentFactory.createBadge('TypeScript & PHP', 'white', '#6799ff') }
                        {
                            SiteContentFactory.createParagraph(
                                '&bull; React, Ant Design, Node.js<br>'
                                + '&bull; Custom JavaScript &amp; PHP Applications<br>'
                                + '&bull; Symfony 2-4<br>'
                                + '&bull; Zend Framework 1-3<br>'
                                + '&bull; Joomla, WordPress, Shopware'
                            )
                        }
                    </div>,
                    <div>
                        <h3>Mobile Apps</h3>
                        {
                            SiteContentFactory.createParagraph(
                                'Over the past decade, \'Coding Ninjas\' has successfully carried out over 75 '
                                + 'mobile projects, providing consulting and mobile app development '
                                + 'services for different platforms and various industries.<br>'
                                + 'Make yourself at home on any mobile platform or reach out to multiple '
                                + 'platforms at once.<br>'
                            )
                        }
                        { SiteContentFactory.createSpacerVertical() }
                        { SiteContentFactory.createBadge('MOBILE', 'white', '#50d882') }
                        {
                            SiteContentFactory.createParagraph(
                                'We offer native mobile development for:<br>'
                                + '&bull; iOS<br>'
                                + '&bull; Android<br>'
                                + '&bull; Windows Phone<br>'
                                + '<br>'
                                + 'To projects aiming to hit multiple platforms, we suggest cross-platform'
                                + ' development on:<br>'
                                + '&bull; Cordova/PhoneGap<br>'
                                + '&bull; Xamarin<br>'
                                + '&bull; React Native<br>'
                            )
                        }
                    </div>,
                ]
            )
        }

    </div>;
}
