import React from 'react';
import { connect } from 'react-redux';


class HomePage extends React.Component {

    render(){
        const { user } = this.props;
        return(

            <h1>Hi {user.username}!</h1>
           
        );

        
    }
}

function mapState(state) {
    console.log('my state is ',state.username);
    const { user } = state.login;
     return {user};
      
  }
  
const actionCreators = {
success: {}

};
export default connect(mapState, actionCreators)(HomePage);