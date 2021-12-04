import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { onHomeClick } from '../../redux/reducers/profileReducer'
import {toAuth} from '../../redux/reducers/authReducer'

class HeaderAPIContainer extends React.Component {

    componentDidMount() {
        this.props.toAuth()
    }

    render() {

        return <Header {...this.props} />
    }

}


const mapDispatchProps = {
    onHomeClick,
    toAuth
}

const mapStateProps = (state) => {
    return {
        Auth: state.Auth
    }
}
export default connect(mapStateProps, mapDispatchProps)(HeaderAPIContainer)