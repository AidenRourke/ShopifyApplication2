import React, { Component } from "react";
import styled from "styled-components";
import acmestackIcon from "../svg/logo-acmestack.svg"

const LogoContainer = styled.div`
   text-align: center;
   margin-top: 200px;
   @media only screen and (max-width: 768px) {
     margin-top: 50px;
   }
`;

const LogoText = styled.div`
   font-size: 25px;
   font-weight: bold;
   color: #f4ecff;
   margin-bottom: 25px;
`;

const LogoImage = styled.img`
   background-color: #f4ecff;
   padding: 10px;
   height: 50px;
   width: 50px;
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