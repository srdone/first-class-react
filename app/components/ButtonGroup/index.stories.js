import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ButtonGroup from './index';

storiesOf('ButtonGroup', module)
  .add('basic', () => (
    <ButtonGroup />
  ));
