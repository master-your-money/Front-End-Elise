//  export const profileReducer = (state = initialState, action) => {
//      switch(action.type){
//        case
//      }
//  }
import { GET_MONEY_START, GET_MONEY_SUCCESS, GET_MONEY_FAILURE } from '../actions';

const initialState = {
	profile: {
		id: 9,
		user_id: 1,
		firstname: 'second friend',
		lastname: 'guy',
		location: 'never goin away',
		website: 'blast.io',
		bio: 'boom',
		completed: false
	},
	isProfile: false,
	error: ''
};

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_MONEY_START:
			return {
				isProfile: true,
				error: ''
			};
		case GET_MONEY_SUCCESS:
			return {
				isProfile: false,
				error: '',
				profile: action.payload
			};
		case GET_MONEY_FAILURE:
			return {
				isProfile: false,
				error: action.payload
			};

		default:
			state;
	}
};
