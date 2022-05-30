import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const Login = ({login}) => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    username:'',
    password:''
  })

  const {username, password} = formData

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(formData => ({...formData, [name]: value}))

  }

  async function handleSubmit(event) {
    event.preventDefault()
    let result = await login(formData)
    if (result.success) {
      history.push('/companies')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id='username'
          name='username'
          placeholder='username'
          type='text'
          value={username}
          onChange={handleChange}
        />

        <input
          id='password'
          name='password'
          placeholder='password'
          type='text'
          value={password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login