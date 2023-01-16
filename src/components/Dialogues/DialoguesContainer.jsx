import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogues-reducer';
import Dialogues from './Dialogues';
import StoreContext from "../../StoreContext";

const DialoguesContainer = (props) => {
    return (<StoreContext.Consumer>{
            (store) => {
                let state = store.getState().dialoguesPage

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }

                let updateMessage = (body) => {
                    let action = updateNewMessageTextActionCreator(body)
                    store.dispatch(action)
                }
                return <Dialogues addMessage={addMessage} updateMessage={updateMessage}
                           state={state}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialoguesContainer;