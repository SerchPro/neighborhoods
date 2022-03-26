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
        case types.userLikedFavorites:
            return {
                ...state,
                myFavorites : state.myFavorites.map(
                    fav => fav._id === action.payload.idPost
                        ?
                        {
                            ...fav,
                            _favorites: [...action.payload.favorites]
                        }
                        :
                        fav
                )
            }
        case types.userLikedPosts:
            return {
                ...state,
                myPosts : state.myPosts.map(
                    post => post._id === action.payload.idPost
                        ?
                        {
                            ...post,
                            _favorites: [...action.payload.favorites]
                        }
                        :
                        post
                )
            }
        case types.userLogoutCleanig:
            return {}
        default:
            return state;
    }
}