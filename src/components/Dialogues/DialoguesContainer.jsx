import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogues-reducer';
import Dialogues from './Dialogues';
// import StoreContext from "../../StoreContext";
import {connect} from "react-redux";

// const DialoguesContainer = (props) => {
//     return (<StoreContext.Consumer>{
//             (store) => {
//                 let state = store.getState().dialoguesPage
//
//                 let addMessage = () => {
//                     store.dispatch(addMessageActionCreator())
//                 }
//
//                 let updateMessage = (body) => {
//                     let action = updateNewMessageTextActionCreator(body)
//                     store.dispatch(action)
//                 }
//                 return <Dialogues addMessage={addMessage} updateMessage={updateMessage}
//                                   dialoguesPage={state}/>
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialoguesPage: state.dialoguesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateMessage: (body) => {
            dispatch(updateNewMessageTextActionCreator(body))
        }
    }
}

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues)

export default DialoguesContainer;