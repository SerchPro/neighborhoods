import { types } from "../types";

const initialState = {
    addresses:[]
}


export const  addressesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addressesLoad:
            return {
                ...state,
                addresses: [ ...action.payload ]
            }
        case types.addressAddNew:
            return {
                ...state,
                addresses: [ action.payload , ...state.addresses]
            }
        case types.addressLogoutCleanig:
            return {
                ...state,
                addresses: []
            }
        default:
            return state;
    }
}