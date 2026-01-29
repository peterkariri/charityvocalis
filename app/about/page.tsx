import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="pt-20">
                <AboutSection />
            </div>
            <Footer />
        </main>
    )
}
