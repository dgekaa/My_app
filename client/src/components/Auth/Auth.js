import React from "react";
import RegistrationForm from "./Registration";
import LoginForm from "./Login";
import { useSelector } from "react-redux";

const Auth = () => {
    const isReg = useSelector(state => state.auth.isRegistration)
    const isLogin = useSelector(state => state.auth.isLogin)
   
    const submitRegistrForm = data => {
        console.log(data, "submitRegistrForm");
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
                    onSubmit={submitRegistrForm}
                />
            }
        </React.Fragment>
    )
}

export default Auth;