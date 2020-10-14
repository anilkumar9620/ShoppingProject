import * as actionTypes from './actionTypes';
import axios from 'axios';

/**********************************************
 * AUTHENTICATION SUCCESS FUNCTIION
 *********************************************/

export const authSuccess = (idToken, userId, name) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        userId: userId,
        name: name
    };
};


/**********************************************
 * LOGOUT FUNCTION FOR REMOVING THE USERID, TOKEN FROM THE LOCAL STORAGE
 *********************************************/

export const logout = () => {
    console.log('logging out')
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

/**********************************************
 * CHECKING THE TIME REQUIRED FOR THE USER TO BE IN SIGN IN
 *********************************************/

export const chechAuthTimeout = (expirationTime, isSignUp) => {
    console.log(isSignUp)
    let time = 0
    if (isSignUp) {
        time = 0
    } else {
        time = 1000
    }
    return dispatch => {
        setTimeout(() => {

            dispatch(logout())
        }, expirationTime * time)
    }
}


/*****************************************************
 * ADDING USER DATA TO THE SERVER AND INTO THE GLOBAL STATE
 ********************************************************/

export const addingUserSuccess = (id, userDataFromServer) => {
    return {
        type: actionTypes.ADDING_USER_DATA_TO_SERVER,
        id: id,
        userDataFromServer: userDataFromServer
    }
}

/**********************************************
 * AUTHENTICATION FOR LOGIN/SIGNUP
 *********************************************/

export const auth = (email, password, isSignUp, name) => {
    return dispatch => {
        const authData = {
            email: email,
            password: password,
            isSignUp: isSignUp,
            name: name,
            returnSecureToken: true
        };
        let url = '';

        if (!isSignUp) {
            url = ''
        }

        axios.post(url, authData)
            .then(response => {
                console.log(response.data, authData.name)
                let expirationDate
                if (isSignUp) {
                    expirationDate = 0
                }
                expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);

                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.localId);

                dispatch(authSuccess(response.data.idToken, response.data.localId, name));
                dispatch(chechAuthTimeout(response.data.expiresIn, isSignUp));

                /***************************************
                 * STORING USER DATA INTO THE SERVER USING AXIOS 
                 **************************************/
                if (isSignUp) {
                    const userData = {
                        userName: name,
                        userId: response.data.localId
                    }
                    console.log(userData);
                    axios.post('', userData)
                        .then(response => {
                            console.log(response);
                            dispatch(addingUserSuccess(response.data.name, userData))
                        })
                        .catch(error => {
                            console.log('getting error');
                            console.log(error);
                        })
                }

                /***************************************
                 * COMPLETION OF STORING DATA INTO THE SERVER
                 ************************************/

            })
            .catch(error => {
                // console.log(url)
                console.log(error.response.data.error)
            })



    }
}

/********************************************************
 * FETCHING USERDATA FROM THE SERVER AND ADDING TO THE GLOBAL
 **********************************************************/

export const fetchUserDataSuccess = (userDataFromServer) => {
    return {
        type: actionTypes.FETCHING_USER_DATA_FROM_SERVER,
        userDataFromServer: userDataFromServer
    }


}

export const fetchingfromserver = () => {
    return dispatch => {
        axios.get('')
            .then(response => {
                const fetchedUserData = [];
                for (let key in response.data) {
                    fetchedUserData.push({
                        ...response.data[key],
                        id: key
                    });
                }
                dispatch(fetchUserDataSuccess(fetchedUserData));
            })
            .catch(error => {
                console.log(error)
            })
    }
}