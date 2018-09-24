import React, {Component} from "react";
import styled from "styled-components";

const InputContainer = styled.div`
    width: 100%;
`;

const StyledInput = styled.input`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  padding: 0;
  color: #7135EF;
  height: 50px;
  line-height: 30px;
  border: none;
`;

export default class Input extends Component {
    render() {
        const {errorText, ...props} = this.props;
        return <InputContainer {...props}>
            <StyledInput/>
        </InputContainer>
    }
}