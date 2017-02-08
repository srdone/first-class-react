import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Header from './index';

storiesOf('Header', module)
  .add('with text', () => (
    <Header>This is a header</Header>
  ));
