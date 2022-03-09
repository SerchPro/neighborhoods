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
                username: body.username
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
                username: body.username
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
                username: body.username
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

/**************************************************************************************************** */
const login = ( user) => ({
    type: types.authLogin,
    payload: user
})

const checkingFinish = () => ({ type: types.authCheckingFinish});

const logout = () => ({ type: types.authLogout})




