import { types } from "../types";

const initialState = {}

export const categoryReducer = (state = initialState, action) =>{

    switch (action.type) {
        case types.categoryLoad:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}