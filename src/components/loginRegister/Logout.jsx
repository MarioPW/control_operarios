import { Button } from "flowbite-react";

import { useAuth } from "../../context/authContext";

export const Logout = () => {
    const { logout } = useAuth()
    const handleLogout = async () => {
      await logout()
    }
  return (
    <Button onClick={handleLogout} color="light">Cerrar Sesión</Button>
  )
}
