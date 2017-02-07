import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import H4 from './index';

storiesOf('Headings', module)
  .add('H4', () => (
    <H4>The quick brown fox jumped over the lazy dog</H4>
  ));