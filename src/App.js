import React from 'react';
import s from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";


const DialogsContainer = React.lazy(() =>
    import('./components/Messages/Dialogs/DialogsContainer'));
const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>;
        }
        return (
            <div className={s.wrapper}>
                <HeaderContainer/>
                <Navbar/>
                <div className={s.content}>
                    <div className={s.bg}/>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                        <Route exact path='/dialogs'
                               render={withSuspense(MessagesContainer)}/>
                        <Route exact path='/dialogs/:userId'
                               render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        {/*<Route path='/settings' render={() => <Settings/>}/>*/}
                        <Route path='/login' render={() => <LoginPage/>}/>
                        <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SocialNetworkApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
};

export default SocialNetworkApp;

