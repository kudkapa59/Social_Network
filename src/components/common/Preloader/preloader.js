import loader from "../../../assets/images/gif-loader.gif";
import React from "react";

let Preloader = (props) => {
    return <div style={{backgroundColor: 'white'}}><img src={loader} /></div>
}

export default Preloader