"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Bookmark, Newspaper } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useSaved } from "@/components/saved-provider";
import { CATEGORIES, Category } from "@/types/article";
import { cn } from "@/lib/utils";

interface HeaderProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function Header({ selectedCategory, onCategoryChange }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const { savedArticles } = useSaved();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-nigeria-green/20 bg-nigeria-green-light text-white shadow-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🇳🇬</span>
          <div>
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              ARB News
            </h1>
            <p className="text-xs text-white/80">The Pulse of Nigeria</p>
          </div>
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value as Category)}
            className="rounded-md border-0 bg-white px-3 py-1.5 text-sm font-medium text-zinc-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-nigeria-gold"
            aria-label="Filter by category"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <Link
            href="/"
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
              pathname === "/"
                ? "bg-white/20"
                : "hover:bg-white/10"
            )}
          >
            <Newspaper className="h-4 w-4" />
            <span className="hidden sm:inline">Feed</span>
          </Link>

          <Link
            href="/saved"
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
              pathname === "/saved"
                ? "bg-white/20"
                : "hover:bg-white/10"
            )}
          >
            <Bookmark className="h-4 w-4" />
            <span className="hidden sm:inline">Saved</span>
            {savedArticles.length > 0 && (
              <span className="ml-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-nigeria-gold px-1.5 text-xs font-bold text-zinc-900">
                {savedArticles.length}
              </span>
            )}
          </Link>

          <button
            onClick={toggleTheme}
            className="inline-flex items-center gap-1.5 rounded-md bg-nigeria-gold px-3 py-1.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-nigeria-gold-dark"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
            <span className="hidden sm:inline">
              {theme === "light" ? "Dark" : "Light"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
