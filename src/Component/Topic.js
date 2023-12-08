import React from 'react'
import './topic.css'



export default function Topic(props) {

  //const ex1="topic1";
  //const ex2="topic2";
  //const array=[10,20,30,40,50,60]
  //const object1={kottu:"200",rice:"300"}  not support object types directly
 
  return (
    <div>
        <div className='topicbox'>
            <span className='span'>My favourite vehicle is {props.name} price is {props.price}</span>
            {props.children}

        </div>
      
    </div>
  )
}
