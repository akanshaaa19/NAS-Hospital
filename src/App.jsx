import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { AuthPAge } from './pages/AuthPage'
import DoctorLogin from './pages/DoctorLogin'
import UserDashboard from './pages/UserDashboard'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPAge />} />
      <Route path="/auth/doctor" element={<DoctorLogin/>} />
      <Route path="/patient/dashboard" element={<UserDashboard/>} />

    </Routes>
  )
}

export default App
