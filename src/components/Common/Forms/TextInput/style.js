import styled from "styled-components";

const TextfieldStyle = styled.input`
  width: 350px;
  height: 49px;
  font-size: 16px;
  color: #fff;
  background: #141518;
  border: 1.5px solid #47484a;
  border: ${(props) => props.success && "1.5px solid #5458f7"};
  border: ${(props) => props.error && " 1.5px solid #f03d3e"};
  border-radius: 6px;
  outline: 0;
  text-indent: 16px;

  &:focus {
    border-color: #848486;
  }
  ::placeholder {
    color: ${(props) => (props.success ? "#fff" : "#848486")};
    color: ${(props) => (props.error ? "#fff" : "#848486")};
  }
`;

export { TextfieldStyle };
