import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';

import { translationMessages } from '../app/i18n';

import theme from '../app/theme';

const DEFAULT_LOCALE = 'en';

addDecorator((story) => (
  <IntlProvider locale={DEFAULT_LOCALE} messages={translationMessages[DEFAULT_LOCALE]}>
    <ThemeProvider theme={theme}>
      { story () }
    </ThemeProvider>
  </IntlProvider>
))

const req = require.context('../app', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
