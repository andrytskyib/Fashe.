import {SET_CURRENT_USER} from "./consts";

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}