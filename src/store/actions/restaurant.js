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
        axios.get('https://project2-5125d.firebaseio.com/restaurants.json')
            .then(response => {
                dispatch(setRestaurants(response.data))
            })
            .catch(error => {
                console.log(error);
            });
    }
}