import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import H1 from './index';

storiesOf('Headings', module)
  .add('H1', () => (
    <H1>The quick brown fox jumped over the lazy dog</H1>
  ));