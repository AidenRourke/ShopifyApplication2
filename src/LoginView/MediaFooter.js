import React, {Component} from "react";
import styled from "styled-components";

import {IconImage} from "../components";

import facebookIcon from "../svg/logo-facebook.svg";
import googleIcon from "../svg/logo-google.svg";
import twitterIcon from "../svg/logo-twitter.svg";

const Footer = styled.div`
  text-align: center;
  position: absolute;
  bottom: 40px;
  width: 100%;  
  color: #7e24fa;
`;

const FooterText = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
`;

export default class MediaFooter extends Component {
    render() {
        return <Footer>
            <FooterText><i>or login with</i></FooterText>
            <IconImage src={facebookIcon}/>
            <IconImage src={googleIcon}/>
            <IconImage src={twitterIcon}/>
        </Footer>
    }
}