import React, {Component} from "react";
import styled from "styled-components";

import {Button, Checkbox, Input} from "../components";

const LoginFormContainer = styled.div`
  margin: auto;
  width: 300px;
  vertical-align: middle;
`;

const InputContainer = styled.div`
  width: 100%;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 5px;
`;

const CheckboxContainer = styled.div`
  margin-top: 100px;
  width: 300px;
  text-align: center;
`

export default class LoginForm extends Component {

    render() {
        return <LoginFormContainer>
            <InputContainer>
                <Input style={{marginBottom: "2px"}} placeholder="username"/>
                <Input type="password" placeholder="password"/>
                <Button>login</Button>
            </InputContainer>
            <CheckboxContainer>
                <Checkbox type="checkbox" label="remember me"/>
            </CheckboxContainer>
        </LoginFormContainer>
    }
}