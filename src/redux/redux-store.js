import {combineReducers, legacy_createStore as createStore} from 'redux'
import profileReducer from './profile-reducer';
import dialoguesReducer from './dialogues-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

window.store = store

export default store
