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
        case types.postsActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case  types.postsAddNew:
            return {
                ...state,
                posts: [ action.payload, ...state.posts ]
            }
        case types.postsUpdateLiked:
            return{
                ...state,
                posts: state.posts.map(
                    post => post._id === action.payload.id
                    ?
                        {
                            ...post,
                            _favorites: [...action.payload.favorites]
                        }
                    :   post

                )
            }
        case types.postsLogoutCleaning:
            return {
                ...state,
                posts:[],
                active: null
            }
        default:
            return state;
    }
}