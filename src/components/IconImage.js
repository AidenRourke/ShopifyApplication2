import React, { Component } from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  height: 15px;
  width: 15px;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;  
`;

const Circle = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: #caaef2;
  margin: 0 10px;
`;

export default class IconImage extends Component {
    render() {
        return <Circle>
            <StyledImage {...this.props}/>
        </Circle>
    }
}