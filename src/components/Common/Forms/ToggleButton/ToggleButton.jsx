import React from 'react';

import { ToggleButtonStyle, DialogButtonStyle } from './style';

const ToggleButton = ({ selected = false, toggleSelected, disabled }) => {
  return (
    <ToggleButtonStyle
      disabled={disabled}
      isSelected={selected}
      onClick={!disabled ? toggleSelected : () => {}}
    >
      <DialogButtonStyle
        disabled={disabled}
        isSelected={selected}
      ></DialogButtonStyle>
    </ToggleButtonStyle>
  );
};

export default ToggleButton;
