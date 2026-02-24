"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, School, Award, Globe, BookOpen } from "lucide-react"
import Link from "next/link"
import CountUp from "react-countup"

export function ImpactSection() {
  const stats = [
    {
      icon: Users,
      value: 2500,
      suffix: "+",
      label: "Girls Empowered",
      description: "Young women who have found their voice",
    },
    {
      icon: School,
      value: 85,
      suffix: "+",
      label: "Partner Schools",
      description: "Schools across Kenya participating",
    },
    {
      icon: Award,
      value: 150,
      suffix: "+",
      label: "Active Mentors",
      description: "Professional women guiding the next generation",
    },
    {
      icon: BookOpen,
      value: 500,
      suffix: "+",
      label: "Scholarships Given",
      description: "Girls supported with educational funding",
    },
    {
      icon: Globe,
      value: 12,
      suffix: "",
      label: "Counties Reached",
      description: "Expanding our impact across Kenya",
    },
    {
      icon: TrendingUp,
      value: 98,
      suffix: "%",
      label: "Success Rate",
      description: "Girls completing their education",
    },
  ]

  return (
    <section className="py-20 bg-primary relative overflow-hidden perspective-1000">
      {/* Background Pattern with Parallax Feel */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-white animate-pulse" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-2 border-white animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full border-2 border-white animate-pulse delay-300" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 backdrop-blur-md shadow-lg">
            <span className="text-sm font-semibold text-white">Our Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white text-balance drop-shadow-md">
            Making a Real <span className="text-secondary">Difference</span>
          </h2>
          <p className="text-white/80 text-lg drop-shadow-sm">
            Every number represents a life changed, a voice heard, and a future transformed. Here&apos;s the impact
            we&apos;ve made together.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Link key={index} href="/contact" className="block group">
              <Card
                className="bg-white/10 backdrop-blur-md border-white/20 rounded-3xl hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] h-full overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8 text-center relative z-10">
                  <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                    <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                    {stat.suffix}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                  <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
