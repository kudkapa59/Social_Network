import React from 'react';
import DialogueItem from './DialogueItem/DialogueItem';
import s from './Dialogues.module.css'
import Message from './Message/Message';


const Dialogues = (props) => {
    let dialoguesElements = props.state.dialogues.map(dialogue =>
        <DialogueItem name={dialogue.name} id={dialogue.id} />)

    let messagesElements = props.state.messages.map(m =>
        <Message message={m.message} />)

    let newMessageText = props.state.newMessageText

    let onAddMessage = () => {
        props.addMessage()
    }

    let onMessageChange = (e) => {
        let body = e.target.value
        props.updateMessage(body)
    }

    return <div className={s.dialogues}>
        <div className={s.dialogueItems}>
            {dialoguesElements}
        </div>
        <div className={s.messages}>
            <div>{messagesElements}</div>
            <div>
                <div><textarea onChange={onMessageChange}
                    value={newMessageText} placeholder='Enter your message'>
                </textarea></div>

                <div><button onClick={onAddMessage}>Send</button></div>
            </div>
        </div>
    </div>
}

export default Dialogues;