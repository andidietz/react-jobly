import React from 'react'
import {render} from '@testing-library/react'
import Signup from './Signup'
import {MemoryRouter} from 'react-router-dom'


it('matches snapshot', function() {
  const {asFragment} = render(
    <MemoryRouter>
      <Signup/>
    </MemoryRouter>
  )
  expect(asFragment()).toMatchSnapshot()
})