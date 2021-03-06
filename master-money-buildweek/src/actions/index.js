import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const login = creds => dispatch => {
    dispatch({type: LOGIN_START})
    axios
        .post('')
        .then(res => {localStorage.setItem('token', res.data.token); dispatch({type:LOGIN_SUCCESS, payload:res.data})})
        .catch(res => dispatch({type: LOGIN_FAILURE }))
}

export const register = creds => dispatch => {
    dispatch({type: REGISTER_START})
    axios 
        .post('https://pokemon-go-bw-backend.herokuapp.com/auth/register', creds)
        .then(res=> {console.log(res); dispatch({type:REGISTER_SUCCESS})})
        .catch(res => {console.log(res);dispatch({type:REGISTER_FAILURE})})
}