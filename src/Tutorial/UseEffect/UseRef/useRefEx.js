import React, { useRef } from 'react'

const UseRefEx = () => {
  const sayRefCX = useRef(null)
  const sayRefCY = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(sayRefCX.current.value)
    console.log(sayRefCY.current)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={sayRefCX} />
        <button type='submit'>Submit</button>
      </form>
      <div ref={sayRefCY}>
        <p>
          Hi, Hrithik here to test and verify useRef hook basic example here
          this input ref works : {}
        </p>
      </div>
    </>
  )
}

export default UseRefEx
