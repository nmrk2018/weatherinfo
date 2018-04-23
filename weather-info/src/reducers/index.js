import { combineReducers } from 'redux';
import searchReducer from './searchReducers';

export default combineReducers({
    item: searchReducer
});