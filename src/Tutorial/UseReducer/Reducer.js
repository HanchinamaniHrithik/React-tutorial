export const Reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newList = [...state.people, action.payload]
    return {
      ...state,
      people: newList,
      isModalOpen: true,
      modalContent: 'item added',
    }
  }
  if (action.type === 'NO_VALUE') {
    return { ...state, isModalOpen: true }
    // console.warn('Add value please')
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false }
  }
  if (action.type === 'REMOVE_ITEM') {
    const newList = state.people.filter(
      (person) => person.id !== action.payload
    )
    return { ...state, people: newList }
  }
  throw new Error('no matching action type')
}
export default Reducer
