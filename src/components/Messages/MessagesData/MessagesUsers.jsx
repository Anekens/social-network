import React from 'react';
import s from './MessagesData.module.css';

const MessagesUsers = ({avatar, user}) => {

    return (
        <div className={s.item}>
            <div className={s.avatar}>
                <img className={s.avatarImg} src={avatar} />

            </div>
            <div className={s.name}>{user}</div>
        </div>
    )
};

export default MessagesUsers;