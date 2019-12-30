import { combineReducers } from 'redux';
let user = {};
const initialState = user ? { user } : {};
 function login(state =  initialState, action) {
    switch (action.type) {
      case 'REQUEST':
        alert(action.user.username);
        return {user:action.user};
      case 'SUCCESS':
      alert(action.res.data);
        return state;
        case 'DELETE':
      
        return {};
      default:
        return state
    }
  }
  let userDetails = {};
  function register(state = {userDetails} , action) {
    switch (action.type) {
      case 'REG_SUCCESS':
        alert(action.res.pName);
        return {

          userDetails : action.res
          
        }
      case 'REG_FAIL':
        return {};
      default:
        return state
    }
  }

  const rootReducer = combineReducers({
    login,
    register
  });
  
  export default rootReducer;