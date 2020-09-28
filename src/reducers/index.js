import {combineReducers} from 'redux'
import newsReducer from './newsReducer';
import apiReducer from './apiReducers';

const rootReducer = combineReducers({
    news:newsReducer,
    api:apiReducer
});

export default rootReducer;
