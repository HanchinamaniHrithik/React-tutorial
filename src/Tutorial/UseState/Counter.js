import React, { useState } from 'react'

const CounterEx = () => {
  const [value, setV] = useState(0)

  const reset = () => {
    setV(0)
  }
  const complexC = () => {
    setTimeout(() => {
      setV((prev) => prev + 1)
    }, 2000)
  }

  return (
    <>
      <section>
        <h2>UseState Counter example</h2>
        <h3>{value}</h3>

        <button
          onClick={() => {
            setV(value - 1)
          }}
        >
          Decrease
        </button>
        <button
          onClick={() => {
            setV(value + 1)
          }}
        >
          Increase
        </button>
        <button onClick={reset}>RESET</button>

        <h3>Complex counter here</h3>
        <h2>{value}</h2>

        <button onClick={complexC}>Delay Increase</button>
      </section>
    </>
  )
}

export default CounterEx
