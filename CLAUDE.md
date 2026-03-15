# Novare Talent Landing Page — Project Reference

## Quick Start
```bash
npm run dev    # http://localhost:3001
npm run build  # Static export to /out
```

## Tech Stack
- **Next.js 16.1.6** (App Router, static export)
- **React 19.2.4** + TypeScript 5.9.3
- **Tailwind CSS 4.2.1** (via @tailwindcss/postcss)
- **Framer Motion 12.36** (animations, springs, scroll-linked)
- **Three.js r183** (3D WebGL grid in Hero)
- **Embla Carousel 8.6** (testimonials)
- **Lucide React** (icons)
- **clsx + tailwind-merge** → `cn()` utility

## Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-primary` | `#030014` | Deep purple-black background |
| `--color-bg-secondary` | `#0a0a0f` | Slightly lighter bg |
| `--color-violet-accent` | `#7C3AED` | Primary accent (rgb 124,58,237) |
| `--color-indigo-accent` | `#4F46E5` | Secondary accent (rgb 79,70,229) |
| `--color-lavender` | `#C4B5FD` | Light accent text |
| `--color-text-primary` | `#F8FAFC` | Main text |
| `--color-text-secondary` | `#94A3B8` | Subdued text |
| `--color-text-muted` | `#64748B` | Muted text |
| `--color-glass-bg` | `rgba(15,15,30,0.6)` | Glass card fill |
| `--color-glass-border` | `rgba(124,58,237,0.15)` | Glass card border |

## Fonts
- **Inter** (sans) → `--font-inter` / `var(--font-sans)`
- **Playfair Display** (serif, italic) → `--font-playfair` / `var(--font-serif)`

## File Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, Providers, grain overlay)
│   ├── page.tsx            # Composes all sections in order
│   └── globals.css         # Theme vars, glass/glow/marquee/aurora CSS
├── components/
│   ├── effects/
│   │   ├── AuroraMesh.tsx      # 4 parallax gradient blobs (cursor-reactive)
│   │   ├── GlowOrb.tsx         # Parallax glowing orb (spring physics)
│   │   ├── ParticleCanvas.tsx   # Canvas 2D particle system (cursor-reactive)
│   │   ├── ScrollReveal.tsx     # Scroll-triggered animations (fade-up/in/scale)
    │   │   └── ThreeGrid.tsx       # Three.js 3D wireframe grid (Hero background)
│   ├── layout/
│   │   ├── Navbar.tsx           # Sticky nav, mobile menu, scroll blur
│   │   └── Footer.tsx           # 4-col footer, socials, legal
│   ├── providers/
│   │   └── Providers.tsx        # Client wrapper for MousePositionProvider
│   ├── sections/
│   │   ├── Hero.tsx             # "We find the 1%" + stats + marquee
│   │   ├── SocialProofBar.tsx   # Logo marquee (SINE, IITBAA)
│   │   ├── WhyTheOnePercent.tsx # Dot elimination + stats (scroll-linked)
│   │   ├── HowItWorks.tsx       # 2×2 glass feature cards
│   │   ├── NovareStandard.tsx   # 3-step eval pipeline + video
│   │   ├── Zenhyre.tsx          # Recruiter/Student dual cards
│   │   ├── Testimonials.tsx     # Embla carousel (clients + students)
│   │   ├── Team.tsx             # 4-member grid
│   │   ├── FAQs.tsx             # Accordion (6 items)
│   │   └── FinalCTA.tsx         # "Ready to hire" + dual CTAs
│   └── ui/
│       ├── AnimatedCounter.tsx  # Count-up on scroll
│       ├── Button.tsx           # Primary/secondary pill button
│       ├── GlassCard.tsx        # Glassmorphism wrapper
│       ├── Marquee.tsx          # Infinite horizontal scroll
│       └── SectionHeader.tsx    # Tag + title + accent + description
├── hooks/
│   └── useMousePosition.tsx # Global cursor context (normalized, smoothed, touch fallback)
└── lib/
    ├── constants.ts         # All content data (nav, stats, testimonials, team, FAQs)
    └── utils.ts             # cn() = clsx + tailwind-merge
