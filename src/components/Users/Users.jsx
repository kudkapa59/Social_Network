import React from "react";
import styles from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0){
        props.setUsers([
            { id: 1, followed: true, photoUrl: 'https://i.mimibazar.cz/h/bc/8/100225/20/h31142.jpg', fullName: 'Dmitry', status: 'I\'m a boss', location: {city: 'Minsk', country: 'Belarus'}},
            { id: 2, photoUrl: 'https://i.mimibazar.cz/h/bc/8/100225/20/h31142.jpg', followed: false, fullName: 'Sasha', status: 'I\'m a boss too', location: {city: 'Aktau', country: 'Kazakhstan'}},
            { id: 3, photoUrl: 'https://i.mimibazar.cz/h/bc/8/100225/20/h31142.jpg', followed: true, fullName: 'John', status: 'I\'m a boss too', location: {city: 'Prague', country: 'Czech Republic'}},
            { id: 4, photoUrl: 'https://i.mimibazar.cz/h/bc/8/100225/20/h31142.jpg', followed: false, fullName: 'Alex', status: 'Me too', location: {city: 'Kiev', country: 'Ukraine'}},
        ])
    }

    return <div>
        {props.users.map(user => <div key={user.id}>
            <span>
                <div>
                    <img src={user.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {user.followed ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button> :
                        <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{user.location.country}</div>
                    <div>{user.location.city}</div>
                </span>
            </span>
        </div>)}
    </div>
}

export default Users