import React from 'react';
import s from './Dialogs.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../Common/utils/validator";
import {Dialog} from "../../Common/FormsControls/FormsControls";
import ava from '../../../assets/images/user.png';


const Dialogs = (props) => {
    const userId = props.match.params.userId;

    const Message = (props) => {
        return (
            <>
                {props.you ?
                    <div className={s.messageItem + ' ' + s.messageItemYour}>
                        {props.text}
                        <img className={s.userAva} src={ava}/>
                    </div> :
                    <div className={s.messageItem}>
                        <img className={s.userAva} src={ava}/>
                        {props.text}
                    </div>
                }
            </>
        )
    };

    const chat = props.messagesPage.dialogs.map(m => <Message you={m.you} text={m.message}/>);

    const onSendMessage = (value) => {
        props.sendMessage(value.newMessage);
    };

    return (
        <div className={s.content}>
            <div className={s.chat}>
                {chat}
            </div>
            <div className={s.sendMessageForm}>
                <DialogReduxForm onSubmit={onSendMessage}/>
            </div>
        </div>
    )
};

const maxLength = maxLengthCreator(30);

const DialogForm = ({handleSubmit}) => {
    return (

            <form onSubmit={handleSubmit}>
                <Field className={s.textarea} type='textarea' component={Dialog} name='newMessage'
                       validate={[required, maxLength]}/>
                <button className={s.sendBtn}>send</button>
            </form>

    )
};

const DialogReduxForm = reduxForm({form: 'dialogWithFriend'})(DialogForm);

export default Dialogs;