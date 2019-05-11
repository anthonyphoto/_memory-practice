import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import LandingPage from './landing-page';
import Intro from './intro';
import Intro2 from './intro2';

export class App extends React.Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/intro" component={Intro} />
                <Route exact path="/intro2" component={Intro2} />
            </div>
        );
    }
}

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect()(App));
