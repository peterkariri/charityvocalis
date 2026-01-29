"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart, Search, ShoppingBag, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, LogOut, LayoutDashboard, User as UserIcon } from "lucide-react"
import { AccessibilityMenu } from "@/components/accessibility-menu"
import { LanguageSwitcher } from "@/components/language-switcher"
import { AIAssistant } from "@/components/ai-assistant"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout, isAuthenticated } = useAuth()
  const router = useRouter()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Mentors", href: "/mentors" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const handleDonateClick = () => {
    if (isAuthenticated) {
      router.push("/donate")
    } else {
      router.push("/login")
    }
  }

  const UserMenu = () => {
    if (!user) return (
      <Link href="/login">
        <Button variant="ghost" className="font-bold text-[#1A1A1A] hover:bg-gray-100">
          Login
        </Button>
      </Link>
    )

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full overflow-hidden border border-gray-200">
            <img src={user.avatar || "/placeholder-user.jpg"} alt={user.name} className="h-full w-full object-cover" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => router.push("/dashboard")}>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/dashboard/analysis")}>
            <UserIcon className="mr-2 h-4 w-4" />
            <span>Analysis</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={logout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <header className="w-full relative z-50">
      {/* Top Bar */}
      <div className="bg-[#111111] text-white py-3 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm font-body">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-white/80 hover:text-secondary transition-colors cursor-pointer">
              <Mail className="w-4 h-4 text-secondary" />
              hello@vocalis.org
            </span>
            <span className="flex items-center gap-2 text-white/80 hover:text-secondary transition-colors cursor-pointer">
              <Phone className="w-4 h-4 text-secondary" />
              +254 700 123 456
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border-r border-white/10 pr-4">
              <LanguageSwitcher />
              <AccessibilityMenu />
            </div>
            <span className="text-white/80">Follow Us:</span>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="hover:text-secondary transition-colors">
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white sticky top-0 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300">
                <Heart className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="text-2xl font-heading font-bold text-[#1A1A1A]">
                Vocalis
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 font-body font-bold text-[#1A1A1A]">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-secondary transition-colors relative group py-2"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <AIAssistant />
              <button className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all duration-300">
                <Search className="w-5 h-5" />
              </button>

              <UserMenu />

              <Button onClick={handleDonateClick} className="bg-secondary hover:bg-[#e69b00] text-white font-bold rounded-full px-8 h-12 shadow-lg hover:shadow-secondary/25 transition-all duration-300">
                Donate Now
                <Heart className="w-4 h-4 ml-2 fill-current" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-8 h-8 text-primary" /> : <Menu className="w-8 h-8 text-primary" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-gray-100 animate-in slide-in-from-top-5 fade-in duration-200">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[#1A1A1A] hover:text-secondary font-bold p-2 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <hr className="my-2 border-gray-100" />
                <div className="flex flex-col gap-4">
                  <UserMenu />
                  <Button onClick={handleDonateClick} className="w-full bg-secondary text-white font-bold rounded-full h-12">
                    Donate Now
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
