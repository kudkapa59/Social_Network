import React from 'react';
import Navbar from "./Navbar";
import StoreContext from "../../StoreContext";

const NavbarContainer = (props) => {

    return (<StoreContext.Consumer>{
            (store) => {
                return <Navbar friends={store.getState().sidebar.friends}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default NavbarContainer;