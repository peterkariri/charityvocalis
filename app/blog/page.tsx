import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
    {
        id: 1,
        title: "Breaking Barriers: Girls in STEM",
        excerpt: "How our latest coding bootcamp is empowering young girls in rural Kenya to embrace technology and build future-proof skills.",
        author: "Amina Ochieng",
        date: "March 15, 2025",
        category: "Education",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Dignity Kits: Promoting Hygiene & Confidence",
        excerpt: "Our Sanitary Towels Drive has distributed over 10,000 kits, ensuring that menstruation never keeps a girl out of class.",
        author: "Dr. Wanjiku Mwangi",
        date: "March 10, 2025",
        category: "Humanitarian",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "The Ripple Effect of Educating a Girl",
        excerpt: "An in-depth look at how supporting one girl's education transforms her entire family and community for generations.",
        author: "Grace Kimani",
        date: "March 5, 2025",
        category: "Empowerment",
        image: "https://images.unsplash.com/photo-1427504746696-ea5abd7dfe8b?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Community Resilience During Drought",
        excerpt: "How our relief efforts are providing essential food and water security to vulnerable families in arid regions.",
        author: "Community Team",
        date: "February 28, 2025",
        category: "Humanitarian",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 5,
        title: "Voices of the Future: Student Stories",
        excerpt: "Hear directly from the scholarship recipients whose dreams are becoming reality thanks to your support.",
        author: "Faith Njeri",
        date: "February 20, 2025",
        category: "Stories",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 6,
        title: "Mental Health: A Priority for Young Women",
        excerpt: "Introducing our new wellness counseling sessions designed to help girls navigate adolescence with mental resilience.",
        author: "Wellness Team",
        date: "February 15, 2025",
        category: "Health",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
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
                            <article className="h-full bg-white rounded-2xl shadow-sm border border-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:z-10 hover:shadow-[0_10px_40px_-10px_rgba(72,255,145,0.6)] group relative flex flex-col">
                                <div className="h-48 relative overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider text-foreground shadow-md">
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
