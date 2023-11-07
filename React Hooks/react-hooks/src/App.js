
import { useEffect, useState } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import HomeComponents from "./Components/Home/Home"
import Login from "./Components/Login/Login"
import LoginContext from "./Contexts/login.Context";

function App() {
   
  const [isLoggdIn ,setIsLoggedIn] = useState(false);
  
  useEffect(()=>{
     
      setIsLoggedIn(localStorage.getItem("isLoggdIn"))
  },[]);

  const loginHandler =()=>{
    localStorage.setItem("isLoggdIn",true)
    setIsLoggedIn (true)
  }
   
 const logoutHandler=()=>{
     localStorage.setItem("isLoggdIn",false)
     setIsLoggedIn (false)
 }

  return (
    <LoginContext.Provider value={{
      isLoggedIn: isLoggdIn,
      onLogout:logoutHandler,
    }}>
      <div className="App">
      < Header  />
      <main>
       {!isLoggdIn && <Login onLogin ={loginHandler}/>}
       {isLoggdIn && <HomeComponents  /> }
      </main>  
    </div>
    </LoginContext.Provider>
    
  );
}

export default App;