```

## Page Section Order (page.tsx)
1. Navbar → 2. Hero → 3. SocialProofBar → 4. WhyTheOnePercent → 5. HowItWorks → 6. NovareStandard → 7. Zenhyre → 8. Testimonials → 9. Team → 10. FAQs → 11. FinalCTA → 12. Footer

## Key Patterns

### Mouse Position System
`useMousePosition()` → returns `{ nx, ny, x, y, isTouch }` (normalized [-1,1], smoothed via lerp 0.07)
`useMousePositionRef()` → ref version for canvas/rAF (no re-renders)
Provider wraps app in `layout.tsx` via `Providers.tsx`

### Animation Patterns
- **ScrollReveal**: `<ScrollReveal variant="fade-up" delay={0.2}>` — wraps any content
- **StaggerContainer/StaggerItem**: For grid reveals
- **Scroll-linked**: `useScroll({ target })` + `useTransform` for progress-based animations
- **Springs**: `useSpring(value, { damping, stiffness, mass })` for cursor-following

### Three.js 3D Grid (ThreeGrid.tsx — Hero background)
- WebGLRenderer with `alpha: true`, transparent canvas overlay
- PerspectiveCamera at (0,8,14) looking at (0,0,2), FOV 55°
- PlaneGeometry(48, 33.6, 40, 28) rotated to XZ plane = 1189 vertices
- MeshBasicMaterial wireframe + Points ShaderMaterial for vertex dots
- Cursor interaction via Raycaster → invisible plane intersection
- Vertex displacement: ambient sine wave + cursor rise (quadratic falloff) + ripple rings
- Smooth lerp (0.06) for all height changes
- Per-vertex colors: brighter near cursor (VIOLET → BRIGHT_VIOLET)
- PointLight follows cursor for glow effect
- FogExp2 for depth fade
- Uses `performance.now()` for timing (not deprecated THREE.Clock)
- Colors: `#8b5cf6` (violet), `#ddd6fe` (bright violet), `#030014` (bg)

### CSS Utilities (globals.css)
- `.glass` — backdrop blur card
- `.glass-hover` — hover glow effect
- `.gradient-text` — violet→indigo text gradient
- `.glow-button` — CTA with blur glow pseudo-element
- `.section-padding` — responsive max-width padding
- `.grain-overlay` — SVG noise texture overlay
- `.animate-aurora-drift-{1-4}` — autonomous blob drift keyframes

## Background Effects Distribution
| Section | Background Effects |
|---------|-------------------|
| Hero | ThreeGrid (3D wireframe) + 2× GlowOrb (parallax) |
| HowItWorks | ParticleCanvas (opacity 0.3) + GlowOrb (parallax) |
| NovareStandard | GlowOrb (parallax, inverted) |
| Zenhyre | AuroraMesh (intensity 0.5) + GlowOrb (parallax) |
| Testimonials | AuroraMesh (intensity 0.4, opacity 0.5) |
| Team | GlowOrb (parallax, inverted) |
| FinalCTA | AuroraMesh + 2× GlowOrb (parallax) |

## Public Assets
- `images/`: logo.jpg, nt-logo.jpg, sine-logo.jpg, iitbaa-logo.jpg
- `videos/`: hero.mp4, eval.mp4 (NovareStandard), product-flow.mp4

## Content Data (constants.ts)
- `NAV_LINKS` (5), `STATS` (4), `ROLE_TICKER` (12 roles)
- `FEATURES` (4 with icon names), `EVALUATION_STEPS` (3)
- `CLIENT_TESTIMONIALS` (4), `STUDENT_TESTIMONIALS` (5)
- `TEAM_MEMBERS` (4), `FAQS` (6), `FOOTER_LINKS`, `SOCIAL_LINKS`, `CONTACT`

## Config
- **next.config.ts**: `output: "export"`, `images: { unoptimized: true }`
- **Dev port**: 3001 (set in package.json + .claude/launch.json)
- **Path alias**: `@/*` → `./src/*`
