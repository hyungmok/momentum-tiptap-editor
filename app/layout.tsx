import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Momentum Tiptap Editor: A Rich Text Editor built with Tiptap",
  description:
    "Momentum Tiptap Editor: A powerful and customizable rich text editor built with Tiptap, Shadcn, Next.js, emoji-picker-react, and Cloudinary.",
  keywords: [
    "Tiptap",
    "Rich Text Editor",
    "Next.js",
    "Shadcn",
    "Cloudinary",
    "emoji-picker-react",
  ],
  authors: [{ name: "hyungmok" }],
  openGraph: {
    title: "Momentum Tiptap Editor",
    description:
      "Powerful rich text editing with modern UI components and seamless image management.",
    images: [
      {
        url: "https://res.cloudinary.com/dpzh9dbnh/image/upload/v1719909574/g1sfir4pvlajk8oqhpie.png",
        width: 1021,
        height: 734,
        alt: "Momentum Tiptap Editor Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Momentum Tiptap Editor",
    description:
      "Customizable rich text editor with Tiptap, Next.js, and more.",
    images: [
      "https://res.cloudinary.com/dpzh9dbnh/image/upload/v1719909574/g1sfir4pvlajk8oqhpie.png",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontSans.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-WD8TCTKT0E" />
    </html>
  );
}
