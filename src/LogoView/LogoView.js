import React, { Component } from "react";
import styled from "styled-components";

import Logo from "./Logo";

const LogoViewContainer = styled.div`
   width: 50%;
   float: right;
   background-color: #7e24fa;
   height: 100%;
   position: relative;
   @media only screen and (max-width: 768px) {
     width: 100%;
     height: 300px;
   }
`;

export default class LogoView extends Component {
    render() {
        return <LogoViewContainer>
            <Logo/>
        </LogoViewContainer>
    }
}