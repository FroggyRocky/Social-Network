import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import {compose} from 'redux'
import {onRegisterChanges, loadUsers, friendUnfriend }
from './../../redux/reducers/usersReducer'
import withRedirect from '../../hoc/withRedirect'
import {getUsersS} from '../../redux/reducers/Selectors'
import {changePage} from '../../redux/reducers/usersReducer'

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
        disabledButtons: state.UsersPage.disabledButtons,
        totalUsersCount:state.UsersPage.totalUsersCount,
        portionCount:state.UsersPage.portionCount,
        currentPage:state.UsersPage.currentPage 
        } 
    
}

const mapDispatch = { onRegisterChanges, loadUsers,friendUnfriend, changePage}

export default compose(
    withRedirect,
    connect(mapStateProps, mapDispatch)
)(UsersAPIContainer)




