"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Bot, Send, X, Sparkles, MessageSquare } from "lucide-react"

export function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Hello! I'm Vocalis AI. How can I help you today? You can ask me about our programs, how to donate, or mentorship opportunities." }
    ])
    const [input, setInput] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    // Auto-scroll to bottom of chat
    useEffect(() => {
        if (scrollRef.current) {
            // Find the viewport inside ScrollArea to scroll
            const viewport = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
            if (viewport) {
                viewport.scrollTop = viewport.scrollHeight;
            }
        }
    }, [messages, isTyping, isOpen])

    const handleSend = async () => {
        if (!input.trim()) return

        const userMessage = { role: "user", content: input }
        setMessages(prev => [...prev, userMessage])
        setInput("")
        setIsTyping(true)

        // Simulate AI response delay
        setTimeout(() => {
            const response = generateResponse(input)
            setMessages(prev => [...prev, { role: "assistant", content: response }])
            setIsTyping(false)
        }, 1500)
    }

    const generateResponse = (query: string) => {
        const q = query.toLowerCase()
        if (q.includes("donate") || q.includes("money") || q.includes("give")) {
            return "You can donate by clicking the 'Donate' button in the header. We accept M-Pesa, Card, and PayPal. 100% of donations go directly to funding our programs."
        }
        if (q.includes("mentor") || q.includes("join") || q.includes("volunteer")) {
            return "We'd love to have you as a mentor! Mentors guide high school girls in career choices and personal growth. Please visit the Mentors page or fill out the contact form to apply."
        }
        if (q.includes("program") || q.includes("what do you do") || q.includes("activities")) {
            return "We offer three main programs: 'Speak Out' sessions for building confidence, a Mentorship Program connecting girls with professionals, and Educational Scholarships for those in need."
        }
        if (q.includes("scholarship") || q.includes("fees") || q.includes("school")) {
            return "Our scholarship program covers school fees and supplies for underprivileged girls who show academic promise. You can sponsor a student specifically via our Programs page."
        }
        if (q.includes("impact") || q.includes("result") || q.includes("history")) {
            return "Since our founding, we've helped over 5,000 girls in 50+ schools across Kenya. We've seen a 40% increase in university enrollment among our participants."
        }
        if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("where")) {
            return "You can reach us at hello@vocalis.org or +254 700 123 456. Our main office is located in Nairobi, Kenya."
        }
        if (q.includes("login") || q.includes("sign up") || q.includes("register") || q.includes("account")) {
            return "You can sign up or log in to access your personalized dashboard, track your donations, and see the impact of your contributions in real-time."
        }
        return "That's a great question! I'm constantly learning about Vocalis. For detailed inquiries, please visit our Contact page or email us directly at hello@vocalis.org."
    }

    return (
        <>
            {/* Trigger Button - Intended to be placed in Header */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className={`rounded-full gap-2 transition-all duration-300 ${isOpen ? 'bg-primary text-white' : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'}`}
            >
                <Sparkles className="w-4 h-4" />
                <span className="hidden lg:inline">AI Assistant</span>
            </Button>

            {/* Chat Window */}
            {isOpen && (
                <Card className="fixed bottom-4 right-4 w-[350px] md:w-[400px] h-[500px] shadow-2xl z-50 animate-in slide-in-from-bottom-5 fade-in duration-300 border-none flex flex-col overflow-hidden bg-white/95 backdrop-blur-sm">
                    <CardHeader className="bg-primary text-white p-4 flex flex-row items-center justify-between space-y-0">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                <Bot className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <CardTitle className="text-base">Vocalis Assistant</CardTitle>
                                <p className="text-xs text-white/80 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                    Online
                                </p>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full h-8 w-8" onClick={() => setIsOpen(false)}>
                            <X className="w-4 h-4" />
                        </Button>
                    </CardHeader>

                    <CardContent className="p-0 flex-1 overflow-hidden relative">
                        <ScrollArea className="h-full p-4" ref={scrollRef}>
                            <div className="flex flex-col gap-4">
                                {messages.map((msg, i) => (
                                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                                            ? 'bg-secondary text-white rounded-br-sm'
                                            : 'bg-muted text-foreground rounded-bl-sm'
                                            }`}>
                                            {msg.content}
                                        </div>
                                    </div>
                                ))}

                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className="bg-muted p-3 rounded-2xl rounded-bl-sm flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </ScrollArea>
                    </CardContent>

                    <CardFooter className="p-3 bg-white border-t">
                        <form
                            className="flex w-full gap-2"
                            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                        >
                            <Input
                                placeholder="Type your message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="rounded-full bg-gray-50 border-gray-200 focus-visible:ring-primary"
                            />
                            <Button type="submit" size="icon" className="rounded-full bg-primary hover:bg-primary/90 shrink-0">
                                <Send className="w-4 h-4" />
                            </Button>
                        </form>
                    </CardFooter>
                </Card>
            )}
        </>
    )
}
