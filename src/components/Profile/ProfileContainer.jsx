import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import profileStyles from './Profile.module.css'
import { connect } from 'react-redux'
import {loadProfile} from '../../redux/reducers/profileReducer'
import Profile from './Profile'
import CircularProgress from '@mui/material/CircularProgress';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let idParam = this.props.match.params.userId;
        this.props.loadProfile(idParam)
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

const withAuthContainer = (props) => {
    if(!props.isLogged) return <Redirect to='/login' />
    return <ProfileAPIContainer {...props} />
} 

const mapStateProps = (state) => {
    return {
        profile: state.ProfilePage,
        isLogged: state.Auth.isLogged
    }
}

const mapDispatchProps = {
    loadProfile
}

export default connect(mapStateProps, mapDispatchProps)(withAuthContainer)


