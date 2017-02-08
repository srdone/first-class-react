/**
*
* Header
*
*/

import React from 'react';

import Wrapper from './Wrapper';

function Header(props) {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

Header.propTypes = {
  children: React.PropTypes.node,
};

export default Header;
