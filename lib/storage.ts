"use client";

const isBrowser = typeof window !== "undefined";

export const storage = {
  getItem(key: string): string | null {
    if (!isBrowser) return null;
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },

  setItem(key: string, value: string): void {
    if (!isBrowser) return;
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.error("Failed to save to localStorage", e);
    }
  },

  removeItem(key: string): void {
    if (!isBrowser) return;
    try {
      localStorage.removeItem(key);
    } catch {
      // ignore
    }
  },
};
