import {
    FETCH_COLLECTIONS_ERROR,
    FETCH_COLLECTIONS_PENDING,
    FETCH_COLLECTIONS_SUCCESS
} from "./consts";

const initialState = {
    collection: {},
    isPending: false,
    errorMessage: ""
};

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COLLECTIONS_PENDING: {
            return {
                ...state,
                isPending: true
            };
        }
        case FETCH_COLLECTIONS_SUCCESS: {
            return {
                ...state,
                isPending: false,
                collection: action.payload
            };
        }
        case FETCH_COLLECTIONS_ERROR: {
            return {
                ...state,
                isPending: false,
                errorMessage: action.payload
            };
        }
        default:
            return state;
    }
};

export default shopReducer;