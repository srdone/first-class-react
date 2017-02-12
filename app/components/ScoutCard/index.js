/**
*
* Scout
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import H4 from 'components/H4';
import Header from 'components/Header';
import Wrapper from './Wrapper';
import messages from './messages';

function ScoutCard(props) {
  if (!props.scout) {
    return null;
  }

  return (
    <Wrapper>
      <Header>
        {props.scout.name.first} {props.scout.name.last}
      </Header>
      <H4>
        <FormattedMessage {...messages.rank} />
        {': '}{props.scout.rank}
      </H4>
    </Wrapper>
  );
}

ScoutCard.propTypes = {
  scout: React.PropTypes.shape({
    name: React.PropTypes.shape({
      first: React.PropTypes.string,
      last: React.PropTypes.string,
    }),
    rank: React.PropTypes.string,
  }),
};

export default ScoutCard;
