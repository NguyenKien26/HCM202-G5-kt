"use client"

import type React from "react"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

type NavItem = {
  label: string
  href: string
  type: "anchor" | "route"
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()

  const navItems: NavItem[] = [
    { label: "Lý thuyết", href: "#theory", type: "anchor" },
    { label: "Giải thích", href: "#explanation", type: "anchor" },
    { label: "Phân tích", href: "#analysis", type: "anchor" },
    { label: "Kết luận", href: "#conclusion", type: "anchor" },
    { label: "Game", href: "/game", type: "route" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (item.type === "anchor") {
      e.preventDefault()

      if (pathname === "/") {
        const element = document.querySelector(item.href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        window.location.href = "/" + item.href
      }

      setIsOpen(false)
      return
    }

    // Route navigation
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Star className="h-6 w-6 text-primary fill-primary" />
            <span className="font-bold text-foreground">Tư tưởng HCM</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
