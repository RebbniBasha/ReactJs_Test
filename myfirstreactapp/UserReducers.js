import React from 'react'
import * as actionType from './ActionType';
//import { combineReducers } from 'redux';

const intialState = {
    isUserValid: '',
    errorMessage :'',
    user: {
        profile: "",
        userName: "",
        pwd: ""
    }
}

function userReducer (state = intialState, action) {

    switch (action.type) {
    case actionType.USER_REQUEST:
      return {
          user:action.payload
        };
    case actionType.USER_SUCESS:
    return {
        isUserValid:action.payload
    };
    case actionType.USER_FAILURE:
    return {
        isUserValid:action.payload,
        errorMessage :action.errorMessage
    };
    default:
      return state
  }
}

export default userReducer