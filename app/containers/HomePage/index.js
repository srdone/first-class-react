/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Label from 'components/Label';
import Input from 'components/Input';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';

import { login } from 'containers/App/actions';
import {
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectLoggedIn,
} from 'containers/App/selectors';

import { changeUsername, changePassword } from './actions';
import { makeSelectUsername, makeSelectPassword } from './selectors';

import messages from './messages';
import Wrapper from './Wrapper';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <form onSubmit={this.props.onSubmitForm}>
        <Wrapper>
          <Label htmlFor="username">
            <FormattedMessage {...messages.username} />
          </Label>
          <Input
            id="username"
            value={this.props.username}
            onChange={this.props.onChangeUsername}
          />
          <Label htmlFor="password">
            <FormattedMessage {...messages.password} />
          </Label>
          <Input
            id="password"
            type="password"
            value={this.props.password}
            onChange={this.props.onChangePassword}
          />
          <ButtonGroup>
            <Button primary type="submit">Log In</Button>
          </ButtonGroup>
        </Wrapper>
      </form>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  loggedIn: React.PropTypes.bool,
  currentUser: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
  password: React.PropTypes.string,
  onChangePassword: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }
      dispatch(login());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  password: makeSelectPassword(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  loggedIn: makeSelectLoggedIn(),
  currentUser: makeSelectCurrentUser(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
