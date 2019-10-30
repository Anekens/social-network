import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatusWithHooks status={props.status}
                                        updateStatus={props.updateStatus}/>
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