import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mic, Users, GraduationCap, Briefcase, Heart, MessageCircle, ArrowRight } from "lucide-react"

export function ProgramsSection() {
  const programs = [
    {
      icon: Mic,
      title: "Speak Out Sessions",
      description:
        "Safe spaces where girls can share their stories, voice concerns, and practice public speaking in a supportive environment.",
      color: "bg-primary",
      textColor: "text-white",
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description:
        "Connect with successful women professionals who provide guidance, support, and real-world insights for career development.",
      color: "bg-secondary",
      textColor: "text-secondary-foreground",
    },
    {
      icon: GraduationCap,
      title: "Scholarship Fund",
      description:
        "Financial support for academically talented girls who need help covering school fees, books, and educational materials.",
      color: "bg-primary",
      textColor: "text-white",
    },
    {
      icon: Briefcase,
      title: "Career Guidance",
      description:
        "Workshops and seminars that expose girls to various career paths and help them make informed decisions about their future.",
      color: "bg-secondary",
      textColor: "text-secondary-foreground",
    },
    {
      icon: Heart,
      title: "Wellness Support",
      description:
        "Mental health resources and counseling services to help girls navigate challenges and build emotional resilience.",
      color: "bg-primary",
      textColor: "text-white",
    },
    {
      icon: MessageCircle,
      title: "Peer Networks",
      description:
        "Creating lasting connections between girls across different schools to build a supportive community of change-makers.",
      color: "bg-secondary",
      textColor: "text-secondary-foreground",
    },
  ]

  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">Our Programs</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Programs That <span className="text-primary">Transform Lives</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer comprehensive programs designed to empower girls at every stage of their journey, from building
            confidence to securing their future.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-none bg-white rounded-3xl overflow-hidden"
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <program.icon className={`w-8 h-8 ${program.textColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 group/btn">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
            Explore All Programs
          </Button>
        </div>
      </div>
    </section>
  )
}
