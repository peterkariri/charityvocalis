"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export function StoriesSection() {
  const stories = [
    {
      name: "Sarah Wambui",
      school: "Nairobi Girls High School",
      image: "/young-african-teenage-girl-student-portrait-hopefu.jpg",
      quote:
        "Vocalis gave me the confidence to speak up in class and dream bigger. My mentor helped me realize I could become an engineer. Now I'm top of my science class!",
      achievement: "Won National Science Competition 2024",
    },
    {
      name: "Mary Akinyi",
      school: "Kisumu Academy for Girls",
      image: "/african-teenage-girl-student-uniform-smiling-confi.jpg",
      quote:
        "Before Vocalis, I was too shy to even answer questions in class. The Speak Out sessions changed everything. I recently led my school's debate team to victory!",
      achievement: "School Debate Team Captain",
    },
    {
      name: "Esther Chebet",
      school: "Eldoret Girls Secondary",
      image: "/african-teenage-girl-graduate-happy-celebration.jpg",
      quote:
        "Thanks to the scholarship from Vocalis, I could continue my education. My mentor, a lawyer, inspired me to pursue law. I'm now preparing for university entrance exams.",
      achievement: "Scholarship Recipient 2023",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length)
  }

  return (
    <section id="stories" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Voices of <span className="text-primary">Change</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real stories from real girls whose lives have been transformed through our programs.
          </p>
        </div>

        {/* Featured Story */}
        <div className="max-w-5xl mx-auto">
          <Card className="bg-white rounded-3xl overflow-hidden shadow-xl border-none">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={stories[currentIndex].image || "/placeholder.svg"}
                    alt={stories[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 w-14 h-14 bg-secondary rounded-full flex items-center justify-center">
                    <Quote className="w-7 h-7 text-secondary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <blockquote className="text-lg lg:text-xl text-foreground mb-6 leading-relaxed">
                    &ldquo;{stories[currentIndex].quote}&rdquo;
                  </blockquote>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground">{stories[currentIndex].name}</h3>
                    <p className="text-primary font-medium">{stories[currentIndex].school}</p>
                    <div className="mt-2 inline-flex items-center gap-2 bg-secondary/30 px-3 py-1 rounded-full">
                      <span className="text-sm font-medium">{stories[currentIndex].achievement}</span>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={prevStory}
                      className="w-12 h-12 border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors"
                      aria-label="Previous story"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex gap-2">
                      {stories.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentIndex ? "bg-primary" : "bg-border"
                          }`}
                          aria-label={`Go to story ${index + 1}`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={nextStory}
                      className="w-12 h-12 border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors"
                      aria-label="Next story"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8">
            Read More Stories
          </Button>
        </div>
      </div>
    </section>
  )
}
