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
            console.log(action.payload)
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
        default:
            return state;
    }
}