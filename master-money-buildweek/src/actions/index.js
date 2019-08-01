import axios from 'axios';
import axiosAuth from '../components/utilities/axiosAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const GET_MONEY_START = 'GET_MONEY_START';
export const GET_MONEY_SUCCESS = 'GET_MONEY_SUCCESS';
export const GET_MONEY_FAILURE = 'GET_MONEY_FAILURE';

export const CREATE_PROFILE_START = 'CREATE_PROFILE_START';
export const CREATE_PROFILE_SUCCESS = 'CREATE_PROFILE_SUCCESS';
export const CREATE_PROFILE_FAILURE = 'CREATE_PROFILE_FAILURE';

export const DELETE_PROFILE_START = 'DELETE_PROFILE_START';
export const DELETE_PROFILE_SUCCESS = 'DELETE_PROFILE_SUCCESS';
export const DELETE_PROFILE_FAILURE = 'DELETE_PROFILE_FAILURE';

//login: https://master-your-money.herokuapp.com/login'
//register: https://master-your-money.herokuapp.com/register

export const login = (creds) => (dispatch) => {
	dispatch({ type: LOGIN_START });
	axios
		.post('https://master-your-money.herokuapp.com/login', creds)
		.then((res) => {
			localStorage.setItem('token', res.data.token);
			dispatch({ type: LOGIN_SUCCESS, payload: res.data });
		})
		.catch((res) => dispatch({ type: LOGIN_FAILURE }));
};

export const register = (creds) => (dispatch) => {
	dispatch({ type: REGISTER_START });
	axios
		.post('https://master-your-money.herokuapp.com/register', creds)
		.then((res) => {
			console.log(res);
			dispatch({ type: REGISTER_SUCCESS });
		})
		.catch((error) => {
			console.log(error.response.data);
			dispatch({ type: REGISTER_FAILURE });
		});
};

export const fetchMoney = () => (dispatch) => {
	dispatch({ type: GET_MONEY_START });
	axiosAuth().get('/home/user').then((res) => console.log(res)).catch((error) => console.log(error));
};

export const createProfile = (profile) => (dispatch) => {
	console.log(profile);
	const newProfile = {
		...profile,
		user_id: 1
	};

	dispatch({ type: CREATE_PROFILE_START });
	axios
		.post('https://master-your-money.herokuapp.com/home/user', newProfile)
		.then((res) => {
			console.log(res);
			dispatch({ type: CREATE_PROFILE_SUCCESS });
		})
		.catch((error) => {
			console.log(error.response.data);
			dispatch({ type: CREATE_PROFILE_FAILURE });
		});
};
// export const getProfile = () => (dispatch) => {
//     const
// }

export const deleteProfile = (profile) => (dispatch) => {
	const id = 1;
	dispatch({ type: DELETE_PROFILE_START });
	axios
		.post(`https://master-your-money.herokuapp.com/home/user/${id}`)
		.then((res) => {
			console.log(res);
			dispatch({ type: DELETE_PROFILE_SUCCESS });
		})
		.catch((error) => {
			console.log(error.response.data);
			dispatch({ type: DELETE_PROFILE_FAILURE });
		});
};
