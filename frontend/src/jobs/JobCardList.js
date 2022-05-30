import React from 'react'
import JobCard from './JobCard'

const JobCardList = ({jobs}) => {
  const jobCardComponent = jobs.map(({
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
      {jobCardComponent}
    </div>
  )
}

export default JobCardList