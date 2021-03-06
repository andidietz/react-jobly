import React from 'react'
import {render} from '@testing-library/react'
import Profile from './Profile'
import {UserProvider} from '../testHelper'

it('matches snapshot', function() {
  const {asFragment} = render(
    <UserProvider>
        <Profile/>
    </UserProvider>
  )
  expect(asFragment()).toMatchSnapshot()
})