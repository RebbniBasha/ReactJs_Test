import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import './polyfills.js';
//import MyApp from './MyApp.js'
import MyInfo from './test.js'
import {Component} from 'react'
import 'react-app-polyfill/ie11';



class CustomerDetails extends Component{
     
    constructor(props){
        super(props);
        this.state = {
            values:props
        } 
        
    }

    render(){

        console.info(this.state);

        return(
            <div>
            <h1>Hello : {this.state.values.customer.name}</h1>
            </div>
        )
    }
    }


class Calaculation extends Component{

    constructor(){

        super();
        this.state = {
            name:"salary",
            age:26
        }
    }

    render(){

            let name ;

            if(this.state.name ==='salary'){
                name = 'Shaikrb';
                console.info("in if block.")
            }

        return(
            <div>
            <h1>Hello World! {name}</h1>
            <CustomerDetails customer={this.state}/>

            </div>
        )
    }
}

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<MyApp />,document.getElementById('root'))
//ReactDOM.render(<MyInfo />,document.getElementById('root'));
ReactDOM.render(<Calaculation />,document.getElementById('root'))
serviceWorker.unregister();