import { fetchNoToken, fetchToken } from "../helpers/fetch"
import { types } from "../types";
import Swal from 'sweetalert2';

export const startLoadReview = ( id ) => {
    return async(dispatch ) =>{
        const resp = await fetchNoToken(`review/${id}/getReviewsPost`);
        const body = await resp.json();
        if(body.ok){
            dispatch(setReviews(body.reviews));
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
        }
    }
}

export const startNewReview = (data) => {
    return async(dispatch ) =>{
        const resp = await fetchToken(`review/`, data, 'POST');
        const body = await resp.json();
        console.log(body)
        if(body.ok){
            dispatch(addNewReview(body.review))
        }else{
            console.log(body);
            Swal.fire('Error', body.msg, 'error')
        }
    }
};

const setReviews = ( reviews ) => ({
    type: types.reviewLoad,
    payload: [...reviews]
});

export const addNewReview = ( review ) => ({
    type: types.reviewAddNew,
    payload: review
});

export const logoutReview = ( ) => ({
    type: types.reviewLogoutCleanig
})