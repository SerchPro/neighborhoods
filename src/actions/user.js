import { fetchfileUpload, fetchToken } from "../helpers/fetch"
import { types } from "../types";
import Swal from 'sweetalert2';

export const startLoadingUser = ( uid ) => {
    return async(dispatch ) =>{
        const resp = await fetchToken(`user/${uid}`);
        const body = await resp.json();
        console.log(body)
        if(body.ok){
            //console.log("todo bien ")
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
        console.log(body)
        if(body.ok){
            //console.log("todo bien ")
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Tu información ha sido actualizada correctamente',
                showConfirmButton: true,
            })
            dispatch(updateInfoUser(body.user))
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
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Foto de perfil actualizada correctamente',
                showConfirmButton: false,
                timer: 1500,
            })
            const data = {"image_url": body.image_url}
            dispatch(updateInfoUser(data))
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




