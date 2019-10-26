import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import AddNewPostFormRedux from "./AddNewPostForm";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likeCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };


    return (
        <div className={s.postBlocks}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts