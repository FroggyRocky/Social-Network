import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Users.module.css'
import userImg from '../../assets/imgs/userImg.jpg'
import CircularProgress from '@mui/material/CircularProgress';
import Paginator from '../common/Paginator/Paginator'

import '../../App.css'



export default function Users(props) {

    function addFriend(id, isFollowed) {
        props.friendUnfriend(id, isFollowed)
    }

    function registerChanges(e) {
        const value = e.target.value;
        props.onRegisterChanges(value)
    }

    const users = props.users.map((el) => {
        return <div className={styles.user_box}>
            <div className={styles.user_box_content}>
                <div className={styles.user_avatar}>
                    <NavLink to={`/profile/${el.id}`}>
                        <img src={!el.photos.small ? userImg : el.photos.small} alt='userAvatar' />
                    </NavLink>
                </div>
                <div className={styles.information_main}>
                    <h4>{el.name}</h4>
                    <span></span>
                    <span></span>
                    <p>{el.status}</p>
                    <button disabled={props.disabledButtons.some((id) => id === el.id)}
                        className={styles.add_button}
                        onClick={() => { addFriend(el.id, el.followed) }}>
                        <h3>{el.followed ? 'FOLLOW' : 'UNFOLLOW'}</h3></button>
                </div>
            </div>

        </div>
    })


    return (
        <>
            {props.isLoading 
            ?
                <div className='preloader_container_main'>
                    <CircularProgress />
                </div>
                :
                <div className={styles.container}>
                    <section className={styles.search_section}>
                        <input onChange={registerChanges} value={props.searchInput}
                            type="text" placeholder="Search" />
                             <Paginator 
                             totalItems = {props.totalUsersCount}
                             portionCount = {props.portionCount}
                             currentPage={props.currentPage}
                             changePageFn={props.changePage}
                              />

                    </section>
                  
                    {props.pageIsLoading
                        ?
                        <section className={styles.friends_section}>
                            {users}
                        </section>
                        :
                        <div className='preloader_container_main'>
                        <CircularProgress/>
                        </div>
                    }

                </div>}
        </>
    )
}

