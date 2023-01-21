import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = (props) => {
    let friendsElements = props.friends.map(friend => <span className={classes.friendName}>{friend}</span>)

    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
        </div>
        <div className={classes.item}
        >
            <NavLink to='/dialogues' activeClassName={classes.activeLink}>Messages</NavLink>
        </div><div className={classes.item}>
            <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to='/users' activeClassName={classes.activeLink}>Users</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
        </div>
        <div className={classes.friends}>
            <h2>Friends</h2>
            <div className={classes.friendsList}>
                <span className={classes.dot}></span>
                <span className={classes.dot}></span>
                <span className={classes.dot}></span>
                {friendsElements}
            </div>
        </div>
    </nav>
}

export default Navbar;