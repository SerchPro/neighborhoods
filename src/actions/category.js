import { fetchToken } from "../helpers/fetch"
import { types } from "../types";
import Swal from 'sweetalert2';

export const startLoadingCategory = ( username ) => {
    return async(dispatch ) =>{
        const resp = await fetchToken(`category/all`);
        const body = await resp.json();
        console.log(body)
        if(body.ok){
            dispatch(setInfoCategory({"categories": body.categories, "number": body.Ncategories}))
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
        }
    }
}

const setInfoCategory = (categories) => ({
    type: types.categoryLoad,
    payload: categories
})
