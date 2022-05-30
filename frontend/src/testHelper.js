import React from 'react'
import UserContext from './contexts/User'

const testUser = {
  username: 'testuser',
  first_name: 'testfirst',
  last_name: 'testlast',
  email: 'test@gmail.com'
}

const UserProvider = 
  ({
    children, 
    currentUser = testUser, 
    hasAppliedToJob = () => false
  }) => (
    <UserContext.Provider value={{currentUser, hasAppliedToJob}}>
      {children}
    </UserContext.Provider>
  )

export {UserProvider}