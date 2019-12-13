import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";


const  HeaderContainer = (props) => {
    return (
        <Header {...props} logout={props.logout} />
    );
};

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);