import React from 'react'
import {Link} from 'react-router-dom'

const CompanyCard = ({name, description, logoUrl, handle}) => {
	return (
    <div>
      <Link to={`/companies/${handle}`}>
        <div>
          {logoUrl && <img src={logoUrl} alt={name} />}
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </div>
	)
}

export default CompanyCard