import React, {Component} from "react";
import styled from "styled-components";

const SubmittedViewContainer = styled.div`
  width: 50%;
  float: left;
  background-color: #7e24fa;
  height: 100%;
  text-align: center;
  color: #fff;
  @media only screen and (max-width: 768px) {
     width: 100%;
     height: 100%;
  }
`;

const CongratulationDiv = styled.div`
  margin-top: 200px;
  @media only screen and (max-width: 768px) {
    margin: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 240px;
  }
`;

const Text = styled.div`
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: bold;
`;

const SubmitButton = styled.button`
  color: #7e24fa;
  background-color: #fff;
  cursor: pointer;
  display: block;
  margin: 200px auto 0 auto;
  width: 130px;
  height: 35px;
  border-radius: 50px;
  font-size: 16px;
  border: none;
  font-weight: bold;
`;

export default class SubmittedView extends Component {
    render() {
        return <SubmittedViewContainer>
            <CongratulationDiv>
                <Text>Congratulations</Text>
                You have successfully logged in
                <SubmitButton onClick={this.props.onClick}>sign out</SubmitButton>
            </CongratulationDiv>
        </SubmittedViewContainer>
    }
}