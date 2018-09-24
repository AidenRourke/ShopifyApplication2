import React, {Component} from "react";
import styled, { keyframes } from "styled-components";

import loadingIcon from "../svg/icon-loading.svg";

const ButtonContainer = styled.button`
  height: 50px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  background-color: #7e24fa;
  color: white;
  cursor: pointer; 
  box-sizing: border-box;
`;

const rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Progress = styled.img`
  animation: ${rotate360} 1s infinite linear;
  width: 20px;
  height: 20px;
`;

export default class Button extends Component {
    render() {
        const {children, loading, ...props} = this.props;

        return <ButtonContainer {...props}>
            {loading ? <Progress src={loadingIcon}/> : children}
        </ButtonContainer>
    }
}