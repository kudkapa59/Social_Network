import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Route path="/dialogues" render={() => <DialoguesContainer/>}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
                <Route path="/users" render={() => <UsersContainer />}/>
                <Route path="/news"/>
                <Route path="/music"/>
                <Route path="/settings"/>
            </div>
        </div>);
}

export default App;