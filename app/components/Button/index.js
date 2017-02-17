/**
*
* Button
*
*/

import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid black;
  border-radius: .2em;
  padding: .8em 1.5em;
  font-size: .7em;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(props) => props.primary && props.theme.default};
  background-color: ${(props) => props.primary ? props.theme.primary : props.theme.default};
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.75);
    background-color: ${(props) => props.primary ? props.theme.primaryHovered : props.theme.defaultHovered};
  }
`;

export default Button;
