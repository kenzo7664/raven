import styled from 'styled-components';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1.5rem;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1.5rem;
  outline: none;
`;

const Icon = styled.svg`
  fill: none;
  stroke: #fff;
  background-color: ${props => props.disabled && '#141518'};
  background-color: #5458f7;
  stroke-width: 2px;
  border-radius: 0.25rem;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background: ${props => (props.checked ? '#5458f7' : '#fff')};
  background-color: ${props => props.disabled && '#141518'};
  border-radius: 0.25rem;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    /* box-shadow: 0 0 0 3px pink; */
  }
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export { HiddenCheckbox, StyledCheckbox, CheckboxContainer, Icon };
