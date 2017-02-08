import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';

describe('<Header />', () => {
  it('should render its children', () => {
    const children = 'Test text';
    const renderedComponent = shallow(
      <Header>{children}</Header>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
