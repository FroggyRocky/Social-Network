import React from 'react'
import { NavLink } from 'react-router-dom'
import UsersStyles from './Users.module.css'
import userImg from '../../assets/imgs/userImg.jpg'
import CircularProgress from '@mui/material/CircularProgress';
import '../../App.css'



export default function Users(props) {

    function showMore() {
        props.showMoreUsers(props.currentPage, props.portionCount)
     }

    function addFriend(id, isFollowed) {
      props.friendUnfriend(id,isFollowed)
      }

    function registerChanges(e) {
        const value = e.target.value;
        props.onRegisterChanges(value)
    }

    const users = props.users.map((el) => {
        return <div className={UsersStyles.user_box}>
            <div className={UsersStyles.user_box_content}>
                <div className={UsersStyles.user_avatar}>
                    <NavLink to={`/profile/${el.id}`}>
                        <img src={!el.photos.small ? userImg : el.photos.small} alt='userAvatar' />
                    </NavLink>
                </div>
                <div className={UsersStyles.information_main}>
                    <h4>{el.name}</h4>
                    <span></span>
                    <span></span>
                    <p>{el.status}</p>
                    <button disabled={props.disabledButtons.some((id) => id === el.id)} 
                        className={UsersStyles.add_button}
                        onClick={() => { addFriend(el.id, el.followed) }}>
                        <h3>{el.followed ? 'FOLLOW' : 'UNFOLLOW'}</h3></button>
                </div>
            </div>

        </div>
    })


    return (
        <>
            {props.isLoading ?
                <div className='preloader_container_main'>
                    <CircularProgress />
                </div> :

                <div className={UsersStyles.container}>
                    <section className={UsersStyles.search_section}>
                        <input onChange={registerChanges} value={props.searchInput}
                            type="text" placeholder="Search" />
                    </section>
                    <section className={UsersStyles.friends_section}>
                        {users}
                    </section>
                    <section className={UsersStyles.showMore_container}>
                        <div className={UsersStyles.showMore_button}>
                            {props.isLoadingShowMore ?
                                <div className={UsersStyles.preloader_additional}>
                                    <CircularProgress /></div> :
                                <button disabled={props.isLoadingShowMore} 
                                onClick={showMore}><h2>SHOW MORE</h2></button>}
                        </div>
                    </section>
                </div>}
        </>
    )
}

