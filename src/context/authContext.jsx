import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from "../firebase_config/firebaseConfig";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error("Usuario no autorizado")
    return context
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState()
    const registerAdmin = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)
    const logout = () => signOut(auth)

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
    }, [])

    return (
        <authContext.Provider value={{ registerAdmin, login, user, logout }} >
            {children}
        </authContext.Provider>
    )
}