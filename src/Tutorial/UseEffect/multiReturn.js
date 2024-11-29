import React, { useEffect, useState } from 'react'

const url = 'https://api.github.com/users/pjhyett'
const MultiReturn = () => {
  const [isLoad, setIsload] = useState(false)
  const [isErr, setIsErr] = useState(false)
  const [oneUser, setOU] = useState('Default')

  useEffect(() => {
    setIsload(true)
    fetch(url)
      .then((res) => res.json())
      .then((user) => {
        const { login } = user
        setOU(login)
        setIsload(false)
      })
      .catch((error) => {
        setIsErr(true)
        console.log(error)
      })
  }, [])

  if (isLoad) {
    return (
      <>
        <h3>Loading...</h3>
      </>
    )
  }

  if (isErr) {
    return (
      <>
        <h3>Something went wrong</h3>
      </>
    )
  }

  return (
    <>
      <h2>{oneUser}</h2>
    </>
  )
}

export default MultiReturn
