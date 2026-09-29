import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const URL = '/api/dummy/EmployeeDetails.json'

function EmployeeDetails() {
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [employee, setEmployee] = useState(location.state)
  const [error, setError] = useState('')

  // if the page is opened directly (or refreshed) there is no state, so load it again
  useEffect(() => {
    if (!employee) {
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          if (data.employees[id]) setEmployee(data.employees[id])
          else setError('Employee not found')
        })
        .catch(() => setError('Failed to load data'))
    }
  }, [id])

  if (error) return <p className="error">{error}</p>
  if (!employee) return <p>Loading...</p>

  return (
    <div className="details">
      <button onClick={() => navigate('/')}>Back</button>
      <h2>{employee.name}</h2>
      <p>Age: {employee.age}</p>
      <p>Salary: {employee.salary}</p>
    </div>
  )
}

export default EmployeeDetails
