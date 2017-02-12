import React from 'react';
import { shallow } from 'enzyme';

import Container from '../index';

describe('<Container />', () => {
  it('should render its children', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <Container>{children}</Container>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
