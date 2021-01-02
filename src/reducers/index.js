import { combineReducers } from 'redux';
import albumReducer from './albumReducer';

const rootReducer = combineReducers({
	artist: albumReducer
});

export default rootReducer;
