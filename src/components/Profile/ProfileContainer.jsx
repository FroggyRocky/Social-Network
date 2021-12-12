import React from 'react'
import {compose} from 'redux'
import { withRouter, Redirect} from 'react-router-dom'
import profileStyles from './Profile.module.css'
import { connect } from 'react-redux'
import {loadCurrentProfile, getProfileStatus, setProfileStatus} from '../../redux/reducers/profileReducer'
import Profile from './Profile'
import CircularProgress from '@mui/material/CircularProgress';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let idParam = this.props.match.params.userId;
        if(!idParam) idParam = this.props.auth.id 
        this.props.loadCurrentProfile(idParam),
        this.props.getProfileStatus(idParam)
        }
componentDidUpdate(prevProps, prevState) {
    if(prevProps.match.params.userId != this.props.match.params.userId)
    this.props.loadCurrentProfile(this.props.match.params.userId),
    this.props.getProfileStatus(this.props.match.params.userId)
}
    render() {
        if(!this.props.auth.isLogged) return <Redirect to='/login' />
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
        status: state.ProfilePage.currentProfileStatus,
        auth: state.Auth
      }
}

const mapDispatchProps = {
    loadCurrentProfile,
    getProfileStatus,
    setProfileStatus
}

export default compose(
    withRouter,
    connect(mapStateProps, mapDispatchProps))
    (ProfileContainer)


