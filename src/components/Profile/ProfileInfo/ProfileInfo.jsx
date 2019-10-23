import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div className={s.image}>*/}
            {/*    <img*/}
            {/*        src="https://www.mountsinai.org/files/MSHealth/Assets/Media/final/new-york-city-brooklyn-bridge-2.jpg"*/}
            {/*        alt=""/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
               <ProfileStatus status="yoyoyo"/>
                <h2>Description</h2>
                <p>{props.profile.aboutMe}</p>
                <p>{props.profile.contacts.facebook}</p>
                <p>{props.profile.contacts.vk}</p>
                <p>{props.profile.fullName}</p>
            </div>
        </div>
    )
};

export default ProfileInfo