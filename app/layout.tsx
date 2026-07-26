import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { SavedProvider } from "@/components/saved-provider";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARB News — The Pulse of Nigeria",
  description:
    "Modern Nigerian news feed covering Politics, Sports, Entertainment, Business, Culture and Environment.",
  keywords: ["Nigeria", "News", "Lagos", "Abuja", "Afrobeats", "Politics"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <SavedProvider>
            <div className="flex-1">{children}</div>
            <Footer />
          </SavedProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
