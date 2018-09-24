import React, {Component} from "react";
import styled from "styled-components";

import {Button, Checkbox, Input} from "../components";

const LoginFormContainer = styled.div`
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;  
  height: 325px;
  width: 300px;
`;

const InputContainer = styled.div`
  width: 100%;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 5px;
`;

const CheckboxContainer = styled.div`
  margin-top: 150px;
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