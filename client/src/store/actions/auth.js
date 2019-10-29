import {IS_REGISTER_OR_LOGIN, REGISTRATION, LOGIN, DELETE_ERR_MESSGE, LOGOUT} from "../types";

export const setIsRegisterOrLogin = (isRegistration, isLogin) => {
    return {
        type: IS_REGISTER_OR_LOGIN,
        payload: {
            isRegistration,
            isLogin
        }
    }    
}
export const registrationSuccess = data => {
    return {
        type: REGISTRATION,
        payload: data
    }    
}
export const registration = data => dispatch => {    
    fetch("http://localhost:8080/users/register",{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            dispatch(registrationSuccess(data))            
        })
        .catch((err)=>{
            console.log("ERR ", err)
        })
}

export const loginSuccess = data => {
    return {
        type: LOGIN,
        payload: data
    }    
}
export const login = data => dispatch => {
    fetch("http://localhost:8080/users/login",{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            dispatch(loginSuccess(data))            
        })
        .catch((err)=>{
            console.log("ERR ", err)
        })
}

export const deleteErrMessage = () => {
    return {
        type: DELETE_ERR_MESSGE,
    }    
}

export const logout = () => {
    return {
        type: LOGOUT,
    }    
}