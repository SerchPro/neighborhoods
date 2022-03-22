import { types } from "../types";


const initialState = {
    neighborhoods:[],
    active: null
}

export const  neighborhoodReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.neighborhoodLoad:
            return {
                ...state,
                neighborhoods: [ ...action.payload ]
            }
        case types.neighborActive:
            return {
                ...state,
                active: action.payload
            }


        default:
            return state;
    }
}