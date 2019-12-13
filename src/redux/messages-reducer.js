import ava from "../../src/assets/images/user.png";

import React from "react";
import {reset} from 'redux-form';

const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    usersData: [
        {name: 'Max', id: 1, avatar: ava},
        {name: 'Vlad', id: 2, avatar: ava},
        {name: 'Vanya', id: 3, avatar: ava},
        {name: 'Ilya', id: 4, avatar: ava},
        {name: 'Anastasiya', id: 5, avatar: ava},
        {name: 'Dimych', id: 6, avatar: ava}
    ],
    messagesData: [
        {text: 'Hi', id: 1},
        {text: 'See you later', id: 2},
        {text: 'No problem', id: 3},
        {text: 'okay', id: 4},
        {text: 'ok', id: 5},
        {text: 'not yet', id: 6}
    ],
    dialogs: [
        {you: true, message: 'Hi'},
        {you: false, message: 'How\'s it going?'}
    ]

};

const  messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                you: true,
                message: action.message
            };
            return {
                ...state,
                dialogs: [...state.dialogs, newMessage]
            }
        }
        default: return state;
    }
};

export default messagesReducer;

const sendMessageAC = (message) => ({ type: SEND_MESSAGE, message });

export const sendMessage = (text) => {
    return (dispatch) => {
        dispatch(sendMessageAC(text));
        dispatch(reset('dialogWithFriend'))
    }
};

