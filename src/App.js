import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';
import NavbarContainer from "./components/Navbar/NavbarContainer";

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <NavbarContainer/>
      <div className='app-wrapper-content'>
        {/* <Route path="/dialogues" component={Dialogues} />
        <Route path="/profile" component={Profile} /> */}
        <Route path="/dialogues" render={() => <DialoguesContainer/>} />
        <Route path="/profile" render={() => <Profile/>} />
        <Route path="/news" />
        <Route path="/music" />
        <Route path="/settings" />
      </div>
    </div>);
}

export default App;