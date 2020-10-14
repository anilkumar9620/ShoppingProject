import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState = {
    restaurants: null,
    error: true,
    cartData: []
}


const setRestaurants = (state, action) => {
    return updateObject(state, {
        restaurants: action.restaurants
    });
}

const addingCartSuccess = (state, action) => {
    const newCartData = updateObject(action.cartList, { id: action.cartId });
    console.log(state)
    return updateObject(state, {
        cartData: state.cartData.concat(newCartData)
    })
}

const fetchCartOrderSuccess = (state, action) => {
    console.log(state);
    return updateObject(state, {
        cartData: action.cartFetchedList
    });
}

const orderDeleteFromCart = (state, action) => {
    const updatedResults = state.cartData.filter(cartItem => cartItem.id !== action.id);
    return updateObject(state, {
        cartData: updatedResults
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_RESTAURANT: return setRestaurants(state, action);
        case actionTypes.ADDING_CART_ITEMS_TO_SERVER: return addingCartSuccess(state, action);
        /******************************************
         * FETCHING DATA FROM THE SERVER 
        ******************************************/
        case actionTypes.FETCHING_CART_ITEMS_FROM_SERVER: return fetchCartOrderSuccess(state, action);
        /******************************************
         * DELETING DATA FROM THE SERVER 
        ******************************************/
        case actionTypes.DELETING_CART_ITEMS_FROM_SERVER: return orderDeleteFromCart(state, action);
        default: return state
    }
}



export default reducer;