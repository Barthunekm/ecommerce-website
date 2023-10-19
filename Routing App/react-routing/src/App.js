
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Product from './components/Products/Product';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductLists from "./components/Products/ProductLists/ProductLists";
import DetailedView from "./components/Products/DetailedView/DetailedView";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     
      <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='/Product'element={<Product />}>
          <Route path="lists" element={<ProductLists/>} />
          <Route path="lists/:id" element={<DetailedView/>} />
        </Route>
      </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
