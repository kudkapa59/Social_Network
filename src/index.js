import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';


export let rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter><App store={store}/>
    </BrowserRouter>, document.getElementById('root'))
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    rerenderEntireTree(store.getState())
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
