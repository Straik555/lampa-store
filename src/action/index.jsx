import {
    FETCH_PHONES_START,
    FETCH_PHONES_SUCCESS,
    FETCH_PHONES_FAILURE,
    PHONES_ADDED_TO_CART,
    PHONES_REMOVED_FROM_CART,
} from "../actionType";
import {
    fetchPhones as fetchPhonesApi
} from '../api';

export const fetchPhones = () => async dispatch => {
    dispatch({
        type: FETCH_PHONES_START
    })

    try{
        const phones = await fetchPhonesApi()
        dispatch({
            type: FETCH_PHONES_SUCCESS,
            payload: phones
        })
    } catch (err){
        dispatch({
            type: FETCH_PHONES_FAILURE,
            payload: err,
            error: true
        })
    }
};

export const phoneAddedToCart = phoneId => {
    return {
        type: PHONES_ADDED_TO_CART,
        payload: phoneId
    }
}

export const phoneRemovedFromCart = phoneId => {
    return {
        type: PHONES_REMOVED_FROM_CART,
        payload: phoneId
    }
}



