# DESIGN.md — Velai Website

> Design system reference for AI coding agents.
> Stack: Next.js 15 · Tailwind CSS v4 · CSS custom properties via `@theme`

---

## 1. Visual Theme & Atmosphere

**Product**: Velai — inventory management SaaS for artisan makers (candles, soaps, fragrances).

**Audience**: Creative entrepreneurs, non-technical, mobile-first users who value simplicity and warmth.

**Design language**: "Oceano" — a dark-navy and cyan palette evoking clarity, depth, and calm confidence. Not corporate. Not cold. Professional enough to trust, warm enough to feel human.

**Mood**: Premium but approachable. Clean but not sterile. Artisan-quality craftsmanship reflected in the UI.

**Density**: Low-to-medium. Generous whitespace. Each section breathes. No information overload.

**Motion philosophy**: Subtle and purposeful. Transitions reinforce hierarchy, not entertain. Always respect `prefers-reduced-motion`.

---

## 2. Color Palette & Roles

### Primary

| Token | Hex | Role |
|---|---|---|
| `--color-gold` | `#22d3ee` | Primary action — CTAs, active links, highlights |
| `--color-gold-hover` | `#06b6d4` | Hover state of primary elements |
| `--color-gold-dark` | `#0891b2` | Pressed state, dark variant |
| `--color-gold-light` | `#cffafe` | Subtle tints, badge backgrounds |
| `--color-gold-muted` | `rgba(34,211,238,0.12)` | Icon backgrounds, hover surfaces |

### Backgrounds

| Token | Hex | Role |
|---|---|---|
| `--color-navy-dark` | `#071c2e` | Hero sections, dark CTAs, page footer |
| `--color-navy` | `#0d2d45` | Secondary dark sections |
| `--color-navy-mid` | `#163b58` | Cards on dark backgrounds |
| `--color-canvas` | `#f5f7fb` | Alternate light sections |
| `--color-surface` | `#ffffff` | Cards, modals, inputs on light bg |

### Text

| Token | Hex | Role |
|---|---|---|
| `--color-slate-900` | `#202334` | Primary text on light |
| `--color-slate-700` | `#3d4057` | Secondary text on light |
| `--color-slate-500` | `#6b7285` | Labels, captions, supporting text |
| `--color-slate-300` | `#9aa0b4` | Placeholder, disabled, muted |

### Semantic

| Token | Hex | Role |
|---|---|---|
| `--color-success` | `#27c281` | Benefits, confirmations, check icons |
| `--color-warning` | `#ffb020` | Warnings, alerts |
| `--color-danger` | `#f04438` | Errors, destructive actions |

### Borders & Dividers

| Token | Hex | Role |
|---|---|---|
| `--color-divider` | `#dde1ea` | Borders on light surfaces |
| `white/10` | — | Borders on dark surfaces |
| `white/20` | — | Ghost button borders |

---

## 3. Typography Rules

### Font Families

| Variable | Font | Source |
|---|---|---|
| `--font-display` | Bricolage Grotesque | Google Fonts (`font-display` class) |
| `--font-sans` | Inter | Google Fonts (`font-sans` class) |

### Type Scale

| Level | Font | Size | Weight | Line Height | Use |
|---|---|---|---|---|---|
| Hero H1 | Bricolage Grotesque | 56–72px | 700–800 | 1.1 | Hero headline |
| Section H2 | Bricolage Grotesque | 36–48px | 600–700 | 1.2 | Section headings |
| Card H3 | Bricolage Grotesque | 24–30px | 600 | 1.3 | Card titles |
| Large body | Inter | 18–20px | 400 | 1.6 | Hero subheadline, section intro |
| Body | Inter | 16px | 400 | 1.6 | Default body copy |
| Small / label | Inter | 13–14px | 500 | 1.4 | Tags, captions, UI labels |

