import React from "react";
import RegistrationForm from "./Registration";
import LoginForm from "./Login";
import { useSelector, useDispatch } from "react-redux";

import { registration, login } from "../../store/actions/auth"

const Auth = () => {
    const dispatch = useDispatch();

    const isReg = useSelector(state => state.auth.isRegistration)
    const isLogin = useSelector(state => state.auth.isLogin)
   
    const submitRegistrForm = data => {
        dispatch(registration(data))
    };

    const submitLoginrForm = data => {
        dispatch(login(data))
    };

    return(
        <React.Fragment>
            {
                isReg && 
                <RegistrationForm 
                    onSubmit={submitRegistrForm}
                />
            }
            {
                isLogin && 
                <LoginForm 
                    onSubmit={submitLoginrForm}
                />
            }
        </React.Fragment>
    )
}

export default Auth;