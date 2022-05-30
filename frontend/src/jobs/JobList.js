import React, {useState, useEffect} from 'react'
import JobCard from './JobCard'
import SearchBar from '../components/SearchBar'
import JoblyApi from '../api/api'
import LoadingSpinner from '../components/LoadingSpinner'

const JobList = () => {
  const [jobs, setJobs] = useState(null)

  useEffect(function getAllJobs() {
    search()
  }, [])

  const search = async (title) => {
    const jobs = await JoblyApi.getJobs(title)
    setJobs(jobs)
  }

  if (!jobs) return <LoadingSpinner/>

  const JobCardComponent = jobs.map(({
      id,
      title,
      salary, 
      equity, 
      companyName
    }) => (
      <JobCard
        key={id}
        id={id}
        title={title}
        companyName={companyName}
        salary={salary}
        equity={equity}
      />
    ))

  return (
    <div>
      <SearchBar searchDbFor={search}/>
      {jobs.length ? JobCardComponent : <p>No Results Found</p>}
    </div>
  )
}

export default JobList