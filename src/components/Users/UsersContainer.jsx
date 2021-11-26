import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import * as axios from 'axios'
import {
    onAddFriend, onGetUsers, onRegisterChanges, onGetTotalUsers,
    onShowMore, onIsLoadingMain, onIsLoadingShowMore
} from './../../redux/reducers/usersReducer'


class UsersAPIContainer extends React.Component {

    componentDidMount = () => {
        this.props.onIsLoadingMain();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.portionCount}`)
            .then((response) => {
                this.props.onIsLoadingMain();
                this.props.onGetUsers(response.data.items);
                this.props.onGetTotalUsers(response.data.totalCount)
            })
    }

    showMore = () => {
        this.props.onIsLoadingShowMore()
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage + 1}&count=${this.props.portionCount}`)
            .then((response) => {
                this.props.onIsLoadingShowMore();
                this.props.onShowMore(response.data.items)
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
        isLoadingShowMore: state.UsersPage.isLoadingShowMore
    }
}

const mapDispatch = {
    onAddFriend, onGetUsers, onRegisterChanges, onGetTotalUsers,
    onShowMore, onIsLoadingMain, onIsLoadingShowMore
}

export default connect(mapStateProps, mapDispatch)(UsersAPIContainer)



