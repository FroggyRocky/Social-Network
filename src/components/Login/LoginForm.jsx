import React from 'react'
import { Field } from 'redux-form'
import { fieldRequired, maxLengthVal, minLengthVal, emailVal }
from '../common/FormsValidation/FormsValidation'
import { withReduxForm } from '../common/FormsValidation/FieldContainers'
import LoginStyles from './LoginForm.module.css'
import TextField from '@mui/material/TextField';


const maxLengthEmail = maxLengthVal('email', 40)
const minLengthEmail = minLengthVal('email', 5)
const maxLengthPass = maxLengthVal('password', 40)
const minLengthPass = minLengthVal('password', 5)
const Input = withReduxForm(TextField)

export default function LoginForm(props) {

    return <form onSubmit={props.handleSubmit}>
        <div className={LoginStyles.email_input_container}>
            <Field type='text' placeholder='Email'
                validate={[fieldRequired, maxLengthEmail, minLengthEmail, emailVal]}
                component={Input} name='email' id={0} />
        </div>
        <div className={LoginStyles.password_input_container}>
            <Field type='password' placeholder='Password'
                validate={[fieldRequired, maxLengthPass, minLengthPass]}
                component={Input} name='pass' autoComplete='on' id={1} />
            <div className={LoginStyles.checkbox_container}>
                <Field type='checkbox' component='input' name='rememberMe' /> Remember me
            </div>
            {props.error &&
                <div className={LoginStyles.common_error}>
                    <span>{props.error}</span>
                </div>}
            <div className={LoginStyles.action_container}>
                <button>Log in</button>
                <a>Register</a>
            </div>
        </div>
    </form>
}