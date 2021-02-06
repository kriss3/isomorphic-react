import React from 'react';
import TagsList from './TagsList';
import renderer from 'react-test-renderer';


describe('The Tags List', ()=>{
    it('renders as expected', ()=>{
        const tree = renderer
        .create(<TagsList tags={[`css`,`html`,`swift`]}/>)
        .toJSON();

        expect(tree).toMatchSnapshot();
    });
});