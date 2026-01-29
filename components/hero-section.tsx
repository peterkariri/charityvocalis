import { Button } from "@/components/ui/button"
import { Play, Heart, Users, HandCoins, ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[800px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/african-teenage-girls-group-photo-school-uniform-s.jpg"
          alt="Kenyan students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#001D23]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Subheading with accent line */}
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[2px] w-12 bg-secondary block" />
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">
              Empowering Future Leaders
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] font-heading">
            Helping Girls <br />
            <span className="text-secondary">Find Their Voice</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl font-body">
            Vocalis allows young women in Kenya to break barriers, build confidence, and access education. Join us in creating a world where every girl can lead.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link href="/about">
              <Button size="lg" className="bg-[#1A685B] text-white hover:bg-white hover:text-primary rounded-full px-8 h-14 text-lg font-bold shadow-lg transition-all duration-300 border-2 border-[#1A685B]">
                Discover Now
              </Button>
            </Link>
            <Link href="/donate">
              <Button size="lg" className="bg-secondary text-white hover:bg-[#e69b00] rounded-full px-8 h-14 text-lg font-bold shadow-lg transition-all duration-300">
                Start Donate
                <Heart className="w-5 h-5 ml-2 fill-current" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating Features / Stats - Bottom Right overlapping */}
        <div className="hidden lg:flex absolute bottom-[-40px] right-4 gap-6">
          <div className="bg-white p-8 rounded-t-3xl shadow-2xl max-w-xs relative hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-[#F3F4F6] rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <HandCoins className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 font-heading">Make a Donation</h3>
            <p className="text-gray-500 mb-4 font-body text-sm">Support our cause and help provide education to those in need.</p>
            <Link href="/donate" className="text-primary font-bold inline-flex items-center hover:text-secondary transition-colors">
              Donate Now <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>

          <div className="bg-[#1A685B] p-8 rounded-t-3xl shadow-2xl max-w-xs relative hover:-translate-y-2 transition-transform duration-300 mt-12">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-heading">Become a Volunteer</h3>
            <p className="text-white/80 mb-4 font-body text-sm">Join our team of mentors and make a direct impact on a girl's life.</p>
            <Link href="/contact" className="text-secondary font-bold inline-flex items-center hover:text-white transition-colors">
              Join Us <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
