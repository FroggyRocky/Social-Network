import React from 'react'
import LoginForm from './LoginForm'
import { reduxForm } from 'redux-form'
import {logIn} from '../../redux/reducers/authReducer'
import { connect } from 'react-redux'
import loginStyles from './LoginForm.module.css'



class Login extends React.Component {


    onSubmit = (loginFormData) => {
          console.log(loginFormData);
        // const{email,pass,rememberMe} = loginFormData
        // this.props.logIn(email,pass,rememberMe)
      
    }

    render() {
    return  <div className={loginStyles.login_container}>
    <h4>Login</h4>
    <WithReduxForm onSubmit={this.onSubmit}/>
    </div>
}

}

const WithReduxForm = reduxForm({form:'Login'})(LoginForm)

const mapStateToProps = (state) => {
    return {
        // auth:state.Auth
    }
}

export default connect(mapStateToProps,{logIn})(Login)



