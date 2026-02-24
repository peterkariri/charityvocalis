"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, CreditCard, Banknote, Smartphone, CheckCircle, ArrowLeft, Loader2, User as UserIcon } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useAuth } from "@/lib/auth-context"
import { toast } from "sonner" // Assuming sonner is installed as per package.json

interface Campaign {
    id: string
    title: string
    description: string
    targetAmount: number
    raisedAmount: number
    imageUrl: string | null
}

export default function DonatePage() {
    const { user, isAuthenticated } = useAuth()
    const [amount, setAmount] = useState("")
    const [customAmount, setCustomAmount] = useState("")
    const [campaigns, setCampaigns] = useState<Campaign[]>([])
    const [selectedCampaignId, setSelectedCampaignId] = useState<string | null>(null)
    const [loadingCampaigns, setLoadingCampaigns] = useState(true)
    const [processing, setProcessing] = useState(false)

    // Guest fields
    const [guestName, setGuestName] = useState("")
    const [guestEmail, setGuestEmail] = useState("")
    const [guestPhone, setGuestPhone] = useState("")

    useEffect(() => {
        fetch("/api/campaigns")
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) setCampaigns(data)
                setLoadingCampaigns(false)
            })
            .catch(err => {
                console.error("Failed to fetch campaigns", err)
                setLoadingCampaigns(false)
            })
    }, [])

    const handleAmountSelect = (value: string) => {
        setAmount(value)
        setCustomAmount("")
    }

    const handleDonate = async (paymentMethod: string) => {
        const finalAmount = customAmount || amount
        if (!finalAmount) {
            toast.error("Please select or enter an amount")
            return
        }

        if (!isAuthenticated) {
            if (!guestEmail || !guestPhone) {
                toast.error("Please provide email and phone for receipt")
                return
            }
        }

        setProcessing(true)

        try {
            const res = await fetch("/api/donations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: finalAmount,
                    campaignId: selectedCampaignId,
                    userId: user?.id,
                    donorName: isAuthenticated ? user?.name : guestName,
                    donorEmail: isAuthenticated ? user?.email : guestEmail,
                    donorPhone: isAuthenticated ? user?.phone : guestPhone,
                    paymentMethod
                })
            })

            const data = await res.json()

            if (res.ok) {
                toast.success("Donation successful! Thank you.")
                // Reset form
                setAmount("")
                setCustomAmount("")
                if (!isAuthenticated) {
                    setGuestName("")
                    setGuestEmail("")
                    setGuestPhone("")
                }
            } else {
                toast.error(data.error || "Donation failed")
            }
        } catch (error) {
            toast.error("Something went wrong")
        } finally {
            setProcessing(false)
        }
    }

    const selectedCampaign = campaigns.find(c => c.id === selectedCampaignId)

    return (
        <main className="min-h-screen bg-gray-50/50">
            <Header />
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 mb-4">
                        Make a Difference Today
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Your secure donation empowers Kenyan girls with education, mentorship, and a brighter future.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Left Column: Campaigns & Amount */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* 1. Choose Cause */}
                        <Card className="border-border shadow-md">
                            <CardHeader>
                                <CardTitle>1. Choose a Cause (Optional)</CardTitle>
                                <CardDescription>Select a specific campaign or donate to the general fund</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {loadingCampaigns ? (
                                    <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>
                                ) : (
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div
                                            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedCampaignId === null
                                                    ? 'border-primary bg-primary/5'
                                                    : 'border-border hover:border-primary/50'
                                                }`}
                                            onClick={() => setSelectedCampaignId(null)}
                                        >
                                            <div className="font-bold">General Fund</div>
                                            <div className="text-sm text-muted-foreground">Support where it's needed most</div>
                                        </div>
                                        {campaigns.map(campaign => (
                                            <div
                                                key={campaign.id}
                                                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${selectedCampaignId === campaign.id
                                                        ? 'border-primary bg-primary/5'
                                                        : 'border-border hover:border-primary/50'
                                                    }`}
                                                onClick={() => setSelectedCampaignId(campaign.id)}
                                            >
                                                <div className="font-bold truncate">{campaign.title}</div>
                                                <div className="text-sm text-muted-foreground truncate">{campaign.description}</div>
                                                <div className="mt-2 text-xs font-medium text-primary">
                                                    Raised: KSh {campaign.raisedAmount.toLocaleString()} / {campaign.targetAmount.toLocaleString()}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* 2. Choose Amount */}
                        <Card className="border-border shadow-md">
                            <CardHeader>
                                <CardTitle>2. Choose Donation Amount</CardTitle>
                                <CardDescription>Select an amount or enter your own</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                    {['1000', '2500', '5000', '10000', '25000', '50000'].map((val) => (
                                        <button
                                            key={val}
                                            onClick={() => handleAmountSelect(val)}
                                            className={`py-4 rounded-xl border-2 font-bold text-lg transition-all ${amount === val
                                                ? 'border-primary bg-primary/5 text-primary'
                                                : 'border-border hover:border-primary/50'
                                                }`}
                                        >
                                            KSh {parseInt(val).toLocaleString()}
                                        </button>
                                    ))}
                                </div>
                                <div className="relative">
                                    <Label>Custom Amount (KSh)</Label>
                                    <Input
                                        type="number"
                                        placeholder="Enter amount"
                                        className="mt-2 py-6 text-lg"
                                        value={customAmount}
                                        onChange={(e) => {
                                            setCustomAmount(e.target.value)
                                            setAmount("")
                                        }}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* 3. Donor Details (If Guest) */}
                        {!isAuthenticated && (
                            <Card className="border-border shadow-md">
                                <CardHeader>
                                    <CardTitle>3. Your Details</CardTitle>
                                    <CardDescription>So we can send you a receipt</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>Full Name (Optional)</Label>
                                            <Input
                                                placeholder="John Doe"
                                                value={guestName}
                                                onChange={(e) => setGuestName(e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Phone Number</Label>
                                            <Input
                                                placeholder="0712 345 678"
                                                value={guestPhone}
                                                onChange={(e) => setGuestPhone(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Email Address</Label>
                                        <Input
                                            type="email"
                                            placeholder="john@example.com"
                                            value={guestEmail}
                                            onChange={(e) => setGuestEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        <Link href="/login" className="text-primary hover:underline">Log in</Link> to track your donations.
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* 4. Payment Method */}
                        <Card className="border-border shadow-md">
                            <CardHeader>
                                <CardTitle>{isAuthenticated ? "3" : "4"}. Select Payment Method</CardTitle>
                                <CardDescription>Securely pay via your preferred method</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Tabs defaultValue="mpesa" className="w-full">
                                    <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-muted/50 rounded-xl">
                                        <TabsTrigger value="mpesa" className="py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                                            <div className="flex flex-col items-center gap-1">
                                                <Smartphone className="w-5 h-5" />
                                                <span className="text-xs">M-Pesa</span>
                                            </div>
                                        </TabsTrigger>
                                        <TabsTrigger value="card" className="py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                                            <div className="flex flex-col items-center gap-1">
                                                <CreditCard className="w-5 h-5" />
                                                <span className="text-xs">Card / PayPal</span>
                                            </div>
                                        </TabsTrigger>
                                        <TabsTrigger value="bank" className="py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                                            <div className="flex flex-col items-center gap-1">
                                                <Banknote className="w-5 h-5" />
                                                <span className="text-xs">Bank Transfer</span>
                                            </div>
                                        </TabsTrigger>
                                    </TabsList>

                                    <div className="mt-6 p-6 bg-white border border-border rounded-xl">
                                        <TabsContent value="mpesa" className="mt-0 space-y-4">
                                            <Button
                                                onClick={() => handleDonate("mpesa")}
                                                disabled={processing}
                                                className="w-full py-6 text-lg bg-[#4CAF50] hover:bg-[#45a049] text-white"
                                            >
                                                {processing ? <Loader2 className="animate-spin mr-2" /> : "Donate with M-Pesa"}
                                            </Button>
                                        </TabsContent>

                                        <TabsContent value="card" className="mt-0 space-y-4">
                                            <Button
                                                onClick={() => handleDonate("card")}
                                                disabled={processing}
                                                className="w-full py-6 text-lg bg-[#003087] hover:bg-[#00256b] text-white"
                                            >
                                                {processing ? <Loader2 className="animate-spin mr-2" /> : "Donate with Card"}
                                            </Button>
                                        </TabsContent>

                                        <TabsContent value="bank" className="mt-0 space-y-4">
                                            <div className="p-4 bg-gray-50 rounded-lg border border-border space-y-3 mb-4">
                                                <p className="text-sm font-medium text-muted-foreground">Bank Details:</p>
                                                <div className="grid gap-1">
                                                    <div className="flex justify-between border-b border-gray-200 pb-2">
                                                        <span className="text-sm text-gray-500">Bank Name</span>
                                                        <span className="font-medium">KCB Bank</span>
                                                    </div>
                                                    <div className="flex justify-between border-b border-gray-200 py-2">
                                                        <span className="text-sm text-gray-500">Account Name</span>
                                                        <span className="font-medium">Vocalis Charity Foundation</span>
                                                    </div>
                                                    <div className="flex justify-between py-2">
                                                        <span className="text-sm text-gray-500">Account Number</span>
                                                        <span className="font-medium">1234 5678 9012</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button
                                                onClick={() => handleDonate("bank")}
                                                disabled={processing}
                                                className="w-full py-6 text-lg"
                                            >
                                                {processing ? <Loader2 className="animate-spin mr-2" /> : "I Have Made the Transfer"}
                                            </Button>
                                        </TabsContent>
                                    </div>
                                </Tabs>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column: Summary */}
                    <div className="lg:col-span-1">
                        <Card className="bg-primary/5 border-primary/20 sticky top-24">
                            <CardHeader>
                                <CardTitle className="text-primary">Your Donation</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2">
                                    <div className="text-sm text-muted-foreground">Amount</div>
                                    <div className="text-4xl font-bold">
                                        KSh {(customAmount || amount || "0").toLocaleString()}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="text-sm text-muted-foreground">Supporting</div>
                                    <div className="font-medium text-lg">
                                        {selectedCampaign ? selectedCampaign.title : "General Fund"}
                                    </div>
                                </div>

                                {isAuthenticated && (
                                    <div className="flex items-center gap-2 p-3 bg-white rounded-lg border border-primary/10">
                                        <UserIcon className="w-4 h-4 text-primary" />
                                        <div className="text-sm">
                                            <div className="text-xs text-muted-foreground">Logged in as</div>
                                            <div className="font-medium">{user?.name}</div>
                                        </div>
                                    </div>
                                )}

                                <hr className="border-primary/10" />

                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
                                            <Heart className="w-4 h-4 text-primary" />
                                        </div>
                                        <p className="text-sm">100% of your donation goes directly to supporting girls' education and mentorship.</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                        </div>
                                        <p className="text-sm">Secure 256-bit encrypted transaction.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
            <Footer />
        </main>
    )
}
