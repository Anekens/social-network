import React from 'react'
import s from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {

    props.setUsers([
            {
                id: 1,
                photoUrl: 'http://pp.userapi.com/yuyiUoWX3Vz5J0OEqQ3epUc-ulGnS90jiDG3YQ/YTXzdrfOWAI.jpg?ava=1',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'http://pp.userapi.com/yuyiUoWX3Vz5J0OEqQ3epUc-ulGnS90jiDG3YQ/YTXzdrfOWAI.jpg?ava=1',
                followed: true,
                fullName: 'Sasha',
                status: 'I am boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'http://pp.userapi.com/yuyiUoWX3Vz5J0OEqQ3epUc-ulGnS90jiDG3YQ/YTXzdrfOWAI.jpg?ava=1',
                followed: false,
                fullName: 'Andrew',
                status: 'I am boss too',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ]
    );
}

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
};

export default Users;