/**
*
* TextInput
*
*/

// import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-size: 1em;
  padding: 0.5em;
  margin: 0.5em 0;
  border: 1px solid black;
  border-radius: 0.2em;

  &:focus {
    background-color: rgba(200, 235, 255, 0.2);
    outline: none;
  }

  &:hover, &:focus {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;

export default Input;
