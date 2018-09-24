import React, { Component } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import MediaFooter from "./MediaFooter";

const LoginViewContainer = styled.div`
   width: 50%;
   float: left;
   height: 100%;
   position: relative;
`;

export default class LoginView extends Component {
    render() {
        return <LoginViewContainer>
            <LoginForm onSubmit={this.props.onSubmit}/>
            <MediaFooter/>
        </LoginViewContainer>
    }
}