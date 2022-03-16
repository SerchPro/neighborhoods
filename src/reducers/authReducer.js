import { types } from "../types";

const initialState = {
    checking: true,
}

export const authReducer = (state = initialState, action) =>{

    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                checking: false,
                ...action.payload
            }
        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }
        case types.authUpdateAuth:
            return {
                ...state,
                ...action.payload
            }
        case types.authLogout:
            return {
                checking: false
            }
        default:
            return state;
    }
}