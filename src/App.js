import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';

const App = (props) => {
    let state

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.store.getState().sidebar} />
      <div className='app-wrapper-content'>
        {/* <Route path="/dialogues" component={Dialogues} />
        <Route path="/profile" component={Profile} /> */}
        <Route path="/dialogues" render={() => <DialoguesContainer store={props.store}/>} />
        <Route path="/profile" render={() => <Profile store={props.store}/>} />
        <Route path="/news" />
        <Route path="/music" />
        <Route path="/settings" />
      </div>
    </div>);
}

export default App;