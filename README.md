# ARB News 🇳🇬

**The Pulse of Nigeria** — A modern Nigerian news feed built with Next.js 15, Tailwind CSS and TypeScript.

## Features

- 📰 Category-filtered news feed (Politics, Sports, Entertainment, Business, Culture, Environment)
- 🔍 Individual article pages with clean reading experience
- 💾 Save / unsave articles (persisted in localStorage)
- 🌙 Light / Dark theme with system preference support
- 📱 Fully responsive design
- 🇳🇬 Nigerian green & gold visual identity
- Optimized images via `next/image`

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **lucide-react** icons
- localStorage for persistence

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
arb-news-next/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # Home / News Feed
│   ├── saved/page.tsx        # Saved articles
│   └── article/[id]/page.tsx # Article detail
├── components/
│   ├── header.tsx
│   ├── article-card.tsx
│   ├── article-detail.tsx
│   ├── news-feed.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   └── saved-provider.tsx
├── data/articles.ts
├── types/article.ts
└── lib/
    ├── storage.ts
    └── utils.ts
```

## Design Notes

- Primary colour: Nigerian green (`#006400` / `#007A33`)
- Accent: Gold (`#FFD700`)
- Dark mode fully supported
- Clean card-based layout with hover elevation

Built with ❤️ for Naija.
