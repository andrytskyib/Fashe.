import {TOGGLE_SIGN_IN_DROPDOWN} from "../types";

export const sigInReducer = (state, action) => {
    console.log(action.type)
    switch (action.type) {
        case TOGGLE_SIGN_IN_DROPDOWN:
            return {
                ...state,
                isOpen: !state.isOpen
            }
        default:
            return state;
    }
}