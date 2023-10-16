import { useState } from 'react';
import './App.css';
import CounterComponent from './components/counter';
import MyCustomComponent from './components/file'; // Use the same name when importing

function App() {
  //const isLoggedIn =false;
  //const isLoggedIn =true;
  //--------state--------
  //how to write state in functional components
    const [isLoggedIn, setisLoggedIn] = useState(true);
    const [num, setNum]=useState(5)
    const number= 12345;

  return (
    <div className="App">
      Hello world !!<span>{num}</span>
        < button onClick={()=>{setisLoggedIn(!isLoggedIn)
          console.log(isLoggedIn);}}>Toggle</button>
         <MyCustomComponent numX={number} /> // Use the same name when using the component
        { isLoggedIn && < CounterComponent/>}
    </div>
  );
} 

export default App;
