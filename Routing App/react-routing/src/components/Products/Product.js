import React, { useState } from 'react';
import "./Product.scss"
import Header from "./../Header/Header"
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [txt ,setTxt]=useState("show");
  const[isListShown, setIsListShown]=useState(false);
  const  Navigate= useNavigate();

  const btnHandler=()=>{
    setIsListShown((prevState) => {
        if(prevState===false) {
          setTxt("Hide");
          Navigate("lists")
          return true;
        }else{
          setTxt("Show");
          Navigate("/Product")
          return false;
        }
    }
  )}

    return (
      <div>
      <Header />
      <div className="align">
        <div>
          <h1>Welcome to our Product listing page</h1>
          {isListShown && (
            <h3>You can click on each product for detailed view</h3>
          )}
        </div>
        <button onClick={btnHandler}>{`${txt} Products`}</button>
      </div>
      <Outlet />
    </div>
        
    );
};
export default Product;