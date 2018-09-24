import React, { Component } from "react";
import styled from "styled-components";

const CheckboxContainer = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: #7e24fa;
  cursor: pointer;
`;

export default class Checkbox extends Component {
    render() {
        const { label, ...props } = this.props;

        return <CheckboxContainer>
            <input {...props}/>
            {label}
        </CheckboxContainer>
    }
}