import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import HomePage from '../index';
import messages from '../messages';

describe('<HomePage />', () => {
  it('should render the username message', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.username} />
    )).toEqual(true);
  });

  it('should render the password message', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.password} />
    )).toEqual(true);
  });
});
