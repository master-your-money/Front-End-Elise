import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions';

const initialState =  {
    loggingIn: '',
    name: '',
    password: '',
    error: ''
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_START:
            return {
                ...state,
                loggingIn: 'true',
                name: '',
                password: '',
                error: ''
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: 'false',
                name: '',
                password: '',
                error: ''
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn:'false',
                name: '',
                password: '',
                error: action.payload
            }
        
        default:
            return state;
    }
}