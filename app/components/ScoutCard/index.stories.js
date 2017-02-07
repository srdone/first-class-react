import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ScoutCard from './index';

storiesOf('ScoutCard', module)
  .add('with data', () => {
    const scout = {
      name: {
        first: 'Stephen',
        last: 'Done'
      },
      rank: 'Eagle'
    }

    return <ScoutCard scout={scout} />
  });