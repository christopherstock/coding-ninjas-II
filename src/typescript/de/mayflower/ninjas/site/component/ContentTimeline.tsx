
import * as React  from 'react';
import * as ninjas from '../../ninjas';

/** ****************************************************************************************************************
    *   A React component with the content for the 'timeline' page.
    *******************************************************************************************************************/
export const ContentTimeline :() => JSX.Element = () :JSX.Element =>
{
    ninjas.Debug.react.log( 'ContentTimeline.render() being invoked' );

    return <div>

        { ninjas.SiteContentFactory.createStepIndicator( ninjas.SiteContent.CONTENT_TIMELINE ) }
        { ninjas.SiteContentFactory.createDivider() }
        { ninjas.SiteContentFactory.createHeadline( 'Project Timeline' ) }
        { ninjas.SiteContentFactory.createSpacerVertical() }
        { ninjas.SiteContentFactory.createParagraph( 'See the project\'s evolution timeline:' ) }
        { ninjas.SiteContentFactory.createSpacerVertical() }
        {
            ninjas.SiteContentFactory.createTimeline
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
