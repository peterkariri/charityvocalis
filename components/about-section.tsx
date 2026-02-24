import { Button } from "@/components/ui/button"
import { Target, Eye, Heart, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

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
        {/* Hero / Intro */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-xl transform translate-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop" // Kenyan students
                    alt="Kenyan schoolgirls smiling"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="bg-primary rounded-3xl p-6 text-white shadow-lg">
                  <div className="text-4xl font-bold mb-1">5+</div>
                  <div className="text-primary-foreground/90 font-medium">Years of Impact</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-secondary rounded-3xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-secondary-foreground mb-1">98%</div>
                  <div className="text-secondary-foreground/90 font-medium">Success Rate</div>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=800&auto=format&fit=crop" // Girl reading/studying
                    alt="Girl focused on studies"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>

          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-sm font-semibold text-primary">About Vocalis</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              Empowering Every Girl to
              <span className="text-primary"> Find Her Voice</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed text-lg">
              Vocalis is a Kenya-based non-profit dedicated to dismantling barriers for high school girls.
              In many of our communities, cultural norms and economic hardships silence young women.
              We exist to change that narrative—providing the tools, confidence, and support network
              they need to become leaders in their own lives and communities.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/programs">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-base">
                  Our Programs <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mission & Vision Block */}
        <div className="bg-muted/30 rounded-[3rem] p-8 md:p-16 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 lg:gap-24">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create safe, transformative spaces and provide holistic resources that empower Kenyan girls to speak out with confidence, develop essential leadership skills, and access life-changing educational opportunities. We strive to nurture a generation of women who are fearless advocates for themselves and their communities.
              </p>
            </div>

            <div className="space-y-6">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                <Eye className="w-8 h-8 text-secondary-foreground bg-secondary/20 p-1 rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A Kenya where every girl—regardless of her background or economic status—has the unshakeable confidence, unwavering support, and accessible resources to speak her truth, shape her own future, and contribute meaningfully to national development.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Heart className="w-12 h-12 text-primary mx-auto opacity-20" />
          <h2 className="text-3xl font-bold">Our Story</h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p>
              Vocalis began as a small mentorship circle in a single classroom in Nairobi.
              Our founder noticed that while girls were present in class, they were often absent
              from conversations—overshadowed and unheard.
            </p>
            <p>
              What started with 10 girls sharing their dreams on a Saturday afternoon has grown into a
              nationwide movement. Today, we stand as a testament to the power of simply passing the mic.
              From rural schools in arid counties to urban settlements, we have seen that when you
              give a girl a platform, she doesn't just speak—she leads.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
