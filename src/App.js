import React, {Component} from 'react';
import styled from "styled-components";
import LoginView from "./LoginView"
import LogoView from "./LogoView"

const Root = styled.div`
  height: 100%;
`;

class App extends Component {
    state = {
        submitted: false
    };

    render() {
        return (
            <Root>
                {this.state.submitted ?
                    <SubmittedView on
                    :
                    <LoginView onSubmit={() => this.setState({submitted: true})}/>
                }
                <LogoView/>
            </Root>
        );
    }
}

export default App;
