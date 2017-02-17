import React from 'react';
import { shallow } from 'enzyme';

import Label from '../index';

describe('<Label />', () => {
  it('Should render', () => {
    const renderedComponent = shallow(
      <Label />
    );
    expect(renderedComponent.find('label').node).toBeDefined();
  });
});
