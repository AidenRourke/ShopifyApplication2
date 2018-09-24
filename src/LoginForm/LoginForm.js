import React, {Component} from "react";
import styled from "styled-components";

import {Button, Input} from "../components";

const LoginFormContainer = styled.div`
  margin: auto;
  width: 300px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 5px;
`;

export default class LoginForm extends Component {

    render() {
        return <LoginFormContainer>
            <Input style={{borderBottom: "2px solid transparent"}}/>
            <Input/>
            <Button>login</Button>
        </LoginFormContainer>
    }
}