### Rules
- `font-display` (Bricolage Grotesque) is **the brand voice** — use it for all headings
- Never mix `font-display` and `font-sans` within the same text element
- Headings on dark backgrounds: `text-white`
- Headings on light backgrounds: `text-[var(--color-slate-900)]`
- Body copy: `text-[var(--color-slate-500)]` or `text-[var(--color-slate-700)]`

---

## 4. Component Stylings

### Buttons

**Primary CTA**
```tsx
className="bg-[var(--color-gold)] text-[var(--color-navy-dark)] font-medium
           px-8 py-4 rounded-full hover:bg-[var(--color-gold-hover)]
           transition-all hover:scale-105"
```

**Secondary (outline)**
```tsx
className="border border-[var(--color-gold)] text-[var(--color-gold)]
           px-6 py-3 rounded-full hover:bg-[var(--color-gold-muted)]
           transition-colors"
```

**Ghost (on dark bg)**
```tsx
className="border border-white/20 text-white px-6 py-3 rounded-full
           hover:bg-white/10 transition-colors"
```

### Cards

**Light surface card**
```tsx
className="bg-white border border-[var(--color-divider)] rounded-[var(--radius-lg)]
           p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
```

**Dark surface card**
```tsx
className="bg-[var(--color-navy-mid)] border border-white/10
           rounded-[var(--radius-lg)] p-6"
```

**Feature card (icon + title + description)**
```tsx
// Icon container
className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--color-gold-muted)]
           flex items-center justify-center text-[var(--color-gold)]"

// Title
className="font-display text-xl font-semibold text-[var(--color-slate-900)] mt-4"

// Description
className="font-sans text-[var(--color-slate-500)] mt-2 leading-relaxed"
```

### Badges / Pills

**Primary badge**
```tsx
className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
           border border-[var(--color-gold)]/30 bg-[var(--color-gold-muted)]
           text-[var(--color-gold)] text-xs font-medium tracking-wider uppercase"
```

**Section eyebrow (above H2)**
```tsx
className="text-[var(--color-gold)] font-sans text-sm font-medium
           tracking-widest uppercase"
```

### Section Containers

**Dark hero section**
```tsx
<section className="bg-[var(--color-navy-dark)] relative overflow-hidden">
  {/* Ambient glow */}
  <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
                  rounded-full bg-[var(--color-gold)] opacity-[0.07] blur-[120px]
                  pointer-events-none" />
  <div className="max-w-6xl mx-auto px-6 py-24">
    {/* content */}
  </div>
</section>
```

**Light alternate section**
```tsx
<section className="bg-[var(--color-canvas)]">
  <div className="max-w-6xl mx-auto px-6 py-20">
    {/* content */}
  </div>
</section>
```

### Navigation

```
Logo: left-aligned, `logo-horizontal.svg`
Links: font-sans 15px, text-slate-700, hover:text-slate-900
CTA: Primary button, pill, right-aligned
Mobile: hamburger → full-screen overlay or bottom drawer
Sticky: bg-white/90 backdrop-blur border-b border-divider
```

---

## 5. Layout Principles

### Spacing Scale (Tailwind)

| Scale | px | Use |
|---|---|---|
| `py-16` | 64px | Compact sections |
| `py-20` | 80px | Standard section padding |
| `py-24` | 96px | Hero and CTA sections |
| `py-28` | 112px | Feature flagship sections |
| `gap-6` | 24px | Card grid gap |
| `gap-8` | 32px | Feature grid gap |
| `gap-12` | 48px | Major content blocks |

### Grid

```
Max content width: max-w-6xl (1152px) centered with px-6
Text content: max-w-2xl or max-w-3xl (for readability)
Cards: grid-cols-1 → grid-cols-2 (md) → grid-cols-3 (lg)
Features: grid-cols-1 → grid-cols-2 (md) → grid-cols-4 (lg)
```

### Section Rhythm

