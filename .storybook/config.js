import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';
import { IntlProvider } from 'react-intl';

import { translationMessages } from '../app/i18n';

const DEFAULT_LOCALE = 'en';

addDecorator((story) => (
  <IntlProvider locale={DEFAULT_LOCALE} messages={translationMessages[DEFAULT_LOCALE]}>
    { story () }
  </IntlProvider>
))

const req = require.context('../app', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
