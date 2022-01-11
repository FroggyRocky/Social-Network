import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import {toAuth, logOut} from '../../redux/reducers/authReducer'
import {setPhoto, toggleEditMode} from '../../redux/reducers/profileReducer'


function HeaderAPIContainer(props) {
        return <Header {...props} />
}

const mapStateToProps = (state) => {
        return {
                auth:state.Auth,
                profile:state.ProfilePage.currentUserProfileData,
                isEditModeOn:state.ProfilePage.isEditModeOn
        }
}

export default connect(mapStateToProps, {toAuth, logOut,setPhoto,toggleEditMode })
(HeaderAPIContainer)