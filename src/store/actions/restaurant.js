import axios from 'axios';
import * as actionTypes from './actionTypes';

export const setRestaurants = (restaurants) => {
    return {
        type: actionTypes.SET_RESTAURANT,
        restaurants: restaurants
    }
}

export const initRestaurants = () => {
    return dispatch => {
        axios.get('')
            .then(response => {
                dispatch(setRestaurants(response.data))
            })
            .catch(error => {
                console.log(error);
            });
    }
}


/******************************************
 * ADDING CART ITEMS TO THE SERVER
 * 
 ******************************************/


export const addingCartSuccess = (id, cartList) => {
    console.log(id);
    return {
        type: actionTypes.ADDING_CART_ITEMS_TO_SERVER,
        cartId: id,
        cartList: cartList
    };
};

export const cartItems = (cartList) => {
    return dispatch => {
        axios.post('', cartList)
            .then(response => {
                dispatch(addingCartSuccess(response.data.name, cartList));
            })
            .catch(error => {
                console.log(error);
            });
    }
}


/******************************************
 * FETCHING DATA FROM THE SERVER
 * 
 ******************************************/


export const fetchCartOrderSuccess = (fetchedCartItems) => {
    return {
        type: actionTypes.FETCHING_CART_ITEMS_FROM_SERVER,
        cartFetchedList: fetchedCartItems
    }
}

export const fetchCartOrders = () => {
    return dispatch => {
        axios.get('')
            .then(response => {
                const fetchedCartItems = [];
                for (let key in response.data) {
                    fetchedCartItems.push({
                        ...response.data[key],
                        id: key
                    })
                }
                console.log(fetchedCartItems);
                dispatch(fetchCartOrderSuccess(fetchedCartItems))
            })
            .catch(error => {
                console.log(error);
                console.log('error found');
            })
    }
}



/******************************************
 * DELETING ITEMS FROM THE SERVER
 * 
 ******************************************/

export const orderDeleteFromCart = (id) => {
    return {
        type: actionTypes.DELETING_CART_ITEMS_FROM_SERVER,
        id: id
    }
}


export const deleteCartOrders = (id) => {
    return dispatch => {
        dispatch(orderDeleteFromCart(id));
        axios.delete('' + id + '.json')
            .then(res => {
                console.log('item deleted from the server')
            })
            .catch(error => {
                console.log(error);
            })
    }
}