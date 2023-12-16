import React from 'react'
import Class2 from './Class2'
import {useState, createContext } from 'react'

export const UserContext = createContext();

export default function Class1() {
    const [user, setUser] = useState("jenny");
  return (
    <div>
        <UserContext.Provider value={user}> 
      <h1>Hello class 1 {user}</h1>
      <Class2 />
      </UserContext.Provider>
    </div>
  )
}
