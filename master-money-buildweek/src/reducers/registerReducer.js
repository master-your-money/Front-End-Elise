
const initialState = {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    error: ''
}

export const registerReducer = (state = initialState, action) => {
    switch(action.type){
        case REGISTER_START:
        return{
                ...state,
                firstName: '',
                lastName: '',
                password: '',
                email:'',
                error: ''
            }
        case REGISTER_SUCCESS:
        return{
            ...state,
                firstName: '',
                lastName: '',
                password: '',
                email:'',
                error: ''
        }
        case REGISTER_FAILURE:
        return{
            ...state,
            firstName: '',
            lastName: '',
            password: '',
            email: '',
            error: action.payload
        }
        default: 
           return state;

    }
}