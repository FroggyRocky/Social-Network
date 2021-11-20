import React from 'react'
import UsersStyles from './Users.module.css'
import * as axios from 'axios'


class Users extends React.Component {

    constructor(props) {
        super(props)
if(this.props.users.length === 0) {
axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
.then((response) => {
this.props.onGetUsers(response.data.items);
 })
}  
    }


    addFriend = (id) => {
       this.props.onAddFriend(id) 
    }

    registerChanges = (e) => {
        const value = e.target.value;
        this.props.onRegisterChanges(value)
    }


render = () => {

const users = this.props.users.map((el) => {
    return <div className={UsersStyles.user_box}>
        <div className={UsersStyles.user_box_content}>
    <div className={UsersStyles.user_avatar}>
<img src={!el.photos.small ?
`https://cdn3.vectorstock.com/i/thumb-large/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg} alt=""` : el.photos.small} />
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
<button><h2>SHOW MORE</h2></button>
    </div>
</section>
</div>
    )
}
}

export default Users