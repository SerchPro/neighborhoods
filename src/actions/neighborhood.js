import { fetchNoToken } from "../helpers/fetch"
import { types } from "../types";
import Swal from 'sweetalert2';

export const startLoadNeighboorhoods = ( cp ) => {
    return async(dispatch ) =>{
        const resp = await fetchNoToken(`neighborhood/${cp}`);
        const body = await resp.json();
        if(body.ok){
            dispatch(setNeighborhoods(body.data))
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
        }
    }
}


const setNeighborhoods = (neighborhoods) => ({
    type: types.neighborhoodLoad,
    payload: neighborhoods
});