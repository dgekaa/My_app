import { IS_REGISTER_OR_LOGIN, REGISTRATION, LOGIN } from "../types";

const initialState = {
    isRegistration: false,
    isLogin: true,
    user: "",
    login: false
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case IS_REGISTER_OR_LOGIN:
            const {isRegistration, isLogin} = action.payload;
            return {
                ...state,
                isRegistration,
                isLogin
            }
        case REGISTRATION:
            console.log(action.payload, "DATA REGISTRATION")
            return {
                ...state,
                user: action.payload
            }    
        case LOGIN:
            console.log(action.payload, "DATA LOGIN")
            return {
                ...state,
                login: action.payload
            }        
        default:
            return {...state}
    }
}

export default auth;