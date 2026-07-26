"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Article } from "@/types/article";
import { useSaved } from "@/components/saved-provider";
import { formatDate, cn } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const { isSaved, toggleSave } = useSaved();
  const saved = isSaved(article.id);

  return (
    <article className="group animate-fade-in overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      <Link href={`/article/${article.id}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </Link>

      <div className="p-4">
        <span className="mb-2 inline-block rounded-full bg-nigeria-green px-2.5 py-0.5 text-xs font-semibold text-white">
          {article.category}
        </span>

        <Link href={`/article/${article.id}`}>
          <h2 className="mb-2 line-clamp-2 text-lg font-bold leading-snug text-zinc-900 transition-colors group-hover:text-nigeria-green-light dark:text-zinc-50">
            {article.title}
          </h2>
        </Link>

        <p className="mb-4 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
          {article.content}
        </p>

        <div className="flex items-center justify-between gap-2">
          <span className="text-xs text-zinc-500 dark:text-zinc-500">
            {article.source} · {formatDate(article.date)}
          </span>

          <button
            onClick={(e) => {
              e.preventDefault();
              toggleSave(article);
            }}
            className={cn(
              "inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
              saved
                ? "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            )}
            aria-label={saved ? "Remove from saved" : "Save article"}
          >
            <Heart
              className={cn("h-3.5 w-3.5", saved && "fill-current")}
            />
            {saved ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </article>
  );
}
