import React from 'react';
import Contacts from "./Contacts";
import {Button} from "antd";
import 'antd/dist/antd.css';

const ProfileDataUser = (props) => {
    return (
        <div>

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
                {props.isOwner &&
                <div>
                    <Button onClick={props.goToEditMode}>Edit</Button>
                </div>}
            </div>
        </div>
    )
};

export default ProfileDataUser