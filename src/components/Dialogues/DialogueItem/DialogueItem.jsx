import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogues.module.css'

const DialogueItem = (props) => {
    let path = "/dialogues/" + props.id;

    return (
        <div className={s.dialogue + " " + s.active}>
            <img src='https://i.mimibazar.cz/h/bc/8/100225/20/h31142.jpg'></img>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}


export default DialogueItem;