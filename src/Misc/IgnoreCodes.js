import React from 'react'

const App = () => {
  return (
    <div className='container'>
      <h2>React tutorial</h2>
    </div>
  )
}

export default App
//
/*
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { booksArr } from './books'

import Data from './Book'
function Booklist() {
  return (
    <section className='Booklist'>
      {booksArr.map((items) => {
        return <Data key={items.id} items={items}></Data>
      })}
    </section>
  )
}
ReactDOM.render(<Booklist />, document.getElementById('root'))
// Book website
*/
