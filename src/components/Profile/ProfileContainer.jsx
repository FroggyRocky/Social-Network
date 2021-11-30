import React from 'react'
import { withRouter } from 'react-router-dom'
import profileStyles from './Profile.module.css'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { onGetUserProfileData, loadCurrentUserProfileData} from '../../redux/reducers/profileReducer'
import {getProfile} from '../../api/api'
import Profile from './Profile'
import CircularProgress from '@mui/material/CircularProgress';


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.loadCurrentUserProfileData()
        let idParam = this.props.match.params.userId;
        !idParam && this.props.loadCurrentUserProfileData();
        getProfile(idParam)
            .then((data) => { 
            this.props.loadCurrentUserProfileData()
            this.props.onGetUserProfileData(data);
            })
    }

    render() {
        return <>
         {this.props.profile.isProfileLoading ? <div className={profileStyles.preloader_container_main}><CircularProgress /></div> :
        <Profile  profile={!this.props.profile.currentUserProfileData ?
            this.props.profile.defaultProfile : this.props.profile.currentUserProfileData} />
             
        }
    </>
    }

}

const ProfileAPIContainer = withRouter(ProfileContainer)

const mapStateProps = (state) => {
    return {
        profile: state.ProfilePage,
    }
}

const mapDispatchProps = {
    onGetUserProfileData,
    loadCurrentUserProfileData

}

export default connect(mapStateProps, mapDispatchProps)(ProfileAPIContainer)


