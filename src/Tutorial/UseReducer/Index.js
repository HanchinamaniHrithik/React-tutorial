import React, { useState, useReducer } from 'react'

import { data } from '../../data'
import Modal from './Modal'
import Reducer from './Reducer'

// reducer function
const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: '',
}
const Indexx = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(Reducer, defaultState)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'ADD_ITEM', payload: newItem })
      setName('')
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: 'REMOVE_ITEM', payload: person.id })
              }
            >
              remove
            </button>
          </div>
        )
      })}
    </>
  )
}

export default Indexx
