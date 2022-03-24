import { types } from "../types";


const initialState = {
    neighborhoods:[]
}

export const  neighborhoodReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.neighborhoodLoad:
            return {
                ...state,
                neighborhoods: [ ...action.payload ]
            }
        default:
            return state;
    }
}