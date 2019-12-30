import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Account from './Account'

class Services extends Component {
    render() {
        return (
            <div>
                <Router>
                    <ul>
                        <li><Link to='./account'>Account</Link></li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact path='/account' component={Account} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Services