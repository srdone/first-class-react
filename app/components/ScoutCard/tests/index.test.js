import React from 'react';
import { shallow } from 'enzyme';

import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import H4 from 'components/H4';
import ScoutCard from '../index';
import messages from '../messages';

describe('<ScoutCard />', () => {
  let scout;

  beforeEach(() => {
    scout = {
      name: {
        first: 'Stephen',
        last: 'Done',
      },
      rank: 'Eagle',
    };
  });

  it('should render the scout name', () => {
    const renderedComponent = shallow(
      <ScoutCard scout={scout} />
    );

    expect(renderedComponent.contains(
      <H1>
        {scout.name.first} {scout.name.last}
      </H1>
    )).toBe(true);
  });

  it('should render the scout rank', () => {
    const renderedComponent = shallow(
      <ScoutCard scout={scout} />
    );

    expect(renderedComponent.contains(
      <H4>
        <FormattedMessage {...messages.rank} />
        {': '}{scout.rank}
      </H4>
    ));
  });

  it('should not render anything if scout is undefined', () => {
    const renderedComponent = shallow(
      <ScoutCard />
    );

    expect(renderedComponent.html()).toBe(null);
  });
});
