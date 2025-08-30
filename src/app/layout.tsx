import "./globals.css"; // ⬅️ Import your Tailwind & theme styles
import { Header } from "@/app/_components/Header";
import { Footer } from "@/app/_components/Footer";
import { siteMetadata } from "./_utils/utils";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: {
    name: siteMetadata.author,
    url: siteMetadata.url,
  },
  robots: siteMetadata.robots,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: siteMetadata.ogImage,
    siteName: siteMetadata.siteName,
    locale: siteMetadata.locale,
    type: "website",
    url: siteMetadata.url,
  },
  twitter: {
    card: siteMetadata.twitter.card,
    title: siteMetadata.twitter.title,
    description: siteMetadata.twitter.description,
    images: siteMetadata.twitter.image,
  },
  facebook: {
    appId: siteMetadata.facebook.appId,
  },
  themeColor: siteMetadata.themeColor,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground overflow-x-hidden relative">

        <Header />
        <main>{children}</main>
        <Footer />
      <svg className="sr-only"><filter id="inset-shadow"><feOffset dx="2" dy="2"></feOffset><feGaussianBlur stdDeviation="2" result="offset-blur"></feGaussianBlur><feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"></feComposite><feFlood floodColor="black" floodOpacity=".50" result="color"></feFlood><feComposite operator="in" in="color" in2="inverse" result="shadow"></feComposite><feComposite operator="over" in="shadow" in2="SourceGraphic"></feComposite></filter></svg>
      </body>
    </html>
  );
}
