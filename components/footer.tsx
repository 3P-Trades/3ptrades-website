import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#generative-ai", label: "Generative AI Integration" },
    { href: "/services#web-engineering", label: "Full-Stack Web Engineering" },
    { href: "/services#saas-platforms", label: "Enterprise SaaS Platforms" },
    { href: "/services#mobile-apps", label: "Mobile App Development" },
    { href: "/services#data-intelligence", label: "Data Intelligence" },
    { href: "/services#cloud-migration", label: "Cloud Migration" },
  ],
}

const locations = [
  {
    type: "HQ",
    city: "Round Rock, TX",
    address: "1050 Kenney Fort Xing Unit 22, Round Rock, TX 78665",
    email: "info@3ptrades.com",
  },
  {
    type: "Regional",
    city: "Kathmandu, Nepal",
    email: "ktm@3ptrades.com",
  },
  {
    type: "Regional",
    city: "Pokhara, Nepal",
    email: "ktm@3ptrades.com",
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center space-x-2">
              <Image
                src="/logo-small.png"
                alt="3P Trades Logo"
                width={50}
                height={50}
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                3P Trades
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              A software development company with an AI-first approach.
              We build intelligent solutions that drive business growth.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-semibold mb-4">Locations</h3>
            <ul className="space-y-4">
              {locations.map((location) => (
                <li key={location.city} className="text-sm">
                  <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-blue-500/10 text-blue-500 mb-1">
                    {location.type}
                  </span>
                  <p className="text-muted-foreground">{location.city}</p>
                  <a
                    href={`mailto:${location.email}`}
                    className="text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    {location.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 3P Trades. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
