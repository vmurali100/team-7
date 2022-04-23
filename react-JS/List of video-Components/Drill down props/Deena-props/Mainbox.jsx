import React from 'react'
import { useState } from 'react'
import { Parent } from './Parent'
import { UserProvider } from '../Context/UserContext'

export const mainbox = () => {
    const [good, setgood] = useState("Hello World")
  return (
    <div>
        <UserProvider value={good}>
           <Parent/>
        </UserProvider>
    </div>
  )
}
