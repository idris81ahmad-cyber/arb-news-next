"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/header";
import { NewsFeed } from "@/components/news-feed";
import { articles } from "@/data/articles";
import { Category } from "@/types/article";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filtered = useMemo(() => {
    if (selectedCategory === "All") return articles;
    return articles.filter((a) => a.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <Header
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <NewsFeed articles={filtered} />
      </main>
    </>
  );
}
