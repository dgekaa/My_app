import { IS_REGISTER_OR_LOGIN, REGISTRATION, LOGIN, DELETE_ERR_MESSGE } from "../types";

const initialState = {
    isRegistration: false,
    isLogin: true,
    user: "",
    errMesage: ""
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
            return {
                ...state,
                user: action.payload.name || "",
                errMesage: action.payload.msg || ""
            }    
        case LOGIN:
            return {
                ...state,
                user: action.payload.name,
                errMesage: action.payload.msg || ""
            }        
        case DELETE_ERR_MESSGE:
            return {
                ...state,
                errMesage: ""
            }     
        default:
            return {...state}
    }
}

export default auth;