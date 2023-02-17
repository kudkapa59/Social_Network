import { addMessage, updateMessage } from '../../redux/dialogues-reducer';
import Dialogues from './Dialogues';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialoguesPage: state.dialoguesPage
    }
}

const DialoguesContainer = connect(mapStateToProps,
    {
        addMessage,
        updateMessage
    })(Dialogues)

export default DialoguesContainer;