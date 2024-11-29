import React, { useEffect, useState } from 'react'

const url = 'https://api.github.com/users'
const UseEffSec = () => {
  const [users, setUs] = useState([])

  const getUserss = async () => {
    const resp = await fetch(url)
    const prof = await resp.json()
    setUs(prof)
  }

  useEffect(() => {
    getUserss()
  }, [])

  return (
    <>
      <h3> Github Users page</h3>
      <ul className='users'>
        {users.map((u) => {
          const { login, id, avatar_url, html_url } = u
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h3>{login}</h3>

                <a href={html_url}> Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffSec
