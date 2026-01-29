"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollAnimationProps {
    children: React.ReactNode
    className?: string
    animation?: "fade-in" | "slide-up" | "slide-left" | "slide-right" | "zoom-in"
    delay?: number
    duration?: number
}

export function ScrollAnimation({
    children,
    className,
    animation = "slide-up",
    delay = 0,
    duration = 500,
}: ScrollAnimationProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            {
                threshold: 0.1,
                rootMargin: "50px",
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [])

    const getAnimationClass = () => {
        switch (animation) {
            case "fade-in":
                return "animate-in fade-in zoom-in-95"
            case "slide-up":
                return "animate-in fade-in slide-in-from-bottom-10"
            case "slide-left":
                return "animate-in fade-in slide-in-from-right-10"
            case "slide-right":
                return "animate-in fade-in slide-in-from-left-10"
            case "zoom-in":
                return "animate-in fade-in zoom-in-90"
            default:
                return "animate-in fade-in slide-in-from-bottom-10"
        }
    }

    return (
        <div
            ref={ref}
            className={cn(
                "transition-all ease-out",
                isVisible ? "opacity-100" : "opacity-0 translate-y-4",
                isVisible && getAnimationClass(),
                className
            )}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
                animationDuration: `${duration}ms`,
                animationDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    )
}
