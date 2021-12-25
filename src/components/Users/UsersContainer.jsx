import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import {compose} from 'redux'
import {onRegisterChanges, loadUsers, showMoreUsers, friendUnfriend }
from './../../redux/reducers/usersReducer'
import withRedirect from '../../hoc/withRedirect'
import {getUsersS, totalUsersCountS, portionCountS, currentPageS} from '../../redux/reducers/Selectors'

class UsersAPIContainer extends React.Component {

    componentDidMount = () => {
       this.props.loadUsers(this.props.currentPage)
    }

    render() { 
        return <Users {...this.props}/>
    }
}

const mapStateProps = (state) => {
    return { 
        users: getUsersS(state),
        searchInput: state.UsersPage.searchInput, 
        isLoading: state.UsersPage.isLoading, 
        pageIsLoading: state.UsersPage.pageIsLoading, 
        disabledButtons: state.UsersPage.disabledButtons 
        } 
    
}

const mapDispatch = { onRegisterChanges, loadUsers,friendUnfriend}

export default compose(
    withRedirect,
    connect(mapStateProps, mapDispatch)
)(UsersAPIContainer)




