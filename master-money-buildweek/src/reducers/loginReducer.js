import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions';

const initialState =  {
    loggingIn: false,
    token: localStorage.getItem('token'),
    error: ''
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                error: ''
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                token: action.payload,
                error: ''
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn:false,
                error: action.payload
            }
        
        default:
            return state;
    }
}