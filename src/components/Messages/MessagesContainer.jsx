import React from 'react';
import {connect} from "react-redux";
import Messages from "./Messages";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
};

export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)(Messages);