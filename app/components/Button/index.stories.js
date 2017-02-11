import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Button from './index';

storiesOf('Button', module)
  .add('basic', () => (
    <Button>Submit</Button>
  ))
  .add('Primary', () => (
    <Button primary>Submit</Button>
  ));
