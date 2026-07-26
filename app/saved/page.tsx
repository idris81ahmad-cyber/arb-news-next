"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { NewsFeed } from "@/components/news-feed";
import { useSaved } from "@/components/saved-provider";
import { Category } from "@/types/article";
import { Bookmark } from "lucide-react";

export default function SavedPage() {
  const { savedArticles, clearSaved } = useSaved();
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  return (
    <>
      <Header
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-nigeria-green-light dark:text-nigeria-gold">
            <Bookmark className="h-6 w-6" />
            Your Saved Stories
          </h2>
          {savedArticles.length > 0 && (
            <button
              onClick={clearSaved}
              className="text-sm text-zinc-500 underline-offset-2 hover:text-red-600 hover:underline dark:text-zinc-400"
            >
              Clear all
            </button>
          )}
        </div>

        {savedArticles.length === 0 ? (
          <div className="rounded-xl border border-dashed border-zinc-300 py-16 text-center dark:border-zinc-700">
            <p className="text-lg text-zinc-500 dark:text-zinc-400">
              No saved articles yet.
            </p>
            <p className="mt-2 text-sm text-zinc-400 dark:text-zinc-500">
              Explore the news feed and save stories that interest you.
            </p>
          </div>
        ) : (
          <NewsFeed articles={savedArticles} title="" />
        )}
      </main>
    </>
  );
}
