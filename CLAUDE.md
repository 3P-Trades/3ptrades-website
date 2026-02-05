# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Tech Stack

- **Next.js 16** with App Router and React Server Components
- **React 19** with React Compiler enabled (`reactCompiler: true` in next.config.ts)
- **TypeScript 5** with strict mode
- **Tailwind CSS 4** with PostCSS
- **shadcn/ui** (New York style, neutral base) - components in `components/ui/`
- **Radix UI** primitives for accessible components
- **Resend** for email delivery (contact form)

## Architecture

### App Router Structure
- `app/layout.tsx` - Root layout with Geist fonts, Navbar, and Footer
- `app/page.tsx` - Home page
- `app/about/page.tsx`, `app/services/page.tsx`, `app/contact/page.tsx`, `app/careers/page.tsx` - Static pages
- `app/careers/[id]/page.tsx` - Dynamic job detail page
- `app/api/contact/route.ts` - Contact form API endpoint with rate limiting, bot protection, and email notification

### Component Organization
- `components/ui/` - shadcn/ui components (Button, Card, Input, Label, Textarea, NavigationMenu)
- `components/navbar.tsx` - Client component with mobile menu state
- `components/footer.tsx` - Server component
- `components/contact-form.tsx` - Client component with form validation

### Utilities
- `lib/utils.ts` - `cn()` function for merging Tailwind classes (clsx + tailwind-merge)

### Path Aliases
Use `@/*` for imports from project root (configured in tsconfig.json).

## Adding shadcn/ui Components

```bash
npx shadcn@latest add <component-name>
```

Components are configured in `components.json` with New York style and CSS variables.

## Environment Variables

Copy `.env.example` to `.env.local`:
- `RESEND_API_KEY` - Required for contact form email notifications
- `NOTIFICATION_EMAIL` - Email address receiving contact form submissions
