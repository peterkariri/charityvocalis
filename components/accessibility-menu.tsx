"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"
import { Eye, Sun, Moon, Type, Monitor } from "lucide-react"

export function AccessibilityMenu() {
    const [fontSize, setFontSize] = useState(100)
    const [highContrast, setHighContrast] = useState(false)
    const [grayscale, setGrayscale] = useState(false)

    useEffect(() => {
        // Apply font size
        document.documentElement.style.fontSize = `${fontSize}%`

        // Apply High Contrast
        if (highContrast) {
            document.documentElement.classList.add("high-contrast")
        } else {
            document.documentElement.classList.remove("high-contrast")
        }

        // Apply Grayscale
        if (grayscale) {
            document.documentElement.style.filter = "grayscale(100%)"
        } else {
            document.documentElement.style.filter = "none"
        }
    }, [fontSize, highContrast, grayscale])

    const increaseFont = () => setFontSize(prev => Math.min(prev + 10, 150))
    const decreaseFont = () => setFontSize(prev => Math.max(prev - 10, 90))
    const resetFont = () => setFontSize(100)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-white hover:text-secondary hover:bg-white/10" aria-label="Accessibility Tools">
                    <Eye className="w-4 h-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-white text-[#1A1A1A]">
                <DropdownMenuLabel>Accessibility Tools</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <div className="p-2">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium flex items-center gap-2">
                            <Type className="w-4 h-4" /> Text Size
                        </span>
                        <span className="text-xs text-muted-foreground">{fontSize}%</span>
                    </div>
                    <div className="flex gap-1">
                        <Button size="sm" variant="outline" className="flex-1" onClick={decreaseFont} disabled={fontSize <= 90}>A-</Button>
                        <Button size="sm" variant="outline" className="flex-1" onClick={resetFont}>Reset</Button>
                        <Button size="sm" variant="outline" className="flex-1" onClick={increaseFont} disabled={fontSize >= 150}>A+</Button>
                    </div>
                </div>

                <DropdownMenuSeparator />

                <DropdownMenuCheckboxItem
                    checked={highContrast}
                    onCheckedChange={setHighContrast}
                    className="cursor-pointer"
                >
                    <Sun className="w-4 h-4 mr-2" />
                    High Contrast
                </DropdownMenuCheckboxItem>

                <DropdownMenuCheckboxItem
                    checked={grayscale}
                    onCheckedChange={setGrayscale}
                    className="cursor-pointer"
                >
                    <Monitor className="w-4 h-4 mr-2" />
                    Grayscale Mode
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
