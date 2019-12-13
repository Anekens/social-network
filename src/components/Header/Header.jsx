// import React from 'react';
// import s from './Header.module.css';
// import {NavLink} from "react-router-dom";
//
// const Header = (props) => {
//     return (
//         <header className={s.header}>
//             <div className={s.loginBlock}>
//                 {props.isAuth
//                     ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
//                     : <NavLink to={'/login'} activeClassName={s.activeLink}>Log in</NavLink>}
//             </div>
//         </header>
//     )
// };
//
// export default Header

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
