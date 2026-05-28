import { Geist, Geist_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});


export const metadata = {
  title: "Larana - Your Medical Helper",
  description: "Homepage",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${hankenGrotesk.variable} ${hankenGrotesk.variable} h-full antialiased`}
    >
      <body className={`${hankenGrotesk.className} min-h-full flex flex-col`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
