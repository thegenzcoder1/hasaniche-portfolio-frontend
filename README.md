# Has A Niche — Portfolio Frontend

> **E-Commerce Growth Agency Website**
> Built with Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript · Framer Motion

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Content](#pages--content)
  - [Home Page (`/`)](#home-page-)
  - [About Page (`/about`)](#about-page-about)
  - [Services Page (`/services`)](#services-page-services)
  - [Solutions Page (`/solutions`)](#solutions-page-solutions)
  - [Influencer Network Page (`/influencer-network`)](#influencer-network-page-influencer-network)
  - [Technology Page (`/technology`)](#technology-page-technology)
  - [Case Studies Page (`/case-studies`)](#case-studies-page-case-studies)
  - [Contact Page (`/contact`)](#contact-page-contact)
- [Shared Components](#shared-components)
  - [Navbar](#navbar)
  - [Footer](#footer)
  - [CTASection](#ctasection)
- [Global Layout & Theme](#global-layout--theme)
- [Running the Project](#running-the-project)

---

## Project Overview

**Has A Niche** is a digital commerce growth agency. This repository is the public-facing portfolio/marketing website. It showcases the agency's services, solutions methodology, influencer network, data technology, and case studies — ultimately driving visitors to book a strategy call.

- **Primary CTA across all pages:** Book Strategy Call → `/contact`
- **Brand colors:** Indigo `#6366F1` (primary) · Green `#22C55E` (accent)
- **Theme:** Supports light and dark mode via `next-themes`
- **Tagline:** *"Scale Your E-Commerce Brand With Data, Influencers & Performance"*

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.1.6 | App Router, SSR/SSG framework |
| React | 19.2.3 | UI library |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^4 | Utility-first styling |
| Framer Motion | ^12.35.2 | Page & scroll animations |
| next-themes | ^0.4.6 | Dark/light mode |
| react-icons | ^5.6.0 | Icon set (Feather Icons via `FiXxx`) |
| react-intersection-observer | ^10.0.3 | Scroll-triggered animations |
| clsx + tailwind-merge | latest | Conditional class utilities |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                  # Root layout, metadata, ThemeProvider
│   ├── globals.css                 # Global styles, CSS variables
│   ├── page.tsx                    # Home page (/)
│   ├── about/page.tsx              # About page (/about)
│   ├── services/page.tsx           # Services page (/services)
│   ├── solutions/page.tsx          # Solutions page (/solutions)
│   ├── influencer-network/page.tsx # Influencer Network page (/influencer-network)
│   ├── technology/page.tsx         # Technology page (/technology)
│   ├── case-studies/page.tsx       # Case Studies page (/case-studies)
│   └── contact/page.tsx            # Contact page (/contact)
│
├── components/
│   ├── Navbar.tsx                  # Sticky top navigation bar
│   ├── Footer.tsx                  # Site-wide footer
│   ├── home/
│   │   ├── HeroSection.tsx         # Home hero banner
│   │   ├── StatsSection.tsx        # Animated stats counter
│   │   └── ServicesSection.tsx     # Service cards grid (reused on /services)
│   └── ui/
│       ├── Button.tsx              # Reusable button component
│       ├── CaseStudyCard.tsx       # Card used in case studies grid
│       ├── CTASection.tsx          # Full-width CTA banner (used sitewide)
│       ├── ThemeProvider.tsx       # next-themes wrapper
│       └── ThemeToggle.tsx         # Light/dark toggle button

public/
└── images/
    ├── nano-banana-hero.png        # Hero image asset
    ├── nano-banana-growth.png      # Growth image asset
    └── growth-focus.png            # Solutions page featured image
```

---

## Pages & Content

---

### Home Page (`/`)

**File:** `src/app/page.tsx`

The landing page. Composed of five stacked sections:

---

#### Section 1 — Hero (`HeroSection.tsx`)

| Field | Content |
|---|---|
| Badge / Pill | `● Empowering 100+ Brands Worldwide` |
| H1 Headline | `Scale Your E-Commerce Brand With` + gradient text: `Data, Influencers & Performance` |
| Subheading | `We build high-converting E-Commerce stores, run Meta ads, manage influencer marketing campaigns, and optimize your sales pipeline using behavioral data.` |
| Primary CTA Button | `Start Scaling` → links to `/services` |
| Secondary CTA Button | `Book Strategy Call` → links to `/contact` |
| Background | Indigo glow blob (center) + green glow blob (top right) |

---

#### Section 2 — Stats (`StatsSection.tsx`)

**Section Title:** `Data Intelligence that Drives Results`

**Section Subtitle:** `We don't guess. We use behavioral data from millions of users to optimize conversions and scale revenue.`

Animated number counters (count up on scroll-into-view):

| Stat | Value | Label |
|---|---|---|
| 1 | `10 Cr+` | Audience Data Analysed |
| 2 | `200+` | Influencers Network |
| 3 | `100+` | Campaigns Managed |
| 4 | `50+` | Stores Scaled |

---

#### Section 3 — Services Overview (`ServicesSection.tsx`)

**Section Title:** `Our Growth Engine`

**Section Subtitle:** `We combine multiple specialized strategies to build a complete, high-performance ecosystem for your brand.`

Six service cards in a 3-column grid (last card spans wider):

| # | Icon | Service Title | Description | Key Features |
|---|---|---|---|---|
| 1 | 🛒 Cart | E-Commerce Store Development | `We build high-converting E-Commerce stores optimized for scale.` | Conversion optimized design · Fast checkout flows · Mobile-first UX · High performance architecture |
| 2 | 📈 Trend | Meta Ads Management | `We run high-performance ad campaigns across Meta platforms.` | Audience targeting · Creative testing · Conversion optimization · Scaling winning campaigns |
| 3 | 💬 MessageCircle | WhatsApp Marketing | `We automate your entire customer journey on WhatsApp — from abandoned carts to post-purchase retention.` | Abandoned cart recovery (3 automated reminders) · COD confirmation to eliminate fake orders · Realtime order updates & post-purchase follow-ups · Broadcast campaigns with revenue tracking |
| 4 | 👥 Users | Influencer Marketing | `We connect brands with influencers from 5K to 200K followers.` | Influencer discovery · Campaign management · Affiliate promo tracking · ROI optimization |
| 5 | 🔍 Search | SEO Optimization | `We ensure your e-commerce store ranks organically on Google.` | Technical SEO · Product page optimization · Content optimization · Search ranking strategies |
| 6 | 💵 Dollar | Data Driven Payment Optimization | `Using behavioral data of 10Cr+ online users, we optimize checkout flows.` | Reduce fake COD orders · Push prepaid orders · Use partial COD strategies · Identify high-risk buyers |

> **Note:** Card #6 (Payment Optimization) has a special highlight style: indigo gradient background, spans 2 columns on large screens.

---

#### Section 4 — Featured Case Studies

**Section Title:** `Proven Results`

**Section Subtitle:** `See how we've transformed brands from struggling with ad spend to highly profitable e-commerce machines.`

Two `CaseStudyCard` components displayed in a 2-column grid:

| Brand | Problem | Solution | Result | Result Label |
|---|---|---|---|---|
| Apparel Store | Meta Ads CPMs were skyrocketing. Conversions plummeted because they lacked authentic, native-looking UGC content to build trust. | We deployed our extensive influencer network to rapidly generate high-quality UGC. Replacing static images with authentic creator reviews slashed CPA. | `-42%` | Drop in Cost Per Acquisition |
| Fitness Equipment | Competitor agencies couldn't provide enough influencer volume to saturate the market, leading to ad fatigue and stagnation. | Leveraged our proprietary network of 200+ micro-influencers to flood the timeline with localized, diverse content, achieving massive, un-ignorable brand presence. | `12x` | Increase in Brand Mentions |

**"View All Case Studies" link** → `/case-studies`

---

#### Section 5 — CTA Banner (`CTASection.tsx`)

Shared CTA section. See [CTASection](#ctasection) below.

---

### About Page (`/about`)

**File:** `src/app/about/page.tsx`

**Badge:** `● Our Vision`

**H1:** `Engineering Digital Commerce Scale`

**Intro Paragraph:** `Has A Niche is a growth-focused digital commerce company born from the frustration of seeing great brands fail due to bad data.`

---

#### Our Mission (Left Column)

Three body paragraphs:

1. `We exist to help ambitious brands scale profitably using performance marketing and data intelligence.`
2. `In today's hyper-competitive e-commerce landscape, simple "creative testing" isn't enough. The cost of acquisition is rising, while consumer attention is fragmenting.`
3. `To consistently win, a brand needs a synchronized engine: a lightning-fast E-Commerce store, pinpoint Meta Ad targeting, authentic Influencer integrations, and a checkout flow that actively prevents fraud.`

---

#### Why Brands Choose Us (Right Column Card)

Three numbered reasons:

| # | Title | Description |
|---|---|---|
| 1 | Full-Stack Capability | From code (E-Commerce) to creative (Ads & Influencers). |
| 2 | Data Superiority | Leveraging 10Cr+ user behavioral data points for checkout optimization. |
| 3 | Performance Focused | We don't care about vanity likes. We care about ROAS and bottom-line revenue. |

**Ends with:** `CTASection` + `Footer`

---

### Services Page (`/services`)

**File:** `src/app/services/page.tsx`

**Badge:** `● Our Expertise`

**H1:** `Comprehensive Growth Services`

**Subtitle:** `We don't just run ads or build stores. We architect entire revenue ecosystems designed for predictable scale.`

Reuses the full `ServicesSection` component from the home page (all 5 service cards).

---

#### Deep Dive — Data-Driven Payment Optimization

**Badge:** `Unique Offering`

**Section Title:** `Data-Driven Payment Optimization`

**Body paragraphs:**

1. `COD (Cash on Delivery) returns are the silent killer of e-commerce profitability. We solve this mathematically.`
2. `Using behavioral data from over 100 million online users, our proprietary systems analyze checkout flows to predict and prevent non-delivery.`

**Three bullet points:**
- Intelligently push high-intent customers toward prepaid orders.
- Implement dynamic Partial COD based on risk scores.
- Filter out high-risk and historically fake buyer profiles in real-time.

**Live Metrics Card (Right Side):**

| Metric | Value |
|---|---|
| Before Optimization (RTO) | `35% RTO` (in red) |
| After Has A Niche (RTO) | `8% RTO` (in green) |
| Prepaid Conversion Uplift | `+ 142%` (animated progress bar to 85%) |

**Ends with:** `CTASection` + `Footer`

---

### Solutions Page (`/solutions`)

**File:** `src/app/solutions/page.tsx`

**Badge:** `● The Has A Niche Method`

**H1:** `The E-commerce Growth Engine`

**Subtitle:** `Most agencies offer fragmented services. We combine Paid Ads, Influencer Marketing, Conversion Optimization, SEO, and Checkout Data into a single, unified growth system.`

**Featured Image:** `/images/growth-focus.png` — with alt text `High-end 3D abstract growth chart visualization`

---

#### 3-Step Growth Engine Diagram

| Step | Icon | Title | Description |
|---|---|---|---|
| 1 | 👥 Users | Traffic Acquisition | Targeted traffic via Meta Ads, WhatsApp campaigns, 200+ Influencer Network, and Organic SEO. |
| 2 | 🛒 Cart | Store Conversion | High-speed E-Commerce architecture engineered specifically for maximizing CVR. |
| 3 | 💵 Dollar | Revenue Realization | Payment optimization and COD analytics to ensure orders convert to actual cash. |

A horizontal gradient line connects the three steps visually.

---

#### WhatsApp Marketing Highlight Block

**Badge:** `● Retention & Recovery`

**Title:** `WhatsApp Marketing That Converts`

**Body:** `We automate the full post-purchase and recovery journey on WhatsApp — so every rupee you spend on acquiring a customer compounds into repeat revenue.`

Four feature pills in a 2×2 grid (inside `bg-card border border-card-border rounded-2xl p-8`):

| Feature | Detail |
|---|---|
| Abandoned Cart Recovery | Up to 3 automated reminders with product image and coupon code |
| COD Order Confirmation | Eliminate fake orders, reduce RTO, and convert COD to prepaid |
| Realtime Order Updates | From Order Placed to Delivered, Review Reminder, and Repeat Purchase nudge |
| Broadcast Campaigns | Send offers via CSV segments, schedule in advance, and track revenue |

Uses indigo `#6366F1` and green `#22C55E` accents; Framer Motion `whileInView` fade-in animation.

---

#### Performance Driven Scaling (Metrics Grid)

**Section Title:** `Performance Driven Scaling`

Four metric cards in a 2×2 grid:

| Icon | Metric | Description |
|---|---|---|
| 🎯 Target | Return On Ad Spend (ROAS) | We optimize for profitable first-purchase ROAS and high LTV. |
| ⚡ Zap | Conversion Rate (CVR) | Fractional improvements in checkout yield massive bottom-line growth. |
| 📊 BarChart | Customer Acquisition Cost (CAC) | Driving down blended CAC across organic, paid, and influencer channels. |
| 🏆 Award | Revenue Growth | Our ultimate metric. We win when your top-line revenue scales. |

**Ends with:** `CTASection` + `Footer`

---

### Influencer Network Page (`/influencer-network`)

**File:** `src/app/influencer-network/page.tsx`

**Badge:** `● Performance Army`

**H1:** `Influencer Marketing That` + indigo-colored: `Actually Drives Sales`

**Subtitle:** `Stop paying for vanity metrics. We leverage a proprietary network of 200+ influencers across multiple niches, mapped directly to revenue performance.`

---

#### Stats Strip (3 cards)

| Value | Label |
|---|---|
| `200+` | Active Creators |
| `High ROI` | Conversion Optimized (indigo gradient highlight card) |
| `100%` | Performance Driven (green text) |

---

#### What We Deliver (2-column grid)

| Icon | Title | Description |
|---|---|---|
| 👥 Users | Vetted Creator Network | We carefully match your brand with high-performing influencers ranging from micro-creators to established industry voices, ensuring perfect brand alignment and audience fit. |
| 📈 TrendingUp | Revenue-Focused Campaigns | We manage every aspect of the campaign to ensure it drives highly targeted traffic. Our focus is entirely on converting that traffic into actual cash in the bank. |

---

#### Scalable Growth Card (Bottom)

**Title:** `Scalable Growth`

**Body:** `We don't just run one-off campaigns. By continuously analyzing performance and doubling down on winning partnerships, we create a predictable, scalable affiliate ecosystem that constantly fuels your brand's growth.`

**Ends with:** `CTASection` + `Footer`

---

### Technology Page (`/technology`)

**File:** `src/app/technology/page.tsx`

**Badge:** `● Data Intelligence`

**H1:** `The Technology Stack Behind Our Growth`

**Subtitle:** `We rely on data intelligence to drive aggressive scale for e-commerce brands. By analyzing millions of user touchpoints, our infrastructure ensures every marketing dollar goes towards actual, delivered revenue.`

---

#### Two Technology Cards

| Icon | Card Title | Body |
|---|---|---|
| 🗄️ Database | Behavioral Intelligence at Scale | Has A Niche leverages massive behavioral datasets to predict customer purchase intent. Our systems enable us to optimize checkout funnels, identify high-intent buyer profiles, and significantly reduce cash-on-delivery (COD) return rates across your entire catalog. |
| ⚡ CloudLightning | Real-Time Performance Tracking | We accurately track the ROI of all meta ad campaigns and influencer partnerships. We ensure absolute accuracy in revenue attribution so that your brand only pays for performance that translates to actual bottom-line growth. |

**Ends with:** `CTASection` + `Footer`

---

### Case Studies Page (`/case-studies`)

**File:** `src/app/case-studies/page.tsx`

**Badge:** `● Track Record`

**H1:** `Proven E-commerce Success Stories`

**Subtitle:** `See exactly how we've transformed ad-spend bleeding brands into highly scalable revenue machines. We fix broken Meta Ad Funnels, and introduce high-conversion influencer marketing systems where competitors fail.`

---

#### Case Study Cards (6 total, 2-column grid)

| # | Brand | Problem | Solution | Result | Result Label |
|---|---|---|---|---|---|
| 1 | Apparel Store | Meta Ads CPMs were skyrocketing. Conversions plummeted because they lacked authentic, native-looking UGC content to build trust. | We deployed our extensive influencer network to rapidly generate high-quality UGC. Replacing static images with authentic creator reviews slashed CPA. | `-42%` | Drop in Cost Per Acquisition |
| 2 | Fitness Equipment | Competitor agencies couldn't provide enough influencer volume to saturate the market, leading to ad fatigue and stagnation. | Leveraged our proprietary network of 200+ influencers to flood the timeline with localized, diverse content, achieving massive, un-ignorable brand presence. | `12x` | Increase in Brand Mentions |
| 3 | Fashion D2C Brand | Failing to scale with basic Meta ads. Zero trust without influencer validation causing a low conversion rate. | Overhauled the entire E-Commerce store flow to sync with a new advanced Meta Ad Funnel, and injected 40-tier fashion influencers to drive instant social proof. | `4X` | Revenue Growth (MoM) |
| 4 | Premium Beauty Brand | Burning cash on top-of-funnel ads without capturing the audience. Failing without credible influencer voices to back the product. | Built a comprehensive Meta retargeting funnel and recruited beauty micro-influencers to authentically review the brand, driving massive trust at the E-Commerce checkout. | `312%` | Increase in ROAS |
| 5 | Tech Accessories Store | Stagnant organic growth and heavy reliance on increasingly expensive Meta Ads CPMs without a post-click strategy. | Deployed technical SEO strategies, optimized product PDPs on their E-Commerce website, and leveraged YouTube tech reviewers to build an impenetrable content moat. | `215%` | Increase in Organic Traffic |
| 6 | Home Goods Ecom | First time purchases were unprofitable (CPA > AOV). Competitors were winning by using interior design influencers while they relied solely on flat images. | Integrated subscription logic and post-purchase upsell funnels on their E-Commerce platform, coupled with a heavy Influencer-led Meta Ad whitelisting strategy. | `35%` | Increase in Average Order Value |

**Ends with:** `CTASection` + `Footer`

---

### Contact Page (`/contact`)

**File:** `src/app/contact/page.tsx`

Two-column layout: Left (contact info) | Right (contact form)

---

#### Left Column

**H1:** `Let's discuss your growth strategy.`

**Subtitle:** `Ready to stop guessing and start scaling? Fill out the form to book a deep-dive strategy session with our team.`

**Contact Details:**

| Type | Icon | Label | Value |
|---|---|---|---|
| Email | ✉️ Mail | Email Us | `business@hasaniche.com` (mailto link with subject: `Product Growth`) |
| Phone | 💬 MessageSquare | Call Us | `+91 95859 83635` (tel link) |

---

#### Right Column — Contact Form

On submit, the form composes and opens a `mailto:business@hasaniche.com?subject=Product Growth Inquiry` with all fields pre-filled in the body.

| Field | Type | Placeholder | Required |
|---|---|---|---|
| Full Name | text | John Doe | ✅ |
| Business Email | email | john@yourbrand.com | ✅ |
| Phone Number | tel | +91 98765 43210 | ❌ |
| Brand Name | text | Acme Corp | ✅ |
| Monthly Revenue | select dropdown | Select Range | ❌ |
| How can we help? | textarea (4 rows) | Tell us about your current challenges... | ✅ |

**Revenue Dropdown Options:**
- Under 10L
- 10L - 50L
- 50L - 2Cr
- 2Cr+

**Submit Button:** `Send Message` (full width, primary style)

**Ends with:** `Footer` (no CTASection on contact page)

---

## Shared Components

### Navbar

**File:** `src/components/Navbar.tsx`

- Fixed/sticky top bar with scroll-triggered background blur (`bg-background/80 backdrop-blur-md` on scroll)
- Brand logo: gradient square `H` + text `Has A Niche`
- Desktop navigation links (hidden on mobile, visible `lg:` and above)
- Active link highlighted with animated underline indicator (Framer Motion `layoutId`)
- `ThemeToggle` button (desktop + mobile)
- `Book Strategy Call` CTA button → `/contact` (desktop only)
- Mobile hamburger menu with full-screen dropdown

**Navigation Links:**

| Label | Route |
|---|---|
| Home | `/` |
| Services | `/services` |
| Solutions | `/solutions` |
| Influencer Network | `/influencer-network` |
| Technology | `/technology` |
| Case Studies | `/case-studies` |
| Contact | `/contact` |

---

### Footer

**File:** `src/components/Footer.tsx`

Four-column grid layout:

| Column | Title | Contents |
|---|---|---|
| 1 | Brand | Logo + tagline: `We scale E-commerce brands using performance marketing, customized E-Commerce stores, and influencer systems.` |
| 2 | Company | About Us · Case Studies · Contact |
| 3 | Expertise | E-Commerce Development · Meta Ads · Influencer Marketing · Payment Optimization (all → `/services`) |
| 4 | Ready to Scale? | Short description + `Get Started` button → `/contact` |

**Bottom bar:**
- `© {current year} Has A Niche. All rights reserved.`
- Privacy Policy link → `/privacy`
- Terms of Service link → `/terms`

---

### CTASection

**File:** `src/components/ui/CTASection.tsx`

Full-width section with gradient background glows. Used on all pages except `/contact`.

**Title:** `Ready to Build Your Growth Engine?`

**Subtitle:** `Stop guessing with your e-commerce strategy. Partner with us to leverage data intelligence, high-converting stores, and influencer networks.`

**Buttons:**
- `Book Strategy Call` (primary) → `/contact`
- `Explore Our Services` (outline) → `/services`

---

## Global Layout & Theme

**File:** `src/app/layout.tsx`

- **Font:** Inter (Google Fonts, variable: `--font-inter`)
- **Page Title:** `Has A Niche | E-Commerce Growth Agency`
- **Meta Description:** `Scale Your E-Commerce Brand With Data, Influencers & Performance Marketing`
- **ThemeProvider:** Wraps all pages; default theme is `system`, supports `light` and `dark`; attribute set to `class` on `<html>`

---

## Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint
```

Development server runs at: `http://localhost:3000`

---

*Last updated: March 2026 — Content reflects current page components as of this date. Update this README whenever page content, stats, case studies, services, or contact details change.*