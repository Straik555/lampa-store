import {
    PHONES_ADDED_TO_CART,
    PHONES_REMOVED_FROM_CART
} from "../actionType";

const updateCartItems = (cartItems, item, idx) => {

    if(item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    }

    if(idx === -1){
        return [
            ...cartItems,
            item
        ]
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
}

const updateCartItem = (phone, item = {}, quantity) => {
    const{
        id = phone.id,
        count = 0,
        name = phone.name,
        total = 0,
        image = phone.image
    } = item;
    return {
        id,
        name,
        image,
        count: count + quantity,
        total: total + quantity * phone.price
    };


};

const updateOrderTotal = (orderTotal, item, quantity) => {
    if (item !== undefined){
        return orderTotal = orderTotal + quantity * item.price
    } else {
        return orderTotal
    }
}

const updateOrder = ({phoneList: {phones}, shoppingCart : {cartItems, orderTotal}}, phoneId, quantity) => {
    const phone = phones.find((phone) => phone.id === phoneId);
    const itemIndex = cartItems.findIndex(({id}) => id === phoneId);

    const item = cartItems[itemIndex];
    const newItem = updateCartItem(phone, item, quantity);
    return {
        cartItems: updateCartItems(cartItems, newItem, itemIndex),
        orderTotal: updateOrderTotal(orderTotal, phone, quantity),
    };
}

export const updateShoppingCart = (state, {type, payload}) => {
    if(state === undefined){
        return {
            cartItems: [],
            orderTotal: 0
        }
    }
    switch (type){
        case PHONES_ADDED_TO_CART:
            return updateOrder(state, payload, 1);
        case PHONES_REMOVED_FROM_CART:
            return updateOrder(state, payload, -1)
        default:
            return state.shoppingCart
    }
}
