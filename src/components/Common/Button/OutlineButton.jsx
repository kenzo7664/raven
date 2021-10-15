import React from 'react';
import PropTypes from 'prop-types';
import { OutlineButtonStyle } from './style';

const OutlineButton = ({ label, onClick, disabled }) => {
  return (
    <OutlineButtonStyle
      disabled={disabled}
      onClick={!disabled ? onClick : () => {}}
    >
      {label || 'label'}
    </OutlineButtonStyle>
  );
};

OutlineButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default OutlineButton;
