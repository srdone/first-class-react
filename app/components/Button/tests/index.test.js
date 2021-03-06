import React from 'react';
import { shallow } from 'enzyme';

import Button from '../index';

describe('<Button />', () => {
  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <Button>{children}</Button>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
