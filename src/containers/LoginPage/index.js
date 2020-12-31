import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../store/thunk-actions/user'

const LoginPage = () => {
  const dispatch = useDispatch()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleRegisterClicked = () => {
    const data = {
      username,
      password,
      name,
    }
    dispatch(registerUser(data))
  }

  return (
    <div>
      <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleRegisterClicked}>Register</button>
    </div>
  )
}

export default LoginPage
