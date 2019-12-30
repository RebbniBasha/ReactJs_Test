import React from 'react';
import {Link } from "react-router-dom";
import { connect } from 'react-redux';
import  { userActions }  from './success.action';



class LoginSella extends React.Component {
   
        constructor(props) {
          super(props);
          this.state ={
            user :{
                    username:'',
                    password:''
                  }

          }
          this.handleSubmit = this.handleSubmit.bind(this);
          this.handleChange = this.handleChange.bind(this);
        }
      
        handleSubmit(e) {
          e.preventDefault();
          const {user} = this.state;
          alert('The value is: ' + user.username);
          alert('The value is: ' + user.password);
          this.props.success(user);
        
        }
        handleChange(e){
          e.preventDefault();
           const { name, value } = e.target;
          
        
            this.setState({ [name]: value });
      
    
        }

      
        render() {
          
          return (
           
             <div className="col-md-6 col-md-offset-3">

           <h2 class="well">Welcome To OCOCO Bank</h2>
            <div class="container ">
            <h3 class="form-group" >Login</h3>
            <form onSubmit={this.handleSubmit}>
              <label> 
               <h4>username:</h4> 
                <input type="text" name="username" className="form-control"  onChange={this.handleChange}/>
              </label><br />
              <label> 
               <h4>password:</h4> 
                <input type="text" name="password" className="form-control" onChange={this.handleChange}/>
              </label><br />
              <input type="submit" class="btn" /><br />

              
              <Link to="/register" className="btn btn-link">new user register here</Link>
            
             
            </form>
            </div>
            </div>
          );
        }
      }
      function mapState(state) {
      const{logging} = state.login
       return {logging} ;
        
    }
    
const actionCreators = {
  success: userActions.success
  
};
export default connect(mapState, actionCreators)(LoginSella);