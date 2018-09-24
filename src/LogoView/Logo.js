import React, { Component } from "react";
import styled from "styled-components";
import acmestackIcon from "../svg/logo-acmestack.svg"

const LogoContainer = styled.div`
   text-align: center;
`;

const LogoText = styled.div`
   font-size: 30px;
   color: #fff;
   margin-bottom: 25px;
`;

const LogoImage = styled.img`
   background-color: #fff;
   padding: 10px;
   height: 60px;
   width: 60px;
   border: 2px solid #caaef2;
   border-radius: 10px;
`;

export default class LogoView extends Component {
    render() {
        return <LogoContainer>
            <LogoText>AcmeStack</LogoText>
            <LogoImage src={acmestackIcon}/>
        </LogoContainer>
    }
}