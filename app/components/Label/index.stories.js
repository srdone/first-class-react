import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Label from './index';

storiesOf('Label', module)
  .add('basic', () => (
    <Label>My Label</Label>
  ));
