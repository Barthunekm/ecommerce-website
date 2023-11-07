import React, { useContext } from 'react';
import classes from "./Navigation.module.css";
import LoginContext from "../../Contexts/login.Context";

const Navigation = () => {
    const ctxt = useContext(LoginContext);
    return (
        <nav className={classes.nav}>
            <ul>
                <li> <a href="">User</a> </li>
                <li> <a href="">Admin</a> </li>
                <li> <button onClick={ctxt.onLogout}>Logout</button> </li>
            </ul>
        </nav>
    );
};

export default Navigation;
