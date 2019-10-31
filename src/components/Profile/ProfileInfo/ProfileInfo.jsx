import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    };

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.mainPhoto}
                     alt={"avatar"}
                     src={props.profile.photos.large || userPhoto}/>
                {props.isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
                <ProfileStatusWithHooks status={props.status}
                                        updateStatus={props.updateStatus}/>
                <div>
                    <h2>Descriptions</h2>
                    <div>
                        <b>Full name: </b>{props.profile.fullName}
                    </div>
                    <div>
                        <b>Looking for a job: </b>{props.profile.lookingForAJob ? "Yes" : "No"}
                    </div>
                    {props.profile.lookingForAJob &&
                    <div>
                        <b>My professional skills: </b>{props.profile.lookingForAJobDescription}
                    </div>}
                    <div>
                        <b>About me: </b>{props.profile.aboutMe}
                    </div>


                    <p>{props.profile.contacts.facebook}</p>
                    <p>{props.profile.contacts.vk}</p>
                    <p>{props.profile.fullName}</p>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo