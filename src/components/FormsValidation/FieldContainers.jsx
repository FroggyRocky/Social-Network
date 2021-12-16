import React from 'react'
import LoginStyles from '../Login/LoginForm.module.css'

function TextArea({input, meta:{error}, ...props}){
    return <div>
        <textarea {...input} {...props}></textarea>
        {error && <div className={LoginStyles.error}>*{error}</div>}
    </div>
}

///HOC for some forms 

const withReduxForm = (Component) => {
    const withForm = ({input, meta:{touched, error}, ...props}) => {
        return <div>
        <Component {...input} {...props}></Component>
        {touched && error && <div className={LoginStyles.error}>*{error}</div>}
    </div>
    }
    return withForm
}



export {TextArea, withReduxForm}