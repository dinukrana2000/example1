import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { useState,useEffect } from 'react';



function App() {
  const [count,setCount]=useState(0);
  const increment=()=>{
    setCount(count + 1);

  }

  const decrement=()=>{
    if(count>0){
    setCount(count - 1)};
  }

  useEffect(()=>{

    console.log('count is:'+count);
   //alert("count is"+count);
  },[count]
  
  )
  return (
    <div className="App">
      <h1>Count:{count}</h1>
       <button onClick={increment}>+</button>
       
       <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
