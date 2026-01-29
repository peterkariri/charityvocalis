import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowLeft, Share2, Twitter, Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BlogPostPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            <article className="container mx-auto px-4 py-12 max-w-4xl">
                <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                </Link>

                <div className="space-y-6 mb-12">
                    <div className="flex gap-2">
                        <span className="bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">Education</span>
                        <span className="bg-purple-100 text-purple-600 text-sm font-semibold px-3 py-1 rounded-full">Impact</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">Empowering Rural Schools: A Success Story</h1>
                    <div className="flex items-center justify-between border-b border-border pb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                <User className="w-6 h-6 text-gray-400" />
                            </div>
                            <div>
                                <div className="font-semibold">Jane Doe</div>
                                <div className="text-sm text-muted-foreground flex items-center gap-2">
                                    <Calendar className="w-3 h-3" />
                                    March 15, 2025
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Share2 className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none text-muted-foreground">
                    <div className="w-full h-96 bg-gray-100 rounded-2xl mb-12 flex items-center justify-center text-gray-300">
                        Feature Image Placeholder
                    </div>

                    <p className="lead text-xl text-foreground font-medium mb-6">
                        In a remote village in Kenya, a quiet revolution is taking place. It's not one of loud protests, but of clicking keyboards and glowing screens. This is the story of how accessibility to digital resources is transforming the future for 500 high school girls.
                    </p>

                    <p className="mb-6">
                        For years, the students at St. Mary's High School relied on outdated textbooks shared between three or four students. The Digital Literacy Initiative, spearheaded by Vocalis, changed everything. With the donation of 50 laptops and high-speed internet connectivity, the world has opened up for these young minds.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Bridging the Digital Divide</h2>
                    <p className="mb-6">
                        Access to information is a fundamental right in the 21st century. By bridging the digital divide, we aren't just teaching coding; we are teaching problem-solving, critical thinking, and global awareness. The students are now able to research for their biology projects, connect with mentors from around the world, and even start learning the basics of web development.
                    </p>

                    <blockquote className="border-l-4 border-primary pl-6 italic text-foreground my-8">
                        "I never thought I could create something that people on the other side of the world could see. Now, I dream of becoming a software engineer." - Grace, Grade 11 Student
                    </blockquote>

                    <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Looking Ahead</h2>
                    <p className="mb-6">
                        This is just the beginning. Our goal is to expand this program to 10 more schools by the end of 2026. But we cannot do it alone. It takes a community to raise a child, and it takes a global community to empower them.
                    </p>
                </div>

                <div className="border-t border-border mt-12 pt-12">
                    <h3 className="text-2xl font-bold mb-6">Share this story</h3>
                    <div className="flex gap-4">
                        <Button variant="outline" className="gap-2">
                            <Twitter className="w-4 h-4 text-blue-400" />
                            Twitter
                        </Button>
                        <Button variant="outline" className="gap-2">
                            <Facebook className="w-4 h-4 text-blue-600" />
                            Facebook
                        </Button>
                        <Button variant="outline" className="gap-2">
                            <Linkedin className="w-4 h-4 text-blue-700" />
                            LinkedIn
                        </Button>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    )
}
