import React from 'react'
import {render} from '@testing-library/react'
import CompanyCard from './CompanyCard'
import {MemoryRouter} from 'react-router-dom'

it('matches snapshot with logo', function() {
  const {asFragment} = render(
  <MemoryRouter>
      <CompanyCard
        name='Test Name'
        description='Test Desciption'
        logoUrl='https://i.etsystatic.com/33269334/r/il/209586/3762829908/il_1588xN.3762829908_f4ld.jpg'
        handle='test'
      />
  </MemoryRouter>
  )
  expect(asFragment()).toMatchSnapshot()
})

it('matches snapshot without logo', function() {
  const {asFragment} = render(
  <MemoryRouter>
      <CompanyCard
        name='Test Name'
        description='Test Desciption'
        handle='test'
      />
  </MemoryRouter>
  )
  expect(asFragment()).toMatchSnapshot()
})