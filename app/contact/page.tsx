import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="pt-20">
                <ContactSection />
            </div>
            <Footer />
        </main>
    )
}
