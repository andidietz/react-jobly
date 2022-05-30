import React from 'react'
import {render} from '@testing-library/react'
import JobCard from './JobCard'
import {MemoryRouter} from 'react-router-dom'

it('matches snapshot with logo', function() {
  const {asFragment} = render(
    <MemoryRouter>
        <JobCard
          id='test'
          title='testTitle'
          companyName='testCompany'
          salary={1000}
          equity={10}
        />
    </MemoryRouter>
  )
  expect(asFragment()).toMatchSnapshot()
})