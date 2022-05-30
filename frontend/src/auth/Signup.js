import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const Signup = ({signup}) => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    username:'',
    email: '',
    password:'',
    firstName:'',
    lastName:''
  })

  const {username, email, firstName, lastName, password} = formData
  
  async function handleSubmit(event) {
    event.preventDefault()
    await signup(formData)
    history.push('/companies')
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(formData => ({...formData, [name]:value}))
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
          id='emal'
          name='email'
          placeholder='email'
          type='text'
          value={email}
          onChange={handleChange}
          />

        <input
          id='firstName'
          name='firstName'
          placeholder='firstName'
          type='text'
          value={firstName}
          onChange={handleChange}
          />

        <input
          id='lastName'
          name='lastName'
          placeholder='lastName'
          type='text'
          value={lastName}
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

export default Signup