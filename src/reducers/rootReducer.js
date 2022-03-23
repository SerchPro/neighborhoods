import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { postsReducer } from "./postsReducer";
import { userReducer } from "./userReducer";
import  { categoryReducer } from "./categoryReducer"
import { reviewsReducer } from "./reviewReducer"
import { neighborhoodReducer } from "./neighborhoodReducer"
import {addressesReducer } from  "./addressesReducer"



export const rootReducer = combineReducers({
    auth: authReducer,
    posts: postsReducer,
    user: userReducer,
    category: categoryReducer,
    reviews: reviewsReducer,
    neighborhoods: neighborhoodReducer,
    addresses:addressesReducer
})