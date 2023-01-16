import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogues-reducer';
import DialogueItem from './DialogueItem/DialogueItem';
import Dialogues from './Dialogues';
import s from './Dialogues.module.css'
import Message from './Message/Message';


const DialoguesContainer = (props) => {
    let state = props.store.getState().dialoguesPage
        
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let updateMessage = (body) => {
        let action = updateNewMessageTextActionCreator(body)
        props.store.dispatch(action)
    }

    return <Dialogues addMessage={addMessage} updateMessage={updateMessage}
    state={state}/>
}

export default DialoguesContainer;