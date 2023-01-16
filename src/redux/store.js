import dialoguesReducer from "./dialogues-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are u?', likesCount: 11 },
                { id: 2, message: 'It\'s my first post', likesCount: 12 },
                { id: 3, message: 'Hi', likesCount: 11 },
                { id: 4, message: 'Blalbla', likesCount: 11 }
            ],
            newPostText: 'it.com'
        },
        dialoguesPage: {
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are u' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' },
            ],
            dialogues: [
                { id: 1, name: 'Kapa' },
                { id: 2, name: 'Iron' },
                { id: 3, name: 'Petr' },
                { id: 4, name: 'Alex' },
                { id: 5, name: 'Lena' },
                { id: 6, name: 'Andrey' },
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: ['Andrew', 'Sasha', 'Vova']
        }
    },
    _callSubscriber() {
        console.log('State is changed.')
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
        
    }
}

export default store
window.store = store
