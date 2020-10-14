import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    name: null,
    userData: []
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        name: action.name
    })
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        userId: null
    })
}

const addingUserSuccess = (state, action) => {
    const newUserData = updateObject(action.userDataFromServer, { id: action.id });
    return updateObject(state, {
        userData: state.userData.concat(newUserData)
    });
}

const fetchUserDataSuccess = (state, action) => {
    return updateObject(state, {
        userData: action.userDataFromServer
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.ADDING_USER_DATA_TO_SERVER: return addingUserSuccess(state, action);
        case actionTypes.FETCHING_USER_DATA_FROM_SERVER: return fetchUserDataSuccess(state, action);
        default: return state;
    }
}

export default reducer;

