import React from 'react';
import renderer from 'react-test-renderer';
import BrandSelector from "./BrandSelector";

test('renders correctly', () => {
    const rendered = renderer.create(<BrandSelector/>).toJSON();
    expect(rendered).toBeTruthy();
});
