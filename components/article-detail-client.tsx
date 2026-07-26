"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { ArticleDetailView } from "@/components/article-detail";
import { Article, Category } from "@/types/article";

interface Props {
  article: Article;
}

export function ArticleDetailClient({ article }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  return (
    <>
      <Header
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <ArticleDetailView article={article} />
      </main>
    </>
  );
}
