"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, BarChart3, User, Settings, LogOut, ArrowLeft, Heart } from "lucide-react"

export function DashboardSidebar() {
    const pathname = usePathname()

    const sidebarItems = [
        { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
        { name: "Analytics", href: "/dashboard/analysis", icon: BarChart3 },
        { name: "Profile", href: "/dashboard/profile", icon: User },
        // { name: "Settings", href: "/dashboard/settings", icon: Settings },
    ]

    return (
        <div className="pb-12 w-64 border-r min-h-screen bg-card flex flex-col">
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <Link href="/" className="flex items-center pl-3 mb-9">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-2 shadow-lg">
                            <Heart className="w-4 h-4 text-white" fill="currentColor" />
                        </div>
                        <h2 className="text-xl font-bold tracking-tight text-primary">Vocalis</h2>
                    </Link>
                    <div className="space-y-1">
                        {sidebarItems.map((item) => (
                            <Button
                                key={item.href}
                                variant={pathname === item.href ? "secondary" : "ghost"}
                                className={cn(
                                    "w-full justify-start",
                                    pathname === item.href && "font-bold"
                                )}
                                asChild
                            >
                                <Link href={item.href}>
                                    <item.icon className="mr-2 h-4 w-4" />
                                    {item.name}
                                </Link>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-auto px-3 py-4">
                <Button variant="outline" className="w-full justify-start text-muted-foreground" asChild>
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
            </div>
        </div>
    )
}
