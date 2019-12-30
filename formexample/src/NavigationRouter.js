import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';


function NavigationRouter(){

    return(

        <Router>
        <div>
          <h2>Welcome to Centrico</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/home'} className="nav-link"> Home </Link></li>
            <li><Link to={'/services'} className="nav-link">Services</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/home' component={Home} />
              <Route path='/services' component={Services} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    )
}

export default NavigationRouter