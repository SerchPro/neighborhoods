import { types } from "../types";

const initialState = {}

export const userReducer = (state = initialState, action) =>{

    switch (action.type) {
        case types.userLoadInfo:
            return {
                ...action.payload
            }
        case types.userUpdateFollow:
            return {
                ...state,
                myFollowers :  [...state.myFollowers, ...action.payload]
            }
        case types.userUpdateunFollow:
            return {
                ...state,
                myFollowers :  [...action.payload]
            }
        case types.userLogoutCleanig:
            return {}
        default:
            return state;
    }
}