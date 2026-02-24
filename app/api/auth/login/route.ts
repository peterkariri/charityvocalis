import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json()

        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            )
        }

        const user = await prisma.user.findUnique({
            where: { email },
        })

        if (!user || !user.password) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            )
        }

        if (!user.emailVerified) {
            return NextResponse.json(
                { error: "Please verify your email address before logging in." },
                { status: 401 }
            )
        }

        const isValid = await bcrypt.compare(password, user.password)

        if (!isValid) {
            return NextResponse.json(
                { error: "Invalid credentials" },
                { status: 401 }
            )
        }

        // In a real app, we would use JWT or NextAuth here.
        // For this implementation, we'll return the user info and let the client handle session state 
        // (simulating the "cookie" approach for now)

        const { password: _, ...userWithoutPassword } = user

        // Create a specific response with a successful status
        const response = NextResponse.json(userWithoutPassword)

        // Set a simple cookie for demonstration (not secure for real production without HttpOnly/Secure)
        response.cookies.set("vocalis_token", `mock-token-${user.id}`, { maxAge: 86400 })

        return response

    } catch (error) {
        console.error("Login error:", error)
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        )
    }
}
