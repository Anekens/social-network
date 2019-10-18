import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.image}>
                <img
                    src="https://www.mountsinai.org/files/MSHealth/Assets/Media/final/new-york-city-brooklyn-bridge-2.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo