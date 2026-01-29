"use client"

import { useAuth } from "@/lib/auth-context"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, Heart, Award, TrendingUp, Calendar, DollarSign } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
    const { user, loading, logout } = useAuth()
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

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">
                        Hello, {user.name.split(' ')[0]}! 👋
                    </h1>
                    <p className="text-muted-foreground mt-1">
                        Here's an overview of your impact with Vocalis.
                    </p>
                </div>
                <div className="flex gap-3">
                    <Link href="/dashboard/analysis">
                        <Button variant="outline" className="gap-2">
                            <TrendingUp className="w-4 h-4" />
                            View Analysis
                        </Button>
                    </Link>
                    <Link href="/dashboard/donate">
                        <Button className="bg-secondary hover:bg-secondary/90 text-white gap-2">
                            <Heart className="w-4 h-4" />
                            New Donation
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-primary to-purple-600 text-white border-none shadow-lg">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium opacity-90">Total Contributed</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold">KSh 12,000</div>
                        <p className="text-sm opacity-80 mt-1">+KSh 2,000 this month</p>
                    </CardContent>
                </Card>
                <Card className="border-border/50 shadow-sm">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium text-muted-foreground">Lives Impacted</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-foreground">3</div>
                        <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
                            <Award className="w-3 h-3" />
                            Direct Sponsorships
                        </p>
                    </CardContent>
                </Card>
                <Card className="border-border/50 shadow-sm">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium text-muted-foreground">Active Pledges</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-foreground">1</div>
                        <p className="text-sm text-muted-foreground mt-1">Monthly mentorship support</p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Recent Donations</h2>
                <Card className="overflow-hidden border-border/50 shadow-sm">
                    <div className="divide-y divide-border">
                        {[
                            { id: 1, amount: "KSh 2,000", date: "Mar 15, 2025", type: "One-time", status: "Completed" },
                            { id: 2, amount: "KSh 5,000", date: "Feb 28, 2025", type: "Monthly", status: "Completed" },
                            { id: 3, amount: "KSh 5,000", date: "Jan 28, 2025", type: "Monthly", status: "Completed" },
                        ].map((item) => (
                            <div key={item.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <DollarSign className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-semibold">{item.amount}</div>
                                        <div className="text-sm text-muted-foreground">{item.type} Donation</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                        <Calendar className="w-3 h-3" />
                                        {item.date}
                                    </div>
                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 mt-1">
                                        {item.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 bg-gray-50 border-t border-border text-center">
                        <Button variant="link" className="text-primary">View Full History</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}
