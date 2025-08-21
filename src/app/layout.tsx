import "./globals.css"; // ⬅️ Import your Tailwind & theme styles
import { Header } from "@/app/_components/Header";
import { Footer } from "@/app/_components/Footer";

export const metadata = {
  title: "Arbieter",
  description: "Arbieter site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
