import { Button } from "@/components/ui/button"
import { Target, Eye, Heart, CheckCircle } from "lucide-react"

export function AboutSection() {
  const features = [
    "Safe spaces for girls to express themselves",
    "One-on-one mentorship programs",
    "Educational sponsorships and scholarships",
    "Leadership and public speaking training",
    "Career guidance and skill development",
    "Community support networks",
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src="/african-teenage-girls-group-photo-school-uniform-s.jpg"
                    alt="Group of schoolgirls"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-primary rounded-3xl p-6 text-white">
                  <div className="text-4xl font-bold">5+</div>
                  <div className="text-primary-foreground/80">Years of Impact</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-secondary rounded-3xl p-6">
                  <div className="text-4xl font-bold text-secondary-foreground">98%</div>
                  <div className="text-secondary-foreground/80">Success Rate</div>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <img src="/kenyan-girl-reading-books-library-education.jpg" alt="Girl studying" className="w-full h-64 object-cover" />
                </div>
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-sm font-semibold text-primary">About Vocalis</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              Empowering Every Girl to
              <span className="text-primary"> Find Her Voice</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Vocalis is a non-profit organization dedicated to helping girls in Kenyan high schools overcome barriers,
              build confidence, and achieve their full potential. We believe every girl deserves the opportunity to
              speak out, be heard, and lead.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-muted/50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  To create safe spaces and provide resources that empower girls to speak out, develop leadership
                  skills, and access educational opportunities.
                </p>
              </div>
              <div className="bg-muted/50 rounded-2xl p-6">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                  A Kenya where every girl has the confidence, support, and resources to speak her truth and shape her
                  future.
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
