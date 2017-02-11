import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Button from './index';

storiesOf('Button', module)
  .add('basic', () => (
    <Button>Test Text</Button>
  ))
  .add('Primary', () => (
    <Button primary>Test Text</Button>
  ));
