import React, {Component} from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  height: 50px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  background-color: #7e24fa;
  color: white;
  cursor: pointer; 
`;

export default class Button extends Component {
    render() {
        const { children, ...props } = this.props;

        return <ButtonContainer>
            {children}
        </ButtonContainer>
    }
}