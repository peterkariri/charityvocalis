import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProgramsSection } from "@/components/programs-section"

export default function ProgramsPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="pt-20">
                <ProgramsSection />
            </div>
            <Footer />
        </main>
    )
}
