import { IS_REGISTER_OR_LOGIN } from "../types";

const initialState = {
    isRegistration: false,
    isLogin: true
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
        default:
            return {...state}
    }
}

export default auth;