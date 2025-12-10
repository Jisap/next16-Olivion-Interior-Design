import type { Metadata } from "next";
import { Audiowide, Golos_Text } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Clientlayout from "./Components/Clientlayout";

const audiowide = Audiowide({
  weight: ["400"],
  variable: "--font-audiowide",
  subsets: ["latin"],
});

const golostext = Golos_Text({
  weight: ["400"],
  variable: "--font-golostext",
  subsets: ["latin"],
});

const calsans = localFont({
  src: "../public/fonts/CalSans.woff2",
  variable: "--font-calsans",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Olivion",
  description: "Olivion Interior Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${audiowide.variable} ${golostext.variable} ${calsans.variable} antialiased`}
      >
        <Clientlayout>
          {children}
        </Clientlayout>
      </body>
    </html>
  );
}
