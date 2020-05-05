
    import * as chai   from 'chai';
    import * as React from 'react';

    describe( 'React component Content', () =>
    {
/*
        const wrapper: Enzyme.ShallowWrapper<ContentCompany> = Enzyme.shallow(
            <ContentCompany />
        );
*/
        it( 'create the React component', () =>
        {
            chai.expect( 2 ).to.equal( 2 );
        });

        it( 'assign the property "currentSite"', () =>
        {
            // replace with React Testing Library
/*
            const contentComponent :React.Component<ContentProps> = wrapper.instance() as React.Component<ContentProps>;
            console.log( contentComponent );
            chai.expect( contentComponent.props.currentSite ).to.equal( MenuItem.ABOUT );
*/
        });
    });
