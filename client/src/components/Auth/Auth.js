import React from "react";
import RegistrationForm from "./Registration";
import LoginForm from "./Login";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";

import { registration, login, deleteErrMessage } from "../../store/actions/auth"

const Auth = () => {
    const dispatch = useDispatch();

    const isReg = useSelector(state => state.auth.isRegistration)
    const isLogin = useSelector(state => state.auth.isLogin)
    const user = useSelector(state => state.auth.user);
    const errMesage = useSelector(state => state.auth.errMesage);

    const submitRegistrForm = data => {
        dispatch(registration(data));
    };

    const submitLoginrForm = data => {
        dispatch(login(data));
    };
    
    if(user) return <Redirect to="/" />
    return(
        <React.Fragment>
            {
                errMesage && <span className="errMesage">{ errMesage }</span>
            }
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