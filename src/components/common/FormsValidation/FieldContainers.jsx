import React from 'react'
import LoginStyles from '../../Login/LoginForm.module.css'


function editProileTextArea({input, meta:{error, invalid, touched}, ...props}) {
    return <div>
        <textarea {...input} {...props}></textarea>
        {touched && invalid && <div className={LoginStyles.error}>*{error}</div>}
    </div>
}

function TextArea({input, meta:{error}, ...props}){
    return <div>
        <textarea {...input} {...props}></textarea>
        {error && <div className={LoginStyles.error}>*{error}</div>}
    </div>
}
function Input({input, meta:{error, invalid}, ...props}){
    return <div>
        <input {...input} {...props} />
        {error && <div className={LoginStyles.error}>*{error}</div>}
    </div>
}

///HOC for some forms 

const withReduxForm = (Component) => {
    const withForm = ({input, meta:{touched, error, invalid}, ...props}) => {
        return <> <Component className={LoginStyles.input} id="standard-basic" label={props.placeholder} variant="outlined"
         {...input} {...props} />
        {touched && error  && <div className={LoginStyles.error}>*{error}</div>}
        </>
    }
    return withForm
}



export {TextArea, withReduxForm, Input, editProileTextArea}