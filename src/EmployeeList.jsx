import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URL = '/api/dummy/EmployeeDetails.json'

function EmployeeList() {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data.employees)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to load data')
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p className="error">{error}</p>

  return (
    <ul className="list">
      {employees.map((emp, index) => (
        <li
          key={index}
          onClick={() => navigate('/employee/' + index, { state: emp })}
        >
          {emp.name}
        </li>
      ))}
    </ul>
  )
}

export default EmployeeList
