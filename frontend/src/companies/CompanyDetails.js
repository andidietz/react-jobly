import React, {useState, useEffect, useContext} from 'react'
import {useParams, Redirect} from 'react-router-dom'
import JoblyApi from '../api/api'
import JobCardList from '../jobs/JobCardList'
import UserContext from '../contexts/User'
import LoadingSpinner from '../components/LoadingSpinner'

const CompanyDetails = () => {
	const {currentUser} = useContext(UserContext) 
	const {handle} = useParams()
	const [company, setCompany] = useState(null)
	const {name, description} = company

	useEffect(function getUserInfo() {
		async function getCompany() {
			const res = await JoblyApi.getCompany(handle)
			setCompany(res)
		}
		getCompany()
	}, [handle])

	if (!company) return <LoadingSpinner/>

	const companyDetailsComponent = 
		<div>
			<h1>{name}</h1>
			<p>{description}</p>
			<JobCardList jobs={company.jobs}/>
		</div> 

	return (
		<div>
		  {currentUser ? companyDetailsComponent : <Redirect to='/'/>}
		</div>
	)
}

export default CompanyDetails