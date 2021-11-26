import React from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import {onHomeClick} from '../../redux/reducers/profileReducer'

const mapDispatchProps = {
    onHomeClick
}

const mapStateProps = (state) => {
    return {ProfilePage:state.ProfilePage}
} 
export default connect(mapStateProps, mapDispatchProps)(Header)