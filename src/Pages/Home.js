import React from 'react'
import Topic from '../Component/Topic'
import Content from '../Component/Content'

export default function Home() {
  
  return (
    <div>
      <h1>Home page</h1>
      <Topic name="civic" price="50 USD">
        <span>This is span</span>
        </Topic><br/>
      <Topic name="maruti" price="20 USD">
        <button>This is button</button>
        </Topic><br/>
      <Topic name="bmw" price="100 USD">
        <p>this is para</p>
        </Topic><br/>
      
    </div>
  )
}
