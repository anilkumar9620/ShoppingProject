import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState = {
    restaurants: null,
    error: true
}


const setRestaurants = (state, action) => {
    return updateObject(state, {
        restaurants: action.restaurants
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_RESTAURANT: return setRestaurants(state, action);
        default: return state
    }
}

export default reducer;