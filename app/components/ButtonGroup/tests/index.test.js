import React from 'react';
import { shallow } from 'enzyme';

import ButtonGroup from '../index';

describe('<ButtonGroup />', () => {
  it('Should render its children', () => {
    const children = 'I am a child!';
    const renderedComponent = shallow(
      <ButtonGroup>{children}</ButtonGroup>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
