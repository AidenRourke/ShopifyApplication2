import React, {Component} from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  padding: 0;
  color: #7e24fa;
  height: 50px;
  line-height: 30px;
  border: none;
  ::placeholder {
    color: #caaef2;
  }
`;

export default class Input extends Component {
    render() {
        const {errorText, value, ...props} = this.props;
        return <StyledInput {...props}/>;
    }
}