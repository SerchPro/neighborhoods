import { fetchNoToken } from "../helpers/fetch"
import { types } from "../types";
import Swal from 'sweetalert2';

export const startLoadAddresses = (  ) => {
    return async(dispatch , getState) =>{
        const { user } = getState().auth;
        const resp = await fetchNoToken(`address/${user._id}`);
        const body = await resp.json();
        if(body.ok){
            dispatch(setAddresses(body.address))
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
        }
    }
}

export const startNewAdress = ( data ) => {
    return async(dispatch) =>{
        const resp = await fetchNoToken(`address`, data, 'POST');
        const body = await resp.json();
        if(body.ok){
            dispatch(addNewAddress(body.address))
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
        }
    }
}


const setAddresses = (addresses) => ({
    type: types.addressesLoad,
    payload: [...addresses]
});

export const addNewAddress = (address) => ({
    type: types.addressAddNew,
    payload: address
})