import React from "react";
import {Field, reduxForm} from 'redux-form';
import { useDispatch } from "react-redux";

import "./Auth.scss";
import { setIsRegisterOrLogin } from "../../store/actions/auth";
import { InputDefault } from "../_Forms/Input";
import { requiredField, matchInput } from "../_Validation";

const Registration = props => {
    const { handleSubmit } = props;
    const dispatch = useDispatch();
    
    return(
        <div className="registrationWrap">
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
                <Field 
                    name="repassword"
                    component={ InputDefault }
                    type="password"
                    placeholder="Повтор пароля"
                    validate={[ requiredField, matchInput ]}
                />
                <div className="btnsWrap">
                    <button 
                        type="button"
                        onClick={()=>{
                            dispatch(setIsRegisterOrLogin(false, true))
                        }}
                    >
                        Уже есть аккаунт
                    </button>
                    <button 
                        className="submitBtn"
                        type="submit"
                    >
                        Зарегистрироваться
                    </button>
                </div>
            </form>
        </div>
    )
}

const RegistrationForm = reduxForm ({
    form: 'Registration',
  }) (Registration);
  
export default RegistrationForm;
