import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { programs } from "@/lib/programs-data"
import Image from "next/image"

export function ProgramsSection() {
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
              className="group hover:shadow-xl transition-all duration-300 border-none bg-white rounded-3xl overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={program.placeholderImage}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 opacity-20 ${program.color}`} />
              </div>
              <CardContent className="p-8 flex flex-col flex-grow">
                <div
                  className={`w-12 h-12 ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 -mt-14 relative z-10 shadow-lg`}
                >
                  <program.icon className={`w-6 h-6 ${program.textColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{program.description}</p>
                <Link href={`/programs/${program.id}`}>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
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
