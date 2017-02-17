import React from 'react';
import { shallow } from 'enzyme';

import Input from '../index';

describe('<Input />', () => {
  it('Should render', () => {
    const renderedComponent = shallow(
      <Input />
    );
    expect(renderedComponent.find('input').node).toBeDefined();
  });
});
