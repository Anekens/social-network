import React from 'react';
import Contacts from "./Contacts";


const ProfileDataUser = (props) => {
    return (
        <div>
            {props.isOwner && <div>
                <button onClick={props.goToEditMode}>Edit</button>
            </div>}
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
            <div>
                <b>Contacts: </b>{Object.keys(props.profile.contacts).map(key => {
                return <Contacts contactTitle={key}
                                 contactValue={[props.profile.contacts[key]]}
                                 key={key}/>
            })}
            </div>
        </div>
    )
};

export default ProfileDataUser