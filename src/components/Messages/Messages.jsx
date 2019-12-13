import React from 'react';
import MessagesUsers from './MessagesData/MessagesUsers';
import MessagesText from './MessagesData/MessagesText';
import s from './Messages.module.css';

const Messages = ({messagesPage}) => {
    const users = messagesPage.usersData.map( u => <MessagesUsers user={u.name} id={u.id} avatar={u.avatar} />);
    const messages = messagesPage.messagesData.map( m => <MessagesText text={m.text} id={m.id} />);

    return (
        <div className={s.content}>
            <div className={s.users}>
                {users}
            </div>
            <div className={s.text}>
                {messages}
            </div>
        </div>
    )
};

export default Messages;