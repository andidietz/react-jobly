import React, {useState, useEffect} from 'react'
import CompanyCard from './CompanyCard'
import JoblyApi from '../api/api'
import SearchBar from '../components/SearchBar'
import LoadingSpinner from '../components/LoadingSpinner'

const CompanyList = () => {
  const [companies, setCompanies] = useState(null)

  useEffect(function getCompanies() {
    search()
  }, [])

  async function search(name) {
    const companies = await JoblyApi.getCompanies(name)
    setCompanies(companies)
  }

  if (!companies) return <LoadingSpinner/>

  const companyCards = (companies.length ? 
    companies.map(({name, description, logo, handle}) => (
      <CompanyCard
        key={handle}
        handle={handle}
        name={name} 
        description={description}
        logo={logo}
      />)) : <p>No Search Results Found</p>
  )
  
  return (
		<div>
      <SearchBar searchDbFor={search} />
      {companyCards}
    </div>
	)
}

export default CompanyList