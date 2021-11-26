import React from 'react'
import {withRouter} from 'react-router-dom'
import * as axios from 'axios'
import {connect} from 'react-redux'
import {onGetUserProfileData} from '../../redux/reducers/profileReducer'
import Profile from './Profile'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let idParams = this.props.match.params.userId;
        if(!idParams) {
            idParams='2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${idParams}`)
        .then((response) => {
            this.props.onGetUserProfileData(response.data);
        })
    }

    render() {    
        console.log(this.props);
return <Profile profile={ !this.props.profile.userProfileData ? 
    this.props.profile.defaultProfile : this.props.profile.userProfileData} />

    }

}

const ProfileAPIContainer = withRouter(ProfileContainer)

const mapStateProps = (state) => {
    return {
        profile:state.ProfilePage
    }
}

const mapDispatchProps = {
    onGetUserProfileData
}

export default connect(mapStateProps, mapDispatchProps)(ProfileAPIContainer)


