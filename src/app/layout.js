import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { Geist, Geist_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

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
      <body className={`${hankenGrotesk.className} min-h-full flex flex-col`} suppressHydrationWarning>
        
        <Providers>
        {children}
        </Providers>
        
        </body>
    </html>
  );
}
