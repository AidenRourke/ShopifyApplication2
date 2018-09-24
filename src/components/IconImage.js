import React, { Component } from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  height: 13px;
  width: 13px;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;  
`;

const Circle = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background: #e4d2ff;
  margin: 0 10px;
`;

export default class IconImage extends Component {
    render() {
        return <Circle>
            <StyledImage {...this.props}/>
        </Circle>
    }
}