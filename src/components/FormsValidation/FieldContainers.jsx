import React from 'react'
import LoginStyles from '../Login/LoginForm.module.css'

function Input({input, meta:{touched, error}, ...props}) {
    return <div>
        <input {...props} {...input} className={error&&touched ? LoginStyles.inputErr : undefined} />
        {touched && ((error && <div className={LoginStyles.error}>*{error}</div>))}
    </div>
}

function TextArea({input, meta:{error}, ...props}){
    return <div>
        <textarea {...input} {...props}></textarea>
        {error && <div className={LoginStyles.error}>*{error}</div>}
    </div>
}





export {Input, TextArea}