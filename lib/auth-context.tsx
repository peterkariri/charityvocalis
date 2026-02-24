"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface User {
    id: string
    name: string
    email: string
    role?: string
    image?: string
    phone?: string
}

interface AuthContextType {
    user: User | null
    loading: boolean
    login: (email: string, password: string) => Promise<string | null> // Returns error string or null if success
    register: (name: string, email: string, password: string, phone?: string) => Promise<string | null>
    logout: () => void
    isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        // Check for existing session in localStorage (simple persistence for now)
        const storedUser = localStorage.getItem("vocalis_user")
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser))
            } catch (e) {
                console.error("Failed to parse stored user", e)
                localStorage.removeItem("vocalis_user")
            }
        }
        setLoading(false)
    }, [])

    const login = async (email: string, password: string) => {
        setLoading(true)
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            })

            const data = await res.json()

            if (!res.ok) {
                setLoading(false)
                return data.error || "Login failed"
            }

            const user = data
            localStorage.setItem("vocalis_user", JSON.stringify(user))
            setUser(user)
            setLoading(false)
            router.push("/dashboard")
            return null
        } catch (error) {
            setLoading(false)
            return "An unexpected error occurred"
        }
    }

    const register = async (name: string, email: string, password: string, phone?: string) => {
        setLoading(true)
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, phone }),
            })

            const data = await res.json()

            if (!res.ok) {
                setLoading(false)
                return data.error || "Registration failed"
            }

            // Auto login after register (optional, but good UX)
            const user = data
            localStorage.setItem("vocalis_user", JSON.stringify(user))
            setUser(user)
            setLoading(false)
            router.push("/dashboard")
            return null
        } catch (error) {
            setLoading(false)
            return "An unexpected error occurred"
        }
    }

    const logout = () => {
        localStorage.removeItem("vocalis_user")
        // Also clear cookie if possible, but HttpOnly can't be cleared from JS easily unless we hit a logout endpoint
        // For now, we rely on client-side state
        document.cookie = "vocalis_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        setUser(null)
        router.push("/")
    }

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout, isAuthenticated: !!user }}>
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
