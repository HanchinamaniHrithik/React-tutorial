import React, { useState } from 'react'

const Ternary = () => {
  const [Iserror, setIE] = useState(false)

  return (
    <>
      <h3></h3>
      <button
        onClick={() => {
          setIE(!Iserror)
        }}
      >
        No
      </button>
      {Iserror ? (
        <p> This block of code contains an error</p>
      ) : (
        <h3> There is no error, proceed Hrithk</h3>
      )}
    </>
  )
}

export default Ternary
