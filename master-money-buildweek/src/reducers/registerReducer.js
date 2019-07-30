import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../actions';

const initialState = {
    registerCreate: false,
    error: ''
}

export const registerReducer = (state = initialState, action) => {
    switch(action.type){
        case REGISTER_START:
        return{
                ...state,
                registerCreate: true,
                error: ''
            }
        case REGISTER_SUCCESS:
        return{
            ...state,
                registerCreate: false,
                error: ''
        }
        case REGISTER_FAILURE:
        return{
            ...state,
            registerCreate: false,
            error: action.payload
        }
        default: 
           return state;

    }
}