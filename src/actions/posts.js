import { fetchToken } from "../helpers/fetch"
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



const setPosts = ( posts ) => ({
    type: types.postsLoad,
    payload: posts
});