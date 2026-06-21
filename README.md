# Milk Bill — Marketing Website

Premium marketing website for the [Milk Bill](https://play.google.com/store/apps/details?id=com.milktrack.customer) Android app.

**Location:** `~/Documents/code/milk-bill-website`

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- GSAP ScrollTrigger
- Lenis smooth scrolling
- shadcn/ui-style components
- Lucide Icons
- Resend (contact form emails)

## Quick Start

```bash
cd ~/Documents/code/milk-bill-website
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact Form Setup

The contact form sends emails to **planetkawal@gmail.com** via [Resend](https://resend.com).

1. Create a free account at [resend.com](https://resend.com)
2. Generate an API key
3. Add to `.env.local`:

```env
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=Milk Bill <onboarding@resend.dev>
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, verify your domain in Resend and update `RESEND_FROM_EMAIL` to use your domain (e.g. `Milk Bill <hello@yourdomain.com>`).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Marketing homepage |
| `/privacy-policy` | Play Store-ready privacy policy |
| `/terms-and-conditions` | Terms of use |
| `/contact` | Contact form |
| `/support` | Support & help |

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Deployment

This site is a **static export** (`out/`) — no Node server required. Good fits: GitHub Pages, Netlify, Cloudflare Pages, or any static host.

### GitHub Pages (recommended for this repo)

Live URL after setup: **https://kawaldeepsingh93.github.io/milktrack-website/**

1. Push this repo to GitHub (`kawaldeepsingh93/milktrack-website`).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Add a repository secret: **Settings → Secrets → Actions → New secret**
   - Name: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - Value: your [Web3Forms](https://web3forms.com) access key (same as in `.env.local`)
4. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually).

The workflow in `.github/workflows/deploy-pages.yml` builds with `npm run build:pages` and publishes the `out/` folder.

Preview the production build locally:

```bash
npm run build:pages
npx serve out
```

### Custom domain (optional)

To use `milkbill.app` instead of the `github.io` URL, point your DNS at GitHub Pages and add the domain under **Settings → Pages**. Then deploy without `GITHUB_PAGES=true` (e.g. Vercel or a static host) so URLs are not prefixed with `/milktrack-website`.

### Vercel (alternative)

[Vercel](https://vercel.com) works with zero config for Next.js: connect the repo, set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` and `NEXT_PUBLIC_SITE_URL`, deploy. No `basePath` needed for a custom domain.

## Related

- Android app: `~/Documents/code/milk-customer-app`
- Play Store: [com.milktrack.customer](https://play.google.com/store/apps/details?id=com.milktrack.customer)
