import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProgramsSection } from "@/components/programs-section"
import { ImpactSection } from "@/components/impact-section"
import { MentorsSection } from "@/components/mentors-section"
import { StoriesSection } from "@/components/stories-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { DonateSection } from "@/components/donate-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <HeroSection />

      <ScrollAnimation animation="slide-up">
        <AboutSection />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in">
        <ProgramsSection />
      </ScrollAnimation>

      <ScrollAnimation animation="slide-up">
        <ImpactSection />
      </ScrollAnimation>

      <ScrollAnimation animation="slide-up">
        <MentorsSection />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in">
        <StoriesSection />
      </ScrollAnimation>

      <ScrollAnimation animation="slide-up">
        <TestimonialsSection />
      </ScrollAnimation>

      <ScrollAnimation animation="slide-up">
        <FAQSection />
      </ScrollAnimation>

      <ScrollAnimation animation="zoom-in">
        <DonateSection />
      </ScrollAnimation>

      <ScrollAnimation animation="slide-up">
        <ContactSection />
      </ScrollAnimation>

      <Footer />
    </main>
  )
}
