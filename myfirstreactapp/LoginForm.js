import React, { Component } from 'react'
import { connect } from 'react-redux';
import {userAuthentication} from './UserAuthentication'

const intialState = {
    isUserValid: '',
    errorMessage :'',
    user: {
        profile: "",
        userName: "",
        pwd: ""
    }
}

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = intialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        const { user } = this.state;
        this.setState({
            user :{
            ...user,
            [name]: value
        }})
    }

    handleSubmit(event) {
        event.preventDefault();
        const { user } = this.state;
        this.props.userAuthentication(user);
    }

    render() {
console.log("121212", this.props);

        return (

            <div className="container">
                <h2>Login form</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="form-group" >
                                <select className="form-control" name="profile" onChange={this.handleChange}>
                                    <option value="">-- select user --</option>
                                    <option value="user">User</option>
                                    <option value="employee">Employee</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label >User:</label>
                                <input type="text" className="form-control" placeholder="Enter User" onChange={this.handleChange} name="userName" />
                            </div>
                            <div className="form-group">
                                <label >Password:</label>
                                <input type="password" className="form-control" placeholder="Enter password" onChange={this.handleChange} name="pwd" />
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" name="remember" /> Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
                <hr/>
                <p>Profile :{this.props.state.user.profile}</p>
                <p>isUserValid :{this.props.state.isUserValid}</p>
                <p>userName :{this.props.state.user.userName}</p>
                <p>pwd :{this.props.state.user.pwd}</p>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    state :state
})

/*const mapDispatchToProps = (dispatch) => ({  // internal work of mapDispatchToProps function
    userAuthentication : () => (dispauserAuthentication())
});*/

const mapDispatchToProps = {
    userAuthentication
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)