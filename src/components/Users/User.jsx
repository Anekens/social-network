import React from 'react'
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";


const User = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.item}>
                <div className={s.avatar}>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img alt={"avatar"} src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
                             className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div className={s.info}>
                    <div className={s.name}>{props.user.name}</div>
                    <div className={s.status }>{props.user.status}</div>
                </div>
            </div>
            <div className={s.button}>
                {props.user.followed
                    ? <button className={s.follow}
                              disabled={props.followingInProgress
                                  .some(id => id === props.user.id)}
                              onClick={() => {
                                  props.unfollow(props.user.id)
                              }}>
                        Unfollow
                    </button>
                    : <button className={s.follow}
                              disabled={props.followingInProgress
                                  .some(id => id === props.user.id)}
                              onClick={() => {
                                  props.follow(props.user.id)
                              }}>
                        Follow
                    </button>
                }
            </div>
        </div>
    )
};

export default User