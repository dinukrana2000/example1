import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Button} from 'react-bootstrap';


export default function Home() {

  const Navigate=useNavigate();
  
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/about">About</Link><br/>
     
     <Link to="/contact">Contact</Link><br/>

     
     <Button onClick={()=>Navigate('/contact')}>Contact </Button><hr></hr>
     <Button onClick={()=>Navigate('/about')}>about </Button>

    </div>
    
  )
}
