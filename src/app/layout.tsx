import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
});

const unageo = localFont({
  src: [
    { path: "../../public/fonts/Unageo-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/fonts/Unageo-Light-Italic.ttf", weight: "300", style: "italic" },
    { path: "../../public/fonts/Unageo-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/Unageo-Regular-Italic.ttf", weight: "400", style: "italic" },
    { path: "../../public/fonts/Unageo-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/fonts/Unageo-Medium-Italic.ttf", weight: "500", style: "italic" },
    { path: "../../public/fonts/Unageo-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/Unageo-SemiBold-Italic.ttf", weight: "600", style: "italic" },
    { path: "../../public/fonts/Unageo-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/Unageo-Bold-Italic.ttf", weight: "700", style: "italic" },
    { path: "../../public/fonts/Unageo-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../../public/fonts/Unageo-ExtraBold-Italic.ttf", weight: "800", style: "italic" },
    { path: "../../public/fonts/Unageo-Black.ttf", weight: "900", style: "normal" },
    { path: "../../public/fonts/Unageo-Black-Italic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "nGage - Track Your Council, Share Your Voice",
  description:
    "Understand what your council is doing, track promises, and share your voice on decisions that affect your community.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${unageo.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
