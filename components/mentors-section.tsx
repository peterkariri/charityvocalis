import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, BadgeCheck } from "lucide-react"
import Link from "next/link"

export function MentorsSection() {
  const mentors = [
    {
      name: "Dr. Wanjiku Mwangi",
      role: "Medical Doctor & Health Advocate",
      category: "Healthcare",
      experience: "15+ Years",
      image: "/professional-african-woman-doctor-portrait-smiling.jpg",
      bio: "15+ years in healthcare, passionate about girls' health education",
    },
    {
      name: "Amina Ochieng",
      role: "Tech Entrepreneur & CEO",
      category: "Technology",
      experience: "10+ Years",
      image: "/professional-african-woman-tech-entrepreneur-portr.jpg",
      bio: "Founded 3 successful startups, champions women in tech",
    },
    {
      name: "Grace Kimani",
      role: "Lawyer & Human Rights Activist",
      category: "Law & Advocacy",
      experience: "12+ Years",
      image: "/professional-african-woman-lawyer-portrait-elegant.jpg",
      bio: "Advocates for girls' rights and access to education",
    },
    {
      name: "Faith Njeri",
      role: "Journalist & Media Professional",
      category: "Media",
      experience: "8+ Years",
      image: "/professional-african-woman-journalist-portrait-mod.jpg",
      bio: "Award-winning journalist empowering young voices",
    },
  ]

  return (
    <section id="mentors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/30 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold text-foreground">Meet Our Mentors</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Inspiring Women <span className="text-primary">Leading the Way</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our mentors are accomplished professionals who volunteer their time to guide, inspire, and empower the next
            generation of Kenyan women leaders.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <Card
              key={index}
              className="group border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={mentor.image || "/placeholder.svg"}
                    alt={mentor.name}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                    {mentor.category}
                  </div>

                  {/* Social Links */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
                      <Twitter className="w-5 h-5 text-primary" />
                    </button>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-1 flex items-center justify-center gap-2">
                    {mentor.name}
                    {index % 2 === 0 && <BadgeCheck className="w-4 h-4 text-blue-500" />}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-1">{mentor.role}</p>
                  <p className="text-xs text-muted-foreground mb-3 font-semibold uppercase tracking-wider">{mentor.experience} Exp.</p>
                  <p className="text-muted-foreground text-sm line-clamp-2">{mentor.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/mentors/apply">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
              Become a Mentor
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
