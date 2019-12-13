import React from 'react';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {sendMessage} from "../../../redux/messages-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

const DialogsContainer = (props) => {


    return (
        <Dialogs {...props} />
    )
};

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message) => {
            dispatch(sendMessage(message));
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(DialogsContainer);