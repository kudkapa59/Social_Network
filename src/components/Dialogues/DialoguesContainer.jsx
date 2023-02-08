import { addMessage, updateMessage } from '../../redux/dialogues-reducer';
import Dialogues from './Dialogues';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialoguesPage: state.dialoguesPage
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: () => {
//             dispatch(addMessageActionCreator())
//         },
//         updateMessage: (body) => {
//             dispatch(updateNewMessageTextActionCreator(body))
//         }
//     }
// }

const DialoguesContainer = connect(mapStateToProps,
    {
        addMessage,
        updateMessage
    })(Dialogues)

export default DialoguesContainer;