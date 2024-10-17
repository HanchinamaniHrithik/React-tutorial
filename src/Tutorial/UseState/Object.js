import React from 'react'
import { useState } from 'react'

const ObjectExample = () => {
  const [people, setPeo] = useState({
    name: 'Rishab',
    age: 30,
    role: 'Wk Batsman',
  })
  //If i create obj like i did below here STATE VALUES, this above body isn't relevant

  const [name, snf] = useState('Rishab')

  const [age, saf] = useState(31)

  const [role, srf] = useState('Fine WicketK Batsman')

  const changeRole = () => {
    // setPeo({ ...people, role: 'Lower order Batsman' })  // use spread operator when using object as a whole component
    if (role === 'Fine WicketK Batsman') {
      srf('Fine fine he can be a lower order batsman')
    } else {
      srf('Fine WicketK Batsman')
    }
  }

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{role}</h3>
      <button onClick={changeRole}>Change position here</button>
    </>
  )
}

export default ObjectExample
