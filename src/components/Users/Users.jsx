import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) //increases to the bigger side
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages = [...pages, i]
    }

    return <div>
        <div>
            {pages.map(page => {
                return <span onClick={(e) => {
                    props.onPageChanged(page)
                }} className={props.currentPage === page && styles.selectedPage}>{page}</span>
            })}
        </div>
        {props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed ? <button onClick={() => {
                        props.unfollow(user.id)
                    }}>Unfollow</button> : <button onClick={() => {
                        props.follow(user.id)
                    }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
            </span>
        </div>)}
    </div>
}

export default Users