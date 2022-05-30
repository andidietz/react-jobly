import React, {useContext, useState} from 'react'
import JoblyApi from '../api/api'
import UserContext from '../contexts/User'

const Profile = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext)
  const [formData, setFormData] = useState({
      email: currentUser.email, 
      firstName: currentUser.firstName, 
      lastName: currentUser.lastName, 
      username: currentUser.username, 
      password: ''
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    const userData = {
      email: formData.email, 
      firstName: formData.firstName, 
      lastName: formData.lastName, 
      password: formData.password
    } 

    const username = currentUser.username
    const updateUserInfo = await JoblyApi.saveUserInfo(username, userData)

    setFormData(formData => ({...formData, password: ''}))
    setCurrentUser(updateUserInfo)
  }

  const handleChange = event => {
    const {name, value} = event.target

    setFormData(formData => ({
        ...formData,
        [name]: value
    }))
  }

  return (
    <div>
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit}>
        <p>Username: {formData.username}</p>
        <input 
          id='email'
          name='email'
          placeholder='email'
          value={formData.email}
          onChange={handleChange}/>
        <input 
          id='firstName'
          name='firstName'
          placeholder='First Name'
          value={formData.firstName}
          onChange={handleChange}/>
        <input 
          id='lastName'
          name='lastName'
          placeholder='Last Name'
          value={formData.lastName}
          onChange={handleChange}/>
        <input 
          id='password'
          name='password'
          placeholder='password'
          value={formData.password}
          onChange={handleChange}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default Profile