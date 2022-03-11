import { fetchNoToken, fetchToken } from "../helpers/fetch"
import { types } from "../types";
import Swal from 'sweetalert2';

export const startLogin = ( username, password ) => {
    return async(dispatch ) =>{
        const resp = await fetchNoToken('auth', { username, password }, 'POST');
        const body = await resp.json();
        console.log(body)
        if(body.ok){
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({
                uid: body.uid,
                username: body.username,
                url_user: body.url_user
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
        //console.log("--------- ", body)
        if(body.ok){
            //console.log("--------- ")
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid: body.uid,
                username: body.username,
                url_user: body.url_user
            }))
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
        }
    }
}


export const StartChecking = (data) =>{
    return async(dispatch ) =>{
        const resp = await fetchToken('auth/renew');
        const body = await resp.json();
        console.log("--------- ", body)
        if(body.ok){
            console.log("--------- ")
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid: body.uid,
                username: body.username,
                url_user: body.url_user
            }))
        }else{
            console.log(body);
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

/**************************************************************************************************** */
const login = ( user) => ({
    type: types.authLogin,
    payload: user
})

const checkingFinish = () => ({ type: types.authCheckingFinish});

const logout = () => ({ type: types.authLogout})




