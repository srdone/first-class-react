/**
*
* Button
*
*/

import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid black;
  border-radius: .2em;
  padding: .5em;
  font-size: 1em;
  color: ${props => props.primary && 'white'};
  background-color: ${props => props.primary ? 'hsl(203, 89%, 53%)' : 'hsl(0, 0%, 100%)'};
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;

  &:hover {
    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.75);
    background-color: ${props => props.primary ? 'hsl(203, 89%, 50%)' : 'hsl(0, 0%, 99%)'};
  }
`

export default Button;
