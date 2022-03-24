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
                user:{
                    ...action.payload
                }
            }
        case types.authLogout:
            return {
                checking: false
            }
        case types.authUpdateAddres:
            return {
                ...state,
                user:{
                    ...state.user,
                    addressactive :  {...action.payload}
                }
            }
        case types.authUpdateImg:
            return {
                ...state,
                user:{
                    ...state.user,
                    image_url :  action.payload
                }
            }
        default:
            return state;
    }
}