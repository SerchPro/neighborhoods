import { fetchToken } from "../helpers/fetch"
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




/**************************************************************************************************** */
const setInfoUser = ( user) => ({
    type: types.userLoadInfo,
    payload: user
});

const updateInfoUser = (user) => ({
    type: types.userUpdated,
    payload: user
})




