import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import {toAuth, logOut} from '../../redux/reducers/authReducer'

class HeaderAPIContainer extends React.Component {

    componentDidMount() {
        this.props.toAuth()
    }

    render() {
        return <Header {...this.props} />
    }

}

const mapStateProps = (state) => {
    return {auth: state.Auth}}

export default connect(mapStateProps, {toAuth, logOut})(HeaderAPIContainer)