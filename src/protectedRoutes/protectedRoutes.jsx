import { Navigate } from 'react-router-dom'
import { Spinner } from "flowbite-react";

import { useAuth } from "../context/authContext"

export const ProtectedRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    if (loading) return (
        <Spinner aria-label="Default status example" />
    )
    if (!user) {
        return <Navigate to='/' />
    }
    return <>{ children }</>

}
