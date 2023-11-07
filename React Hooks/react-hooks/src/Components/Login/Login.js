import React, { useEffect, useState } from 'react';
import classes from "./Login.module.css"
const Login = (props) => {
  
  // we will see react hooks 1.. useState 2. useEffect 3.useContect
  // useState
  const [email , setEmail]= useState("");
  const [password, setPassword] =useState("");
  const [isbtnDisabled , setBtnDisabled]= useState(true);

  // creating funtion for event---onChange
  const handleEmailChange =(event)=>{
    console.log(event.target.value);
    setEmail(event.target.value);
  }
  const handlePasswordChange =(event)=>{
    console.log(event.target.value);
    setPassword(event.target.value);
  }

  useEffect(()=>{
      if(email.length>7 && password.length>=8){
          setBtnDisabled(false);
      }else{
        setBtnDisabled(true)
      }
  },[email, password])

  const handleSubmit=()=>{
    props.onLogin();
  }

    return (
        <div className={`${classes.card} ${classes.login}`}>
          <form onSubmit={handleSubmit}>
            <div className={classes.control}>
                <label htmlFor='email'>Email</label>
                <input 
                  type='email' 
                  name='email' 
                  id='email' value={email}
                  onChange={handleEmailChange}>
                 </input>
            </div>
            <div className={classes.control}>
                <label htmlFor='password'>Password</label>
                <input  type='password' name='password' id='password' value={password} onChange={handlePasswordChange}/>
            </div>
            <div className={classes.actions}>
              <button type='submit' className={classes.button} disabled={isbtnDisabled}>
                Login
              </button>
            </div>
          </form>  
        </div>
    );
};

export default Login;