import * as React  from 'react';
import {Debug} from "../../base/Debug";
import {SiteContentFactory} from "../SiteContentFactory";
import {SiteContent} from "../SiteContentSystem";

/** ********************************************************************************************************************
*   A React component with the content for the 'timeline' page.
***********************************************************************************************************************/
export const ContentTimeline :() => JSX.Element = () :JSX.Element =>
{
    Debug.react.log( 'ContentTimeline.render() being invoked' );

    return <div>

        { SiteContentFactory.createStepIndicator( SiteContent.CONTENT_TIMELINE ) }
        { SiteContentFactory.createDivider() }
        { SiteContentFactory.createHeadline( 'Project Timeline' ) }
        { SiteContentFactory.createSpacerVertical() }
        { SiteContentFactory.createParagraph( 'See the project\'s evolution timeline:' ) }
        { SiteContentFactory.createSpacerVertical() }
        {
            SiteContentFactory.createTimeline
            (
                [
                    '#1890ff',
                    'red',
                    '#1890ff',
                    'green',
                ],
                [
                    <div>
                        <p>2017-08-07: Matter.js minimal primer</p>
                        <p>2017-09-06: Completed primer demo</p>
                        <p>2017-09-14: Completed PoC</p>
                    </div>,

                    <p>2018-01-24 (MayDay): Reactivated Matter.js primer as 'Coding Ninjas'</p>,

                    <p>2018-02-23 (MayDay): Completed minimal 'Coding Ninjas' Demo</p>,

                    <div>
                        <p>2018-03-04: Completed alpha v.0.1</p>
                        <p>2018-03-05: Completed beta v.0.2</p>
                        <p>2018-03-08: Completed 'Coding Ninjas' MVP v.1.0</p>
                    </div>,
                ]
            )
        }

    </div>;
}
