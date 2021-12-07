import React from 'react'
import { Field } from 'redux-form'
export default function LoginForm(props) {
    return <div>
        <form onSubmit={props.handleSubmit}>
<div>
<label>Login</label>
<Field type='text' placeholder='email' component='input' name='email'/>
</div>
<div>
<label>Password</label>
<Field type='text' placeholder='password' component='input' name='pass'/>
<div>
<Field type='checkbox' component='input' name='rememberMe'/>remember me
</div>
<button>Log in</button>
</div>
        </form>
    </div>
}