import { fetchToken, fetchfileUpload } from "../helpers/fetch"
import { types } from "../types";
import Swal from 'sweetalert2';
import { updateLikedFavoriteUser, updateLikedPostUser } from "./user";

export const startLoadingNotes = (neighborhood) => {
    return async(dispatch ) =>{
        const resp = await fetchToken(`post/getAllPost/${neighborhood}`);
        const body = await resp.json();
        if(body.ok){
            dispatch(setPosts(body.posts))
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
        }
    }
};


export const startLoadingNote = (id) => {
    return async(dispatch ) =>{
        const resp = await fetchToken(`post/${id}`);
        const body = await resp.json();
        if(body.ok){
            dispatch(activePost(body.post))
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
        }
    }
};

export const startNewPost = (data) => {
    return async(dispatch ) =>{
        const resp = await fetchfileUpload(`post`, data, 'POST');
        const body = await resp.json();
        if(body.ok){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Listo! publicación realizada',
                showConfirmButton: false,
                timer: 1500,
            })
            dispatch(addNewPost(body.post))
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
        }
    }
}

export const startAddFavorite = (idPost) => {
    return async(dispatch, getState) =>{
        const { user } = getState().auth;
        const { active } = getState().posts;
        const { username } = getState().user;
        const { _id } =user
        const resp = await fetchToken(`post/${idPost}/addRemoveFavoritePost`, {"idUser": _id , type: "add"}, 'POST');
        const body = await resp.json();
        if(body.ok){
            dispatch(updateLiked(idPost, body.newFavorities))
            if(username)dispatch(updateLikedFavoriteUser(idPost, body.newFavorities))
            if(username)dispatch(updateLikedPostUser(idPost, body.newFavorities))
            if(active) dispatch(updateLikedActive(idPost, body.newFavorities))
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
        }
    }
};

export const startRemoveFavorite = (idPost) => {
    return async(dispatch, getState) =>{
        const { user } = getState().auth;
        const { active } = getState().posts;
        const { username } = getState().user;
        const { _id } =user
        const resp = await fetchToken(`post/${idPost}/addRemoveFavoritePost`, {"idUser": _id , type: "remove"}, 'POST');
        const body = await resp.json();
        if(body.ok){
            dispatch(updateLiked(idPost, body.newFavorities))
            if(username)dispatch(updateLikedFavoriteUser(idPost, body.newFavorities))
            if(username)dispatch(updateLikedPostUser(idPost, body.newFavorities))
            if(active) dispatch(updateLikedActive(idPost, body.newFavorities))
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
        }
    }
};

export const addNewPost = ( post ) => ({
    type: types.postsAddNew,
    payload: post
})

export const activePost = ( post ) => ({
    type: types.postsActive,
    payload: {
        ...post
    }
});


const setPosts = ( posts ) => ({
    type: types.postsLoad,
    payload: posts
});

const updateLiked = (id, favorities) => ({
    type: types.postsUpdateLiked,
    payload: {
        id,
        favorites : [...favorities]
    }
});

const updateLikedActive = (id, favorites) => ({
    type: types.postsUpdateLikedActive,
    payload: {
        id,
        favorites : [...favorites]
    }
});


export const updateReviewPost = (idpost, review) => ({
    type: types.postsUpdateReview,
    payload: {
        idpost,
        review: review
    }
});

export const updateReviewPostactive = (idpost, review) => ({
    type: types.postsUpdateReviewActive,
    payload: {
        idpost,
        review: review
    }
});

export const logoutPosts = () =>({
    type: types.postsLogoutCleaning
})

