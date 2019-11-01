import React from 'react'
import { reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import s from '../Common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input,
                {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"},
                "remember me")}

            {props.captchaUrl && <img src={props.captchaUrl} alt="captcha"/>}
            {props.captchaUrl && createField("Symbols from image", "captcha",
                [required], Input)}

            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm