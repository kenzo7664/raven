import React from "react";

import { TextfieldStyle } from "./style";

const Textfield = ({
  type = "text",
  label,
  value,
  onChange,
  success,
  error,
}) => (
  <TextfieldStyle
    type={type}
    value={value}
    success={success}
    error={error}
    placeholder={label}
    onChange={(e) => onChange && onChange(e.target.value)}
  />
);

export default Textfield;
