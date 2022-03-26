import { types } from "../types";


const initialState = {
    posts:[],
    active: null
}

export const  postsReducer = (state = initialState, action) => {
    //console.log(initialState, action)
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
        case types.postsUpdateLikedActive:
            return{
                ...state,
                active:{
                    ...state.active,
                    _favorites: state.active._id === action.payload.id ? [...action.payload.favorites]: [state.active._favorites]
                }
            }
        case types.postsLogoutCleaning:
            return {
                ...state,
                posts:[],
                active: null
            }
        case types.postsUpdateReview:
            return{
                ...state,
                posts: state.posts.map(
                    post => post._id === action.payload.idpost
                    ?
                        {
                            ...post,
                            _reviews: [...post._reviews, action.payload.review]
                        }
                    :   post
                )
            }
        case types.postsUpdateReviewActive:
            return{
                ...state,
                active:{
                    ...state.active,
                    _reviews: state.active._id === action.payload.idpost ? [...state.active._reviews, action.payload.review]: [state.active._reviews]
                }
            }
        default:
            return state;
    }
}