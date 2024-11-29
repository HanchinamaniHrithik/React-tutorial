import React from 'react'
import { useEffect, useState } from 'react'

const UseEffbasic = () => {
  const [size, setRsz] = useState(window.innerWidth)

  const checkSz = () => {
    setRsz(window.innerWidth)
  }

  useEffect(() => {
    console.log('Normal size of window here done by UseEffect')
    window.addEventListener('resize', checkSz)
    return () => {
      console.log('Exiting the useEffect body')
      window.removeEventListener('resize', checkSz)
      console.log('Exit complete')
    }
  }) //Return empty dependancy array will call it once and keep rendering, adding the depe will render as many times as called
  console.log('render complete')

  return (
    <>
      <h2> {size} is the current size </h2>
    </>
  )
}

export default UseEffbasic
