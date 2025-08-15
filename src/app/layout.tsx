import "./globals.css"; // ⬅️ Import your Tailwind & theme styles

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
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}
