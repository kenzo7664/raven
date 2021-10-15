import React from 'react';
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon
} from './styles';

const Checkbox = ({ checked = false, toggleChecked, disabled }) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox
        checked={checked}
        onChange={!disabled ? toggleChecked : (e) => {}}
      />
      <StyledCheckbox checked={checked} disabled={disabled}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

export default Checkbox;
