import React from 'react'
import { Login } from '../loginRegister/Login'

export const Home = () => {
  return (
    <div>
      <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Bienvenido al La Plataforma de Control de Operarios</h1>
      <Login />
    </div>
  )
}
