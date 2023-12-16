import React from 'react'

import {useContext} from 'react'
import {UserContext,} from '../Component/Class1'

export default function Class3() {
    const sameuser = useContext(UserContext);
  return (
    <div>
      <h1>Class3</h1>
      <h2>hello class 3 {sameuser} again</h2>
    </div>
  )
}
