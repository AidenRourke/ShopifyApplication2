import React, {Component} from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  color: #7e24fa;
  height: 50px;
  line-height: 30px;
  border: 2px solid ${props => props.error ? "#ff0051" : "#fff"};
  ::placeholder {
    color: #caaef2;
  }
  
`;

export default class Input extends Component {
    render() {
        const {...props} = this.props;
        return <StyledInput {...props}/>;
    }
}