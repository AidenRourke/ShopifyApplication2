import React, {Component} from 'react';
import styled from "styled-components";

import LoginView from "./LoginView"
import LogoView from "./LogoView"
import SubmittedView from "./SubmittedView";

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
                <LogoView/>
                {this.state.submitted ?
                    <SubmittedView onClick={() => this.setState({submitted: false})}/>
                    :
                    <LoginView onSubmit={() => this.setState({submitted: true})}/>
                }
            </Root>
        );
    }
}

export default App;
