import React from 'react';
import PropTypes from 'prop-types';
import { SolidButtonStyle } from './style';

const SolidButton = ({ label, onClick, disabled }) => {
  return (
    <SolidButtonStyle
      disabled={disabled}
      onClick={!disabled ? onClick : () => {}}
    >
      {label || 'label'}
    </SolidButtonStyle>
  );
};

SolidButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default SolidButton;
