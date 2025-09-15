export const metadata = {
  title: "Flareon — 3D Obsidian Pack",
  description: "3D Obsidian Stone with Fire Sparkles",
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-dvh bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
