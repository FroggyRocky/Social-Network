
import {connect} from 'react-redux'
import Users from './Users'
import {addFriendAC, getUsersAC, registerChangesAC} from './../../redux/reducers/usersReducer'

const mapStateProps = (state) => {
    return {
        users:state.UsersPage.users,
        searchInput: state.UsersPage.searchInput
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
        }
    }
}

const UsersContainer = connect(mapStateProps, mapDispatchProps)(Users)

export default UsersContainer;