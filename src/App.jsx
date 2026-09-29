import { Routes, Route } from 'react-router-dom'
import EmployeeList from './EmployeeList'
import EmployeeDetails from './EmployeeDetails'

function App() {
  return (
    <div className="container">
      <h1>Employee App</h1>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/employee/:id" element={<EmployeeDetails />} />
      </Routes>
    </div>
  )
}

export default App
