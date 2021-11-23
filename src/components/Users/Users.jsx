import React from 'react'
import UsersStyles from './Users.module.css'
import * as axios from 'axios'


class Users extends React.Component {

    componentDidMount = () => {
axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.portionCount}`)
.then((response) => {
this.props.onGetUsers(response.data.items);
this.props.onGetTotalUsers(response.data.totalCount)
 })   
    }
    addFriend = (id) => {
       this.props.onAddFriend(id) 
    }

    registerChanges = (e) => {
        const value = e.target.value;
        this.props.onRegisterChanges(value)
    }

    showMore = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage + 1}&count=${this.props.portionCount}`)
        .then((response) => {
            this.props.onShowMore(response.data.items)
        })
        
    }

render = () => {


const users = this.props.users.map((el) => {
    return <div className={UsersStyles.user_box}>
        <div className={UsersStyles.user_box_content}>
    <div className={UsersStyles.user_avatar}>
<img src={!el.photos.small ? "https://dental-smile.net/public/uploads/profile_png_1113533201904221555971977765.png" : el.photos.small} alt='userAvatar' />
    </div>
    <div className={UsersStyles.information_main}>
<h4>{el.name}</h4>
<span></span>
<span></span>
<p>{el.status}</p>
<button className={UsersStyles.add_button} onClick={() => {this.addFriend(el.id)}}><h3>{el.followed ? 'UNFOLLOW' : 'FOLLOW'}</h3></button>
</div>
        </div>

    </div>
})

return (
<div className={UsersStyles.container}>
    <section className={UsersStyles.search_section}>
        <input onChange={this.registerChanges} value={this.props.searchInput} type="text" placeholder="Search"/>
    </section>
<section className={UsersStyles.friends_section}>
{users}
</section>
<section className={UsersStyles.showMore_container}>
    <div className={UsersStyles.showMore_button}>

<button onClick={() => this.showMore() }><h2>SHOW MORE</h2></button>
    </div>
</section>
</div>
    )
}
}

export default Users