import React, { Component } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import MediaFooter from "./MediaFooter";

const LoginViewContainer = styled.div`
   width: 50%;
   float: left;
   height: 100%;
   position: relative;
   @media only screen and (max-width: 768px) {
     width: 100%;
     height: 300px;
   }
`;

export default class LoginView extends Component {
    render() {
        return <LoginViewContainer>
            <LoginForm onSubmit={this.props.onSubmit}/>
            <MediaFooter/>
        </LoginViewContainer>
    }
}