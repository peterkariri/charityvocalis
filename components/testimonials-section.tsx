"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useCallback } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "Education Donor",
            image: "/placeholder.svg",
            quote: "Vocalis has completely transformed how I view charitable giving. Seeing the direct impact on these girls' lives is incredibly rewarding.",
            rating: 5,
        },
        {
            name: "David Kimani",
            role: "High School Principal",
            image: "/placeholder.svg",
            quote: "The mentorship programs provided by Vocalis have boosted the confidence and academic performance of our students significantly.",
            rating: 5,
        },
        {
            name: "Dr. Elena Rodriguez",
            role: "Volunteer Mentor",
            image: "/placeholder.svg",
            quote: "Being a mentor with Vocalis is one of the most fulfilling experiences of my career. These future leaders inspire me every day.",
            rating: 5,
        },
        {
            name: "Grace Omondi",
            role: "Alumni & Engineer",
            image: "/placeholder.svg",
            quote: "Vocalis gave me the scholarship I needed to finish school. Today I am a software engineer giving back to my community.",
            rating: 5,
        },
    ]

    return (
        <section className="py-24 bg-muted/20 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
                        <span className="text-sm font-bold text-secondary uppercase tracking-wider">Testimonials</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance font-heading">
                        What Our Community <span className="text-primary">Says</span>
                    </h2>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 min-w-0">
                                    <div className="h-full p-2">
                                        <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden bg-white">
                                            <CardContent className="p-8 flex flex-col h-full relative">
                                                <Quote className="w-12 h-12 text-primary/10 absolute top-6 right-6" />

                                                <div className="flex gap-1 mb-6">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                                                    ))}
                                                </div>

                                                <p className="text-gray-600 mb-8 flex-grow font-body text-lg italic relative z-10">
                                                    "{testimonial.quote}"
                                                </p>

                                                <div className="flex items-center gap-4 mt-auto">
                                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                                                        {testimonial.name[0]}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-[#1A1A1A] font-heading">{testimonial.name}</h4>
                                                        <p className="text-sm text-primary font-body">{testimonial.role}</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-4 mt-12">
                        <Button
                            onClick={scrollPrev}
                            variant="outline"
                            size="icon"
                            className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <Button
                            onClick={scrollNext}
                            variant="outline"
                            size="icon"
                            className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
