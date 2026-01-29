import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, School, Award, Globe, BookOpen } from "lucide-react"

export function ImpactSection() {
  const stats = [
    {
      icon: Users,
      value: "2,500+",
      label: "Girls Empowered",
      description: "Young women who have found their voice",
    },
    {
      icon: School,
      value: "85+",
      label: "Partner Schools",
      description: "Schools across Kenya participating",
    },
    {
      icon: Award,
      value: "150+",
      label: "Active Mentors",
      description: "Professional women guiding the next generation",
    },
    {
      icon: BookOpen,
      value: "500+",
      label: "Scholarships Given",
      description: "Girls supported with educational funding",
    },
    {
      icon: Globe,
      value: "12",
      label: "Counties Reached",
      description: "Expanding our impact across Kenya",
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Success Rate",
      description: "Girls completing their education",
    },
  ]

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-white" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border-2 border-white" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full border-2 border-white" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold text-white">Our Impact</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white text-balance">
            Making a Real <span className="text-secondary">Difference</span>
          </h2>
          <p className="text-white/80 text-lg">
            Every number represents a life changed, a voice heard, and a future transformed. Here&apos;s the impact
            we&apos;ve made together.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 rounded-3xl hover:bg-white/20 transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-white/70">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
