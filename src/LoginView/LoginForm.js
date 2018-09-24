import React, {Component} from "react";
import styled from "styled-components";

import {Button, Checkbox, Input} from "../components";

const LoginFormContainer = styled.div`
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;  
  height: 325px;
  width: 300px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    bottom: 178px;
  }

`;

const InputContainer = styled.div`
  border-radius: 5px;
  width: 100%;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
`;

const Error = styled.div`
  color: #ff0051;
  padding-top: 20px;
  height: 30px;
`;

const CheckboxContainer = styled.div`
  margin-top: 50px;
  width: 300px;
`;

export default class LoginForm extends Component {
    state = {
        username: "",
        password: "",
        errors: {}
    };

    handleSubmit = async () => {
        const {username, password} = this.state;
        const {onSubmit} = this.props;

        const errors = {};
        if (username.length < 8 || username.length > 24) {
            errors.username = "username must be between 8 and 24 characters";
        }
        if (password.length < 8 || username.length > 24) {
            errors.password = "password must be between 8 and 24 characters";
        }
        this.setState({errors});

        if (Object.keys(errors).length === 0) {
            this.setState({loading: true});
            setTimeout(() => {
                this.setState({loading: false});
                onSubmit();
            }, 2000)
        }
    }
    ;

    render() {
        const {username, password, errors, loading} = this.state;
        return <LoginFormContainer>
            <InputContainer>
                <Input value={username} onChange={e => this.setState({username: e.target.value})}
                       style={{borderRadius: "5px 5px 0 0", marginBottom: 1}} placeholder="username"
                       error={!!errors.username}/>
                <Input value={password} onChange={e => this.setState({password: e.target.value})}
                       type="password" placeholder="password" error={!!errors.password && !errors.username}/>
                <Button loading={loading} style={{borderRadius: "0 0 5px 5px"}} onClick={this.handleSubmit}>login</Button>
            </InputContainer>
            <Error>{errors.username || errors.password}</Error>
            <CheckboxContainer>
                <Checkbox type="checkbox" label="remember me"/>
            </CheckboxContainer>
        </LoginFormContainer>
    }
}