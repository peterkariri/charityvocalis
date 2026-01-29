import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MentorsSection } from "@/components/mentors-section"

export default function MentorsPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="pt-20">
                <MentorsSection />
            </div>
            <Footer />
        </main>
    )
}
