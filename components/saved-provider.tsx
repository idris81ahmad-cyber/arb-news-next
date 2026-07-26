"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Article } from "@/types/article";
import { storage } from "@/lib/storage";

interface SavedContextValue {
  savedArticles: Article[];
  isSaved: (id: number) => boolean;
  toggleSave: (article: Article) => void;
  clearSaved: () => void;
}

const SavedContext = createContext<SavedContextValue | undefined>(undefined);

export function SavedProvider({ children }: { children: React.ReactNode }) {
  const [savedArticles, setSavedArticles] = useState<Article[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const raw = storage.getItem("savedArticles");
      if (raw) {
        const parsed = JSON.parse(raw) as Article[];
        if (Array.isArray(parsed)) {
          setSavedArticles(parsed);
        }
      }
    } catch {
      // ignore corrupted data
    }
    setMounted(true);
  }, []);

  const persist = useCallback((next: Article[]) => {
    setSavedArticles(next);
    storage.setItem("savedArticles", JSON.stringify(next));
  }, []);

  const isSaved = useCallback(
    (id: number) => savedArticles.some((a) => a.id === id),
    [savedArticles]
  );

  const toggleSave = useCallback(
    (article: Article) => {
      const exists = savedArticles.some((a) => a.id === article.id);
      const next = exists
        ? savedArticles.filter((a) => a.id !== article.id)
        : [...savedArticles, article];
      persist(next);
    },
    [savedArticles, persist]
  );

  const clearSaved = useCallback(() => {
    persist([]);
  }, [persist]);

  if (!mounted) return <>{children}</>;

  return (
    <SavedContext.Provider
      value={{ savedArticles, isSaved, toggleSave, clearSaved }}
    >
      {children}
    </SavedContext.Provider>
  );
}

export function useSaved() {
  const ctx = useContext(SavedContext);
  if (!ctx) throw new Error("useSaved must be used within SavedProvider");
  return ctx;
}
