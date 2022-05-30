import React, {useContext} from 'react'
import UserContext from '../contexts/User'

function Home() {
  const {currentUser} = useContext(UserContext)

  return (
    <div>
      <h1>Jobly</h1>
      {currentUser ? <h2>Welcome Back, {currentUser.username}</h2> :
      <h2>The Best Name in the Job Hunt</h2> }
    </div>
  )
}

export default Home