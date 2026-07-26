import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import { ArticleDetailClient } from "@/components/article-detail-client";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({
    id: String(article.id),
  }));
}

export default async function ArticlePage({ params }: PageProps) {
  const { id } = await params;
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    notFound();
  }

  return <ArticleDetailClient article={article} />;
}
