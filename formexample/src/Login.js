import React, { Component } from 'react'
import axios from 'axios'
import NavigationRouter from './NavigationRouter'

const intialState = {
    isLoginValid : false,
    user: "",
    userName: "",
    password: "",
    persons: [],
    errorMessages: {
        userError: "",
        nameError: "",
        passwordError: ""
    }
}

class Login extends Component {

    constructor() {
        super();
        this.state = intialState;
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleClick(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
        console.info('in componentDidMount')
    }

    validate() {

        if (!this.state.user) {
            this.setState({
                errorMessages: {
                    userError: "Please select one User."
                }
            })

            return false
        }

        if (this.state.user == 'employee') {
            this.setState({
                errorMessages: {
                    userError: "You dont have permisssion."
                }
            })
            return false
        }


        if (!this.state.userName) {
            this.setState({
                errorMessages: {
                    nameError: "Please Enter UserName."
                }
            })
            return false
        }

        if (!this.state.password) {
            this.setState({
                errorMessages: {
                    passwordError: "Please Enter Password."
                }
            })
            return false
        }

        if (this.state.userName.length < 6) {
            this.setState({
                errorMessages: {
                    nameError: "UserName length must not be less than 6."
                }
            })
            return false
        }

        if (this.state.password.length < 8) {
            this.setState({
                errorMessages: {
                    passwordError: "Password length must not be less than 8."
                }
            })
            return false
        }

        return true

    }

    handleSubmit(event) {

        event.preventDefault()

        const isValid = this.validate();

        if (isValid) {

            console.info("Validation sucessfull.")

            //const url = 'https://jsonplaceholder.typicode.com/users'
            /*const url = 'http://localhost:8080/spring_curd_ope/rest/addstudent'
            axios.post(url, '', {
                params:
                {
                    name: 'rabbu',
                    age: '30'
                }
            })
             .then(res => this.setState({

                    isLoginValid :true
                }))
                .catch(
                    (error) => {
                        console.log('error');
                    }
                )
                .finally(
                    console.log('in finally block')
                )*/

                this.setState({
                    isLoginValid : true
                })

        }
    }
    render() {

        const isLoginValid = this.state.isLoginValid;
        if (isLoginValid) {
            return ( <NavigationRouter/> )
        }

        return (

            <div className=''>
                <div className='App'>
                    <img src={require('C:\\Users\\subha\\Desktop\\centrico.jpg')} className='' alt='Centrico' />
                    <div className=''>
                        <h1>Centrico</h1>
                    </div>
                        <div className='MainForm-App'>
                            <form onSubmit={this.handleSubmit}>
                                <label> Users :  </label>
                                <select name="user" value={this.state.user} onChange={this.handleClick}>
                                    <option value="">Please Choose a user</option>
                                    <option value="user">User</option>
                                    <option value="employee">Employee</option>
                                </select><span style={{ color: 'red' }}>{this.state.errorMessages.userError}</span><br />
                                <label> User Name : </label>
                                <input type='text'
                                    name='userName'
                                    value={this.state.userName}
                                    onChange={this.handleClick} />
                                <span style={{ color: 'red' }}>{this.state.errorMessages.nameError}</span>
                                <br />
                                <label> Password : </label>
                                <input type='password'
                                    name='password'
                                    value={this.state.password}
                                    onChange={this.handleClick} />
                                <span style={{ color: 'red' }}>{this.state.errorMessages.passwordError}</span>
                                <br />
                                <button>Login</button>
                            </form>
                        </div>
                </div>
            </div>
        )
    }
}

export default Login