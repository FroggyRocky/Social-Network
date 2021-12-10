import React from 'react'
import LoginStyles from '../Login/LoginForm.module.css'
function Input({input, meta:{touched, error}, ...props}) {
    return <div>
        <input {...props} {...input} className={error&&touched ? LoginStyles.inputErr : undefined} />
        {touched && ((error && <div className={LoginStyles.error}>*{error}</div>))}
    </div>
}







export {Input}