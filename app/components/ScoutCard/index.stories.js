import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ScoutCard from './index';

storiesOf('ScoutCard', module)
  .add('with data', () => {
    const scout = {
      name: {
        first: 'Stephen',
        last: 'Done',
      },
      rank: 'Eagle',
    };

    return <ScoutCard scout={scout} />;
  });
