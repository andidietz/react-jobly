import React, {useContext} from 'react'
import {Redirect, Route} from 'react-router-dom'
import UserContext from '../contexts/User'

const PrivateRoute = ({exact, path, children}) => {
  const {currentUser} = useContext(UserContext)

  if (!currentUser) return <Redirect to='/login'/>
  
  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  )
}

export default PrivateRoute