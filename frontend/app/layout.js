import "./globals.css";

export const metadata = {
  title: "Project 2",
  description: "for the love of god please hire me",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
