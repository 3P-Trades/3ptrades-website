"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-[#FAFAF8]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FAFAF8]/80">
      <nav className="container mx-auto flex h-18 items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo-small.png"
            alt="3P Trades Logo"
            width={50}
            height={50}
            className="h-10 w-auto transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-stone-900">
              3P Trades
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-medium">
              Software Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-teal-600"
                  : "text-stone-600 hover:text-stone-900"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-teal-500" />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-5 py-2.5 text-sm font-medium hover:bg-stone-800 transition-colors"
          >
            Start a Project
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={cn(
              "w-full h-0.5 bg-stone-900 transition-all duration-300 origin-center",
              isMobileMenuOpen && "rotate-45 translate-y-2"
            )} />
            <span className={cn(
              "w-full h-0.5 bg-stone-900 transition-all duration-300",
              isMobileMenuOpen && "opacity-0"
            )} />
            <span className={cn(
              "w-full h-0.5 bg-stone-900 transition-all duration-300 origin-center",
              isMobileMenuOpen && "-rotate-45 -translate-y-2"
            )} />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden border-t border-stone-200 bg-[#FAFAF8] overflow-hidden transition-all duration-300",
        isMobileMenuOpen ? "max-h-96" : "max-h-0"
      )}>
        <div className="container mx-auto px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "block py-3 text-base font-medium border-l-2 pl-4 transition-colors",
                pathname === link.href
                  ? "border-teal-500 text-stone-900 bg-teal-50/50"
                  : "border-transparent text-stone-600 hover:text-stone-900 hover:border-stone-300"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block mt-4 bg-stone-900 text-stone-50 px-4 py-3 text-center font-medium"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </header>
  )
}
