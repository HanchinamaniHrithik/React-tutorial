import React, { useEffect, useState } from 'react'

const Forms = () => {
  const [fName, setFN] = useState('')
  const [email, setEm] = useState('')
  const [people, setP] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(fName, email)
    if (fName && email) {
      const person = { id: new Date().getTime().toString(), fName, email }
      setP((people) => {
        return [...people, person]
      })
      setFN('')
      setEm('')
    } else console.log('Input has a blank entry')
  }

  useEffect(
    (person) => {
      console.log(people)
    },
    [people]
  )

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='firstName'> Name:</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={fName}
            onChange={(pa) => {
              setFN(pa.target.value)
            }}
          />
          <label htmlFor='email'> Email ID:</label>
          <input
            type='text'
            id='email'
            name='email'
            value={email}
            onChange={(pa) => {
              setEm(pa.target.value)
            }}
          />
        </div>
        <button> Add details</button>
        {/* onClick={handleSubmit} */}

        {/* <h4>{id: fName}</h4> */}
      </form>

      {people.map((person) => {
        const { id, fName, email } = person
        return (
          <div key={id}>
            <h4>{fName}</h4>
            <p>{email}</p>
          </div>
        )
      })}
    </article>
  )
}

export default Forms
