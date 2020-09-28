import { apiActionTypes } from "../actions";

const initialState = {
    isLoading:false,
}

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case apiActionTypes.IS_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}

export default apiReducer