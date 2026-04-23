import "./globals.css";

export const metadata = {
  title: "Mini Hero Builder",
  description: "Create original chibi superhero prompts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
