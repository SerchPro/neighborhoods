import { fetchToken, fetchfileUpload } from "../helpers/fetch"
import { types } from "../types";
import Swal from 'sweetalert2';

export const startLoadingNotes = () => {
    return async(dispatch ) =>{
        const resp = await fetchToken(`post/getAllPost`);
        const body = await resp.json();
        console.log(body)
        if(body.ok){
            dispatch(setPosts(body.posts))
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