import React from 'react'
import { connect } from 'react-redux'
import * as axios from 'axios'
import Header from './Header'
import { onHomeClick } from '../../redux/reducers/profileReducer'
import { authUserData } from '../../redux/reducers/authReducer'
import {authAPI} from '../../api/api'
class HeaderAPIContainer extends React.Component {

    componentDidMount() {
        authAPI()
            .then((response) => { 
                if (response.resultCode === 0) {
                    let { email, id, login } = response.data
                    this.props.authUserData(email, id, login);
                }

            })
    }

    render() {

        return <Header {...this.props} />
    }

}


const mapDispatchProps = {
    onHomeClick,
    authUserData,
}

const mapStateProps = (state) => {
    return {
        UserAuth: state.UserAuth
    }
}
export default connect(mapStateProps, mapDispatchProps)(HeaderAPIContainer)