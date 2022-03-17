import { types } from "../types";


const initialState = {
    posts:[],
    active: null
}

export const  postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.postsLoad:
            return {
                ...state,
                posts: [ ...action.payload ]
            }
        default:
            return state;
    }
}