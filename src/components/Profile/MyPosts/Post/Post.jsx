import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://whatsism.com/uploads/posts/2018-05/thumbs/1525374264_7f85e7b.jpeg" alt=""/>
            {props.message}
            <div>
                <span>Like</span>
                {props.likesCount}
            </div>
        </div>


    )
};

export default Post