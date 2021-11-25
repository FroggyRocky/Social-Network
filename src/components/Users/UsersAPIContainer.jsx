import React from 'react'
import Users from './Users'
import * as axios from "axios"
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
    })}


render() {
    return <Users {...this.props} showMore={this.showMore} />
}

}

export default UsersAPIContainer