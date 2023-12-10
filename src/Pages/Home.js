import React from 'react'
import Topic from '../Component/Topic'
import Content from '../Component/Content'

function buttonClick(){
  //onclick eke buttonClick function eka () ekka call krnne na***
  console.log("button clicked");
  alert("hey");
}

export default function Home() {
  
  return (
    <div>
    <button onClick={buttonClick}>Click me</button>
      
      
    </div>
  )
}
