import React, {useState, useEffect} from 'react'
import { BrowserRouter } from "react-router-dom"
import useLocalStorage from './hooks/useLocalStorage'

import Nav from './nav/Nav'
import Routes from './nav/Routes'
import JoblyApi from './api/api'

import jwt from 'jsonwebtoken'
import UserContext from './contexts/User'
import LoadingSpinner from './components/LoadingSpinner'

export const TOKEN_IN_STORAGE = 'token-in-storage'

function App() {
  const [inforLoaded, setInfoLoaded] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [token, setToken] = useLocalStorage(TOKEN_IN_STORAGE)
  const [applicationIds, setApplicationIds] = useState(new Set([]))

  useEffect(function loadInfo() {
    async function getUser() {
      try {
        if (token) {
          let {username} = jwt.decode(token)
          JoblyApi.token = token 
          const currentUser = await JoblyApi.getCurrentUser(username)
          setCurrentUser(currentUser)
          setApplicationIds(new Set(currentUser.applications))
        } 
      } catch (error) {
        setCurrentUser(null)
      }
      setInfoLoaded(true)
    }

    setInfoLoaded(false)
    getUser()
  }, [token])

  function hasAppliedtoJob(id) {
    return applicationIds.has(id)
  }

  const applyToJob = (id) => {
    if (hasAppliedtoJob(id)) return

    JoblyApi.applyToJob(currentUser.username, id)
    setApplicationIds(new Set([...applicationIds, id]))
  }

  const signup = async (data) => {
    const tokenRes = await JoblyApi.signup(data)
    setToken(tokenRes)
    
    return {sucess: true}
  }

  const login = async (data) => {
    const tokenRes = await JoblyApi.login(data)
    setToken(tokenRes)
    return {success: true}
  }

  const logout = async () => {
    setCurrentUser(null)
    setToken(null)
  }

  if (!inforLoaded) return <LoadingSpinner/>

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{currentUser, setCurrentUser, hasAppliedtoJob, applyToJob}}>
          <Nav logout={logout}/>
          <Routes signup={signup} login={login}/>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App