/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  username: {
    id: 'app.components.HomePage.username',
    defaultMessage: 'Username',
  },
  password: {
    id: 'app.components.HomePage.password',
    defaultMessage: 'Password',
  },
  loading: {
    id: 'app.components.HomePage.loading',
    defaultMessage: 'Loading...',
  },
  loggedIn: {
    id: 'app.components.HomePage.loggedIn',
    defaultMessage: 'Logged in as: ',
  },
});
