
import {connect} from 'react-redux'
import Users from './Users'
import {friendUnfriendAC, getUsersAC} from './../../redux/reducers/usersReducer'
const mapStateProps = (state) => {
    return {
        users:state.UsersPage.users,
        searchInput: state.UsersPage.searchInput
    }
}

const mapDispatchProps = (dispatch) => {
  
    return {
        friendUnfriend: (id) =>
        dispatch(friendUnfriendAC(id)),
        getUsers: (users) => {
        dispatch(getUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateProps, mapDispatchProps)(Users)

export default UsersContainer;