import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StoriesSection } from "@/components/stories-section"

export default function StoriesPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="pt-20">
                <StoriesSection />
            </div>
            <Footer />
        </main>
    )
}
