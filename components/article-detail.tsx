"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";
import { Article } from "@/types/article";
import { useSaved } from "@/components/saved-provider";
import { formatDate, cn } from "@/lib/utils";

interface ArticleDetailProps {
  article: Article;
}

export function ArticleDetailView({ article }: ArticleDetailProps) {
  const { isSaved, toggleSave } = useSaved();
  const saved = isSaved(article.id);

  return (
    <article className="mx-auto max-w-3xl animate-fade-in">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-2 rounded-md bg-nigeria-green px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-nigeria-green-dark"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Feed
      </Link>

      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="relative aspect-[16/9] w-full bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="p-6 sm:p-8">
          <span className="mb-3 inline-block rounded-full bg-nigeria-gold px-3 py-1 text-xs font-bold text-zinc-900">
            {article.category}
          </span>

          <h1 className="mb-3 text-2xl font-bold leading-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
            {article.title}
          </h1>

          <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
            {article.source} · {formatDate(article.date)}
          </p>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              {article.content}
            </p>
          </div>

          <div className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <button
              onClick={() => toggleSave(article)}
              className={cn(
                "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors",
                saved
                  ? "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/40 dark:text-green-300"
                  : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
              )}
            >
              <Heart className={cn("h-4 w-4", saved && "fill-current")} />
              {saved ? "Remove from Saved" : "Save Article"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
