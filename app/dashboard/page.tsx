"use client"

import { useAuth } from "@/lib/auth-context"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, Heart, Award, TrendingUp, Calendar, DollarSign } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface Donation {
    id: string
    amount: number
    currency: string
    status: string
    createdAt: string
    campaignId?: string
    campaign?: {
        title: string
    }
}

export default function DashboardPage() {
    const { user, loading, logout } = useAuth()
    const router = useRouter()
    const [donations, setDonations] = useState<Donation[]>([])
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        if (!loading && !user) {
            router.push("/login")
        } else if (user?.id) {
            // Fetch donations for this user
            // Ideally we'd have a specific endpoint or query param, but for now we'll fetch all and filter client side 
            // or assume the API handles it based on session if we were using fully secure cookies.
            // Since we are simulating, let's fetch from our donations API. 
            // Note: Our previous donation API was basic. We might need to update it to support filtering.
            // For this iteration, let's assume we can hit an endpoint (or mocked one)

            // Actually, let's update GET /api/donations to support query param ?userId=...
            fetch(`/api/donations?userId=${user.id}`)
                .then(res => res.json())
                .then(data => {
                    if (Array.isArray(data)) {
                        setDonations(data)
                    } else if (data.donations && Array.isArray(data.donations)) {
                        setDonations(data.donations)
                    }
                    setFetching(false)
                })
                .catch(err => {
                    console.error("Failed to fetch donations", err)
                    setFetching(false)
                })
        }
    }, [loading, user, router])

    if (loading || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        )
    }

    const totalContributed = donations.reduce((sum, d) => sum + d.amount, 0)
    const activeCampaigns = new Set(donations.map(d => d.campaignId).filter(Boolean)).size

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
                    <Link href="/donate">
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
                        <div className="text-4xl font-bold">KSh {totalContributed.toLocaleString()}</div>
                        <p className="text-sm opacity-80 mt-1">Across {donations.length} donations</p>
                    </CardContent>
                </Card>
                <Card className="border-border/50 shadow-sm">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium text-muted-foreground">Impact</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-foreground">{activeCampaigns}</div>
                        <p className="text-sm text-green-600 mt-1 flex items-center gap-1">
                            <Award className="w-3 h-3" />
                            Campaigns Supported
                        </p>
                    </CardContent>
                </Card>
                <Card className="border-border/50 shadow-sm">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium text-muted-foreground">Latest Donation</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-foreground">
                            {donations.length > 0 ? `KSh ${donations[0].amount.toLocaleString()}` : "—"}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                            {donations.length > 0 ? new Date(donations[0].createdAt).toLocaleDateString() : "No donations yet"}
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold">Recent Donations</h2>
                <Card className="overflow-hidden border-border/50 shadow-sm">
                    {fetching ? (
                        <div className="p-8 flex justify-center"><Loader2 className="animate-spin text-muted-foreground" /></div>
                    ) : donations.length === 0 ? (
                        <div className="p-8 text-center text-muted-foreground">
                            You haven't made any donations yet.
                            <Link href="/donate" className="text-primary hover:underline ml-1">Start today!</Link>
                        </div>
                    ) : (
                        <div className="divide-y divide-border">
                            {donations.map((item) => (
                                <div key={item.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                            <DollarSign className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-semibold">{item.campaign?.title || "General Donation"}</div>
                                            <div className="text-sm text-muted-foreground">KSh {item.amount.toLocaleString()}</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(item.createdAt).toLocaleDateString()}
                                        </div>
                                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mt-1 ${item.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {item.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {donations.length > 5 && (
                        <div className="p-4 bg-gray-50 border-t border-border text-center">
                            <Button variant="link" className="text-primary">View Full History</Button>
                        </div>
                    )}
                </Card>
            </div>
        </div>
    )
}
