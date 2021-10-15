import styled from 'styled-components';
import { primaryFont, backgroundColor } from 'theme';

const SolidButtonStyle = styled.button`
  background-color: ${(props) => (props.disabled ? '#323594' : '#5458f7')};
  color: ${(props) => (props.disabled ? '#8486bf' : '#fff')};
  cursor: pointer;
  height: 3.5rem;
  width: 17.5rem;
  border-radius: 5px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  font-size: 1.25rem;
  font-family: ${primaryFont};
  font-weight: 700;
  line-height: 19.6px;
  outline: none;
  border: none;
  transition: 0.3s ease-out;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#323594' : '#3236de')};
  }
`;

// A new component based on SolidButton, but with some override styles
const OutlineButtonStyle = styled(SolidButtonStyle)`
  background-color: transparent;
  border: 1.5px solid ${(props) => (props.disabled ? '#323594' : '#5458f7;')};
  color: ${(props) => (props.disabled ? '#0F0F12' : '#fff')};
  &:hover {
    border-color: ${(props) => (props.disabled ? '#323594' : '#3236de;')};
    background-color: transparent;
    color: ${(props) => (props.disabled ? '#0F0F12' : '  #3236de;')};
  }
`;

// A new component based on SolidButton, but with some override styles


export { SolidButtonStyle, OutlineButtonStyle };
