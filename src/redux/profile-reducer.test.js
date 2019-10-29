import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Its my first post', likeCount: 12},
        {id: 2, message: 'Hi, how are you?', likeCount: 14}
    ]
};


it('length of posts should be incremented', () => {

    let action = addPostActionCreator("it-kamasutra.com");

    let newState = profileReducer(state, action);

    expect (newState.posts.length).toBe(3);
});

it('message of new posts should be "it-kamasutra.com"', () => {

    let action = addPostActionCreator("it-kamasutra.com");

    let newState = profileReducer(state, action);

    expect (newState.posts[2].message).toBe("it-kamasutra.com")
});

it('after deleting length of message should be decrement', () => {

    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect (newState.posts.length).toBe(3);
});

it('after deleting length should`t be decrement if id incorrect', () => {

    let action = deletePost(10);

    let newState = profileReducer(state, action);

    expect (newState.posts.length).toBe(2);
});



