import React from "react";
import { compose } from "redux";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {toAuth} from '../../redux/reducers/authReducer'
import {
  loadCurrentProfile,
  getProfileStatus,
  setProfileStatus,
  toggleEditMode
} from "../../redux/reducers/profileReducer";
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import { getStatusS } from "../../redux/reducers/Selectors";
import "../../App.css";

class ProfileContainer extends React.Component {

  refreshProfile = () => {
    
    let idParam = this.props.match.params.userId;
    if (!idParam) idParam = this.props.auth.id;
    this.props.loadCurrentProfile(idParam),
      this.props.getProfileStatus(idParam);
  };

  
 componentDidMount() { 
  this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.userId != this.props.match.params.userId)
      this.refreshProfile();
  }
  render() {
    if (!this.props.auth.isLogged) return <Redirect to="/login" />;
    return (
      <>
        {this.props.profile.isProfileLoading ? (
          <Preloader />
        ) : (
          <Profile
            setStatus={this.props.setProfileStatus}
            status={this.props.status}
            profile={this.props.profile.currentUserProfileData}
            toggleEditMode={this.props.toggleEditMode}
          />
        )}
      </>
    );
  }
}

const mapStateProps = (state) => {
  return {
    profile: state.ProfilePage,
    status: getStatusS(state),
    auth: state.Auth,
  };
};

const mapDispatchProps = {
  loadCurrentProfile,
  getProfileStatus,
  setProfileStatus,
  toggleEditMode
};

export default compose(
  withRouter,
  connect(mapStateProps, mapDispatchProps)
)(ProfileContainer);
