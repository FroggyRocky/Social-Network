
import {connect} from 'react-redux'
import Users from './Users'
import {addFriendAC, getUsersAC, registerChangesAC, getTotalUsersAC, showMoreAC} from './../../redux/reducers/usersReducer'

const mapStateProps = (state) => {
    return {
        users:state.UsersPage.users,
        searchInput: state.UsersPage.searchInput,
        totalUsersCount:state.UsersPage.totalUsersCount,
        portionCount:state.UsersPage.portionCount,
        currentPage:state.UsersPage.currentPage
    }
}

const mapDispatchProps = (dispatch) => {
  
    return {
        onAddFriend: (id) =>
        dispatch(addFriendAC(id)),
        onGetUsers: (users) => {
        dispatch(getUsersAC(users))
        },
        onRegisterChanges: (value) => {
            dispatch(registerChangesAC(value))
        },
        onGetTotalUsers: (totalCount) => {
            dispatch(getTotalUsersAC(totalCount))
        },
        onShowMore: (newUsers) => {
            dispatch(showMoreAC(newUsers))
        }
    }
}

const UsersContainer = connect(mapStateProps, mapDispatchProps)(Users)

export default UsersContainer;