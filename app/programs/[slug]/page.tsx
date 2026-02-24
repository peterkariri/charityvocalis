import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { programs } from "@/lib/programs-data"

export function generateStaticParams() {
    return programs.map((program) => ({
        slug: program.id,
    }))
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const program = programs.find((p) => p.id === slug)

    if (!program) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-gray-50/50">
            <Header />

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={program.placeholderImage}
                        alt={program.title}
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/80 to-gray-50/50" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <Link
                        href="/#programs"
                        className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Programs
                    </Link>

                    <div className={`w-16 h-16 ${program.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                        <program.icon className={`w-8 h-8 ${program.textColor}`} />
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                        {program.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
                        {program.description}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src={program.placeholderImage}
                            alt={program.title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    <div className="space-y-8">
                        <div className="prose prose-lg prose-headings:text-foreground prose-p:text-muted-foreground max-w-none">
                            <h3 className="text-2xl font-bold mb-4 text-primary">About the Program</h3>
                            {program.longDescription.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="mb-4 text-lg leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/contact">
                                <Button size="lg" className="rounded-full w-full sm:w-auto text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                                    Join Program <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/donate">
                                <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto text-lg px-8 py-6 border-2">
                                    Support This Cause
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
