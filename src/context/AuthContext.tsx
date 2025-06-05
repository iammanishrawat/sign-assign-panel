import type {ReactNode} from "react"
import {createContext, useContext, useEffect, useState} from "react"

import {onClickLogout} from "../api/BaseAPI"

interface AuthContextProps {
  token: string | null
  setAuthData: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const savedToken = localStorage.getItem("jwtTokenUser")

    if (savedToken) {
      setToken(savedToken)
    }
  }, [])

  const setAuthData = (token: string) => {
    setToken(token)
    localStorage.setItem("jwtTokenUser", token)
  }

  const logout = () => {
    setToken(null)
    onClickLogout()
  }

  return (
    <AuthContext.Provider value={{token, setAuthData, logout}}>{children}</AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
