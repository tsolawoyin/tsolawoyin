import {Roboto, Geist, Geist_Mono, Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"]
})

export const metadata = {
  title: "Temidayo Olawoyin",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
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
