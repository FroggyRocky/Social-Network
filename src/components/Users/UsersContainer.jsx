import React from 'react';
import {connect} from 'react-redux'
import Users from './Users'
import {friendUnfriendAC} from './../../redux/reducers/usersReducer'
const mapStateProps = (state) => {
    return {
        users:state.UsersPage.users,
        searchInput: state.UsersPage.searchInput
    }
}

const mapDispatchProps = (dispatch) => {
  
    return {
        friendUnfriend: (id) =>
        dispatch(friendUnfriendAC(id)) 
    }
}

const UsersContainer = connect(mapStateProps, mapDispatchProps)(Users)

export default UsersContainer;