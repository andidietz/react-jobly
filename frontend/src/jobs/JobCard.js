import React, {useState, useEffect, useContext} from 'react'
import UserContext from '../contexts/User'

const JobCard = ({
  id, title, companyName, salary, equity
}) => {
  const {hasAppliedtoJob, applyToJob} = useContext(UserContext)
  const [appliedStatus, setAppliedStatus] = useState()
  
  useEffect(function updateAppliedStatus() {
    setAppliedStatus(hasAppliedtoJob(id))
  }, [id, hasAppliedtoJob])

  async function handleApply() {
    if (hasAppliedtoJob(id)) return
    
    applyToJob(id)
    setAppliedStatus(true)
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{companyName}</p>
      <p>{salary}</p>
      <p>{equity}</p>
      <button onClick={handleApply} disabled={appliedStatus}>
        {appliedStatus && appliedStatus ? 'Applied' : 'Apply'}
      </button>
    </div>
  )
}

export default JobCard