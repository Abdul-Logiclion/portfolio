import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abdul Jabar - Full-Stack Web Developer",
  description:
    "Portfolio of Abdul Jabar, a full-stack developer and recent computer science graduate specializing in modern web technologies.",
  keywords: ["full-stack developer", "computer science", "React", "Next.js", "TypeScript", "portfolio"],
  authors: [{ name: "Abdul Jabar" }],
  openGraph: {
    title: "Abdul Jabar - Full-Stack Developer",
    description: "Portfolio showcasing full-stack development projects and skills",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
