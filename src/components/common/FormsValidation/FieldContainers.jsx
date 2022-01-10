import React from 'react'
import LoginStyles from '../../Login/LoginForm.module.css'


function TextArea({input, meta:{error}, ...props}){
    return <div>
        <textarea {...input} {...props}></textarea>
        {error && <div className={LoginStyles.error}>*{error}</div>}
    </div>
}
function Input({input, meta:{error}, ...props}){
    return <div>
        <input {...input} {...props} />
        {error && <div className={LoginStyles.error}>*{error}</div>}
    </div>
}

///HOC for some forms 

const withReduxForm = (Component) => {
    const withForm = ({input, meta:{touched, error}, ...props}) => {
        return <> <Component className={LoginStyles.input} id="standard-basic" label={props.placeholder} variant="outlined"
         {...input} {...props} />
        {touched && error && <div className={LoginStyles.error}>*{error}</div>}
        </>
    }
    return withForm
}



export {TextArea, withReduxForm, Input}