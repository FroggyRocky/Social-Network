import React from 'react'
import { withRouter} from 'react-router-dom'
import profileStyles from './Profile.module.css'
import { connect } from 'react-redux'
import {loadProfile} from '../../redux/reducers/profileReducer'
import Profile from './Profile'
import CircularProgress from '@mui/material/CircularProgress';
import withRedirect from '../../hoc/withRedirect'

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

const withRedirectProfileContainer = withRedirect(ProfileAPIContainer)

const mapStateProps = (state) => {
    return {
        profile: state.ProfilePage,
    }
}

const mapDispatchProps = {
    loadProfile
}

export default connect(mapStateProps, mapDispatchProps)(withRedirectProfileContainer)


