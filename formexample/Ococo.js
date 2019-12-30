import React from 'react';
import {
    BrowserRouter as Router,
    Switch, Redirect, Route
} from "react-router-dom";
import LoginSella from './LoginSella';
import {Register} from './Register';
import HomePage from './HomePage';

class Ococo extends React.Component {
    render() {
        return (
            <div>

                <Router>
                    <Switch>

                            <Route path="/homepage" component={HomePage} /> 
                        <Route path="/register" component={Register} />  
                        <Route path="/" component={LoginSella} />
                        <Redirect from="*" to="/" />
                    </Switch>

                </Router>
            </div>
        );
    }

}
export default Ococo;