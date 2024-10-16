import React, { useState } from 'react'
import { data } from '../../data'

const ArrayUse = () => {
  const [people, setP] = useState(data)
  const Remove = (id) => {
    setP(people.filter((ArbPer) => ArbPer.id !== id))
  }
  return (
    <>
      {people.map((ArbPer) => {
        const { id, name } = ArbPer
        return (
          <div key={id}>
            <h3>{name}</h3>

            <button onClick={() => Remove(id)}>Remove this</button>
          </div>
        )
      })}
      <button type='button' style={{ color: 'red' }} onClick={() => setP([])}>
        clear all
      </button>
    </>
  )
}

export default ArrayUse
