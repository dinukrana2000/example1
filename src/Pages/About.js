import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Button} from 'react-bootstrap';

function About() {
    const Navigate=useNavigate();
  return (
    <div>
      <h1>About page</h1>
      <Button onClick={()=>Navigate(-1)}>Back </Button>
    </div>
  )
}

export default About
