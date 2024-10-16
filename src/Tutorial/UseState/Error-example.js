import React, { useState } from 'react'

const ErrorExample = () => {
  let battEx = 'This is a cricket bat function'

  const onclickF = () => {
    battEx = `This is not a cricket bat anymore, it's a baseball bat`
    console.log(battEx)
  }

  return (
    <React.Fragment>
      <h2>{battEx}</h2>
      <button type='button' onClick={onclickF}>
        Change function here
      </button>
    </React.Fragment>
  )
}

export default ErrorExample
