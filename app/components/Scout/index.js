/**
*
* Scout
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
import H4 from 'components/H4';
import Wrapper from './Wrapper';
import messages from './messages';

function Scout(props) {
  return (
    <Wrapper>
      <H1>
        {props.scout.name.first} {props.scout.name.last}
      </H1>
      <H4>
        <FormattedMessage {...messages.rank} />
        {': '}{props.scout.rank}
      </H4>
    </Wrapper>
  );
}

Scout.propTypes = {

};

export default Scout;
