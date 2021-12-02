import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import * as axios from 'axios'
import {UsersAPI} from '../../api/api'
import {onAddFriend, onGetUsers, onRegisterChanges, onGetTotalUsers,
onShowMore, onIsLoadingMain, onIsLoadingShowMore, isFollowing
} from './../../redux/reducers/usersReducer'


class UsersAPIContainer extends React.Component {

    componentDidMount = () => {
        this.props.onIsLoadingMain();
        UsersAPI.getUsers(this.props.currentPage, this.props.portionCount)
            .then((data) => {
                this.props.onIsLoadingMain();
                this.props.onGetUsers(data);
                this.props.onGetTotalUsers(data.totalCount)
            })
    }

    showMore = () => {
        this.props.onIsLoadingShowMore()
        UsersAPI.getUsers(this.props.currentPage+1, this.props.portionCount)
            .then((data) => {
                this.props.onIsLoadingShowMore();
                this.props.onShowMore(data)
            })
    }


    render() {
        return <Users {...this.props} showMore={this.showMore} />
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
        disabledButtons: state.UsersPage.disabledButtons,
    }
}

const mapDispatch = {
    onAddFriend, onGetUsers, onRegisterChanges, onGetTotalUsers,
    onShowMore, onIsLoadingMain, onIsLoadingShowMore, isFollowing
}

export default connect(mapStateProps, mapDispatch)(UsersAPIContainer)



