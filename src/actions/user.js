import { fetchToken } from "../helpers/fetch"
import { types } from "../types";
import Swal from 'sweetalert2';
import { startLogout } from "./auth";

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
            dispatch(startLogout());
        }
    }
}

export const startUpdateFollow = ( id ) => {
    return async(dispatch ,getState) =>{
        const data = {"idUser": id}
        const { user } = getState().auth;
        const resp = await fetchToken(`user/${user._id}/addFollowerUser`, data, 'POST');
        const body = await resp.json();
        if(body.ok){
            dispatch(setUpdatefollow(body.newFollowers));
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
            dispatch(startLogout());
        }
    }
}

export const startUpdateUnfollow = ( data ) => {
    return async(dispatch ,getState) =>{
        const { user } = getState().auth;
        const resp = await fetchToken(`user/${user._id}/unFollow`, data, 'POST');
        const body = await resp.json();
        if(body.ok){
            dispatch(setUpdateunfollow(body.newFollowers));
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
            dispatch(startLogout());
        }
    }
}

//R4561353
/**************************************************************************************************** */
const setInfoUser = ( user) => ({
    type: types.userLoadInfo,
    payload: user
});


const setUpdatefollow = ( myFollowers ) => ({
    type: types.userUpdateunFollow,
    payload: [...myFollowers]
    
});


const setUpdateunfollow = ( myFollowers ) => ({
    type: types.userUpdateunFollow,
    payload: [...myFollowers]
    
});