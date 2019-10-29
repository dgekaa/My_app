import React from "react";
import {Field, reduxForm} from 'redux-form';
import { useDispatch } from "react-redux";

import "./Auth.scss";
import { setIsRegisterOrLogin, deleteErrMessage } from "../../store/actions/auth";
import { InputDefault } from "../_Forms/Input";
import { ButtonDefault } from "../_Forms/Button";
import { requiredField } from "../_Validation";

const Registration = props => {
    const { handleSubmit } = props;
    const dispatch = useDispatch();
    
    return(
        <div className="formWrap">
            <ButtonDefault 
                onClick={()=>{
                    dispatch(setIsRegisterOrLogin(false, true));
                    dispatch(deleteErrMessage());;
                }}
                type="button"
            >
                Уже есть аккаунт
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
                <Field 
                    name="repassword"
                    component={ InputDefault }
                    type="password"
                    placeholder="Повтор пароля"
                    validate={[ requiredField ]}
                />
                <div className="btnsWrap">
                    <ButtonDefault type="submit">
                        Зарегистрироваться
                    </ButtonDefault>
                </div>
            </form>
        </div>
    )
}

const RegistrationForm = reduxForm ({
    form: 'Registration',
  }) (Registration);
  
export default RegistrationForm;
