"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
    const [language, setLanguage] = useState("English")

    const languages = [
        { name: "English", code: "EN", flag: "🇺🇸" },
        { name: "Kiswahili", code: "SW", flag: "🇰🇪" },
        { name: "Français", code: "FR", flag: "🇫🇷" },
    ]

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:text-secondary hover:bg-white/10 gap-2 px-2" aria-label="Select Language">
                    <Globe className="w-4 h-4" />
                    <span className="hidden sm:inline">{language}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white text-[#1A1A1A]">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => setLanguage(lang.name)}
                        className="cursor-pointer gap-2"
                    >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
