import {updatePhoneList} from './updatePhoneList';
import {updateShoppingCart} from './updateShoppingCart'


const reducer = (state, {type, payload}) => ({
    phoneList: updatePhoneList(state, {type, payload}),
    shoppingCart: updateShoppingCart(state, {type, payload}),
})

export default reducer;