Alternate dark and light sections for visual breathing:
```
Hero (dark) → Pain (light) → Solution (dark) → Features (light) → CTA (dark)
```

---

## 6. Depth & Elevation

### On Light Surfaces

```
Level 0: No shadow (flat, bordered)     → border: --color-divider
Level 1: Subtle                         → shadow: 0 2px 8px rgba(0,0,0,0.06)
Level 2: Card hover / modal             → shadow: 0 8px 24px rgba(0,0,0,0.10)
Level 3: Dropdowns / tooltips           → shadow: 0 16px 48px rgba(0,0,0,0.14)
```

### On Dark Surfaces

Never use box-shadows on dark backgrounds. Use ambient **glow** instead:

```tsx
// Ambient glow (background decoration, not on elements)
className="absolute rounded-full bg-[var(--color-gold)]
           opacity-[0.06] blur-[100px] pointer-events-none"

// Subtle element highlight (cards on dark)
className="border border-white/10"
```

---

## 7. Do's and Don'ts

### ✅ Do

- Use `font-display` (Bricolage Grotesque) for ALL headings — it is the brand voice
- Keep one primary CTA per section — never compete for attention
- Use `--color-gold` sparingly — one highlight per section maximum
- Alternate dark/light sections for visual rhythm
- Add ambient glow to dark sections (low opacity blur)
- Use `rounded-full` for CTAs and badges — pill shapes feel friendly and modern
- Respect `prefers-reduced-motion` on all animations
- Test every section on 375px mobile width

### ❌ Don't

- Never hardcode hex colors — always use CSS tokens
- Never put two primary CTAs in the same section
- Never use strong drop-shadows on dark backgrounds — use glow instead
- Never mix Bricolage Grotesque and Inter in the same text element
- Never use `<a href>` for internal links — use `next/link`
- Never use `<img>` — use `next/image`
- Never add `"use client"` to components that don't need browser APIs

---

## 8. Responsive Behavior

### Breakpoints

```
Default (mobile): 375px+   — single column, stacked layout
sm:  640px   — small adjustments
md:  768px   — 2-column grids, tablet nav
lg:  1024px  — full desktop layout, 3-4 column grids
xl:  1280px  — max-w-6xl content centered
```

### Key Responsive Rules

| Element | Mobile | Desktop |
|---|---|---|
| Hero H1 | 36–40px | 56–72px |
| Section H2 | 28–32px | 36–48px |
| CTA button | `w-full` | `w-auto` |
| Feature grid | 1 col | 3–4 cols |
| Navbar | hamburger | horizontal links |
| Section padding | `py-16 px-4` | `py-24 px-6` |

### Touch targets
Minimum 44×44px for all interactive elements on mobile.

---

## 9. Agent Prompt Guide

### Quick color reference for prompts

```
Primary action:    var(--color-gold) — #22d3ee
Primary hover:     var(--color-gold-hover) — #06b6d4
Dark background:   var(--color-navy-dark) — #071c2e
Light background:  var(--color-canvas) — #f5f7fb
Main text:         var(--color-slate-900) — #202334
Muted text:        var(--color-slate-500) — #6b7285
Success/benefit:   var(--color-success) — #27c281
```

### Ready-to-use prompts

**New landing section:**
```
Create a [section name] section following the Velai DESIGN.md.
Dark background (navy-dark), with ambient gold glow.
H2 in Bricolage Grotesque, body in Inter.
Use only CSS tokens from globals.css.
Server Component, kebab-case filename.
```

**New feature card grid:**
```
Create a 3-column feature grid using Velai design tokens.
Each card: gold icon container, Bricolage Grotesque title, Inter body.
Light canvas background. Responsive: 1 col mobile, 3 col desktop.
```

**New CTA section:**
```
Create a CTA section on navy-dark background with ambient gold glow.
One primary pill button (gold, rounded-full) and one ghost button.
H2 in Bricolage Grotesque, subtext in Inter slate-300.
```
