import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Button} from 'react-bootstrap';

function Contact() {
    const Navigate=useNavigate();
  return (
    <div>
      <h1>Contact page</h1>
      <Button onClick={()=>Navigate(-1)}>Back </Button>
    </div>
  )
}

export default Contact
