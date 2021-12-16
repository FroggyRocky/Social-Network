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
       this.props.loadUsers(this.props.currentPage, this.props.portionCount)
    }

    render() { 
        return <Users {...this.props}/>
    }
}

const mapStateProps = (state) => {
    return { 
        users: getUsersS(state),
        searchInput: state.UsersPage.searchInput, 
        totalUsersCount: totalUsersCountS(state),
        portionCount: portionCountS(state),
        currentPage: currentPageS(state),
        isLoading: state.UsersPage.isLoading, 
        isLoadingShowMore: state.UsersPage.isLoadingShowMore, 
        disabledButtons: state.UsersPage.disabledButtons 
        } 
    
}

const mapDispatch = { onRegisterChanges, loadUsers, showMoreUsers, friendUnfriend}

export default compose(
    withRedirect,
    connect(mapStateProps, mapDispatch)
)(UsersAPIContainer)




