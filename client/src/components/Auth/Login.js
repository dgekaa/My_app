import React from "react";
import {Field, reduxForm} from 'redux-form';
import { useDispatch } from "react-redux";

import "./Auth.scss";
import { setIsRegisterOrLogin } from "../../store/actions/auth";
import { InputDefault } from "../_Forms/Input";
import { requiredField } from "../_Validation";

const Login = props => {
    const { handleSubmit } = props;
    const dispatch = useDispatch();

    return(
        <div className="formWrap">
            <form onSubmit={handleSubmit}>
                <Field 
                    name="name"
                    component={InputDefault}
                    type="text"
                    placeholder="Имя"
                    validate={[requiredField]}
                />
                <Field 
                    name="password"
                    component={ InputDefault }
                    type="password"
                    placeholder="Пароль"
                    validate={[ requiredField ]}
                />
                <div className="btnsWrap">
                    <button 
                        type="button"
                        onClick={()=>{
                            dispatch(setIsRegisterOrLogin(true, false))
                        }}
                    >
                        Еще нет аккаунта
                    </button>
                    <button 
                        className="submitBtn"
                        type="submit"
                    >
                        Войти
                    </button>
                </div>
            </form>
        </div>
    )
}

const LoginForm = reduxForm ({
    form: 'Login',
  }) (Login);
  
export default LoginForm;
