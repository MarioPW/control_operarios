import './App.css'
import { Route, Routes } from 'react-router-dom'

import { Home } from './components/home/Home'
import { Login } from './components/loginRegister/Login'
import { Operators } from './components/operators/Operators'
import { AuthProvider } from './context/authContext'
import { Navigation } from './components/home/Navigation'
import { ProtectedRoutes } from './protectedRoutes/protectedRoutes'

function App() {

  return (
    <AuthProvider>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/operators' element={<ProtectedRoutes><Operators /></ProtectedRoutes>} />
      </Routes>
    </AuthProvider>
  )
}

export default App
