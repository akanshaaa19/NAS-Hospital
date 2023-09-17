import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { AuthPAge } from './pages/AuthPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPAge />} />
    </Routes>
  )
}

export default App
