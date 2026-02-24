import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"

interface VerifyPageProps {
    searchParams: Promise<{ token: string }>
}

export default async function VerifyPage({ searchParams }: VerifyPageProps) {
    const { token } = await searchParams

    if (!token) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
                <Card className="w-full max-w-md text-center">
                    <CardHeader>
                        <div className="mx-auto w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                            <XCircle className="w-6 h-6 text-red-600" />
                        </div>
                        <CardTitle>Invalid Link</CardTitle>
                        <CardDescription>Missing verification token.</CardDescription>
                    </CardHeader>
                    <CardFooter className="justify-center">
                        <Link href="/login"><Button>Back to Login</Button></Link>
                    </CardFooter>
                </Card>
            </div>
        )
    }

    const existingToken = await prisma.verificationToken.findUnique({
        where: { token },
    })

    if (!existingToken) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
                <Card className="w-full max-w-md text-center">
                    <CardHeader>
                        <div className="mx-auto w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                            <XCircle className="w-6 h-6 text-red-600" />
                        </div>
                        <CardTitle>Invalid or Expired Token</CardTitle>
                        <CardDescription>This link may have already been used or expired.</CardDescription>
                    </CardHeader>
                    <CardFooter className="justify-center">
                        <Link href="/login"><Button>Back to Login</Button></Link>
                    </CardFooter>
                </Card>
            </div>
        )
    }

    const hasExpired = new Date(existingToken.expires) < new Date()

    if (hasExpired) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
                <Card className="w-full max-w-md text-center">
                    <CardHeader>
                        <div className="mx-auto w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                            <XCircle className="w-6 h-6 text-yellow-600" />
                        </div>
                        <CardTitle>Token Expired</CardTitle>
                        <CardDescription>Please request a new verification link.</CardDescription>
                    </CardHeader>
                    <CardFooter className="justify-center">
                        <Link href="/signup"><Button>Signup Again</Button></Link>
                    </CardFooter>
                </Card>
            </div>
        )
    }

    // Verify User
    // Note: Your schema links verification token by 'identifier' (usually email). 
    // But ideally we'd look up the user by that identifier.
    const user = await prisma.user.findUnique({
        where: { email: existingToken.identifier }
    })

    if (user) {
        await prisma.user.update({
            where: { id: user.id },
            data: {
                emailVerified: new Date(),
            }
        })

        // Clean up token
        await prisma.verificationToken.delete({
            where: { token }
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
            <Card className="w-full max-w-md text-center border-green-200 bg-green-50/50">
                <CardHeader>
                    <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-green-800">Email Verified!</CardTitle>
                    <CardDescription className="text-green-700">
                        Your account has been successfully verified.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-gray-600">You can now access your dashboard and manage your donations.</p>
                </CardContent>
                <CardFooter className="justify-center">
                    <Link href="/login">
                        <Button className="bg-green-600 hover:bg-green-700 text-white">Continue to Login</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}
