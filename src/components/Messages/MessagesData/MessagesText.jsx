import React from 'react';
import s from './MessagesData.module.css';
import {NavLink} from "react-router-dom";

const MessagesText = ({text, id}) => {

    const path ='/dialogs/' + id;

    return (
        <NavLink to={path}>
            <div className={s.item}>
                <div className={s.message}>{text}</div>
            </div>
        </NavLink>
    )
};

export default MessagesText;