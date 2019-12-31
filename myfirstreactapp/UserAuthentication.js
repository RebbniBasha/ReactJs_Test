import React from 'react'
import * as actionType from './ActionType'
//import * as RestCall from './RestCalls'

export function userAuthentication(user) {

    let isUserValid = '';
    let erroMessage  = '';

    return dispatch => {
       
        dispatch(request(user));
        dispatch(success());
        //const response = dispatch(RestCall.callToRestApi);

        //const response = 200;

        //if(someresponse){
            //validate and set the state error message
        //}

        if (true) {
            return dispatch => {
                dispatch(success())
            }
        }

        function request(user) {
            return {
                type: actionType.USER_REQUEST,
                payload: user
            }
        }

        function success() {
            return {
                type: actionType.USER_SUCESS,
                payload : 'hello'
            }
        }

        function Failure(res) {
            return {
                type: actionType.USER_FAILURE,
                payload : false,
                errorMessage : erroMessage
            }
        }
    }

}
