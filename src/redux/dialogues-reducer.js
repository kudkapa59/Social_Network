const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
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
}

const dialoguesReducer = (state=initialState, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = { id: 6, message: state.newMessageText }
            state.messages.push(newMessage)
            state.newMessageText = '' 
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            return state
        default:
            return state    
    }
}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text
})

export default dialoguesReducer