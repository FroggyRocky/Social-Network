import React from 'react'
import { Field } from 'redux-form'
import {fieldRequired, maxLengthVal, minLengthVal, emailVal} from '../FormsValidation/FormsValidation'
import {Input} from '../FormsValidation/FieldContainers'
import LoginStyles from './LoginForm.module.css'

const maxLengthEmail = maxLengthVal('email',40)
const minLengthEmail = minLengthVal('email',5)
const maxLengthPass = maxLengthVal('password',40)
const minLengthPass = minLengthVal('password',5)

export default function LoginForm(props) {
    return <div>
        <form onSubmit={props.handleSubmit}>
<div>
<label>Login</label>
<Field type='text' placeholder='email' 
validate={[fieldRequired, maxLengthEmail, minLengthEmail, emailVal]}
component={Input} name='email'/>
</div>
<div>
<label>Password</label>
<Field type='password' placeholder='password'
validate={[fieldRequired,maxLengthPass,minLengthPass]} 
component={Input} name='pass' autoComplete='on'/>
<div>
<Field type='checkbox' component='input' name='rememberMe'/>remember me
</div>
<button>Log in</button>
</div>
        </form>
    </div>
}