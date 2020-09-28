import {newsActionTypes} from "../actions";


const initialState = {
    newsItems: [],
    error: null
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case newsActionTypes.SUCCESS_NEWS_FETCH:
            return {
                ...state,
                newsItems: action.payload
            }
        case newsActionTypes.ERROR_NEWS_FETCH:
            return {
                ...state,
                error: action.payload
            }
        default:
            return initialState
    }
}

export default newsReducer;
