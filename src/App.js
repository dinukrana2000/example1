import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { useState } from 'react';




function App() {
  const[count,SetCount]=useState(0);
  //var count=0;

  const increment=()=>{
    //count =count +1;
    SetCount(count+1);

  }

  const decrement=()=>{
    //count=count-1;
    if(count>0){
    SetCount(count-1);}
  }
  return (
    <>
    <span className='co'>My counter</span>
    <p className='cal'>My count is {count}</p>
    <button onClick={increment} className='plus'>+</button>
    
    <button onClick={decrement} className='minus'>-</button>
    </>
  );
}

export default App;
