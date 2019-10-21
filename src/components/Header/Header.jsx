import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://seeklogo.com/images/G/globo-logo-486706AB94-seeklogo.com.png"  />
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to={'/login'} activeClassName={s.activeLink}>Login</NavLink> }
            </div>
        </header>
    )
};

export default Header
