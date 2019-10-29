import React from "react";
import {Field, reduxForm} from 'redux-form';
import { useDispatch } from "react-redux";

import "./Auth.scss";
import { setIsRegisterOrLogin, deleteErrMessage } from "../../store/actions/auth";
import { InputDefault } from "../_Forms/Input";
import { ButtonDefault } from "../_Forms/Button";
import { requiredField } from "../_Validation";

const Login = props => {
    const { handleSubmit } = props;
    const dispatch = useDispatch();

    return(
        <div className="formWrap">
            <ButtonDefault 
                onClick={()=>{
                    dispatch(setIsRegisterOrLogin(true, false));
                    dispatch(deleteErrMessage());
                }}
                type="button"
            >
                Еще нет аккаунта
            </ButtonDefault>
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
                    <ButtonDefault type="submit">
                        Войти
                    </ButtonDefault>
                </div>
            </form>
        </div>
    )
}

const LoginForm = reduxForm ({
    form: 'Login',
  }) (Login);
  
export default LoginForm;
