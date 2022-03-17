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

/**************************************************************************************************** */
const setInfoUser = ( user) => ({
    type: types.userLoadInfo,
    payload: user
});






