"use client"

import { useAuth } from "@/lib/auth-context"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from "recharts"

import { Footer } from "@/components/footer"

export default function AnalysisPage() {
    const { user, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login")
        }
    }, [loading, user, router])

    if (loading || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        )
    }

    const yearlyData = [
        { name: "Jan", amount: 5000 },
        { name: "Feb", amount: 5000 },
        { name: "Mar", amount: 2000 },
        { name: "Apr", amount: 0 },
        { name: "May", amount: 0 },
    ]

    const impactData = [
        { name: "School Fees", value: 60, color: "#8b5cf6" }, // Purple
        { name: "Mentorship", value: 25, color: "#ec4899" }, // Pink
        { name: "Supplies", value: 15, color: "#f59e0b" },   // Orange
    ]

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Impact Analysis</h1>
                <p className="text-muted-foreground">Visualize how your contributions are making a difference.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Donation Trends */}
                <Card>
                    <CardHeader>
                        <CardTitle>Donation Trends (2025)</CardTitle>
                        <CardDescription>Your monthly contribution history</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={yearlyData}>
                                <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `KSh ${value}`} />
                                <Tooltip
                                    formatter={(value) => [`KSh ${value}`, "Amount"]}
                                    contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                                />
                                <Bar dataKey="amount" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Fund Allocation */}
                <Card>
                    <CardHeader>
                        <CardTitle>Fund Allocation</CardTitle>
                        <CardDescription>Where your money goes</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={impactData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {impactData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="mt-4 text-center text-sm text-muted-foreground">
                            Your funds are primarily supporting <strong>School Fees</strong> this year.
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Footer />
        </div>
    )
}
