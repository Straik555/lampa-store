import {
    FETCH_PHONES_SUCCESS,
    FETCH_PHONES_FAILURE
} from "../actionType";

export const updatePhoneList = (state, {type, payload}) => {
    if(state === undefined){
        return {
            phones: [],
            loading: true,
            error: null,
        }
    }
    switch (type){
        case FETCH_PHONES_SUCCESS:
        return {
            phones: payload,
            loading: false,
            error: null
        }
        case FETCH_PHONES_FAILURE:
            return{
                phones: [],
                loading: false,
                error: payload
            }
        default:
            return state.phoneList
    }
}