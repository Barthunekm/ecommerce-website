import React, { useContext } from 'react';
import classes from "./Header.module.css"
import Navigation from './Navigation';
import LoginContext from "../../Contexts/login.Context"
const Header = () => {
  //here LoginContext ---> is from LoginContex.js file
    const ctxt = useContext(LoginContext);
    return (
        <header className={ classes["main-header"]}>
            <h1>A Normal Web Page</h1>
            {ctxt.isLoggedIn && < Navigation />}
        
        </header>
    );
};

export default Header;