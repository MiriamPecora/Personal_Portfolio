import type { Metadata } from "next";
import "../styles/globals.css";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import StartingPage from "@/components/Starting_Page";

export const metadata: Metadata = {
  title: "Miriam's Portfolio",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="level_design/level_design_icon.png" />
      </head>
      <body className="flex items-center justify-center min-h-screen">
        <StartingPage />
        <div className="bg-[var(--sage)] max-w-[391] w-[391px] md:max-w-2xl md:w-2xl lg:max-w-3xl lg:w-3xl border-2 rounded-xl border-white shadow-2xl">
          <main className="flex-1 w-full h-[500px] relative border-b border-[var(--midnight)] border-dotted rounded-t-xl">
            {children}
          </main>
          <Footer />
          <div className="fixed bottom-4 right-4">
            <ThemeToggle />
          </div>
        </div>
      </body>
    </html>
  );
}
