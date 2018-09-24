import React, { Component } from 'react';
import styled from "styled-components";
import LoginForm from "./LoginForm/LoginForm"


const Root = styled.div`
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <Root>
        <LoginForm/>
      </Root>
    );
  }
}

export default App;
