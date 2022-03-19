import { types } from "../types";


const initialState = {
    reviews:[]
}

export const  reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.reviewLoad:
            return {
                ...state,
                reviews: [ ...action.payload ]
            }
            case types.reviewAddNew:
                return {
                    ...state,
                    reviews: [ action.payload, ...state.reviews ]
                }
        default:
            return state;
    }
}