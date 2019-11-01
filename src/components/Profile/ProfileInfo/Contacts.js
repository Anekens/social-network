import React from 'react';
import s from './ProfileInfo.module.css';


const Contacts = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
};

export default Contacts