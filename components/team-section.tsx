import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter } from "lucide-react"
import { teamMembers } from "@/lib/team-data"
import Image from "next/image"

export function TeamSection() {
    return (
        <section className="py-20 bg-gray-50/50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                        <span className="text-sm font-semibold text-primary">Our Team</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                        Meet the Change Makers
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        The dedicated individuals working tirelessly to empower girls and transform communities across Kenya.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <Card
                            key={member.id}
                            className="group border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white rounded-2xl"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    <a href={member.linkedin} className="bg-white/90 p-2 rounded-full hover:bg-white text-primary transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href={member.twitter} className="bg-white/90 p-2 rounded-full hover:bg-white text-primary transition-colors">
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <CardContent className="p-6 text-center">
                                <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                                <p className="text-muted-foreground text-sm line-clamp-3">
                                    {member.bio}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
