import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
    {
        id: 1,
        title: "Empowering Rural Schools: A Success Story",
        excerpt: "How our latest initiative provided textbooks and digital resources to over 500 students in rural Kenya, transforming their learning experience.",
        author: "Jane Doe",
        date: "March 15, 2025",
        category: "Education",
        image: "bg-pink-100", // Placeholder class
    },
    {
        id: 2,
        title: "The Power of Mentorship",
        excerpt: "Meet the mentors who are dedicating their time to guide the next generation of female leaders in technology and business.",
        author: "John Smith",
        date: "March 10, 2025",
        category: "Mentorship",
        image: "bg-purple-100",
    },
    {
        id: 3,
        title: "Tech Bootcamp 2025 Highlights",
        excerpt: "A look back at our intensive week-long coding bootcamp where 50 girls built their first web applications.",
        author: "Sarah Connor",
        date: "March 5, 2025",
        category: "Events",
        image: "bg-blue-100",
    },
    {
        id: 4,
        title: "Community Health Drive",
        excerpt: "Providing essential health services and education to families in need, ensuring a wider impact beyond the classroom.",
        author: "Dr. Emily Blunt",
        date: "February 28, 2025",
        category: "Health",
        image: "bg-green-100",
    },
    {
        id: 5,
        title: "Partnering for Change",
        excerpt: "We are excited to announce our new partnership with Global Tech Giants to bring more resources to our programs.",
        author: "Michael Ross",
        date: "February 20, 2025",
        category: "Partnership",
        image: "bg-orange-100",
    },
    {
        id: 6,
        title: "Alumni Spotlight: Grace's Journey",
        excerpt: "From a shy student to a confident software engineer, follow Grace's inspiring journey through our Vocalis program.",
        author: "Grace Ho",
        date: "February 15, 2025",
        category: "Alumni",
        image: "bg-yellow-100",
    },
]

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-gray-50/50">
            <Header />

            {/* Hero Section */}
            <div className="bg-primary/5 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 mb-6">Latest Updates</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Stories of impact, community updates, and insights from the Vocalis team.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.id}`} className="block h-full">
                            <article className="h-full bg-white rounded-2xl shadow-sm border border-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:z-10 hover:shadow-[0_10px_40px_-10px_rgba(72,255,145,0.6)] group relative">
                                <div className={`h-48 ${post.image} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider text-foreground">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <User className="w-4 h-4" />
                                            {post.author}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-muted-foreground mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <span className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all">
                                        Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                    </span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    )
}
