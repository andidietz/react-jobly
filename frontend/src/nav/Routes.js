import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import CompanyList from '../companies/CompanyList'
import JobList from '../jobs/JobList'
import CompanyDetails from '../companies/CompanyDetails'
import Login from '../auth/Login'
import Signup from '../auth/Signup'
import Profile from '../profiles/Profile'
import Home from '../home/Home'

const Routes = ({login, signup}) => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <PrivateRoute exact path='/companies'>
        <CompanyList />
      </PrivateRoute>
      <PrivateRoute exact path='/companies/:handle'>
        <CompanyDetails />
      </PrivateRoute>
      <PrivateRoute exact path='/jobs'>
        <JobList />
      </PrivateRoute>
      <Route exact path='/login'>
        <Login login={login} />
      </Route>
      <Route exact path='/signup'>
        <Signup  signup={signup}/>
      </Route>
      <PrivateRoute path='/profile'>
        <Profile />
      </PrivateRoute>
      <Redirect to='/'/>
    </Switch>
  )
}

export default Routes