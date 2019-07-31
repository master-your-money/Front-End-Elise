import { createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import  combineReducer  from './reducers';


export const store = createStore(combineReducer, applyMiddleware(thunk));
