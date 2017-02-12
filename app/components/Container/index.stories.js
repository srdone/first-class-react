import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Container from './index';

storiesOf('Container', module)
  .add('basic', () => (
    <Container />
  ));
