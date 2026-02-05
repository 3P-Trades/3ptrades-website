import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  services: [
    { href: "/services#generative-ai", label: "Generative AI" },
    { href: "/services#web-engineering", label: "Web Engineering" },
    { href: "/services#saas-platforms", label: "SaaS Platforms" },
    { href: "/services#mobile-apps", label: "Mobile Apps" },
    { href: "/services#data-intelligence", label: "Data Intelligence" },
    { href: "/services#cloud-migration", label: "Cloud Migration" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
}

const locations = [
  {
    type: "HQ",
    city: "Round Rock, TX",
    country: "United States",
    email: "info@3ptrades.com",
  },
  {
    type: "Regional",
    city: "Kathmandu",
    country: "Nepal",
    email: "ktm@3ptrades.com",
  },
  {
    type: "Regional",
    city: "Pokhara",
    country: "Nepal",
    email: "pkr@3ptrades.com",
  },
]

export function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image
                src="/logo-small.png"
                alt="3P Trades Logo"
                width={50}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight">
                  3P Trades
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
                  Software Studio
                </span>
              </div>
            </Link>
            <p className="text-stone-400 mb-8 max-w-sm leading-relaxed">
              A software development studio with an AI-first approach.
              We build intelligent solutions that drive business growth.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 flex items-center justify-center hover:bg-amber-500 hover:text-stone-900 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 flex items-center justify-center hover:bg-amber-500 hover:text-stone-900 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 flex items-center justify-center hover:bg-amber-500 hover:text-stone-900 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div className="lg:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-stone-500 mb-6">Locations</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              {locations.map((location) => (
                <div key={location.city}>
                  <span className={`inline-block px-2 py-0.5 text-[10px] uppercase tracking-wider font-medium mb-2 ${
                    location.type === "HQ"
                      ? "bg-amber-500 text-stone-900"
                      : "bg-stone-800 text-stone-400"
                  }`}>
                    {location.type}
                  </span>
                  <p className="text-white font-medium">{location.city}</p>
                  <p className="text-stone-500 text-sm mb-1">{location.country}</p>
                  <a
                    href={`mailto:${location.email}`}
                    className="text-amber-500 hover:text-amber-400 text-sm transition-colors"
                  >
                    {location.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm">
              &copy; {new Date().getFullYear()} 3P Trades. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-stone-500">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
