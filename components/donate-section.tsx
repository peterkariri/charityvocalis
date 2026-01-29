"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, GraduationCap, Users, BookOpen } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"

export function DonateSection() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  const handleDonate = () => {
    if (isAuthenticated) {
      router.push("/donate")
    } else {
      router.push("/login")
    }
  }

  const donationOptions = [
    {
      amount: "KSh 2,000",
      usd: "$15",
      description: "Provides school supplies for one girl for a term",
      icon: BookOpen,
    },
    {
      amount: "KSh 5,000",
      usd: "$40",
      description: "Sponsors a girl's participation in mentorship program",
      icon: Users,
      popular: true,
    },
    {
      amount: "KSh 15,000",
      usd: "$115",
      description: "Covers one term's school fees for a girl in need",
      icon: GraduationCap,
    },
    {
      amount: "KSh 50,000",
      usd: "$385",
      description: "Full year scholarship for one deserving student",
      icon: Heart,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border-2 border-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-semibold">Support Our Cause</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Help a Girl Find Her <span className="text-secondary">Voice</span>
            </h2>

            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Your donation directly impacts the lives of girls in Kenyan high schools. Every contribution helps provide
              mentorship, educational resources, and safe spaces for girls to speak out and thrive.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-secondary-foreground"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-white/90">100% of donations go directly to programs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-secondary-foreground"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-white/90">Tax-deductible contributions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-secondary-foreground"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-white/90">Regular impact reports for donors</span>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/african-schoolgirls-happy-celebrating-graduation-s.jpg"
                alt="Happy schoolgirls celebrating"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Right - Donation Options */}
          <div>
            <Card className="bg-white rounded-3xl shadow-2xl border-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Choose Your Impact</h3>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {donationOptions.map((option, index) => (
                    <button
                      key={index}
                      className={`relative p-4 rounded-2xl border-2 transition-all duration-300 text-left ${option.popular ? "border-primary bg-primary/5" : "border-border hover:border-primary"
                        }`}
                    >
                      {option.popular && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                      <option.icon className="w-6 h-6 text-primary mb-2" />
                      <div className="text-xl font-bold text-foreground">{option.amount}</div>
                      <div className="text-sm text-muted-foreground">{option.usd} USD</div>
                      <div className="text-xs text-muted-foreground mt-2">{option.description}</div>
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                      KSh
                    </span>
                    <input
                      type="text"
                      placeholder="Enter custom amount"
                      className="w-full pl-14 pr-4 py-4 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>

                  <Button
                    onClick={handleDonate}
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-6 text-lg"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Donate Now
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Secure payment via M-Pesa, Card, or Bank Transfer
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
