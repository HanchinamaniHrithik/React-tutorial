import React, { useEffect, useState } from 'react'

const Shoide = () => {
  const [SShow, setS] = useState(false)

  return (
    <>
      <button
        onClick={() => {
          setS(!SShow)
        }}
      >
        Toggle Show/hide
      </button>
      {SShow && <Item />}
    </>
  )
}

const Item = () => {
  const [sz, setSize] = useState(window.innerWidth)
  const Checksz = () => {
    setSize(window.innerWidth)
  }

  useState(() => {
    window.addEventListener('resize', Checksz)
    return () => window.removeEventListener('resize', Checksz)
  }, [])
  return (
    <>
      <h3>{sz} pixels</h3>
      <p>Hi does Item work?</p>
    </>
  )
}

export default Shoide
