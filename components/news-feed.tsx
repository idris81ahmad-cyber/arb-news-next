"use client";

import { Article } from "@/types/article";
import { ArticleCard } from "@/components/article-card";

interface NewsFeedProps {
  articles: Article[];
  title?: string;
}

export function NewsFeed({ articles, title = "Latest Nigerian Headlines" }: NewsFeedProps) {
  if (articles.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-lg text-zinc-500 dark:text-zinc-400">
          No articles found in this category.
        </p>
      </div>
    );
  }

  return (
    <section>
      {title && (
        <h2 className="mb-6 text-center text-2xl font-bold text-nigeria-green-light dark:text-nigeria-gold">
          📰 {title}
        </h2>
      )}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
