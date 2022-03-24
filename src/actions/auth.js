import { fetchNoToken, fetchToken, fetchfileUpload } from "../helpers/fetch"
import { types } from "../types";
import Swal from 'sweetalert2';

export const startLogin = ( username, password ) => {
    return async(dispatch ) =>{
        const resp = await fetchNoToken('auth', { username, password }, 'POST');
        const body = await resp.json();
        if(body.ok){
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                user: body.user
            }))
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
        }
    }
}

export const StartRegister = (data) =>{
    return async(dispatch ) =>{
        const resp = await fetchNoToken('auth/signup',  data , 'POST');
        const body = await resp.json();
        if(body.ok){
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                user: body.user
            }))
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
        }
    }
}


export const StartChecking = () =>{
    return async(dispatch ) =>{
        const resp = await fetchToken('auth/renew');
        const body = await resp.json();
        if(body.ok){
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                user: body.user
            }))
        }else{
            dispatch(checkingFinish())
        }
    }
}

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout())
    }
}


export const startChangePassword = (data) => {
    return async (dispatch) =>{
        const resp = await fetchToken('auth/changePassword',  data , 'POST');
        const body = await resp.json();
        if(body.ok){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Tu contraseña ha sido actualizada correctamente, inicia sesión para continuar',
                showConfirmButton: true,
            })
            dispatch(logout())
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
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Tu información ha sido actualizada correctamente',
                showConfirmButton: true,
            })
            const user = body.user;
            dispatch(updateAuth(user));
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
        }
    }
}


export const startAuthImgUpdate = (data) => {
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
            dispatch(updateAuthimg(body.image_url)) 
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
        }
    }
}


export const startAddressUpdate = (data) => {
    return async(dispatch , getState) =>{
        const { user } = getState().auth;
        const resp = await fetchToken(`user/${user._id}/addAddress`, {"idAddress": data._id}, 'PUT');
        const body = await resp.json();
        if(body.ok){
            console.log(data)
            dispatch(updateAddres(data))
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
        }
    }
}



/**************************************************************************************************** */
const login = ( user) => ({
    type: types.authLogin,
    payload: user
})

const checkingFinish = () => ({ type: types.authCheckingFinish});

const logout = () => ({ type: types.authLogout})

export const updateAuth = (data) => ({
    type: types.authUpdateAuth,
    payload: data
});

export const updateAddres = (address) => ({
    type: types.authUpdateAddres,
    payload: {...address}
})


export const updateAuthimg = (img) => ({
    type: types.authUpdateImg,
    payload: img
})