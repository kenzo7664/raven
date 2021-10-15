import styled from "styled-components";

const ToggleButtonStyle = styled.div`
  width: 52px;
  background-color: ${(props) =>
    props.disabled ? "#47484a" : props.isSelected ? "#5458F7" : "#fff;"};
  cursor: pointer;
  user-select: none;
  border-radius: 16px;
  height: 24px;
  position: relative;
`;

const DialogButtonStyle = styled.div`
  cursor: pointer;
  background-color: ${(props) =>
    props.disabled ? "#595a5c" : props.isSelected ? "#fff" : "#47484a;"};
  padding: 10.7px 11px;
  margin-top: 1.4px;
  border-radius: 100%;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  left: ${(props) => (props.isSelected ? "28px" : "1.9px;")};
  transition: all 0.3s ease;
`;

export { ToggleButtonStyle, DialogButtonStyle };
