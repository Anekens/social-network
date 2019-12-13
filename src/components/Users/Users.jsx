import React from 'react'
import s from './users.module.css'
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";



const Users = (props) => {
    return (
        <div className={s.main}>
            <Paginator currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}/>

            {props.users.map(u => <User user={u}
                                        key={u.id}
                                        followingInProgress={props.followingInProgress}
                                        unfollow={props.unfollow}
                                        follow={props.follow}/>)}

        </div>
    )
};

export default Users