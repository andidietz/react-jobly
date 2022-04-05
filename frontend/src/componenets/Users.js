import React, {useEffect, useState} from 'react'
import axios from 'axios'

const User = () => {
  const [users, setUsers] = useState([])

  const loadProfile = async () => {
    const res = await axios.get('http://localhost:3001/users')
      setUsers(res.data)
  }

  useEffect(()=> {
    loadProfile()
  }, [])

  return (
    <div>
      {users && users.map(user => 
        <li>
          {user}
        </li>)}
    </div>    )
}

export default User