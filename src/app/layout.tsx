import { Ubuntu } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Temidayo Olawoyin",
  description: "Portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} antialiased px-5 py-16`}
      >
        {children}
      </body>
    </html>
  );
}
