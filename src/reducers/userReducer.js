import { types } from "../types";

const initialState = {}

export const userReducer = (state = initialState, action) =>{

    switch (action.type) {
        case types.userLoadInfo:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}