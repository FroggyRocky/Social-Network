
import {connect} from 'react-redux'
import UsersAPIContainer from './UsersAPIContainer'
import { addFriendAC, getUsersAC, registerChangesAC,
getTotalUsersAC, showMoreAC, isLoadingAC, isLoadingShowMoreAC} from './../../redux/reducers/usersReducer'

const mapStateProps = (state) => {
    return {
        users:state.UsersPage.users,
        searchInput: state.UsersPage.searchInput,
        totalUsersCount:state.UsersPage.totalUsersCount,
        portionCount:state.UsersPage.portionCount,
        currentPage:state.UsersPage.currentPage,
        isLoading: state.UsersPage.isLoading,
        isLoadingShowMore:state.UsersPage.isLoadingShowMore
    }
}

const mapDispatchProps = (dispatch) => {
  
    return {
        onAddFriend: (id) => {
        dispatch(addFriendAC(id))
        },
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
        },
        onIsLoadingMain: () => {
            dispatch(isLoadingAC())
        },
        onIsLoadingShowMore: () => {
            dispatch(isLoadingShowMoreAC())
        }
    }
}

const UsersContainer = connect(mapStateProps, mapDispatchProps)(UsersAPIContainer)

export default UsersContainer;