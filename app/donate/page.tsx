"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, CreditCard, Banknote, Smartphone, CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DonatePage() {
    const [amount, setAmount] = useState("")
    const [customAmount, setCustomAmount] = useState("")

    const handleAmountSelect = (value: string) => {
        setAmount(value)
        setCustomAmount("")
    }

    return (
        <main className="min-h-screen bg-gray-50/50">
            <Header />
            <div className="container mx-auto px-4 py-12 max-w-5xl">
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

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Donation Amount Selection */}
                    <div className="md:col-span-2 space-y-8">
                        <Card className="border-border shadow-md">
                            <CardHeader>
                                <CardTitle>1. Choose Donation Amount</CardTitle>
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

                        <Card className="border-border shadow-md">
                            <CardHeader>
                                <CardTitle>2. Select Payment Method</CardTitle>
                                <CardDescription>Securely pay via your preferred method</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Tabs defaultValue="mpesa" className="w-full">
                                    <TabsList className="grid w-full grid-cols-4 h-auto p-1 bg-muted/50 rounded-xl">
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
                                        <TabsTrigger value="pesapal" className="py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
                                            <div className="flex flex-col items-center gap-1">
                                                <CreditCard className="w-5 h-5" />
                                                <span className="text-xs">PesaPal</span>
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
                                            <div className="flex items-center justify-between p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
                                                <div className="flex items-center gap-3">
                                                    <Smartphone className="w-6 h-6" />
                                                    <div>
                                                        <div className="font-bold">M-Pesa Express</div>
                                                        <div className="text-xs">Fastest & Easiest</div>
                                                    </div>
                                                </div>
                                                <CheckCircle className="w-5 h-5" />
                                            </div>
                                            <div className="space-y-4">
                                                <div className="space-y-2">
                                                    <Label>M-Pesa Phone Number</Label>
                                                    <Input placeholder="07XX XXX XXX" className="py-6" />
                                                </div>
                                                <Button className="w-full py-6 text-lg bg-[#4CAF50] hover:bg-[#45a049] text-white">
                                                    Donate with M-Pesa
                                                </Button>
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="card" className="mt-0 space-y-4">
                                            <div className="flex items-center justify-between p-4 bg-blue-50 text-blue-700 rounded-lg border border-blue-200">
                                                <div className="flex items-center gap-3">
                                                    <CreditCard className="w-6 h-6" />
                                                    <div>
                                                        <div className="font-bold">Credit/Debit Card</div>
                                                        <div className="text-xs">Processed securely via Stripe/PayPal</div>
                                                    </div>
                                                </div>
                                                <CheckCircle className="w-5 h-5" />
                                            </div>
                                            <Button className="w-full py-6 text-lg bg-[#003087] hover:bg-[#00256b] text-white">
                                                Donate with PayPal / Card
                                            </Button>
                                        </TabsContent>

                                        <TabsContent value="pesapal" className="mt-0 space-y-4">
                                            <div className="flex items-center justify-between p-4 bg-cyan-50 text-cyan-700 rounded-lg border border-cyan-200">
                                                <div className="flex items-center gap-3">
                                                    <CreditCard className="w-6 h-6" />
                                                    <div>
                                                        <div className="font-bold">PesaPal</div>
                                                        <div className="text-xs">Local & International Cards</div>
                                                    </div>
                                                </div>
                                                <CheckCircle className="w-5 h-5" />
                                            </div>
                                            <Button className="w-full py-6 text-lg bg-[#2d9cdb] hover:bg-[#2589c1] text-white">
                                                Donate with PesaPal
                                            </Button>
                                        </TabsContent>

                                        <TabsContent value="bank" className="mt-0 space-y-4">
                                            <div className="p-4 bg-gray-50 rounded-lg border border-border space-y-3">
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
                                                <div className="bg-yellow-50 text-yellow-800 p-3 rounded text-xs">
                                                    Please include your name in the transaction reference/memo.
                                                </div>
                                            </div>
                                        </TabsContent>
                                    </div>
                                </Tabs>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Impact Summary */}
                    <div className="md:col-span-1">
                        <Card className="bg-primary/5 border-primary/20 sticky top-24">
                            <CardHeader>
                                <CardTitle className="text-primary">Your Impact</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2">
                                    <div className="text-sm text-muted-foreground">Total Donation</div>
                                    <div className="text-4xl font-bold">
                                        KSh {(amount || customAmount || 0).toLocaleString()}
                                    </div>
                                </div>

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
