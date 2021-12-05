import React from 'react'
import {compose} from 'redux'
import { withRouter} from 'react-router-dom'
import profileStyles from './Profile.module.css'
import { connect } from 'react-redux'
import {loadProfile, getProfileStatus, setProfileStatus} from '../../redux/reducers/profileReducer'
import Profile from './Profile'
import CircularProgress from '@mui/material/CircularProgress';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let idParam = this.props.match.params.userId;
        if(!idParam) idParam = 21039 
        this.props.loadProfile(idParam),
        this.props.getProfileStatus(idParam)
        }

    render() {
       
        return <>
         {this.props.profile.isProfileLoading ? <div className={profileStyles.preloader_container_main}><CircularProgress /></div> :
        <Profile setStatus={this.props.setProfileStatus} status = {this.props.status}  profile={!this.props.profile.currentUserProfileData ?
            this.props.profile.defaultProfile : this.props.profile.currentUserProfileData}  />
             
        }
    </>
    }

}


const mapStateProps = (state) => {
    return {
        profile: state.ProfilePage,
        status: state.ProfilePage.currentProfileStatus
    }
}

const mapDispatchProps = {
    loadProfile,
    getProfileStatus,
    setProfileStatus
}

export default compose(
    withRouter,
    connect(mapStateProps, mapDispatchProps))
    (ProfileContainer)


