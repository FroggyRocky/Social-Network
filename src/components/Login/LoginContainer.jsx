import React from 'react'
import LoginForm from './LoginForm'
import { reduxForm } from 'redux-form'
import {logIn} from '../../redux/reducers/authReducer'
import { connect } from 'react-redux'
import LoginStyles from './LoginForm.module.css'
import {Redirect} from 'react-router-dom'


class Login extends React.Component {


    onSubmit = (loginFormData) => { console.log('submit');
        const{email,pass,rememberMe} = loginFormData
        this.props.logIn(email,pass,rememberMe)
      
    }

    render() {
        
if(this.props.isLogged) return <Redirect to='/profile'/>
         return <div className={LoginStyles.login_container}>
    <div className={LoginStyles.login_header}>
    <h4>Login</h4>
    </div>
    <WithReduxForm onSubmit={this.onSubmit}/>
    </div>
}

}

const WithReduxForm = reduxForm({form:'Login'})(LoginForm)

const mapStateToProps = (state) => ({
    isLogged: state.Auth.isLogged
})

export default connect(mapStateToProps,{logIn})(Login)



