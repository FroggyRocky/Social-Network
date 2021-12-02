import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import {onRegisterChanges, loadUsers, showMoreUsers, friendUnfriend }
from './../../redux/reducers/usersReducer'


class UsersAPIContainer extends React.Component {

    componentDidMount = () => {
       this.props.loadUsers(this.props.currentPage, this.props.portionCount)
    }

    render() {
        return <Users {...this.props}/>
    }
}


const mapStateProps = (state) => {
    return {
        users: state.UsersPage.users,
        searchInput: state.UsersPage.searchInput,
        totalUsersCount: state.UsersPage.totalUsersCount,
        portionCount: state.UsersPage.portionCount,
        currentPage: state.UsersPage.currentPage,
        isLoading: state.UsersPage.isLoading,
        isLoadingShowMore: state.UsersPage.isLoadingShowMore,
        disabledButtons: state.UsersPage.disabledButtons
        }
}

const mapDispatch = { onRegisterChanges, loadUsers, showMoreUsers, friendUnfriend}

export default connect(mapStateProps, mapDispatch)(UsersAPIContainer)



