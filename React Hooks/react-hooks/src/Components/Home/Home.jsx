import React, { useContext } from 'react';
import classes from "./Home.module.css"
import LoginContext from "../../Contexts/login.Context"


const HomeComponents = () => {
    const ctxt= useContext(LoginContext)
    return (
        <div className={`${classes.card} ${classes.home}`}>
            <h1>Welcome back!</h1>
            <button className={classes.button} onClick={ctxt.onLogout}>Logout</button>
            
            
        </div>
    );
};

export default HomeComponents ;