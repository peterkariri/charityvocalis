import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { sendVerificationEmail } from "@/lib/email"
import { v4 as uuidv4 } from "uuid"

export async function POST(req: Request) {
    try {
        const { email, password, name, phone } = await req.json()

        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            )
        }

        const existingUser = await prisma.user.findUnique({
            where: { email },
        })

        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            )
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        // Create user but NOT verified yet
        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
                phone,
            },
        })

        // Create Verification Token
        const token = uuidv4()
        const expires = new Date(new Date().getTime() + 24 * 60 * 60 * 1000) // 24 hours

        await prisma.verificationToken.create({
            data: {
                identifier: email,
                token,
                expires
            }
        })

        // Send Email
        await sendVerificationEmail(email, token)

        return NextResponse.json({
            message: "Account created! Please check your email to verify your account."
        })

    } catch (error) {
        console.error("Registration error:", error)
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        )
    }
}
