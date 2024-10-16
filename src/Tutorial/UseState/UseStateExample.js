import React, { useState } from 'react'

const UseStExample = () => {
  const [bat, setBat] = useState('This is a cricket bat function')

  const onClickF = () => {
    if (bat === 'This is a cricket bat function') {
      setBat(`This is not a cricket bat anymore, it's a baseball bat`)
    } else {
      setBat('This is a cricket bat function')
    }
  }

  return (
    <React.Fragment>
      <h2>{bat}</h2>
      <button type='button' onClick={onClickF}>
        Change function here
      </button>
    </React.Fragment>
  )
}

export default UseStExample
