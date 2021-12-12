import React from 'react'
import LoginForm from './LoginForm'
import { reduxForm } from 'redux-form'
import {logIn} from '../../redux/reducers/authReducer'
import { connect } from 'react-redux'
import loginStyles from './LoginForm.module.css'
import {Redirect} from 'react-router-dom'


class Login extends React.Component {


    onSubmit = (loginFormData) => {
        const{email,pass,rememberMe} = loginFormData
        this.props.logIn(email,pass,rememberMe)
      
    }

    render() {
        
if(this.props.isLogged) return <Redirect to='/profile'/>
         return <div className={loginStyles.login_container}>
    <h4>Login</h4>
    <WithReduxForm onSubmit={this.onSubmit}/>
    </div>
}

}

const WithReduxForm = reduxForm({form:'Login'})(LoginForm)

const mapStateToProps = (state) => ({
    isLogged: state.Auth.isLogged
})

export default connect(mapStateToProps,{logIn})(Login)



