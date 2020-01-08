

import React from 'react';
import s from './Header.module.css';
import {Redirect} from "react-router-dom";

const Header = ({isAuth, login, logout}) => {

    return (
        <header className={s.header}>
            <div className={s.banner}>
                {isAuth ? <div className={s.logFrom}>
                        <h3 className={s.name}>{login}</h3>
                        <span className={s.logoutBtn} onClick={() => logout()}>Logout</span>
                    </div> :
                    <Redirect to='/login' />
                }
            </div>
        </header>
    );
};

export default Header;
