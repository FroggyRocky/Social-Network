import React from 'react'
import LoginForm from './LoginForm'
import { reduxForm } from 'redux-form'
import {logIn} from '../../redux/reducers/authReducer'
import { connect } from 'react-redux'
import { compose } from 'redux'

class Login extends React.Component {


    onSubmit = (loginFormData) => {
        const{email,pass,rememberMe} = loginFormData
        this.props.logIn(email,pass,rememberMe)
    }

    render() { 
    return  <div>
    <h4>Login</h4>
    <LoginForm onSubmit={this.onSubmit}/>
    </div>
}

}

const mapStateToProps = (state) => {
    return {
        // auth:state.Auth
    }
}
export default compose(
connect(mapStateToProps,{logIn}),
reduxForm({form:'Login'})
)(Login)