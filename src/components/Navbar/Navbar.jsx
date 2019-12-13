import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.navList}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.activeNav}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.activeNav}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users" activeClassName={s.activeNav}>Users</NavLink>
                </div>
                <div className={`${s.item} ${s.settings}`}>
                    <NavLink to="/settings" activeClassName={s.activeNav}>Settings</NavLink>
                </div>
            </div>
        </nav>
    )
};

export default Navbar