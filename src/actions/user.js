import { fetchfileUpload, fetchToken } from "../helpers/fetch"
import { types } from "../types";
import Swal from 'sweetalert2';
import { StartChecking, updateAuth } from "./auth";

export const startLoadingUser = ( username ) => {
    return async(dispatch ) =>{
        const resp = await fetchToken(`user/${username}/username`);
        const body = await resp.json();
        console.log(body)
        if(body.ok){
            dispatch(setInfoUser(body.user))
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
        }
    }
}



export const startUserUpdate = ( uid, data ) => {
    return async(dispatch ) =>{
        const resp = await fetchToken(`user/${uid}`, data, 'PUT');
        const body = await resp.json();
        if(body.ok){
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            //console.log("todo bien ")
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Tu información ha sido actualizada correctamente',
                showConfirmButton: true,
            })
            const user = body.user;
            dispatch(updateInfoUser(user)); //username, url_user
            dispatch(updateAuth({"username":user.username}));
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
        }
    }
}

export const startUserImgUpdate = (data) => {
    return async(dispatch ) =>{
        const resp = await fetchfileUpload(`upload/user`, data, 'PUT');
        const body = await resp.json();
        if(body.ok){
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Foto de perfil actualizada correctamente',
                showConfirmButton: false,
                timer: 1500,
            })
            const data = {"image_url": body.image_url}
            dispatch(updateInfoUser(data)) 
            dispatch(updateAuth({"url_user":body.image_url}));
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
        }
    }
}


export const startUserPost = (data) => {
    return async(dispatch ) =>{
        const resp = await fetchfileUpload(`post`, data, 'POST');
        const body = await resp.json();
        if(body.ok){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Foto de perfil actualizada correctamente',
                showConfirmButton: false,
                timer: 1500,
            })
            /*const data = {"image_url": body.image_url}
            dispatch(updateInfoUser(data)) 
            dispatch(updateAuth({"url_user":body.image_url}));*/
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
        }
    }
}



/**************************************************************************************************** */
const setInfoUser = ( user) => ({
    type: types.userLoadInfo,
    payload: user
});

const updateInfoUser = (user) => ({
    type: types.userUpdated,
    payload: user
})




