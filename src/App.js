import React, { Component } from 'react';
import styled from "styled-components";
import LoginView from "./LoginView"


const Root = styled.div`
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <Root>
        <LoginView/>
      </Root>
    );
  }
}

export default App;
