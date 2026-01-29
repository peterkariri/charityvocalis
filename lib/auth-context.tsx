"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface User {
    id: string
    name: string
    email: string
    avatar?: string
}

interface AuthContextType {
    user: User | null
    loading: boolean
    login: (email: string) => Promise<void>
    loginWithProvider: (provider: string) => Promise<void>
    logout: () => void
    isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        // Check for existing session
        const storedUser = localStorage.getItem("vocalis_user")
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
        setLoading(false)
    }, [])

    const login = async (email: string) => {
        setLoading(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const mockUser: User = {
            id: "1",
            name: email.split("@")[0] || "User",
            email: email,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
        }

        localStorage.setItem("vocalis_user", JSON.stringify(mockUser))
        // Set a mock cookie
        document.cookie = `vocalis_token=mock-jwt-token-for-${mockUser.id}; path=/; max-age=86400`

        setUser(mockUser)
        setLoading(false)
        router.push("/dashboard")
    }

    const loginWithProvider = async (provider: string) => {
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 1500))

        const mockUser: User = {
            id: "2",
            name: `${provider} User`,
            email: `user@${provider.toLowerCase()}.com`,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${provider}`
        }

        localStorage.setItem("vocalis_user", JSON.stringify(mockUser))
        document.cookie = `vocalis_token=mock-oauth-token-${provider}; path=/; max-age=86400`

        setUser(mockUser)
        setLoading(false)
        router.push("/dashboard")
    }

    const logout = () => {
        localStorage.removeItem("vocalis_user")
        document.cookie = "vocalis_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        setUser(null)
        router.push("/")
    }

    return (
        <AuthContext.Provider value={{ user, loading, login, loginWithProvider, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
