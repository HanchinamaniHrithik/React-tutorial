import React, { useState } from 'react'

const ShortCir = () => {
  const [text, setText] = useState('abc ')
  // const firstV = text || 'Good Morning'
  // const secV = text && 'Good Afternoon'
  return (
    <>
      <h1>H1 :{'Hrithik H' || text}</h1>
      Heading 2 :{<h2>Hanchinamani </h2> && text}
    </>
  )
}

export default ShortCir
