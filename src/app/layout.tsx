import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces, DM_Sans, Abril_Fatface, Manrope } from "next/font/google";
import Background from "@/components/Background";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maria Amaro",
  description: "Biomedical engineer and data scientist building ML & web stuff.",
};

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const display = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>
        <Background />
        {children}
      </body>
    </html>
  );
}