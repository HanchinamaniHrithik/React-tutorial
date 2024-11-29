import React, { useState } from 'react'

const MInputForms = () => {
  const [person, setPerson] = useState({ fName: '', email: '', age: '' })
  const [people, setP] = useState([])

  const handleChange = (e) => {
    const nameofInput = e.target.name
    const valueofIn = e.target.value
    setPerson({ ...person, [nameofInput]: valueofIn })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (person.fName && person.age && person.email) {
      const newList = { ...person, id: new Date().getTime().toString() }
      setP([...people, newList])
      console.log(person)
      setPerson({ fName: '', email: '', age: '' })
    } else console.log('Invalid inputs, check again')
  }

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='firstName'> Name:</label>
          <input
            type='text'
            id='fName'
            name='fName'
            value={person.fName}
            onChange={handleChange}
          />
          <label htmlFor='age'> Age:</label>
          <input
            type='text'
            id='age'
            name='age'
            value={person.age}
            onChange={handleChange}
          />
          <label htmlFor='email'> Email ID:</label>
          <input
            type='text'
            id='email'
            name='email'
            value={person.email}
            onChange={handleChange}
          />
        </div>
        <button> Add details</button>
      </form>

      {people.map((person) => {
        const { id, fName, email, age } = person
        return (
          <div key={id}>
            <h4>{fName}</h4>
            <p>{age}</p>
            <p>{email}</p>
          </div>
        )
      })}
    </article>
  )
}

export default MInputForms
