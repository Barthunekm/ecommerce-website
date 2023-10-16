import { Component } from "react";

// step1-- create class
class CounterComponent extends Component{
//in class we dont have hooks we use constructor here
constructor(){
    super();
    this.state={
        name:'Almabetter'
    }
}
  nameChangeHandler(){
    this.setState({
        name:"AlmaBetter is Best"
    })
  }


 // step 2-- return jsx from render method

    render (){
        
        return (
            <>
            <div>hello,{this.state.name} I am inside my class  but go on server through app.js through import</div>
            <button onClick={this.nameChangeHandler.bind(this)}>ChangeName</button>
            <test/>
            </>
            )
    
        
    }
}
export  default CounterComponent;