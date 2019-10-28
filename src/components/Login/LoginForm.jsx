import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                       name={"login"}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       name={"Password"}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"remember me"} component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm